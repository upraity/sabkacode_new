import { UnitNote } from "@/types";

export const BcaComputerNetworkDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Data Communications",
    hours: 8,
    headings: [
      {
        id: "communication-theoretical-basis",
        title: "1. Theoretical Basis of Communication",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Data communication is the exchange of digital or analog information between two or more devices through a transmission medium. A communication system can be understood in terms of a sender, message, transmission medium, receiver and protocol. The quality of communication depends on factors such as bandwidth, noise, delay, synchronization and the ability of the receiver to distinguish the transmitted signal." },
          { kind: "diagram", diagramId: "bca-cn-communication-model", caption: "Basic data communication model showing sender, medium, receiver and protocol." },
          { kind: "table", headers: ["Element", "Meaning"], rows: [
            ["Sender", "Device or process that originates the data."],
            ["Message", "Information being communicated."],
            ["Medium", "Physical or wireless path through which the signal travels."],
            ["Receiver", "Device or process that accepts and interprets the data."],
            ["Protocol", "Agreed rules governing communication."]
          ]}
        ]
      },
      {
        id: "data-rate-bandwidth-and-channel-capacity",
        title: "2. Maximum Data Rate, Bandwidth and Channel Capacity",
        icon: "Waves",
        blocks: [
          { kind: "paragraph", text: "Data rate is the number of bits transmitted per second. Bandwidth describes the frequency range occupied or supported by a communication channel. Channel capacity is the maximum theoretical rate at which information can be transmitted reliably under specified assumptions. For a noiseless channel, the syllabus topic is commonly expressed through the Nyquist relationship C = 2B log2(L), where B is bandwidth in hertz and L is the number of discrete signal levels. For a noisy channel, Shannon's relationship is C = B log2(1 + S/N), where S/N is the signal-to-noise power ratio." },
          { kind: "callout", tone: "example", title: "Worked example: Nyquist", text: "For a noiseless channel with B = 3 kHz and L = 4, C = 2 × 3000 × log2(4) = 6000 × 2 = 12,000 bits/s. Thus the theoretical Nyquist limit is 12 kb/s under these assumptions." },
          { kind: "callout", tone: "example", title: "Worked example: Shannon", text: "If B = 3 kHz and S/N = 15, then C = 3000 log2(16) = 3000 × 4 = 12,000 bits/s. This illustrates how noise limits the theoretical capacity of a channel." }
        ]
      },
      {
        id: "transmission-impairments",
        title: "3. Transmission Impairments",
        icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Transmission impairment is degradation of a signal as it travels through a medium. The syllabus identifies noise, attenuation, distortion and delay distortion. Attenuation reduces signal strength. Distortion changes the signal's shape or relative timing of its components. Noise adds unwanted energy and can corrupt received information. Delay distortion occurs when different frequency components of a signal experience different propagation delays." },
          { kind: "table", headers: ["Impairment", "Effect", "Typical response"], rows: [
            ["Attenuation", "Signal becomes weaker with distance.", "Amplification or regeneration as appropriate."],
            ["Noise", "Unwanted signal energy interferes with data.", "Shielding, filtering, coding and suitable signal levels."],
            ["Distortion", "Waveform changes during transmission.", "Equalization and suitable bandwidth management."],
            ["Delay distortion", "Frequency components arrive with different delays.", "Channel/equalization techniques to reduce inter-symbol interference."]
          ]}
        ]
      },
      {
        id: "transmission-modes",
        title: "4. Transmission Modes",
        icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "Transmission mode describes the direction of data flow between communicating devices. Simplex permits communication in one direction only. Half-duplex permits communication in both directions but not simultaneously. Full-duplex permits simultaneous two-way communication." },
          { kind: "diagram", diagramId: "bca-cn-transmission-modes", caption: "Comparison of simplex, half-duplex and full-duplex transmission." },
          { kind: "table", headers: ["Mode", "Direction", "Example"], rows: [
            ["Simplex", "One-way only", "Traditional broadcast from a transmitter to receivers"],
            ["Half-duplex", "Both ways, one direction at a time", "Push-to-talk radio communication"],
            ["Full-duplex", "Both ways simultaneously", "Telephone conversation"]
          ]}
        ]
      },
      {
        id: "serial-parallel-and-synchronous-asynchronous",
        title: "5. Serial/Parallel and Synchronous/Asynchronous Transmission",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "Serial transmission sends bits sequentially over a communication path, while parallel transmission sends multiple bits simultaneously over multiple paths. Synchronous transmission coordinates data using a shared timing relationship or framing scheme, whereas asynchronous transmission does not require a continuously shared clock between sender and receiver and commonly uses start/stop information around characters or units." },
          { kind: "table", headers: ["Comparison", "Serial", "Parallel"], rows: [
            ["Bit transfer", "Sequential", "Multiple bits at the same time"],
            ["Wiring", "Fewer signal paths", "More signal paths"],
            ["Typical issue", "Lower simultaneous bit paths", "Skew and synchronization between paths over distance"]
          ]}
        ]
      },
      {
        id: "transmission-media",
        title: "6. Transmission Medium",
        icon: "Waves",
        blocks: [
          { kind: "paragraph", text: "Transmission media are the paths used to carry signals. Guided media use a physical conductor or fiber, while wireless transmission uses electromagnetic propagation through space. The syllabus specifically includes twisted pair, coaxial cable, optical fiber and wireless transmission." },
          { kind: "table", headers: ["Medium", "Main characteristics"], rows: [
            ["Twisted pair", "Two insulated copper conductors twisted together; common in telephone and LAN cabling."],
            ["Coaxial cable", "Central conductor with insulation and shielding; better shielding than ordinary twisted pair."],
            ["Optical fiber", "Carries information as light through a fiber; high bandwidth and strong immunity to electromagnetic interference."],
            ["Wireless", "Uses radio, microwave, infrared or related electromagnetic transmission without a physical cable."]
          ]},
          { kind: "diagram", diagramId: "bca-cn-transmission-media", caption: "Conceptual comparison of twisted pair, coaxial cable, optical fiber and wireless media." }
        ]
      },
      {
        id: "fiber-vs-copper",
        title: "7. Optical Fiber and Copper Comparison",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Optical fiber and copper wire differ in the physical form of the transmitted signal, bandwidth, susceptibility to electromagnetic interference, distance characteristics and installation requirements. Fiber generally provides very high bandwidth and strong immunity to electromagnetic interference. Copper can be simpler to terminate and remains widely used for many short-distance network connections." },
          { kind: "table", headers: ["Feature", "Optical fiber", "Copper"], rows: [
            ["Signal", "Light", "Electrical"],
            ["EMI susceptibility", "Very low", "More susceptible"],
            ["Bandwidth potential", "Very high", "Lower than modern fiber for comparable long-haul applications"],
            ["Physical considerations", "Lightweight but can require careful handling and specialized termination", "Generally easier to terminate and work with"],
            ["Typical use", "Backbones and high-capacity links", "LAN access and many short-distance connections"]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Data Communication", definition: "Exchange of data between devices through a communication medium using agreed rules." },
      { term: "Bandwidth", definition: "Frequency range supported or occupied by a communication channel, measured in hertz." },
      { term: "Data Rate", definition: "Number of bits transmitted per second." },
      { term: "Channel Capacity", definition: "Maximum theoretical rate at which information can be transmitted reliably under stated assumptions." },
      { term: "Attenuation", definition: "Reduction in signal strength as a signal travels through a medium." },
      { term: "Noise", definition: "Unwanted energy that interferes with the transmitted signal." },
      { term: "Distortion", definition: "Change in signal shape or relative signal components during transmission." },
      { term: "Simplex", definition: "Transmission in one direction only." },
      { term: "Half-duplex", definition: "Two-way transmission in which only one direction is active at a time." },
      { term: "Full-duplex", definition: "Simultaneous two-way transmission." },
      { term: "Optical Fiber", definition: "Transmission medium that carries information as light through a fiber." }
    ],
    examQuestions: [
      "Explain the basic elements of a data communication system with a diagram. (Long)",
      "Define bandwidth, data rate and channel capacity. Explain the Nyquist and Shannon relationships. (Long)",
      "Solve a numerical problem using the Nyquist formula for a noiseless channel. (Medium)",
      "Solve a numerical problem using the Shannon capacity formula. (Medium)",
      "Explain attenuation, noise, distortion and delay distortion. (Long)",
      "Differentiate simplex, half-duplex and full-duplex transmission. (Medium)",
      "Differentiate serial and parallel transmission. (Medium)",
      "Explain synchronous and asynchronous transmission. (Medium)",
      "Explain twisted pair, coaxial cable, optical fiber and wireless transmission. (Long)",
      "Compare optical fiber and copper wire. (Medium)"
    ]
  },
  {
    unitNumber: 2,
    title: "Computer Network",
    hours: 8,
    headings: [
      {
        id: "definition-components-and-types",
        title: "1. Definition, Components and Types of Computer Network",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "A computer network is an interconnected collection of devices that communicate to exchange data and share resources. Network components can include end devices, network interfaces, transmission media, switches, routers, wireless access devices and protocols." },
          { kind: "table", headers: ["Network type", "Typical scope"], rows: [
            ["LAN", "Limited area such as a room, building or campus segment."],
            ["MAN", "Metropolitan or city-scale network."],
            ["WAN", "Large geographic area connecting networks across regions or countries."]
          ]},
          { kind: "diagram", diagramId: "bca-cn-network-types", caption: "Conceptual scope comparison of LAN, MAN and WAN." }
        ]
      },
      {
        id: "network-topologies",
        title: "2. Network Topologies",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "Network topology describes how devices and links are arranged. Common topologies include bus, star, ring, mesh and tree. A topology can be considered physically, in terms of actual connections, or logically, in terms of how data flows." },
          { kind: "table", headers: ["Topology", "Main idea", "Characteristic"], rows: [
            ["Bus", "Devices share a common backbone.", "Simple concept but backbone failure can affect communication."],
            ["Star", "Devices connect to a central device.", "Easy to manage; central device is important."],
            ["Ring", "Devices form a closed loop.", "Each device has neighboring connections in the logical ring."],
            ["Mesh", "Devices have multiple interconnections.", "High redundancy but greater cabling/management cost."],
            ["Tree", "Hierarchical arrangement of network segments.", "Useful for structured expansion."]
          ]},
          { kind: "diagram", diagramId: "bca-cn-topologies", caption: "Basic bus, star, ring and mesh topology illustrations." }
        ]
      },
      {
        id: "osi-model",
        title: "3. OSI Reference Model",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The OSI reference model organizes network communication into seven conceptual layers: Physical, Data Link, Network, Transport, Session, Presentation and Application. Each layer provides services to the layer above and uses services of the layer below. The model is mainly a reference framework for understanding functions and interoperability." },
          { kind: "table", headers: ["Layer", "Main concern"], rows: [
            ["7 Application", "Network services used directly by applications."],
            ["6 Presentation", "Representation, translation, encryption and compression concepts."],
            ["5 Session", "Establishing, managing and terminating logical sessions."],
            ["4 Transport", "End-to-end delivery, reliability and flow-related functions."],
            ["3 Network", "Logical addressing and routing between networks."],
            ["2 Data Link", "Framing, link-level error and flow control, and medium access functions."],
            ["1 Physical", "Transmission of raw bits as signals over the medium."]
          ]},
          { kind: "diagram", diagramId: "bca-cn-osi-layers", caption: "Seven layers of the OSI reference model." }
        ]
      },
      {
        id: "tcp-ip-model",
        title: "4. TCP/IP Model",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The TCP/IP model groups networking functions into a practical protocol architecture used by Internet networking. A common four-layer presentation uses Link, Internet, Transport and Application layers. Different texts sometimes use a five-layer teaching model by separating Physical and Data Link functions; the essential idea is the organization of protocols by responsibility." },
          { kind: "table", headers: ["TCP/IP layer", "Examples / responsibility"], rows: [
            ["Application", "Application protocols and services."],
            ["Transport", "Process-to-process delivery, such as TCP and UDP."],
            ["Internet", "Logical addressing and packet forwarding, principally IP."],
            ["Link / Network access", "Local delivery over the physical network technology."]
          ]}
        ]
      },
      {
        id: "multiplexing",
        title: "5. Multiplexing",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "Multiplexing allows multiple signals or data streams to share a common communication resource. The syllabus includes Frequency Division Multiplexing (FDM), Wavelength Division Multiplexing (WDM) and time-related multiplexing. FDM separates channels by frequency bands. WDM performs a similar multiplexing idea with different optical wavelengths in fiber. Time Division Multiplexing (TDM) allocates transmission time to different streams." },
          { kind: "diagram", diagramId: "bca-cn-multiplexing", caption: "Conceptual comparison of FDM, WDM and TDM." },
          { kind: "table", headers: ["Technique", "Separation principle", "Typical medium/context"], rows: [
            ["FDM", "Different frequency bands", "Electrical/radio communication systems"],
            ["WDM", "Different optical wavelengths", "Optical fiber"],
            ["TDM", "Different time slots", "Digital communication systems"]
          ]}
        ]
      },
      {
        id: "wavelength-time-multiplexing",
        title: "6. Wavelength and Time Division Multiplexing",
        icon: "Waves",
        blocks: [
          { kind: "paragraph", text: "WDM is especially important in optical networks because multiple optical carriers at different wavelengths can share one fiber. TDM divides a shared channel into time intervals assigned to different sources. In synchronous TDM, slots are associated with sources according to a repeating schedule; statistical approaches can allocate capacity more dynamically when traffic is bursty." },
          { kind: "callout", tone: "example", title: "Simple TDM example", text: "If four sources are assigned repeating time slots in a frame, source A may transmit in slot 1, B in slot 2, C in slot 3 and D in slot 4. The next frame repeats the allocation unless the system uses a different scheduling method." }
        ]
      }
    ],
    keyTerms: [
      { term: "Computer Network", definition: "Interconnected devices that communicate and share data or resources." },
      { term: "LAN", definition: "Local Area Network covering a limited geographic area." },
      { term: "MAN", definition: "Metropolitan Area Network covering a city-scale or metropolitan area." },
      { term: "WAN", definition: "Wide Area Network covering a large geographic region." },
      { term: "Topology", definition: "Arrangement of network nodes and links." },
      { term: "OSI Model", definition: "Seven-layer reference model for organizing network communication functions." },
      { term: "TCP/IP", definition: "Protocol architecture used widely for Internet and internetwork communication." },
      { term: "Multiplexing", definition: "Technique for allowing multiple signals or streams to share a communication resource." },
      { term: "FDM", definition: "Frequency Division Multiplexing, which separates channels by frequency bands." },
      { term: "WDM", definition: "Wavelength Division Multiplexing, which carries multiple optical wavelengths over fiber." },
      { term: "TDM", definition: "Time Division Multiplexing, which allocates transmission time to multiple streams." }
    ],
    examQuestions: [
      "Define a computer network and explain its major components. (Long)",
      "Differentiate LAN, MAN and WAN. (Medium)",
      "Explain bus, star, ring, mesh and tree topologies. (Long)",
      "Explain the seven layers of the OSI reference model. (Long)",
      "Compare the OSI and TCP/IP models. (Long)",
      "Explain multiplexing and its need in communication networks. (Medium)",
      "Explain FDM, WDM and TDM with suitable diagrams. (Long)",
      "What is wavelength division multiplexing? Why is it important in optical networks? (Medium)",
      "Explain time division multiplexing with a simple frame example. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Data Link Layer and Medium Access Sublayer",
    hours: 8,
    headings: [
      {
        id: "data-link-services",
        title: "1. Data Link Layer Services",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "The Data Link Layer provides reliable and organized communication over a single physical link or local network segment. Its major responsibilities include framing, link-level error control, flow control and medium access control where the medium is shared." },
          { kind: "table", headers: ["Function", "Purpose"], rows: [
            ["Framing", "Groups a bit stream into identifiable data units called frames."],
            ["Error control", "Detects and, depending on the protocol, helps recover from transmission errors."],
            ["Flow control", "Prevents a fast sender from overwhelming a slower receiver."],
            ["Medium access control", "Coordinates access to a shared communication medium."]
          ]}
        ]
      },
      {
        id: "framing",
        title: "2. Framing",
        icon: "FileSpreadsheet",
        blocks: [
          { kind: "paragraph", text: "Framing divides a continuous stream of bits into manageable frames so that the receiver can identify boundaries and process data units. Common framing approaches include character or byte-oriented methods, byte stuffing, bit-oriented framing and bit stuffing." },
          { kind: "diagram", diagramId: "bca-cn-framing", caption: "Illustration of a data stream divided into frames with boundary information." },
          { kind: "callout", tone: "example", title: "Bit stuffing idea", text: "In a bit-oriented protocol, if a special flag pattern must be protected from appearing inside data, the sender can insert an extra bit after a specified run of bits. The receiver removes the inserted bit according to the protocol rule." }
        ]
      },
      {
        id: "error-control",
        title: "3. Error Control",
        icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "Error control deals with detecting and recovering from corrupted or lost frames. Error detection methods add redundant information so that the receiver can identify errors. Recovery may involve retransmission, acknowledgements and sequence information. Common concepts include parity, checksum and cyclic redundancy check (CRC)." },
          { kind: "table", headers: ["Method", "Basic idea"], rows: [
            ["Parity", "Adds a parity bit to make the number of 1s satisfy a selected parity rule."],
            ["Checksum", "Uses a calculated value derived from data to detect changes."],
            ["CRC", "Treats data as a polynomial and uses polynomial division to produce a remainder used for error detection."]
          ]}
        ]
      },
      {
        id: "flow-control",
        title: "4. Flow Control",
        icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "Flow control regulates the rate at which a sender transmits so that a receiver can process incoming frames without buffer overflow. The syllabus specifically identifies flow control as a Data Link Layer service." },
          { kind: "table", headers: ["Approach", "Idea"], rows: [
            ["Stop-and-wait", "Sender waits for a response before sending the next frame."],
            ["Sliding window", "Multiple frames may be in transit before acknowledgements are required, within a permitted window."]
          ]}
        ]
      },
      {
        id: "medium-access-sub-layer",
        title: "5. Medium Access Sublayer",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "When multiple devices share a common medium, a medium access control mechanism is required to decide who may transmit. The medium access sublayer is responsible for rules that coordinate access and reduce or manage collisions and unfair access." },
          { kind: "callout", tone: "info", title: "Exam point", text: "Flow control is concerned with sender/receiver rate matching, whereas medium access control is concerned with access to a shared communication medium. They solve different problems." }
        ]
      },
      {
        id: "channel-allocation",
        title: "6. Channel Allocation",
        icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Channel allocation determines how a shared channel is assigned to multiple users. Allocation can be static, where resources are divided in advance, or dynamic, where access depends on current traffic and requests. The choice depends on traffic patterns, delay requirements, fairness and implementation complexity." },
          { kind: "table", headers: ["Allocation idea", "Characteristic"], rows: [
            ["Static allocation", "Capacity is divided according to a predefined arrangement."],
            ["Dynamic allocation", "Capacity is assigned according to current demand or contention."]
          ]}
        ]
      },
      {
        id: "aloha-protocols",
        title: "7. ALOHA Protocols",
        icon: "Repeat",
        blocks: [
          { kind: "paragraph", text: "ALOHA is a family of random-access protocols for shared channels. In pure ALOHA, a station transmits when it has a frame; if a collision occurs, it waits for a random time before retransmission. Slotted ALOHA divides time into slots and permits transmission only at slot boundaries, reducing the vulnerable period and improving the maximum theoretical throughput compared with pure ALOHA." },
          { kind: "diagram", diagramId: "bca-cn-aloha", caption: "Conceptual timeline showing pure ALOHA and slotted ALOHA transmission opportunities." },
          { kind: "callout", tone: "example", title: "Collision example", text: "If two stations transmit overlapping frames on the same shared channel, the receiver may not be able to decode either frame. The protocol therefore needs a collision/retransmission strategy." }
        ]
      }
    ],
    keyTerms: [
      { term: "Data Link Layer", definition: "Layer responsible for link-level framing, error control, flow control and related local delivery functions." },
      { term: "Frame", definition: "A data unit created by the Data Link Layer from a stream of bits." },
      { term: "Framing", definition: "Process of dividing a bit stream into identifiable frames." },
      { term: "Error Control", definition: "Methods for detecting and handling transmission errors." },
      { term: "Flow Control", definition: "Regulation of sender transmission rate to match receiver capability." },
      { term: "Medium Access Control", definition: "Rules for controlling access to a shared communication medium." },
      { term: "Channel Allocation", definition: "Assignment of shared channel capacity among competing users." },
      { term: "ALOHA", definition: "Random-access protocol family for sharing a communication channel." },
      { term: "Pure ALOHA", definition: "ALOHA method in which stations may transmit at arbitrary times." },
      { term: "Slotted ALOHA", definition: "ALOHA method in which transmission begins only at defined time-slot boundaries." },
      { term: "CRC", definition: "Cyclic Redundancy Check, an error-detection technique based on polynomial division." }
    ],
    examQuestions: [
      "Explain the services and responsibilities of the Data Link Layer. (Long)",
      "What is framing? Explain common framing techniques. (Long)",
      "Explain error control and compare parity, checksum and CRC. (Long)",
      "Explain flow control and the need for sender-receiver rate matching. (Medium)",
      "Differentiate flow control and medium access control. (Medium)",
      "Explain the medium access sublayer and channel allocation. (Long)",
      "Explain pure ALOHA with its working principle. (Medium)",
      "Explain slotted ALOHA and compare it with pure ALOHA. (Long)",
      "What is a frame and why is framing required? (Short)"
    ]
  },
  {
    unitNumber: 4,
    title: "Network Layer and Transport Layer",
    hours: 8,
    headings: [
      {
        id: "network-layer-services",
        title: "1. Network Layer Services",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "The Network Layer provides logical addressing and delivery of packets across interconnected networks. Its major responsibilities include routing, forwarding and handling internetworking decisions. The syllabus includes routing algorithms, distributed and centralized routing, congestion control, connection-oriented and connectionless service, IPv4 and IPv6." },
          { kind: "diagram", diagramId: "bca-cn-network-layer", caption: "Network-layer view of packet forwarding across multiple interconnected networks." }
        ]
      },
      {
        id: "routing-algorithms",
        title: "2. Routing Algorithms",
        icon: "GitBranch",
        blocks: [
          { kind: "paragraph", text: "A routing algorithm determines paths through a network so that packets can reach their destinations. Routing approaches can be classified in several ways, including centralized versus distributed and static versus adaptive. Important algorithmic ideas include shortest-path computation and distance-vector or link-state approaches." },
          { kind: "table", headers: ["Approach", "Basic characteristic"], rows: [
            ["Centralized", "A central entity has broad network information and can compute routing decisions."],
            ["Distributed", "Routers cooperate using local information and exchanged routing information."],
            ["Static", "Routes change little unless an administrator or configuration process changes them."],
            ["Adaptive", "Routing decisions can respond to topology, traffic or other changing conditions."]
          ]}
        ]
      },
      {
        id: "congestion-control",
        title: "3. Congestion Control",
        icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Congestion occurs when offered traffic exceeds the network's ability to handle it efficiently, leading to queue growth, delay and possible packet loss. Congestion control aims to prevent or reduce overload through traffic regulation, resource management and feedback mechanisms." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Traffic load", "Amount of traffic offered to network resources."],
            ["Queue", "Waiting area for packets at a network device."],
            ["Congestion", "Condition in which excessive offered load degrades network performance."]
          ]}
        ]
      },
      {
        id: "connection-oriented-and-connectionless",
        title: "4. Connection-Oriented and Connectionless Service",
        icon: "GitCompare",
        blocks: [
          { kind: "paragraph", text: "Connection-oriented service establishes logical state or a connection before data transfer and can support ordered delivery and other service properties depending on the protocol. Connectionless service sends individual packets without establishing a persistent logical connection at the network-service level. IP is a classic connectionless network-layer service." },
          { kind: "table", headers: ["Feature", "Connection-oriented", "Connectionless"], rows: [
            ["Setup", "Logical connection/state established before transfer", "No persistent connection setup at the service level"],
            ["State", "Network/service may maintain connection-related state", "Packets are handled independently at the service level"],
            ["Typical concept", "Virtual-circuit style service", "Datagram service"]
          ]}
        ]
      },
      {
        id: "ipv4",
        title: "5. IPv4",
        icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "IPv4 is a network-layer protocol using 32-bit logical addresses. An IPv4 address is commonly written as four decimal octets, for example 192.168.1.10. IPv4 supports packet forwarding across interconnected networks. The address space and header fields are important examination topics." },
          { kind: "callout", tone: "example", title: "IPv4 address example", text: "192.168.1.10 contains four 8-bit octets. Each octet ranges from 0 to 255, so an IPv4 address contains 32 bits in total." }
        ]
      },
      {
        id: "ipv6",
        title: "6. IPv6",
        icon: "Globe",
        blocks: [
          { kind: "paragraph", text: "IPv6 uses 128-bit addresses and was designed to provide a much larger address space along with improvements to the protocol architecture. IPv6 addresses are written in hexadecimal groups separated by colons. Zero-compression rules allow some addresses to be written more compactly." },
          { kind: "callout", tone: "example", title: "IPv6 notation", text: "An IPv6 address is represented using eight groups of hexadecimal digits in its full form. Consecutive all-zero groups can be compressed according to IPv6 notation rules using a double colon once in an address." },
          { kind: "table", headers: ["IPv4", "IPv6"], rows: [
            ["32-bit addresses", "128-bit addresses"],
            ["Dotted-decimal notation", "Colon-separated hexadecimal notation"],
            ["Smaller address space", "Much larger address space"]
          ]}
        ]
      },
      {
        id: "transport-layer",
        title: "7. Transport Layer",
        icon: "ArrowLeftRight",
        blocks: [
          { kind: "paragraph", text: "The Transport Layer provides process-to-process communication between applications running on hosts. It can provide functions such as segmentation, reassembly, multiplexing/demultiplexing, reliability, flow control and connection management depending on the transport protocol. TCP and UDP illustrate different transport service approaches." },
          { kind: "diagram", diagramId: "bca-cn-transport-layer", caption: "Transport layer providing process-to-process communication between application processes." }
        ]
      },
      {
        id: "udp",
        title: "8. UDP",
        icon: "Rocket",
        blocks: [
          { kind: "paragraph", text: "User Datagram Protocol (UDP) is a connectionless transport protocol. It provides application multiplexing through port numbers and a lightweight datagram service without the full reliability and connection-management mechanisms associated with TCP. Applications can use UDP when low overhead or application-controlled reliability is appropriate." }
        ]
      }
    ],
    keyTerms: [
      { term: "Network Layer", definition: "Layer responsible for logical addressing, routing and forwarding packets across interconnected networks." },
      { term: "Routing", definition: "Process of selecting paths for packets through a network." },
      { term: "Forwarding", definition: "Local action of sending a packet toward its selected next hop." },
      { term: "Congestion", definition: "Network condition in which excessive offered load causes queueing, delay and performance degradation." },
      { term: "Connection-oriented Service", definition: "Service involving logical connection or state before or during data transfer." },
      { term: "Connectionless Service", definition: "Service in which packets are handled without a persistent connection at the service level." },
      { term: "IPv4", definition: "Internet Protocol version 4 using 32-bit logical addresses." },
      { term: "IPv6", definition: "Internet Protocol version 6 using 128-bit logical addresses." },
      { term: "Transport Layer", definition: "Layer providing process-to-process communication services to applications." },
      { term: "UDP", definition: "User Datagram Protocol, a lightweight connectionless transport protocol." }
    ],
    examQuestions: [
      "Explain the services and responsibilities of the Network Layer. (Long)",
      "Explain centralized and distributed routing approaches. (Medium)",
      "What is congestion? Explain the need for congestion control. (Long)",
      "Differentiate connection-oriented and connectionless service. (Medium)",
      "Explain IPv4 addressing and its 32-bit structure. (Long)",
      "Explain IPv6 addressing and compare IPv6 with IPv4. (Long)",
      "Explain the functions of the Transport Layer. (Medium)",
      "What is UDP? Explain its characteristics and applications. (Medium)",
      "Differentiate routing and forwarding. (Short)"
    ]
  },
  {
    unitNumber: 5,
    title: "Session, Presentation and Application Layers",
    hours: 8,
    headings: [
      {
        id: "session-layer",
        title: "1. Session Layer",
        icon: "Handshake",
        blocks: [
          { kind: "paragraph", text: "The Session Layer in the OSI reference model is concerned with establishing, managing and terminating logical sessions between applications. Session-related concepts include dialog control, synchronization and recovery points for long exchanges. In practical Internet protocol stacks, these functions may be implemented within application protocols rather than as a separate layer." },
          { kind: "diagram", diagramId: "bca-cn-session-layer", caption: "Conceptual session establishment, data exchange and session termination." }
        ]
      },
      {
        id: "session-design-and-remote-procedure-call",
        title: "2. Session Design and Remote Procedure Call",
        icon: "GitCompareArrows",
        blocks: [
          { kind: "paragraph", text: "Session design determines how a logical interaction is established, maintained, synchronized and terminated. A Remote Procedure Call (RPC) allows a program to request an operation that appears like a local procedure call while the actual operation executes on another machine. The RPC mechanism hides many communication details behind a request/response abstraction." },
          { kind: "diagram", diagramId: "bca-cn-rpc", caption: "RPC flow from client procedure through request, remote procedure execution and response." },
          { kind: "callout", tone: "example", title: "RPC example", text: "A client application can call getStudentResult(101). An RPC mechanism packages the request, sends it to the server, invokes the corresponding server operation and returns the result to the client." }
        ]
      },
      {
        id: "presentation-layer",
        title: "3. Presentation Layer",
        icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "The Presentation Layer of the OSI model is concerned with the representation of information exchanged between applications. Typical concerns include data format translation, character representation, encryption and compression. The purpose is to allow communicating systems to interpret exchanged data consistently." },
          { kind: "table", headers: ["Function", "Purpose"], rows: [
            ["Translation", "Convert between different data representations or formats."],
            ["Encryption", "Protect information through cryptographic transformation."],
            ["Compression", "Reduce the amount of data needed for transmission or storage."],
            ["Formatting", "Define how structured information is represented and interpreted."]
          ]}
        ]
      },
      {
        id: "electronic-mail",
        title: "4. Electronic Mail",
        icon: "Mail",
        blocks: [
          { kind: "paragraph", text: "Electronic mail is an application-level service for sending and receiving messages. A mail system typically involves user agents, mail servers and protocols for message transfer and access. SMTP is commonly used for mail transfer, while protocols such as POP3 and IMAP support different styles of mailbox access." },
          { kind: "diagram", diagramId: "bca-cn-email-flow", caption: "Simplified electronic mail flow between sender, mail servers and recipient." }
        ]
      },
      {
        id: "virtual-terminals",
        title: "5. Virtual Terminals",
        icon: "MonitorPlay",
        blocks: [
          { kind: "paragraph", text: "A virtual terminal provides a networked representation of a remote terminal session, allowing a user to interact with a remote computer as if using a local terminal. The application layer carries commands, responses and session information according to the relevant remote-access protocol." }
        ]
      },
      {
        id: "other-application",
        title: "6. Other Application-Layer Services",
        icon: "AppWindow",
        blocks: [
          { kind: "paragraph", text: "Application-layer services provide network functionality directly to applications and users. Examples include web access, file transfer, name resolution, remote login, messaging and other distributed services. The exact protocol depends on the application requirement." },
          { kind: "table", headers: ["Service", "Typical purpose"], rows: [
            ["Web", "Access and exchange web resources."],
            ["File transfer", "Move files between networked systems."],
            ["Electronic mail", "Exchange electronic messages."],
            ["Remote terminal", "Interact with a remote system."],
            ["Name service", "Map human-oriented names to network addressing information."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Session Layer", definition: "OSI layer concerned with establishing, managing and terminating logical sessions." },
      { term: "Dialog Control", definition: "Coordination of the direction and organization of an application conversation." },
      { term: "Synchronization", definition: "Use of checkpoints or coordination points to manage long communication activities." },
      { term: "RPC", definition: "Remote Procedure Call, a mechanism that lets a program request an operation on a remote system through a procedure-call abstraction." },
      { term: "Presentation Layer", definition: "OSI layer concerned with representation, translation, encryption and compression of data." },
      { term: "SMTP", definition: "Simple Mail Transfer Protocol, commonly used for transferring electronic mail." },
      { term: "POP3", definition: "Post Office Protocol version 3, used for retrieving mail from a server." },
      { term: "IMAP", definition: "Internet Message Access Protocol, used for accessing and managing mail stored on a server." },
      { term: "Virtual Terminal", definition: "Network service that provides a representation of a remote terminal session." },
      { term: "Application Layer", definition: "Layer providing network services directly to application processes." }
    ],
    examQuestions: [
      "Explain the functions of the Session Layer. (Long)",
      "What is session design? Explain session establishment, management and termination. (Medium)",
      "Explain Remote Procedure Call with a suitable diagram and example. (Long)",
      "Explain the functions of the Presentation Layer. (Long)",
      "Explain electronic mail and the role of mail transfer and access protocols. (Long)",
      "What is a virtual terminal? Explain its purpose. (Medium)",
      "Explain the role of the Application Layer in a network architecture. (Medium)",
      "Write short notes on SMTP, POP3 and IMAP. (Medium)",
      "Differentiate Session, Presentation and Application layer responsibilities. (Long)"
    ]
  }
];
