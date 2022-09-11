from struct import pack
from struct import unpack

from supervisor import ticks_ms

from .general import clip
from .general import ticks_diff


DASHBOARD_NODE_ID = 0xE
PENDANT_NODE_ID = 0xF
BRAIN_NODE_ID = 0x1F
SDK_NODE_ID = 0x2A


class ReqRepIds:
    NA = 0
    SUPERVISOR = 1


class SupervisorReqRepIds:
    NOP = 0
    DISABLE_USB = 1
    ENABLE_USB_DRIVE = 2


class PendantButtons:
    """Bit field for pendant buttons."""

    PAUSE = 0x01
    BRAKE = 0x02
    PTO = 0x04
    CRUISE = 0x08
    LEFT = 0x10
    UP = 0x20
    RIGHT = 0x40
    DOWN = 0x80


class AmigaControlState:
    """State of the Amiga vehicle control unit (VCU)"""

    STATE_BOOT = 0
    STATE_MANUAL_READY = 1
    STATE_MANUAL_ACTIVE = 2
    STATE_CC_ACTIVE = 3
    STATE_AUTO_READY = 4
    STATE_AUTO_ACTIVE = 5
    STATE_ESTOPPED = 6


class NodeState:
    """State of the MainLoop."""

    BOOTUP = 0x00  # Boot up / Initializing
    STOPPED = 0x04  # Stopped
    OPERATIONAL = 0x05  # Operational
    PRE_OPERATIONAL = 0x7F  # Pre-Operational


class Packet:
    """Base class inherited by all CAN message data structures."""

    @classmethod
    def from_can_data(cls, data):
        """Unpack CAN data directly into CAN message data structure."""
        obj = cls()  # Does not call __init__
        obj.decode(data)
        obj.stamp()
        return obj

    def stamp(self):
        """Time most recent message was received."""
        self.ticks_ms = ticks_ms()

    def fresh(self, thresh_ms=500):
        """Returns False if the most recent message is older than ``thresh_ms``"""
        return self.age() < thresh_ms

    def age(self):
        """Age of the most recent message."""
        return ticks_diff(ticks_ms(), self.ticks_ms)


class PendantState(Packet):
    """State of the Pendant (joystick position & pressed buttons)"""

    def __init__(self, x=0, y=0, buttons=0):
        self.format = "<hhI"
        self.x = x
        self.y = y
        self.buttons = buttons
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, int(self.x * 32767), int(self.y * 32767), self.buttons)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""

        (xi, yi, self.buttons) = unpack(self.format, data)
        self.x = xi / 32767
        self.y = yi / 32767

    def __str__(self):
        return "x {:0.3f} y {:0.3f} buttons {}".format(self.x, self.y, self.buttons)


class PendantLEDs(Packet):
    """Command to the pendant on LEDs / backlight to illuminate."""

    def __init__(self, leds=0, backlight=0, rgb=(0, 0, 0)):
        self.format = "<5B"
        self.leds = leds
        self.backlight = backlight
        self.rgb = rgb
        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.leds, self.backlight, self.rgb[0], self.rgb[1], self.rgb[2])

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.leds, self.backlight, r, g, b) = unpack(self.format, data)
        self.rgb = (r, g, b)

    def __str__(self):
        return "LEDs {} backlight {} rgb {}".format(self.leds, self.backlight, self.rgb)


class AmigaRpdo1(Packet):
    """State, speed, and angular rate command (request) sent to the Amiga vehicle control unit (VCU)"""

    def __init__(
        self,
        state_req: AmigaControlState = AmigaControlState.STATE_ESTOPPED,
        cmd_speed: float = 0.0,
        cmd_ang_rate: float = 0.0,
    ):
        self.format = "<Bhh"
        self.state_req = state_req
        self.cmd_speed = cmd_speed
        self.cmd_ang_rate = cmd_ang_rate

        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.state_req, int(self.cmd_speed * 1000.0), int(self.cmd_ang_rate * 1000.0))

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.state_req, cmd_speed, cmd_ang_rate) = unpack(self.format, data)
        self.cmd_speed = cmd_speed / 1000.0
        self.cmd_ang_rate = cmd_ang_rate / 1000.0

    def __str__(self):
        return "AMIGA RPDO1 Request state {} Command speed {:0.3f} Command angular rate {:0.3f}".format(
            self.state_req, self.cmd_speed, self.cmd_ang_rate
        )


class AmigaTpdo1(Packet):
    """State, speed, and angular rate of the Amiga vehicle control unit (VCU)"""

    def __init__(
        self,
        state: AmigaControlState = AmigaControlState.STATE_ESTOPPED,
        meas_speed: float = 0.0,
        meas_ang_rate: float = 0.0,
    ):
        self.format = "<Bhh"
        self.state = state
        self.meas_speed = meas_speed
        self.meas_ang_rate = meas_ang_rate

        self.stamp()

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.state, int(self.meas_speed * 1000.0), int(self.meas_ang_rate * 1000.0))

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.state, meas_speed, meas_ang_rate) = unpack(self.format, data)
        self.meas_speed = meas_speed / 1000.0
        self.meas_ang_rate = meas_ang_rate / 1000.0

    def __str__(self):
        return "AMIGA TPDO1 Amiga state {} Measured speed {:0.3f} Measured angular rate {:0.3f}".format(
            self.state, self.meas_speed, self.meas_ang_rate
        )


