import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Operating System (C-402)
// — Dr. Bhimrao Ambedkar University, Agra, B.C.A. Fourth Semester.
export const operatingSystemC402UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction and Process Management",
    hours: 8,
    headings: [
      {
        id: "operating-system-basics",
        title: "1. Operating System: Meaning, Goals and Functions",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "An Operating System (OS) is system software that acts as an intermediary between users/application programs and computer hardware. It manages processor time, memory, files, input/output devices and other resources, while providing a convenient environment in which programs can execute. Major objectives are convenience, efficient resource utilization, controlled sharing of resources, reliability and protection."
          },
          {
            kind: "table",
            headers: ["OS function", "What it does"],
            rows: [
              ["Process management", "Creates, schedules, synchronizes and terminates processes."],
              ["Memory management", "Tracks memory usage and allocates/deallocates memory."],
              ["File management", "Organizes files/directories and controls access to stored data."],
              ["I/O management", "Coordinates devices and provides device-independent services."],
              ["Protection and security", "Controls access to resources and isolates processes."],
              ["User interface", "Provides command-line or graphical interaction with the system."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c402-os-layered-view",
            caption: "Operating system as the interface between users, applications and hardware."
          }
        ]
      },
      {
        id: "types-of-operating-systems",
        title: "2. Types of Operating Systems",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The syllabus includes Simple Batch, Multi-programmed Batch, Time Sharing, Personal Computer, Parallel, Distributed, Real-Time and related system concepts. The classifications differ mainly in how jobs are submitted, how the CPU is shared, and whether response time or coordination across machines is important."
          },
          {
            kind: "table",
            headers: ["Type", "Main characteristic", "Typical purpose"],
            rows: [
              ["Simple Batch", "Jobs are collected and executed in batches with little/no interactive control.", "Large sets of similar offline jobs."],
              ["Multiprogrammed Batch", "Several jobs remain in memory so the CPU can switch when one waits for I/O.", "Improve CPU utilization."],
              ["Time Sharing", "CPU time is divided into small time slices among interactive users/processes.", "Fast interactive response."],
              ["Personal Computer OS", "Designed around a single-user computer while still supporting multiple applications.", "Desktop/laptop computing."],
              ["Parallel OS", "Supports computation using multiple processors/cores.", "Higher throughput and parallel execution."],
              ["Distributed OS", "Coordinates resources across multiple networked computers.", "Distributed resource sharing and computation."],
              ["Real-Time OS", "Provides responses within specified timing constraints.", "Control, monitoring and time-critical applications."]
            ]
          },
          {
            kind: "callout",
            tone: "info",
            title: "Real-Time System",
            text: "In a real-time system, correctness depends not only on the logical result but also on completing required work within the specified time constraint. Hard real-time systems have strict deadlines; soft real-time systems tolerate occasional deadline misses with degraded service."
          }
        ]
      },
      {
        id: "process-concept",
        title: "3. Process Concept and Process States",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "A process is a program in execution. A program is passive code stored on secondary storage, whereas a process is an active execution entity with a program counter, CPU registers, address space and operating-system-managed resources. A process commonly moves among New, Ready, Running, Waiting/Blocked and Terminated states."
          },
          {
            kind: "diagram",
            diagramId: "c402-process-states",
            caption: "Basic process-state transition diagram."
          },
          {
            kind: "table",
            headers: ["State", "Meaning"],
            rows: [
              ["New", "The process is being created."],
              ["Ready", "The process is prepared to run and waits for CPU allocation."],
              ["Running", "Instructions are currently executing on the CPU."],
              ["Waiting/Blocked", "The process waits for an event, usually I/O completion."],
              ["Terminated", "Execution has finished or the process has been aborted."]
            ]
          }
        ]
      },
      {
        id: "process-scheduling",
        title: "4. Process Scheduling and Scheduling Criteria",
        icon: "CalendarClock",
        blocks: [
          {
            kind: "paragraph",
            text: "Process scheduling selects a ready process for CPU execution. The short-term scheduler performs frequent selection. A context switch saves the state of the currently running process and loads the saved state of another process. Scheduling decisions may be non-preemptive, where a process keeps the CPU until it blocks or finishes, or preemptive, where the OS may take the CPU away."
          },
          {
            kind: "table",
            headers: ["Criterion", "Meaning"],
            rows: [
              ["CPU utilization", "Percentage of time the CPU is busy."],
              ["Throughput", "Number of processes completed per unit time."],
              ["Turnaround time", "Completion time minus arrival/submission time."],
              ["Waiting time", "Total time spent waiting in the ready queue."],
              ["Response time", "Time from request/submission until the first response/service."],
              ["Fairness", "Avoids unjustified starvation of processes."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Scheduling Metrics Example",
            text: "If a process arrives at time 2 and completes at time 10, its turnaround time is 10−2=8 time units. If it actually receives CPU service for 3 time units, the remaining 5 time units may include ready-queue waiting and/or other states depending on the process timeline. Waiting time must be calculated from the actual scheduling chart, not guessed from turnaround time."
          }
        ]
      },
      {
        id: "cooperating-processes-and-ipc",
        title: "5. Cooperating Processes, Threads and Inter-Process Communication",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "Cooperating processes can affect or be affected by other processes. Cooperation is useful for information sharing, computation speed-up, modularity and convenience. Inter-Process Communication (IPC) commonly uses shared memory or message passing. Threads are execution units within a process; threads of the same process share its address space and resources but have their own execution state."
          },
          {
            kind: "table",
            headers: ["IPC method", "Idea", "Main consideration"],
            rows: [
              ["Shared memory", "Processes communicate through a common memory region.", "Requires synchronization to avoid races."],
              ["Message passing", "Processes exchange explicit send/receive messages.", "Communication is controlled through messaging operations."],
              ["Pipe", "A stream/channel connects processes for data transfer.", "Often used for related producer-consumer style communication."]
            ]
          }
        ]
      },
      {
        id: "cpu-scheduling-algorithms",
        title: "6. CPU Scheduling Algorithms",
        icon: "TrendingUp",
        blocks: [
          {
            kind: "paragraph",
            text: "Common CPU scheduling algorithms include First-Come First-Served (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Priority Scheduling and Round Robin (RR). The appropriate algorithm depends on the required response, fairness and workload."
          },
          {
            kind: "table",
            headers: ["Algorithm", "Selection rule", "Preemptive?"],
            rows: [
              ["FCFS", "Earliest arrival first.", "Usually non-preemptive."],
              ["SJF", "Smallest next CPU burst first.", "Non-preemptive in its basic form."],
              ["SRTF", "Smallest remaining CPU time first.", "Yes."],
              ["Priority", "Highest-priority eligible process first.", "Can be either."],
              ["Round Robin", "Processes receive a fixed time quantum in circular order.", "Yes."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Round Robin Example",
            text: "Suppose P1, P2 and P3 are ready and the time quantum is 2 units. If each process needs more than one quantum, the CPU order begins P1 → P2 → P3 → P1 → ... . A Gantt chart should be drawn before calculating waiting or turnaround time."
          }
        ]
      },
      {
        id: "multiprocessor-scheduling",
        title: "7. Multiprocessor Scheduling",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Multiprocessor scheduling assigns runnable work across multiple CPUs or cores. Goals include keeping processors busy, balancing load and reducing scheduling overhead. Scheduling can involve asymmetric multiprocessing, where a designated processor handles much of the scheduling/system work, or symmetric multiprocessing (SMP), where processors can participate more equally."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Operating System", definition: "System software that manages hardware resources and provides services to application programs." },
      { term: "Process", definition: "A program in execution together with its execution state and allocated resources." },
      { term: "Process Control Block", definition: "An OS data structure containing information needed to manage a process." },
      { term: "Context Switch", definition: "Saving one process state and restoring another process state for CPU execution." },
      { term: "CPU Scheduling", definition: "Selecting a ready process to receive CPU service." },
      { term: "IPC", definition: "Mechanisms through which processes exchange information or coordinate." },
      { term: "Time Quantum", definition: "A fixed CPU time slice allocated to a process in Round Robin scheduling." },
      { term: "Throughput", definition: "Number of completed processes per unit time." },
      { term: "Response Time", definition: "Time from a request until the first response or service begins." }
    ],
    examQuestions: [
      "Define an Operating System and explain its major functions. (Long)",
      "Explain different types of Operating Systems with suitable characteristics. (Long)",
      "What is a process? Explain the basic process states with a diagram. (Long)",
      "Explain process scheduling and the major scheduling criteria. (Medium)",
      "Differentiate a program and a process. (Short)",
      "Explain cooperating processes and Inter-Process Communication. (Medium)",
      "Compare shared-memory and message-passing IPC. (Medium)",
      "Explain FCFS, SJF, SRTF, Priority and Round Robin scheduling. (Long)",
      "Explain the role of context switching in process scheduling. (Short)",
      "Write a note on multiprocessor scheduling. (Medium)"
    ]
  },

  {
    unitNumber: 2,
    title: "Process Synchronization and Deadlocks",
    hours: 8,
    headings: [
      {
        id: "critical-section",
        title: "1. Critical-Section Problem",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "When multiple processes or threads share data, the code that accesses the shared resource is called a critical section. The critical-section problem asks for a protocol that prevents conflicting concurrent execution. A correct solution should satisfy mutual exclusion, progress and bounded waiting."
          },
          {
            kind: "table",
            headers: ["Requirement", "Meaning"],
            rows: [
              ["Mutual exclusion", "At most one process is executing the critical section for the same shared resource at a time."],
              ["Progress", "If no process is in the critical section, selection of a waiting process should not be postponed indefinitely."],
              ["Bounded waiting", "A process requesting entry should have a finite bound on how many other entries can occur before it gets access."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c402-critical-section",
            caption: "Entry, critical section, exit and remainder sections."
          }
        ]
      },
      {
        id: "synchronization-hardware",
        title: "2. Hardware Support for Synchronization",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Hardware synchronization primitives provide atomic operations that help implement locks and other synchronization mechanisms. Examples include test-and-set and compare-and-swap. Atomicity means the operation appears indivisible with respect to competing processors or threads."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Race Condition",
            text: "A race condition occurs when the result depends on the timing/order of concurrent accesses to shared data. Synchronization is required when multiple execution flows can read and update shared state in conflicting ways."
          }
        ]
      },
      {
        id: "semaphores-monitors",
        title: "3. Semaphores and Monitors",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "A semaphore is a synchronization variable accessed through atomic wait and signal operations. A binary semaphore can represent a lock-like state, while a counting semaphore can represent multiple available instances of a resource. A monitor is a higher-level synchronization construct that encapsulates shared data and procedures and controls access so that only one process/thread executes inside the monitor at a time."
          },
          {
            kind: "table",
            headers: ["Mechanism", "Core idea", "Typical use"],
            rows: [
              ["Binary semaphore", "Two-state synchronization variable.", "Mutual exclusion."],
              ["Counting semaphore", "Integer count of available resource units.", "Resource pools."],
              ["Monitor", "Encapsulated shared state plus synchronized operations.", "Structured high-level synchronization."]
            ]
          }
        ]
      },
      {
        id: "deadlock-characterization",
        title: "4. Deadlock: Characterization and Conditions",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "A deadlock is a state in which a set of processes is permanently blocked because each process is waiting for a resource or event that another process in the set must provide. The four necessary conditions are mutual exclusion, hold and wait, no preemption and circular wait. If all four hold simultaneously, deadlock is possible."
          },
          {
            kind: "diagram",
            diagramId: "c402-deadlock-cycle",
            caption: "Circular-wait representation of a deadlock among processes and resources."
          },
          {
            kind: "table",
            headers: ["Necessary condition", "Explanation"],
            rows: [
              ["Mutual exclusion", "At least one resource is non-shareable."],
              ["Hold and wait", "A process holds one or more resources while waiting for others."],
              ["No preemption", "A resource cannot be forcibly taken away under the assumed model."],
              ["Circular wait", "A circular chain exists in which each process waits for a resource held by the next."]
            ]
          }
        ]
      },
      {
        id: "deadlock-prevention-avoidance-detection",
        title: "5. Deadlock Prevention, Avoidance and Detection",
        icon: "Shield",
        blocks: [
          {
            kind: "paragraph",
            text: "Deadlock prevention designs the system so that at least one necessary condition cannot hold. Deadlock avoidance makes allocation decisions using information about possible future demands and grants requests only when the resulting state remains safe. Deadlock detection allows deadlocks to occur and periodically checks for them; recovery is then performed."
          },
          {
            kind: "table",
            headers: ["Approach", "Basic strategy"],
            rows: [
              ["Prevention", "Break at least one necessary deadlock condition by policy."],
              ["Avoidance", "Examine whether an allocation keeps the system in a safe state."],
              ["Detection", "Allow allocation and run an algorithm to detect deadlock."],
              ["Recovery", "Terminate selected processes or preempt/reclaim resources according to policy."]
            ]
          },
          {
            kind: "info",
            title: "Safe State",
            text: "A safe state is one for which there exists some sequence of process completions that lets every process obtain its remaining required resources and finish. Safe does not mean that deadlock is currently absent by accident; it means the system can schedule resource allocation to avoid deadlock."
          }
        ]
      },
      {
        id: "bankers-algorithm",
        title: "6. Banker's Algorithm and Resource Allocation",
        icon: "Wallet",
        blocks: [
          {
            kind: "paragraph",
            text: "The Banker's Algorithm is a deadlock-avoidance algorithm for systems with multiple instances of resources. It uses Available, Max, Allocation and Need matrices/vectors, where Need = Max − Allocation. Before granting a request, the system performs a safety check and grants the request only if the resulting state is safe."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Safety-Check Structure",
            text: "For a Banker's Algorithm numerical problem: first compute Need = Max−Allocation. Set Work=Available and Finish=false for all processes. Find a process whose Need≤Work; then conceptually release its Allocation by Work=Work+Allocation and mark Finish=true. Repeat. If every process can be marked Finish, the state is safe and the sequence obtained is a safe sequence."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Critical Section", definition: "A part of a process that accesses shared data or resources and requires controlled concurrent access." },
      { term: "Race Condition", definition: "A condition where concurrent execution order can change the result." },
      { term: "Semaphore", definition: "A synchronization variable manipulated through atomic wait and signal operations." },
      { term: "Monitor", definition: "A high-level construct encapsulating shared data and synchronized procedures." },
      { term: "Deadlock", definition: "A permanent waiting condition involving a set of processes and resources." },
      { term: "Safe State", definition: "A state from which some valid process completion order exists that avoids deadlock." },
      { term: "Banker's Algorithm", definition: "A deadlock-avoidance method based on safe-state checking." },
      { term: "Deadlock Detection", definition: "The process of checking whether the current allocation state contains a deadlock." },
      { term: "Recovery", definition: "Actions taken to restore the system after deadlock is detected." }
    ],
    examQuestions: [
      "Explain the critical-section problem and its three requirements. (Long)",
      "What is a race condition? Explain with an example. (Medium)",
      "Explain hardware support for process synchronization. (Medium)",
      "Define semaphore and explain binary and counting semaphores. (Long)",
      "Explain monitors and compare them with semaphores. (Medium)",
      "Define deadlock and explain its four necessary conditions. (Long)",
      "Differentiate deadlock prevention, avoidance and detection. (Long)",
      "Explain the Banker's Algorithm with its safety-check procedure. (Long)",
      "Solve a resource-allocation problem using the Banker's Algorithm. (Long)",
      "Explain deadlock recovery techniques. (Medium)"
    ]
  },

  {
    unitNumber: 3,
    title: "Memory Management",
    hours: 8,
    headings: [
      {
        id: "address-space",
        title: "1. Logical and Physical Address Space",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A logical (virtual) address is generated by the CPU, whereas a physical address identifies a location in main memory. The memory-management unit (MMU) performs address translation. Keeping logical and physical address spaces distinct allows programs to execute without needing to know their final physical locations."
          },
          {
            kind: "diagram",
            diagramId: "c402-address-translation",
            caption: "Logical address translated to physical address through memory-management hardware."
          }
        ]
      },
      {
        id: "swapping",
        title: "2. Swapping",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "Swapping is a memory-management technique in which a process can be moved between main memory and backing storage. Swapping can increase the number of processes that can be managed when memory is limited, but moving data between memory and storage introduces significant I/O overhead."
          }
        ]
      },
      {
        id: "contiguous-allocation",
        title: "3. Contiguous Allocation and Fragmentation",
        icon: "LayoutTemplate",
        blocks: [
          {
            kind: "paragraph",
            text: "In contiguous allocation, each process occupies a single contiguous region of physical memory. Fixed or variable partitions can be used. External fragmentation occurs when free memory is divided into small non-contiguous holes. Internal fragmentation occurs when an allocated block is larger than the requested space and the unused portion lies inside the allocation."
          },
          {
            kind: "table",
            headers: ["Technique", "Meaning"],
            rows: [
              ["First Fit", "Allocate the first sufficiently large free block encountered."],
              ["Best Fit", "Allocate the smallest free block that is large enough."],
              ["Worst Fit", "Allocate the largest available free block."],
              ["External fragmentation", "Free space exists but is split into separate holes."],
              ["Internal fragmentation", "Allocated space contains unused space inside the assigned block."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Allocation Example",
            text: "If free holes are 100 KB, 500 KB and 200 KB and a 180 KB request arrives, First Fit chooses the 500 KB hole only if the 100 KB hole is encountered first and is too small. Best Fit chooses the 200 KB hole because it is the smallest sufficient hole. Worst Fit chooses the 500 KB hole."
          }
        ]
      },
      {
        id: "paging",
        title: "4. Paging",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "Paging divides logical memory into fixed-size pages and physical memory into frames of the same size. A page table maps page numbers to frame numbers. A logical address is divided into page number and offset. The page number indexes the page table; the offset remains unchanged during translation."
          },
          {
            kind: "diagram",
            diagramId: "c402-paging-translation",
            caption: "Page number and offset translated through a page table to a physical frame and offset."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Paging Address Example",
            text: "Suppose page size = 1024 bytes and logical address = 2500. Then page number = floor(2500/1024)=2 and offset = 2500−2(1024)=452. If page 2 maps to frame 7, the physical address is 7(1024)+452=7620."
          }
        ]
      },
      {
        id: "segmentation",
        title: "5. Segmentation and Segmentation with Paging",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "Segmentation divides a program according to logical units such as code, data, stack or procedures. A logical address contains a segment number and an offset. A segment table stores a base and limit for each segment. Segmentation with paging combines logical segments with paging inside each segment, providing logical program structure together with fixed-size page management."
          },
          {
            kind: "table",
            headers: ["Paging", "Segmentation"],
            rows: [
              ["Division", "Fixed-size pages", "Variable-size logical segments"],
              ["Address form", "Page number + offset", "Segment number + offset"],
              ["Main view", "Physical-memory management efficiency", "Logical program structure and protection"],
              ["Fragmentation", "Can have internal fragmentation", "Can have external fragmentation"]
            ]
          }
        ]
      },
      {
        id: "virtual-memory-demand-paging",
        title: "6. Virtual Memory and Demand Paging",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Virtual memory allows a process to have a logical address space larger than the immediately available physical memory. Demand paging loads a page into memory only when it is needed. If a referenced page is not present, a page fault occurs; the OS retrieves the page from secondary storage, updates the page table and resumes execution."
          },
          {
            kind: "diagram",
            diagramId: "c402-page-fault-flow",
            caption: "Basic demand-paging flow from page reference to page-fault handling."
          },
          {
            kind: "callout",
            tone: "info",
            title: "Page Fault",
            text: "A page fault is not automatically a program error. It is a hardware/OS event indicating that the referenced virtual page is not currently in the required physical frame. The OS can satisfy the reference by loading the page if the reference is valid."
          }
        ]
      },
      {
        id: "page-replacement",
        title: "7. Page Replacement Algorithms",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "When a page fault occurs and no free frame is available, the OS must select a page to replace. Common algorithms include FIFO, Optimal and LRU. FIFO replaces the oldest loaded page. Optimal replaces the page whose next use is farthest in the future; it is mainly a theoretical benchmark because future references are not normally known. LRU replaces the page that has not been used for the longest time."
          },
          {
            kind: "table",
            headers: ["Algorithm", "Replacement rule", "Important point"],
            rows: [
              ["FIFO", "Replace the oldest page.", "Simple; can exhibit Belady's anomaly."],
              ["Optimal", "Replace the page whose next reference is farthest away.", "Theoretical minimum page faults for a known reference string."],
              ["LRU", "Replace the least recently used page.", "Uses recent history as an approximation to future behavior."]
            ]
          },
          {
            kind: "callout",
            tone: "example",
            title: "Page-Replacement Calculation",
            text: "For any reference-string problem, write the reference string and frame columns, process references one by one, mark a page fault whenever the referenced page is absent, and apply the selected replacement rule only when all frames are occupied. The final page-fault count must be obtained from the complete table."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Logical Address", definition: "Address generated by the CPU within a process's logical address space." },
      { term: "Physical Address", definition: "Actual address of a location in physical main memory." },
      { term: "MMU", definition: "Hardware unit that translates logical addresses to physical addresses." },
      { term: "Paging", definition: "Memory-management scheme dividing logical memory into pages and physical memory into frames." },
      { term: "Page Table", definition: "Mapping structure that associates logical pages with physical frames." },
      { term: "Segmentation", definition: "Memory-management scheme based on variable-sized logical program segments." },
      { term: "Virtual Memory", definition: "Technique that provides a logical memory space larger than immediately available physical memory." },
      { term: "Page Fault", definition: "Event generated when a referenced virtual page is not currently resident in the required frame." },
      { term: "LRU", definition: "Page replacement policy that removes the least recently used page." }
    ],
    examQuestions: [
      "Differentiate logical and physical address spaces. (Medium)",
      "Explain swapping and its advantages and limitations. (Medium)",
      "Explain contiguous memory allocation and fragmentation. (Long)",
      "Compare First Fit, Best Fit and Worst Fit allocation. (Medium)",
      "Explain paging with address translation and page tables. (Long)",
      "Solve a paging address-translation problem. (Long)",
      "Explain segmentation and segmentation with paging. (Long)",
      "Define virtual memory and explain demand paging. (Long)",
      "Explain FIFO, Optimal and LRU page replacement algorithms. (Long)",
      "Solve a page-reference string using a specified replacement algorithm. (Long)"
    ]
  },

  {
    unitNumber: 4,
    title: "File Management",
    hours: 8,
    headings: [
      {
        id: "file-systems",
        title: "1. File Systems and File Concept",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "A file is a named collection of related information stored on secondary storage. A file system provides naming, organization, storage, retrieval, protection and metadata management. Typical file attributes include name, type, location, size, protection information, timestamps and ownership-related information."
          },
          {
            kind: "table",
            headers: ["File concept", "Explanation"],
            rows: [
              ["Name", "Human-readable identifier used to refer to the file."],
              ["Type", "Indicates the nature or format of stored information."],
              ["Size", "Current amount of storage occupied by the file."],
              ["Location", "Information needed to locate file blocks on storage."],
              ["Protection", "Rules defining permitted access operations."],
              ["Timestamps", "Record events such as creation, modification or access."]
            ]
          },
          {
            kind: "diagram",
            diagramId: "c402-file-system-structure",
            caption: "High-level relationship among applications, file system and secondary storage."
          }
        ]
      },
      {
        id: "secondary-storage-structure",
        title: "2. Secondary Storage Structure",
        icon: "HardDrive",
        blocks: [
          {
            kind: "paragraph",
            text: "Secondary storage provides non-volatile storage for programs and data. Storage devices organize information into addressable units and use controllers and device drivers to communicate with the OS. The file system translates logical file operations into storage operations."
          },
          {
            kind: "info",
            title: "Why File-System Abstraction Matters",
            text: "Applications generally work with logical files rather than physical disk addresses. The OS and file system hide device-specific details and provide consistent operations such as create, open, read, write, seek and close."
          }
        ]
      },
      {
        id: "file-access-methods",
        title: "3. File Access Methods",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Access methods determine how data is retrieved from a file. Sequential access processes data in order. Direct (random) access permits movement to a specified logical position and is useful when records or blocks must be accessed out of sequence."
          },
          {
            kind: "table",
            headers: ["Access method", "Description", "Suitable use"],
            rows: [
              ["Sequential", "Records/bytes are processed in order.", "Logs, sequential processing and streaming."],
              ["Direct/Random", "A program can move to a specified location.", "Databases and applications requiring non-sequential retrieval."]
            ]
          }
        ]
      },
      {
        id: "directory-implementation",
        title: "4. Directory Implementation",
        icon: "FolderOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "A directory stores information used to organize and locate files. Directory structures may be single-level, two-level, tree-structured, acyclic-graph or general-graph structures. Implementation must support operations such as searching for a file, creating/deleting entries, listing contents and renaming."
          },
          {
            kind: "table",
            headers: ["Structure", "Characteristic"],
            rows: [
              ["Single-level", "All files are kept in one directory."],
              ["Two-level", "Each user can have a separate directory."],
              ["Tree-structured", "Directories can contain subdirectories, forming a hierarchy."],
              ["Acyclic graph", "Sharing is possible without allowing directory cycles."],
              ["General graph", "Links can create cycles and therefore require cycle handling."]
            ]
          }
        ]
      },
      {
        id: "file-implementation",
        title: "5. File-Implementation Techniques",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "File implementation maps logical file blocks to physical storage blocks. Common allocation approaches are contiguous allocation, linked allocation and indexed allocation. Contiguous allocation stores blocks next to one another, linked allocation connects blocks through pointers, and indexed allocation uses an index block containing pointers to file blocks."
          },
          {
            kind: "diagram",
            diagramId: "c402-file-allocation",
            caption: "Comparison of contiguous, linked and indexed file allocation."
          },
          {
            kind: "table",
            headers: ["Method", "Strength", "Limitation"],
            rows: [
              ["Contiguous", "Fast sequential and direct access; simple address calculation.", "External fragmentation and difficulty growing files."],
              ["Linked", "Files can grow without requiring contiguous blocks.", "Pointer overhead and slower direct access."],
              ["Indexed", "Supports direct access without requiring contiguous file blocks.", "Index block overhead; large files may require multi-level indexing."]
            ]
          }
        ]
      },
      {
        id: "free-space-management",
        title: "6. Free-Space Management and Recovery",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "The file system must track unused storage blocks so they can be allocated to new or growing files. Common methods include bitmaps/bit vectors, linked free lists, grouping and counting. Recovery and consistency mechanisms help restore a file system after failures by checking or repairing metadata and allocation information."
          },
          {
            kind: "table",
            headers: ["Method", "Basic idea"],
            rows: [
              ["Bit vector", "One bit represents the free/allocated state of each relevant block."],
              ["Linked list", "Free blocks are linked together."],
              ["Grouping", "A free block stores addresses of several other free blocks."],
              ["Counting", "Stores the start address and count of consecutive free blocks."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "File System", definition: "OS component and data structures that organize, store, retrieve and protect files." },
      { term: "File Attribute", definition: "Metadata describing properties such as name, size, location and protection." },
      { term: "Sequential Access", definition: "Accessing file contents in their stored logical order." },
      { term: "Direct Access", definition: "Accessing a specified file position without reading all earlier positions." },
      { term: "Directory", definition: "A structure that organizes file names and associated metadata." },
      { term: "Contiguous Allocation", definition: "Storing a file in consecutive physical blocks." },
      { term: "Linked Allocation", definition: "Connecting file blocks through pointers." },
      { term: "Indexed Allocation", definition: "Using an index block to store pointers to file blocks." },
      { term: "Free-Space Management", definition: "Techniques used to track storage blocks that are currently unused." }
    ],
    examQuestions: [
      "Define a file and explain common file attributes. (Medium)",
      "Explain the functions of a file system. (Long)",
      "Explain secondary-storage structure from the OS perspective. (Medium)",
      "Differentiate sequential and direct file access methods. (Short)",
      "Explain common directory structures. (Long)",
      "Explain contiguous, linked and indexed file allocation methods. (Long)",
      "Compare file-allocation techniques with their advantages and limitations. (Medium)",
      "Explain free-space management using bitmap and linked-list approaches. (Medium)",
      "Write a note on file-system recovery and consistency. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "Disk Management",
    hours: 8,
    headings: [
      {
        id: "disk-structure",
        title: "1. Disk Structure and Disk Management",
        icon: "HardDrive",
        blocks: [
          {
            kind: "paragraph",
            text: "A magnetic disk is organized into surfaces, tracks and sectors; operating systems commonly manage storage through logical blocks. Disk management includes scheduling I/O requests, maintaining disk structures, allocating storage and handling failures. Disk access time is influenced by seek time, rotational latency and transfer time."
          },
          {
            kind: "table",
            headers: ["Component", "Meaning"],
            rows: [
              ["Seek time", "Time required to position the disk head at the required track."],
              ["Rotational latency", "Time waiting for the required sector to rotate under the head."],
              ["Transfer time", "Time to transfer the requested data between device and memory."],
              ["Disk scheduling", "Ordering pending disk requests to reduce access cost and improve service."]
            ]
          }
        ]
      },
      {
        id: "disk-scheduling-algorithms",
        title: "2. Disk Scheduling Algorithms",
        icon: "CalendarClock",
        blocks: [
          {
            kind: "paragraph",
            text: "Disk scheduling chooses the order in which pending disk I/O requests are serviced. The syllabus covers FCFS, SSTF, SCAN and related disk scheduling ideas. The main objective is often to reduce total head movement while maintaining acceptable fairness."
          },
          {
            kind: "diagram",
            diagramId: "c402-disk-scheduling",
            caption: "Conceptual head movement patterns for FCFS, SSTF and SCAN."
          },
          {
            kind: "table",
            headers: ["Algorithm", "Rule", "Important issue"],
            rows: [
              ["FCFS", "Service requests in arrival order.", "Fair and simple, but may cause large head movement."],
              ["SSTF", "Service the request closest to the current head position.", "Can reduce movement but may starve distant requests."],
              ["SCAN", "Move in one direction servicing requests, then reverse direction.", "Provides more systematic service than SSTF."]
            ]
          }
        ]
      },
      {
        id: "disk-scheduling-example",
        title: "3. Solving Disk-Scheduling Numerical Problems",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "For a disk-scheduling numerical problem, write the initial head position and request queue. Apply the exact selection rule of the algorithm and record every serviced cylinder. Total head movement is the sum of absolute differences between consecutive head positions."
          },
          {
            kind: "callout",
            tone: "example",
            title: "FCFS Head-Movement Example",
            text: "If the initial head is at 50 and the request order is 82, 43, 140, the movement is |82−50| + |43−82| + |140−43| = 32 + 39 + 97 = 168 cylinders. Always show the service sequence before summing movement."
          },
          {
            kind: "callout",
            tone: "info",
            title: "SCAN Direction",
            text: "For SCAN, the initial direction and disk-end assumptions matter. State the direction in the answer and include the appropriate end movement according to the convention specified in the question."
          }
        ]
      },
      {
        id: "swap-space-management",
        title: "4. Swap-Space Management",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "Swap space is secondary storage reserved or managed for temporarily storing memory pages or process-related data when physical memory pressure requires movement to storage. Efficient swap-space management affects paging performance because storage access is much slower than RAM."
          }
        ]
      },
      {
        id: "disk-reliability",
        title: "5. Disk Reliability and Recovery",
        icon: "Shield",
        blocks: [
          {
            kind: "paragraph",
            text: "Disk reliability concerns detecting, preventing and recovering from storage errors. Techniques can include redundancy, error detection/correction, bad-block management, backups and recovery procedures. A robust OS/storage system must distinguish transient I/O errors from persistent media failures and apply an appropriate recovery policy."
          },
          {
            kind: "table",
            headers: ["Reliability measure", "Purpose"],
            rows: [
              ["Error detection/correction", "Detect or correct corruption in stored/transferred data where supported."],
              ["Bad-block management", "Identify unusable storage areas and prevent normal allocation to them."],
              ["Backup", "Maintain another copy of important information for recovery."],
              ["Recovery", "Restore usable data and consistent metadata after failures."]
            ]
          }
        ]
      },
      {
        id: "disk-management-summary",
        title: "6. Disk Management: Exam Comparison",
        icon: "GitCompareArrows",
        blocks: [
          {
            kind: "table",
            headers: ["Topic", "What to remember for exams"],
            rows: [
              ["FCFS", "Arrival order; compute each absolute head movement."],
              ["SSTF", "Choose nearest pending request at each step."],
              ["SCAN", "Move in one direction, service requests, reverse at the end according to the stated convention."],
              ["Swap space", "Secondary storage area supporting movement of memory/process data."],
              ["Reliability", "Error handling, bad blocks, redundancy/backup and recovery."]
            ]
          },
          {
            kind: "info",
            title: "Numerical Answer Format",
            text: "For disk scheduling, write: Initial Head → Service Sequence → Individual Movements → Total Head Movement. This makes the calculation auditable and reduces mistakes."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Disk Scheduling", definition: "Ordering pending disk I/O requests to improve access performance and service behavior." },
      { term: "Seek Time", definition: "Time taken to move the disk head to the desired track." },
      { term: "Rotational Latency", definition: "Waiting time for the required sector to rotate into position." },
      { term: "FCFS Disk Scheduling", definition: "Services disk requests in their arrival order." },
      { term: "SSTF", definition: "Services the pending request with minimum distance from the current head position." },
      { term: "SCAN", definition: "Moves the disk head in a direction while serving requests, then reverses." },
      { term: "Swap Space", definition: "Secondary-storage area used to support temporary movement of memory/process data." },
      { term: "Bad Block", definition: "A storage block that cannot reliably hold data and should be excluded from normal allocation." },
      { term: "Disk Reliability", definition: "Ability of storage and its management mechanisms to preserve correct data and recover from faults." }
    ],
    examQuestions: [
      "Explain disk structure and the components of disk access time. (Medium)",
      "What is disk scheduling and why is it required? (Short)",
      "Explain FCFS disk scheduling with a numerical example. (Long)",
      "Explain SSTF disk scheduling and discuss its limitation. (Medium)",
      "Explain SCAN disk scheduling with a suitable example. (Long)",
      "Solve a disk-scheduling problem and calculate total head movement. (Long)",
      "Compare FCFS, SSTF and SCAN disk scheduling algorithms. (Medium)",
      "Explain swap-space management. (Medium)",
      "Explain disk reliability, bad-block management and recovery. (Long)"
    ]
  }
];
