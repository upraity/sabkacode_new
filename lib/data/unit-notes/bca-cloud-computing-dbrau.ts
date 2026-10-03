import { UnitNote } from "@/types";

export const BcaCloudComputingDbrauUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Cloud Computing",
    hours: 8,
    headings: [
      {
        id: "cloud-introduction",
        title: "1. Introduction to Cloud Computing",
        icon: "Cloud",
        blocks: [
          { kind: "paragraph", text: "Cloud computing is a computing model in which computing capabilities such as processing, storage, networking and software services are provided over a network and can be provisioned according to demand. Instead of requiring every user or organization to own and operate all computing resources locally, cloud computing provides access to shared resources through a service-oriented delivery model." },
          { kind: "diagram", diagramId: "bca-cloud-basic-model", caption: "Basic cloud computing model: users access shared computing resources through a network." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Cloud", "A pool of computing resources delivered as services over a network."],
            ["User/consumer", "Person or organization that consumes cloud resources."],
            ["Provider", "Entity that supplies and manages cloud computing resources and services."],
            ["On-demand resource", "Resource that can be provisioned when required rather than permanently owned."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "A student may use browser-based storage and computing services without maintaining the underlying servers. The provider manages the infrastructure while the student consumes the service." }
        ]
      },
      {
        id: "definition-of-cloud",
        title: "2. Definition of Cloud",
        icon: "BookOpen",
        blocks: [
          { kind: "paragraph", text: "For examination purposes, cloud computing can be described as a model for delivering configurable computing resources as services over a network, where resources can be provisioned and released according to demand. The important ideas are shared resources, network access, service delivery and dynamic provisioning." },
          { kind: "table", headers: ["Key idea", "Explanation"], rows: [
            ["Network access", "Cloud resources are reached through network connectivity."],
            ["Resource pooling", "Provider resources can serve multiple consumers."],
            ["Elasticity", "Capacity can increase or decrease according to demand."],
            ["Measured use", "Resource consumption can be monitored and managed."],
            ["On-demand provisioning", "Resources can be obtained when needed."]
          ]}
        ]
      },
      {
        id: "evolution-cloud-computing",
        title: "3. Evolution of Cloud Computing",
        icon: "History",
        blocks: [
          { kind: "paragraph", text: "Cloud computing evolved from earlier forms of centralized and networked computing. Mainframe and time-sharing systems demonstrated shared computing; personal computers moved processing toward individual systems; client-server systems distributed responsibilities between clients and servers; the Internet enabled widespread network services; virtualization improved server utilization and isolation; and utility-style service delivery led toward modern cloud platforms." },
          { kind: "diagram", diagramId: "bca-cloud-evolution", caption: "Conceptual evolution from centralized computing and client-server systems toward virtualization and cloud services." },
          { kind: "table", headers: ["Stage", "Major idea"], rows: [
            ["Mainframe / time-sharing", "Many users shared centralized computing resources."],
            ["Client-server", "Processing and services were distributed between clients and servers."],
            ["Internet services", "Network-based services became widely accessible."],
            ["Virtualization", "One physical system could host multiple logical computing environments."],
            ["Cloud computing", "Computing resources became service-oriented, scalable and dynamically provisioned."]
          ]}
        ]
      },
      {
        id: "parallel-distributed-computing",
        title: "4. Underlying Principles of Parallel and Distributed Computing",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Parallel computing divides a computational task into parts that can execute concurrently, often to reduce execution time. Distributed computing divides work or services across multiple networked computers. Cloud systems use these principles to coordinate large pools of resources and provide scalable services." },
          { kind: "table", headers: ["Aspect", "Parallel computing", "Distributed computing"], rows: [
            ["Basic idea", "Concurrent execution of parts of a task.", "Cooperation among networked computers."],
            ["Main objective", "Improve performance through concurrency.", "Share work/resources across multiple systems."],
            ["Communication", "Often through shared or tightly coordinated mechanisms.", "Network communication is central."],
            ["Cloud relevance", "Supports high-performance and scalable processing.", "Supports resource pools, services and distributed applications."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "A large data-processing job may be divided into many smaller tasks. Multiple machines process different parts at the same time and their results are combined." }
        ]
      },
      {
        id: "distributed-computing-cloud",
        title: "5. Distributed Computing and Cloud Characteristics",
        icon: "Layers",
        blocks: [
          { kind: "paragraph", text: "Distributed computing is an important foundation for cloud computing because cloud services are normally supported by multiple interconnected systems. The cloud hides much of this infrastructure from the consumer and presents resources as usable services." },
          { kind: "table", headers: ["Cloud characteristic", "Explanation"], rows: [
            ["Resource pooling", "Resources are organized into shared pools serving multiple consumers."],
            ["Broad network access", "Services can be accessed through standard network mechanisms."],
            ["Elasticity", "Capacity can be expanded or reduced as requirements change."],
            ["On-demand provisioning", "Resources can be provisioned when required."],
            ["Service orientation", "Computing capabilities are exposed as services."]
          ]}
        ]
      },
      {
        id: "elasticity",
        title: "6. Elasticity in Cloud",
        icon: "Expand",
        blocks: [
          { kind: "paragraph", text: "Elasticity means the ability of a cloud environment to adjust resource capacity in response to workload requirements. When demand increases, additional capacity can be provisioned; when demand falls, unnecessary capacity can be released. Elasticity is different from simply having a large fixed amount of capacity because it emphasizes dynamic adjustment." },
          { kind: "diagram", diagramId: "bca-cloud-elasticity", caption: "Cloud elasticity: resource capacity changes as workload demand changes." },
          { kind: "callout", tone: "example", title: "Example", text: "An online service experiences high traffic during an admission form deadline. Additional computing resources can be provisioned for the high-demand period and released after traffic returns to normal." }
        ]
      },
      {
        id: "on-demand-provisioning",
        title: "7. On-Demand Provisioning",
        icon: "Zap",
        blocks: [
          { kind: "paragraph", text: "On-demand provisioning is the process of allocating computing resources when a consumer requires them. The requested resource may be a virtual machine, storage capacity, network capability or another cloud service. The central idea is that capacity is obtained according to requirement instead of being permanently assigned." },
          { kind: "table", headers: ["Step", "Activity"], rows: [
            ["1", "Consumer identifies a resource requirement."],
            ["2", "Cloud management system evaluates available capacity."],
            ["3", "Required resource is allocated/provisioned."],
            ["4", "Consumer uses the resource."],
            ["5", "Resource can be released or adjusted when demand changes."]
          ]},
          { kind: "callout", tone: "example", title: "Exam example", text: "If a development team needs an additional virtual server for testing, on-demand provisioning allows the server resource to be created when required and released after testing." }
        ]
      }
    ],
    keyTerms: [
      { term: "Cloud Computing", definition: "Network-based model for delivering configurable computing capabilities as services." },
      { term: "Resource Pooling", definition: "Organization of provider resources into shared pools that can serve multiple consumers." },
      { term: "Elasticity", definition: "Ability to dynamically increase or decrease resource capacity according to demand." },
      { term: "On-Demand Provisioning", definition: "Allocation of computing resources when the consumer requires them." },
      { term: "Parallel Computing", definition: "Execution of multiple parts of a computational task concurrently." },
      { term: "Distributed Computing", definition: "Computing in which work or services are coordinated across networked computers." },
      { term: "Virtualization", definition: "Technique for creating logical computing environments from physical resources." },
      { term: "Cloud Provider", definition: "Entity that supplies and manages cloud infrastructure or services." }
    ],
    examQuestions: [
      "Define cloud computing and explain its basic characteristics. (Long)",
      "Explain the evolution of cloud computing from centralized systems to modern cloud services. (Long)",
      "Explain the underlying principles of parallel and distributed computing. (Long)",
      "Explain distributed computing and its relationship with cloud computing. (Medium)",
      "Explain elasticity in cloud computing with a suitable example. (Long)",
      "What is on-demand provisioning? Explain its steps. (Medium)",
      "Write short notes on resource pooling and service-oriented cloud delivery. (Medium)"
    ]
  },
  {
    unitNumber: 2,
    title: "Cloud Enabling Technologies",
    hours: 8,
    headings: [
      {
        id: "soa",
        title: "1. Service Oriented Architecture",
        icon: "Blocks",
        blocks: [
          { kind: "paragraph", text: "Service Oriented Architecture (SOA) organizes application functionality as services that can be accessed through defined interfaces. Services represent reusable capabilities and can cooperate to support larger business or application processes. SOA is relevant to cloud computing because cloud services are commonly delivered as independently consumable capabilities." },
          { kind: "diagram", diagramId: "bca-cloud-soa", caption: "Conceptual service-oriented architecture with consumers accessing reusable services." },
          { kind: "table", headers: ["SOA concept", "Meaning"], rows: [
            ["Service", "A defined capability made available to consumers."],
            ["Interface", "Defines how a service can be accessed."],
            ["Loose coupling", "Consumers depend less on internal implementation details."],
            ["Reusability", "A service can support multiple application processes."]
          ]}
        ]
      },
      {
        id: "virtualization-basics",
        title: "2. Basics of Virtualization",
        icon: "Box",
        blocks: [
          { kind: "paragraph", text: "Virtualization abstracts physical computing resources and presents logical resources to users or applications. A virtualization layer can allow multiple virtual machines or environments to share one physical host. This improves resource utilization and provides isolation between logical environments." },
          { kind: "diagram", diagramId: "bca-cloud-virtualization", caption: "Physical host, virtualization layer and multiple virtual machines." },
          { kind: "table", headers: ["Layer", "Role"], rows: [
            ["Physical hardware", "Provides CPU, memory, storage and I/O resources."],
            ["Virtualization layer", "Creates and manages virtual resource environments."],
            ["Virtual machines", "Provide isolated logical computing environments."],
            ["Guest OS/applications", "Run inside the virtual environments."]
          ]}
        ]
      },
      {
        id: "types-virtualization",
        title: "3. Types of Virtualization",
        icon: "Boxes",
        blocks: [
          { kind: "paragraph", text: "Virtualization can be applied to different types of computing resources. The syllabus identifies virtualization of CPU, memory and I/O devices in addition to the general concept of virtualization." },
          { kind: "table", headers: ["Type", "Basic idea"], rows: [
            ["Server/Hardware virtualization", "Physical computing resources are presented as virtual machines."],
            ["CPU virtualization", "Processor execution resources are allocated to virtual machines."],
            ["Memory virtualization", "Physical memory is managed and presented to virtual environments."],
            ["I/O virtualization", "Input/output resources are abstracted and shared among virtual environments."]
          ]}
        ]
      },
      {
        id: "virtualization-tools-mechanisms",
        title: "4. Virtualization Structure, Tools and Mechanisms",
        icon: "Settings",
        blocks: [
          { kind: "paragraph", text: "Virtualization requires a control layer that manages the mapping between virtual resources and physical resources. A hypervisor or virtualization manager is commonly used for this purpose. The virtualization mechanism schedules CPU access, manages memory mappings and coordinates I/O access for virtual machines." },
          { kind: "table", headers: ["Component", "Function"], rows: [
            ["Host", "Physical system providing resources."],
            ["Hypervisor / VMM", "Manages virtual machines and their access to physical resources."],
            ["Guest", "Virtual machine environment running an operating system and applications."],
            ["Virtual resource", "Logical CPU, memory, storage or I/O resource exposed to the guest."]
          ]}
        ]
      },
      {
        id: "cpu-virtualization",
        title: "5. Virtualization of CPU",
        icon: "Cpu",
        blocks: [
          { kind: "paragraph", text: "CPU virtualization allows multiple virtual machines to use processor resources of a physical host. The virtualization layer schedules execution time among virtual CPUs and maps them to physical processor resources. The objective is controlled sharing while maintaining isolation between virtual machines." },
          { kind: "callout", tone: "example", title: "Example", text: "A physical server with multiple processor cores can host several virtual machines. Each VM sees virtual CPU resources even though the underlying hardware is shared." }
        ]
      },
      {
        id: "memory-virtualization",
        title: "6. Virtualization of Memory",
        icon: "MemoryStick",
        blocks: [
          { kind: "paragraph", text: "Memory virtualization gives each virtual machine an apparent memory space while the physical memory is controlled by the virtualization layer. The layer maintains mappings between virtual and physical memory and allocates available memory among guests." },
          { kind: "diagram", diagramId: "bca-cloud-memory-virtualization", caption: "Conceptual mapping of guest virtual memory to physical host memory." }
        ]
      },
      {
        id: "io-virtualization",
        title: "7. Virtualization of I/O Devices",
        icon: "HardDrive",
        blocks: [
          { kind: "paragraph", text: "I/O virtualization abstracts devices such as network interfaces, disks and other input/output resources so that virtual machines can use them. The virtualization layer controls access and maps virtual devices to physical devices or shared infrastructure." },
          { kind: "table", headers: ["Virtual I/O", "Possible physical resource"], rows: [
            ["Virtual network interface", "Physical network adapter or virtual network infrastructure."],
            ["Virtual disk", "Physical storage device or storage system."],
            ["Virtual I/O channel", "Shared host I/O mechanism."]
          ]}
        ]
      },
      {
        id: "virtualization-support-disaster-recovery",
        title: "8. Virtualization Support and Disaster Recovery",
        icon: "Shield",
        blocks: [
          { kind: "paragraph", text: "Virtualization can support disaster recovery by making workloads portable and easier to reproduce on another compatible host or environment. A virtual machine image or its associated state can be backed up, replicated or restored according to the recovery design. Virtualization does not by itself guarantee disaster recovery; suitable backup, replication and recovery procedures are still required." },
          { kind: "diagram", diagramId: "bca-cloud-disaster-recovery", caption: "Conceptual disaster-recovery flow using replicated virtualized workloads." },
          { kind: "callout", tone: "case", title: "Exam case", text: "If a physical host fails, a protected virtual-machine workload can be restored or started on another prepared host, reducing dependence on one physical machine." }
        ]
      }
    ],
    keyTerms: [
      { term: "SOA", definition: "Architecture that organizes application capabilities as reusable, interface-defined services." },
      { term: "Virtualization", definition: "Abstraction of physical resources into logical computing environments." },
      { term: "Hypervisor", definition: "Software or control layer that manages virtual machines and their access to physical resources." },
      { term: "Virtual Machine", definition: "Logical computing environment that behaves like an independent machine." },
      { term: "CPU Virtualization", definition: "Abstraction and controlled sharing of physical processor resources among virtual machines." },
      { term: "Memory Virtualization", definition: "Mapping and management of virtual-machine memory over physical memory." },
      { term: "I/O Virtualization", definition: "Abstraction and controlled sharing of physical input/output resources." },
      { term: "Disaster Recovery", definition: "Processes used to restore computing services after a disruptive failure." }
    ],
    examQuestions: [
      "Explain Service Oriented Architecture and its relevance to cloud computing. (Long)",
      "Define virtualization and explain its basic structure with a diagram. (Long)",
      "Explain different types of virtualization. (Medium)",
      "Explain virtualization of CPU, memory and I/O devices. (Long)",
      "Explain the role of a hypervisor or virtualization manager. (Medium)",
      "Explain how virtualization can support disaster recovery. (Long)",
      "Differentiate physical and virtual computing environments. (Medium)"
    ]
  },
  {
    unitNumber: 3,
    title: "Cloud Architecture, Services and Storage",
    hours: 8,
    headings: [
      {
        id: "layered-cloud-architecture",
        title: "1. Layered Cloud Architecture Design",
        icon: "Layers3",
        blocks: [
          { kind: "paragraph", text: "A layered cloud architecture separates cloud functionality into logical levels. A simplified view starts with physical infrastructure, adds virtualization and resource management, exposes infrastructure or platform capabilities, and finally delivers application-level services to consumers. Layering helps separate responsibilities and makes cloud systems easier to design and manage." },
          { kind: "diagram", diagramId: "bca-cloud-layered-architecture", caption: "Layered cloud architecture from physical resources to application services." },
          { kind: "table", headers: ["Layer", "Role"], rows: [
            ["Physical resource layer", "Servers, storage and networking hardware."],
            ["Virtualization/resource layer", "Abstracts and manages physical resources."],
            ["Service layer", "Exposes infrastructure, platform or software capabilities."],
            ["Application layer", "Provides usable applications or business functionality to consumers."]
          ]}
        ]
      },
      {
        id: "cloud-architecture-public-private-hybrid",
        title: "2. Cloud Architecture: Public, Private and Hybrid",
        icon: "CloudCog",
        blocks: [
          { kind: "paragraph", text: "Cloud deployment arrangements can differ according to ownership, access and resource placement. A public cloud is provided for use by multiple consumers through a provider. A private cloud is dedicated to a particular organization or controlled environment. A hybrid cloud combines distinct cloud environments so that workloads or data can be coordinated across them." },
          { kind: "diagram", diagramId: "bca-cloud-deployment-models", caption: "Comparison of public, private and hybrid cloud deployment arrangements." },
          { kind: "table", headers: ["Model", "General description"], rows: [
            ["Public cloud", "Cloud environment made available to multiple consumers."],
            ["Private cloud", "Cloud environment dedicated to a particular organization or controlled group."],
            ["Hybrid cloud", "Combination of distinct cloud environments connected for coordinated use."]
          ]}
        ]
      },
      {
        id: "iaas-paas-saas",
        title: "3. IaaS, PaaS and SaaS",
        icon: "ServerCog",
        blocks: [
          { kind: "paragraph", text: "IaaS, PaaS and SaaS describe different levels of cloud service abstraction. IaaS provides infrastructure capabilities; PaaS provides a platform for developing and deploying applications; SaaS provides ready-to-use software applications. As abstraction increases, the consumer generally manages less of the underlying infrastructure." },
          { kind: "diagram", diagramId: "bca-cloud-service-models", caption: "Service-model comparison: IaaS, PaaS and SaaS." },
          { kind: "table", headers: ["Model", "What is delivered", "Typical consumer focus"], rows: [
            ["IaaS", "Virtualized computing, storage and networking resources.", "Operating systems, applications and workload configuration."],
            ["PaaS", "Application platform, runtime and development capabilities.", "Application code and data."],
            ["SaaS", "Complete application delivered as a service.", "Using and configuring the application."]
          ]},
          { kind: "callout", tone: "example", title: "Easy exam memory", text: "IaaS = infrastructure, PaaS = platform, SaaS = software. The three models represent progressively higher levels of abstraction." }
        ]
      },
      {
        id: "architectural-design-challenges",
        title: "4. Architectural Design Challenges",
        icon: "TriangleAlert",
        blocks: [
          { kind: "paragraph", text: "Cloud architecture must address several design challenges. These include scalability, availability, resource management, security, data management, interoperability, performance, fault tolerance and cost control. The exact balance depends on application requirements." },
          { kind: "table", headers: ["Challenge", "Why it matters"], rows: [
            ["Scalability", "System capacity must cope with changing workload."],
            ["Availability", "Services should remain accessible when failures occur."],
            ["Security", "Resources and data must be protected from unauthorized access."],
            ["Performance", "Applications need acceptable response time and throughput."],
            ["Interoperability", "Different systems or cloud environments may need to work together."],
            ["Cost management", "Resource usage must remain economically controlled."]
          ]}
        ]
      },
      {
        id: "cloud-storage",
        title: "5. Cloud Storage",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "Cloud storage provides data-storage capabilities through cloud infrastructure. Storage may be accessed through network interfaces and can be designed for different application requirements. Cloud storage management involves capacity, availability, access control, durability and data organization." },
          { kind: "diagram", diagramId: "bca-cloud-storage-types", caption: "Conceptual comparison of common cloud storage approaches." },
          { kind: "table", headers: ["Storage approach", "General use"], rows: [
            ["Object storage", "Stores data as objects with associated metadata; useful for large collections of files or unstructured data."],
            ["Block storage", "Provides block-level storage suitable for systems requiring disk-like volumes."],
            ["File storage", "Provides shared file/directory-style access."]
          ]}
        ]
      },
      {
        id: "advantages-cloud-storage",
        title: "6. Advantages of Cloud Storage",
        icon: "CheckCircle2",
        blocks: [
          { kind: "paragraph", text: "Cloud storage can provide flexible capacity, remote access, centralized management and integration with cloud applications. Depending on the provider and design, replication and availability mechanisms can also improve resilience." },
          { kind: "table", headers: ["Advantage", "Explanation"], rows: [
            ["Scalability", "Storage capacity can be increased according to need."],
            ["Accessibility", "Data can be accessed through network-based services."],
            ["Centralized management", "Storage can be administered through cloud management facilities."],
            ["Integration", "Cloud applications can directly use cloud storage services."],
            ["Resilience options", "Replication and backup mechanisms can support data protection."]
          ]}
        ]
      },
      {
        id: "cloud-storage-providers",
        title: "7. Cloud Storage Providers",
        icon: "CloudDownload",
        blocks: [
          { kind: "paragraph", text: "Cloud storage providers supply storage capacity and related management interfaces as services. Provider offerings differ in storage type, access methods, availability characteristics, pricing and management features. In an exam answer, providers should be discussed as examples of organizations/platforms offering cloud storage rather than as a substitute for the underlying storage concepts." },
          { kind: "table", headers: ["Provider category", "What to compare"], rows: [
            ["Object storage service", "Object model, APIs, durability/availability design and access."],
            ["Block storage service", "Volume model, attachment and performance characteristics."],
            ["File storage service", "Shared file-system model and network access."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Layered Architecture", definition: "Architecture that separates cloud functions into logical layers with defined responsibilities." },
      { term: "Public Cloud", definition: "Cloud environment made available to multiple consumers by a provider." },
      { term: "Private Cloud", definition: "Cloud environment dedicated to a particular organization or controlled group." },
      { term: "Hybrid Cloud", definition: "Combination of distinct cloud environments connected for coordinated use." },
      { term: "IaaS", definition: "Cloud service model providing infrastructure capabilities such as compute, storage and networking." },
      { term: "PaaS", definition: "Cloud service model providing a platform for application development and deployment." },
      { term: "SaaS", definition: "Cloud service model providing complete software applications to users." },
      { term: "Object Storage", definition: "Storage model in which data is stored as objects with associated metadata." },
      { term: "Block Storage", definition: "Storage model providing block-level volumes for applications or systems." },
      { term: "File Storage", definition: "Storage model providing file and directory-style access." }
    ],
    examQuestions: [
      "Explain layered cloud architecture with a suitable diagram. (Long)",
      "Explain public, private and hybrid cloud architectures. (Long)",
      "Explain IaaS, PaaS and SaaS with examples. (Long)",
      "Discuss major architectural design challenges in cloud computing. (Long)",
      "What is cloud storage? Explain its major approaches. (Medium)",
      "Explain advantages of cloud storage. (Medium)",
      "Write a note on cloud storage providers and factors for comparison. (Medium)",
      "Differentiate IaaS, PaaS and SaaS. (Medium)"
    ]
  },
  {
    unitNumber: 4,
    title: "Resource Management and Security in Cloud",
    hours: 8,
    headings: [
      {
        id: "inter-cloud-resource-management",
        title: "1. Inter-Cloud Resource Management",
        icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Inter-cloud resource management concerns coordination and management of resources across multiple cloud environments. When workloads or services use more than one cloud, management must consider resource discovery, allocation, monitoring, workload placement and communication between environments." },
          { kind: "diagram", diagramId: "bca-intercloud-resource-management", caption: "Conceptual coordination of resources across multiple cloud environments." },
          { kind: "table", headers: ["Management activity", "Purpose"], rows: [
            ["Resource discovery", "Identify available resources and services."],
            ["Allocation", "Assign resources to workloads."],
            ["Monitoring", "Observe utilization, performance and health."],
            ["Workload placement", "Choose a suitable environment for a workload."],
            ["Coordination", "Manage communication and dependencies across clouds."]
          ]}
        ]
      },
      {
        id: "resource-provisioning",
        title: "2. Resource Provisioning and Resource Provisioning Methods",
        icon: "Server",
        blocks: [
          { kind: "paragraph", text: "Resource provisioning is the process of allocating computing resources to satisfy workload requirements. Provisioning methods may be manual or automated and may be driven by demand, policies, schedules or predefined capacity. The goal is to provide sufficient resources while avoiding unnecessary allocation." },
          { kind: "table", headers: ["Method", "Basic idea"], rows: [
            ["Manual provisioning", "Administrator allocates resources through management operations."],
            ["Automated provisioning", "Software automatically allocates resources according to rules or workload conditions."],
            ["Policy-based provisioning", "Resource allocation follows defined policies or thresholds."],
            ["Dynamic provisioning", "Capacity changes as workload demand changes."]
          ]},
          { kind: "callout", tone: "example", title: "Example", text: "If application load crosses a defined threshold, an automated provisioning mechanism can allocate additional compute resources; when demand falls, resources can be released." }
        ]
      },
      {
        id: "security-overview",
        title: "3. Security Overview",
        icon: "ShieldCheck",
        blocks: [
          { kind: "paragraph", text: "Cloud security protects data, applications, identities and infrastructure against unauthorized access, misuse, disruption and loss. Security is a shared responsibility between the cloud provider and the consumer, with the exact division depending on the service model and deployment design." },
          { kind: "table", headers: ["Security area", "Focus"], rows: [
            ["Confidentiality", "Prevent unauthorized disclosure of information."],
            ["Integrity", "Prevent unauthorized alteration of data or systems."],
            ["Availability", "Keep services and resources accessible when required."],
            ["Identity and access", "Ensure only authorized identities receive appropriate permissions."],
            ["Data protection", "Protect data during storage and transmission."]
          ]}
        ]
      },
      {
        id: "cloud-security-challenges",
        title: "4. Cloud Security Challenges",
        icon: "ShieldAlert",
        blocks: [
          { kind: "paragraph", text: "Cloud environments introduce security challenges related to shared infrastructure, identity management, data exposure, insecure interfaces, configuration mistakes, service dependencies and multi-tenant environments. Security controls must be designed according to the cloud architecture and the sensitivity of the workload." },
          { kind: "table", headers: ["Challenge", "Typical concern"], rows: [
            ["Unauthorized access", "Weak authentication or excessive permissions."],
            ["Data exposure", "Sensitive information becoming accessible to unauthorized parties."],
            ["Misconfiguration", "Incorrect security settings creating unintended exposure."],
            ["Insecure interfaces", "Weak APIs or management interfaces increasing attack surface."],
            ["Shared infrastructure", "Multiple consumers may use common physical infrastructure."]
          ]}
        ]
      },
      {
        id: "software-as-service-security",
        title: "5. Software-as-a-Service Security",
        icon: "LockKeyhole",
        blocks: [
          { kind: "paragraph", text: "In Software-as-a-Service, the consumer uses a provider-managed application. Security therefore involves both provider-side application/infrastructure controls and consumer-side identity, access, configuration and data-management practices. The consumer should understand what security responsibilities remain under the chosen SaaS arrangement." },
          { kind: "diagram", diagramId: "bca-saas-security", caption: "SaaS security responsibilities are distributed between provider controls and consumer controls." },
          { kind: "table", headers: ["Area", "Security concern"], rows: [
            ["Identity", "Strong authentication and appropriate account management."],
            ["Authorization", "Users receive only the permissions they need."],
            ["Data", "Sensitive data is protected and handled according to requirements."],
            ["Configuration", "Application settings are reviewed for unintended exposure."],
            ["Provider controls", "Provider protects the underlying application and service infrastructure."]
          ]}
        ]
      },
      {
        id: "security-governance",
        title: "6. Security Governance",
        icon: "Gavel",
        blocks: [
          { kind: "paragraph", text: "Security governance establishes policies, responsibilities, controls and oversight for protecting cloud resources. Governance connects security objectives with organizational requirements and helps ensure that cloud usage remains controlled and auditable." },
          { kind: "table", headers: ["Governance element", "Purpose"], rows: [
            ["Policies", "Define acceptable security and resource-use requirements."],
            ["Roles and responsibilities", "Clarify who is responsible for security activities."],
            ["Risk management", "Identify and address security risks."],
            ["Compliance/controls", "Ensure required organizational or regulatory controls are addressed."],
            ["Monitoring and review", "Check whether security controls continue to work as intended."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Inter-Cloud", definition: "Coordination or interaction involving multiple cloud environments." },
      { term: "Resource Management", definition: "Activities for discovering, allocating, monitoring and controlling cloud resources." },
      { term: "Resource Provisioning", definition: "Allocation of resources to meet workload requirements." },
      { term: "Cloud Security", definition: "Protection of cloud data, applications, identities and infrastructure." },
      { term: "Confidentiality", definition: "Protection of information from unauthorized disclosure." },
      { term: "Integrity", definition: "Protection against unauthorized alteration of data or systems." },
      { term: "Availability", definition: "Ensuring authorized users can access services and resources when required." },
      { term: "Security Governance", definition: "Policies, roles, controls and oversight used to manage security." },
      { term: "SaaS Security", definition: "Security practices associated with provider-managed software delivered as a service." }
    ],
    examQuestions: [
      "Explain inter-cloud resource management and its major activities. (Long)",
      "What is resource provisioning? Explain different provisioning methods. (Long)",
      "Explain cloud security and the CIA security objectives. (Long)",
      "Discuss major security challenges in cloud computing. (Long)",
      "Explain security considerations in Software-as-a-Service. (Medium)",
      "What is security governance? Explain its major elements. (Medium)",
      "Explain the shared responsibility concept in cloud security. (Long)"
    ]
  },
  {
    unitNumber: 5,
    title: "Cloud Technologies and Advancements",
    hours: 8,
    headings: [
      {
        id: "hadoop",
        title: "1. Hadoop",
        icon: "Database",
        blocks: [
          { kind: "paragraph", text: "Hadoop is a distributed-data processing ecosystem designed to store and process large datasets across clusters of computers. Its major conceptual components include distributed storage and distributed processing. Hadoop is relevant to cloud technologies because cloud environments can provide scalable infrastructure for large-scale data workloads." },
          { kind: "diagram", diagramId: "bca-hadoop-overview", caption: "High-level Hadoop view showing distributed storage and processing across a cluster." },
          { kind: "table", headers: ["Concept", "Role"], rows: [
            ["Distributed storage", "Stores large datasets across multiple nodes."],
            ["Distributed processing", "Processes data across multiple nodes."],
            ["Cluster", "Group of machines cooperating for storage or computation."],
            ["Scalability", "Work can be distributed across additional resources."]
          ]}
        ]
      },
      {
        id: "mapreduce",
        title: "2. MapReduce",
        icon: "GitMerge",
        blocks: [
          { kind: "paragraph", text: "MapReduce is a distributed processing model in which a large input dataset is processed through map and reduce stages. The map stage transforms input records into intermediate key-value pairs. The intermediate data is grouped by key, after which the reduce stage combines or summarizes values associated with each key." },
          { kind: "diagram", diagramId: "bca-mapreduce-flow", caption: "MapReduce flow from input data through map, shuffle/group and reduce stages." },
          { kind: "callout", tone: "example", title: "Word-count example", text: "For word counting, the map stage can emit (word, 1) for every word. After grouping identical words, the reduce stage sums the 1 values for each word to produce the final count." },
          { kind: "table", headers: ["Stage", "Main work"], rows: [
            ["Input", "Large dataset is divided into processing units."],
            ["Map", "Input records are transformed into intermediate key-value pairs."],
            ["Shuffle / group", "Intermediate values are grouped by key."],
            ["Reduce", "Grouped values are combined to produce final results."]
          ]}
        ]
      },
      {
        id: "virtual-box",
        title: "3. Virtual Box",
        icon: "MonitorCog",
        blocks: [
          { kind: "paragraph", text: "VirtualBox is virtualization software that can be used to create and run virtual machines on a host computer. It is useful for learning and testing because multiple guest operating systems can be run in isolated virtual environments on one physical system, subject to available hardware resources." },
          { kind: "diagram", diagramId: "bca-virtualbox-concept", caption: "Conceptual VirtualBox setup: host operating system running multiple guest virtual machines." },
          { kind: "callout", tone: "example", title: "Lab use", text: "A student can create a virtual machine for practicing Linux-based cloud tools without replacing the main operating system on the physical computer." }
        ]
      },
      {
        id: "google-app-engine",
        title: "4. Google App Engine",
        icon: "CloudCog",
        blocks: [
          { kind: "paragraph", text: "Google App Engine is a managed application platform associated with Google's cloud ecosystem. It is designed to let developers deploy applications without managing all of the underlying server infrastructure directly. The platform handles infrastructure-related tasks according to its service design while the developer focuses primarily on application code and configuration." },
          { kind: "table", headers: ["Concept", "Meaning"], rows: [
            ["Managed platform", "Provider manages much of the underlying infrastructure."],
            ["Application deployment", "Developer deploys an application to the platform."],
            ["Scaling", "Platform capabilities can support changing application demand according to the selected service configuration."],
            ["Developer focus", "More attention can be given to application logic rather than physical server management."]
          ]}
        ]
      },
      {
        id: "programming-environment-app-engine",
        title: "5. Programming Environment for Google App Engine",
        icon: "Code2",
        blocks: [
          { kind: "paragraph", text: "A cloud application programming environment provides the runtime, libraries, configuration and deployment mechanisms required to develop and operate an application on the platform. The exact programming languages, runtime versions, tools and deployment commands depend on the platform's current supported environment. For examination, focus on the idea of developing application code against a managed cloud runtime and deploying it through the platform tooling." },
          { kind: "diagram", diagramId: "bca-app-engine-development-flow", caption: "Conceptual development workflow for building, testing and deploying an application to a managed cloud platform." },
          { kind: "table", headers: ["Stage", "Activity"], rows: [
            ["Develop", "Write application code and configuration."],
            ["Test", "Run and verify the application in a suitable development environment."],
            ["Deploy", "Upload/deploy the application using platform tooling."],
            ["Operate", "Monitor and maintain the deployed application."]
          ]}
        ]
      },
      {
        id: "advancements-overview",
        title: "6. Cloud Technologies and Advancements: Overall View",
        icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Cloud technologies continue to combine virtualization, distributed computing, managed platforms and large-scale data processing. Hadoop and MapReduce represent distributed data-processing approaches; VirtualBox demonstrates local virtualization for experimentation; and Google App Engine represents a managed application-platform approach. Together these topics illustrate how cloud-related technologies address storage, processing, virtualization and application deployment." },
          { kind: "table", headers: ["Technology", "Area illustrated"], rows: [
            ["Hadoop", "Distributed storage and large-scale data processing."],
            ["MapReduce", "Distributed batch-processing model."],
            ["VirtualBox", "Local virtualization and virtual-machine experimentation."],
            ["Google App Engine", "Managed application platform and cloud deployment."]
          ]}
        ]
      }
    ],
    keyTerms: [
      { term: "Hadoop", definition: "Distributed-data technology used for large-scale storage and processing across clusters." },
      { term: "MapReduce", definition: "Distributed processing model using map and reduce stages over large datasets." },
      { term: "Map", definition: "Processing stage that transforms input records into intermediate key-value pairs." },
      { term: "Reduce", definition: "Processing stage that combines grouped intermediate values to produce results." },
      { term: "VirtualBox", definition: "Virtualization software used to create and run virtual machines on a host system." },
      { term: "Google App Engine", definition: "Managed application platform for deploying applications in a cloud environment." },
      { term: "Cluster", definition: "Group of computing nodes cooperating for storage or processing." },
      { term: "Virtual Machine", definition: "Logical computing environment running on a physical host through virtualization." }
    ],
    examQuestions: [
      "Explain Hadoop and its role in cloud-based large-scale data processing. (Long)",
      "Explain the MapReduce model with a suitable example and diagram. (Long)",
      "Explain the working of Map and Reduce stages. (Medium)",
      "What is VirtualBox? Explain its role in virtualization experiments. (Medium)",
      "Explain Google App Engine and its managed application-platform concept. (Long)",
      "Explain the programming environment and development workflow for a managed cloud application platform. (Long)",
      "Write a comparative note on Hadoop, MapReduce, VirtualBox and Google App Engine. (Long)"
    ]
  }
];