class SupervisorReq(Packet):
    """Supervisor request."""

    cob_id = 0x600  # SDO command

    format = "<BB6s"

    def __init__(self, id=SupervisorReqRepIds.NOP, payload=bytes(6)) -> None:
        self.id = id
        self.payload = payload

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, ReqRepIds.SUPERVISOR, self.id, self.payload)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (id, self.id, self.payload) = unpack(self.format, data)
        assert id == ReqRepIds.SUPERVISOR

    @classmethod
    def make_mesage(cls, node_id, id, payload=bytes(6)):
        from canio import Message

        return Message(id=(cls.cob_id | node_id), data=SupervisorReq(id=id, payload=payload).encode())

    def __str__(self):
        return "superviser req {} payload {}".format(self.id, self.payload)


class SupervisorRep(Packet):
    """Supervisor response."""

    cob_id = 0x580  # SDO reply
    format = "<BB6s"

    def __init__(self, id=SupervisorReqRepIds.NOP, payload=bytes(6)) -> None:
        self.id = id
        self.payload = payload

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, ReqRepIds.SUPERVISOR, self.id, self.payload)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (id, self.id, self.payload) = unpack(self.format, data)
        assert id == ReqRepIds.SUPERVISOR

    def __str__(self):
        return "supervisor rep  id {} payload {} ".format(self.id, self.payload)


class FirmwareVersion(Packet):
    """Firmware version running on device."""

    def __init__(self, version_tuple):
        assert len(version_tuple) == 4
        self.major = version_tuple[0]
        self.minor = version_tuple[1]
        self.patch = version_tuple[2]
        self.dev_bool = version_tuple[3]

        self.format = "<HHHB"

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.major, self.minor, self.patch, self.dev_bool)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.major, self.minor, self.patch, self.dev_bool) = unpack(self.format, data)
        self.dev_bool = bool(self.dev_bool)

    def __str__(self):
        s = "Firmware version: v{}.{}.{}".format(self.major, self.minor, self.patch)
        if self.dev_bool:
            s += "-dev"
        return s


class CanTapeTransferTPDO(Packet):
    """Iterative response for file transfers over CAN."""

    class State:
        """Current state of file transfer over CAN."""

        IDLE = 1
        TRANSFERRING = 2
        CRC_COMPUTING = 3
        CRC_GOOD = 4
        CRC_BAD = 5
        TAPE_READING = 6
        TAPE_SUCCESS = 7
        TAPE_FAIL = 8
        TRANSFERRING_FAILED = 9  # out of order messages
        NA = 0

    format = "<BHBL"
    cob_id = 0x480

    def __init__(self, page: int = 0, block: int = 0, state: int = State.NA, crc32: int = 0):
        self.page = page
        self.block = block
        self.state = state
        self.crc32 = crc32

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.page, self.block, self.state, self.crc32)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.page, self.block, self.state, self.crc32) = unpack(self.format, data)

    def __str__(self):
        return f"page: {self.page} block: {self.block} state: {self.state} crc: {self.crc32}"


class CanTapeTransferRPDO(Packet):
    """Packet containing 5 bytes of file for file transfers over CAN."""

    format = "<BH5s"
    cob_id = 0x500

    class State:
        COMPLETE = 255
        RESET = 254

    def __init__(self, page: int = 0, block: int = 0, data=bytes()):
        self.page = page
        self.block = block
        assert len(data) <= 5
        self.data = data

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.page, self.block, self.data)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.page, self.block, self.data) = unpack(self.format, data)

    def __str__(self):
        return f"page: {self.page} block: {self.block} data: {self.data}"


class FarmngHeartbeat(Packet):
    """Custom Heartbeat message = status sent regularly by farm-ng components"""

    format = "<BI3s"
    cob_id = 0x700

    def __init__(self, node_state: int = 0, ticks_ms: int = 0, serial_number=bytes()):
        self.node_state = node_state
        self.ticks_ms = ticks_ms
        # assert len(data) <= 5
        self.serial_number = serial_number

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        return pack(self.format, self.node_state, self.ticks_ms, self.serial_number[:3])

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        (self.node_state, self.ticks_ms, self.serial_number) = unpack(self.format, data)

    def __str__(self):
        return f"node_state: {self.node_state} ticks_ms: {self.ticks_ms} serial_number: {self.serial_number}"


class FarmngDebugTimer(Packet):
    """To be used for tracking the time of up to 8 dt time steps."""

    format = "<8b"
    cob_id = 0x480  # TPDO4

    def __init__(self, dt_list: list = []):
        self.dt_list = dt_list

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        # self.dt_list = [clip(int(x), 0, 255) for x in self.dt_list[:8]]
        self.dt_list = [clip(int(x), -127, 127) for x in self.dt_list[:8]]

        while len(self.dt_list) < 8:
            self.dt_list.append(0)
        return pack(self.format, *self.dt_list)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        self.dt_list = list(unpack(self.format, data))

    def __str__(self):
        s = "("
        for x in self.dt_list:
            s += "{:3d},".format(x)

        s += ")"
        return s


class FarmngDebugMemory(Packet):
    """To be used for tracking the memory of up to 4 spots in the iter loop."""

    format = "<4H"
    cob_id = 0x500  # RPDO4

    def __init__(self, mem_list: list = []):
        self.mem_list = mem_list

    def encode(self):
        """Returns the data contained by the class encoded as CAN message data."""
        self.mem_list = [clip(int(x), 0, 65536) for x in self.mem_list[:4]]

        while len(self.mem_list) < 4:
            self.mem_list.append(0)
        return pack(self.format, *self.mem_list)

    def decode(self, data):
        """Decodes CAN message data and populates the values of the class."""
        self.mem_list = list(unpack(self.format, data))

    def __str__(self):
        s = "("
        for x in self.mem_list:
            s += "{:5d},".format(x)
        s += ")"
        return s