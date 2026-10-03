import { UnitNote } from "@/types";

// Detailed exam-oriented notes for Artificial Intelligence & Machine Learning (C-504)
// B.C.A. Fifth Semester — Dr. Bhimrao Ambedkar University, Agra.
// Source basis: uploaded DBRAU detailed syllabus image.
export const aiMlC504UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Artificial Intelligence: Concepts, Knowledge and Problem Representation",
    hours: 8,
    headings: [
      {
        id: "ai-concepts",
        title: "1. AI Concepts",
        icon: "Brain",
        blocks: [
          {
            kind: "paragraph",
            text: "Artificial Intelligence (AI) is the area of computing concerned with building systems that perform tasks requiring capabilities commonly associated with intelligent behavior, such as reasoning, learning, perception, planning and problem solving. An AI system receives information from its environment or a knowledge source, processes that information and produces an action, decision or conclusion."
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              ["Intelligence", "Ability to acquire information, reason about it, learn from experience and use knowledge to achieve goals."],
              ["Agent", "An entity that perceives an environment and acts upon it."],
              ["Knowledge", "Information about objects, relationships, rules, facts and procedures that can support reasoning."],
              ["Inference", "Process of deriving conclusions from available facts and rules."],
              ["Learning", "Improvement of system behavior or model parameters using experience or data."]
            ]
          }
        ]
      },
      {
        id: "ai-definitions",
        title: "2. Various Definitions of AI",
        icon: "BookOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "AI can be described from several perspectives. Some descriptions emphasize systems that think like humans, some emphasize systems that act like humans, and others emphasize rational reasoning or rational action. For examination purposes, AI may be defined as the study and development of computational systems capable of performing tasks involving reasoning, learning, perception, language understanding and goal-directed action."
          },
          {
            kind: "table",
            headers: ["Perspective", "Main idea"],
            rows: [
              ["Thinking humanly", "Model aspects of human thought processes."],
              ["Acting humanly", "Produce behavior that resembles intelligent human behavior."],
              ["Thinking rationally", "Use formal reasoning to derive appropriate conclusions."],
              ["Acting rationally", "Choose actions expected to achieve specified goals effectively."]
            ]
          }
        ]
      },
      {
        id: "knowledge",
        title: "3. Knowledge",
        icon: "Library",
        blocks: [
          {
            kind: "paragraph",
            text: "Knowledge is organized information that an intelligent system can use for reasoning and decision making. It can contain facts, concepts, relationships, rules and procedures. A knowledge-based system separates stored knowledge from the mechanism used to reason with that knowledge."
          },
          {
            kind: "diagram",
            diagramId: "c504-knowledge-system",
            caption: "Basic relationship between knowledge, inference and conclusions."
          }
        ]
      },
      {
        id: "knowledge-pyramid",
        title: "4. Knowledge Pyramid",
        icon: "Triangle",
        blocks: [
          {
            kind: "paragraph",
            text: "The knowledge pyramid is commonly used to explain a progression from raw observations to increasingly meaningful and actionable understanding. A useful hierarchy is Data → Information → Knowledge → Wisdom. Data consists of raw values, information gives data context and meaning, knowledge captures relationships and usable understanding, while wisdom concerns appropriate application of knowledge to decisions."
          },
          {
            kind: "diagram",
            diagramId: "c504-knowledge-pyramid",
            caption: "Data–Information–Knowledge–Wisdom pyramid."
          }
        ]
      },
      {
        id: "characteristics-ai",
        title: "5. Characteristics of AI Problems",
        icon: "ListChecks",
        blocks: [
          {
            kind: "paragraph",
            text: "AI problems often involve large or complex search spaces, incomplete information, uncertainty, symbolic knowledge, constraints and the need to select an appropriate sequence of actions. A problem can be represented by an initial state, a goal state or goal test, available actions/operators, transition model and path or action cost where required."
          },
          {
            kind: "table",
            headers: ["Characteristic", "Explanation"],
            rows: [
              ["Large search space", "Many possible states or actions may exist."],
              ["Uncertainty", "The system may not know all facts with certainty."],
              ["Incomplete information", "Only part of the relevant environment may be observed."],
              ["Heuristics", "Problem-specific estimates can guide search toward promising states."],
              ["Goal-directed behavior", "The system evaluates actions with respect to a goal or objective."]
            ]
          }
        ]
      },
      {
        id: "problem-representation",
        title: "6. Problem Representation in AI",
        icon: "Workflow",
        blocks: [
          {
            kind: "paragraph",
            text: "Problem representation converts a real problem into a formal structure that an AI method can process. A standard state-space formulation specifies an initial state, a set of actions/operators, a transition model, a goal test and optionally a path-cost function."
          },
          {
            kind: "diagram",
            diagramId: "c504-problem-representation",
            caption: "State-space problem representation."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example: Route Finding",
            text: "Initial state = starting city; actions = travel along available roads; transition = move to a connected city; goal test = destination reached; path cost = total distance or travel cost."
          }
        ]
      },
      {
        id: "applications-ai",
        title: "7. Application Areas of AI",
        icon: "Globe2",
        blocks: [
          {
            kind: "table",
            headers: ["Area", "Typical AI use"],
            rows: [
              ["Natural Language Processing", "Text and speech analysis, translation and conversational systems."],
              ["Computer Vision", "Image classification, object detection and visual interpretation."],
              ["Expert Systems", "Rule/knowledge-based decision support in a specialized domain."],
              ["Robotics", "Perception, planning, navigation and control."],
              ["Recommendation", "Predicting or ranking items based on user/item information."],
              ["Games", "Search, planning, evaluation and strategic decision making."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Artificial Intelligence", definition: "Field concerned with computational systems capable of intelligent behavior such as reasoning, learning and problem solving." },
      { term: "Knowledge", definition: "Organized information usable by an intelligent system for reasoning and decision making." },
      { term: "Inference", definition: "Derivation of conclusions from facts, rules or other available knowledge." },
      { term: "Knowledge Pyramid", definition: "A hierarchy commonly expressed as Data, Information, Knowledge and Wisdom." },
      { term: "State", definition: "A representation of a relevant condition or configuration of a problem." },
      { term: "State Space", definition: "Set of states reachable or considered during problem solving." },
      { term: "Heuristic", definition: "Problem-dependent estimate or rule used to guide search." }
    ],
    examQuestions: [
      "Define Artificial Intelligence and explain different perspectives of AI. (Long)",
      "Explain knowledge and the knowledge pyramid with a diagram. (Long)",
      "Discuss the characteristics of AI problems. (Medium)",
      "Explain problem representation in AI with a suitable example. (Long)",
      "Explain major application areas of Artificial Intelligence. (Long)"
    ]
  },

  {
    unitNumber: 2,
    title: "Expert Systems",
    hours: 8,
    headings: [
      {
        id: "expert-system-intro",
        title: "1. Introduction to Expert Systems",
        icon: "BrainCircuit",
        blocks: [
          {
            kind: "paragraph",
            text: "An Expert System is an AI-based system designed to provide advice, diagnosis or decisions in a specialized domain by using stored domain knowledge and an inference mechanism. It attempts to reproduce useful aspects of expert-level problem solving rather than general human intelligence."
          }
        ]
      },
      {
        id: "expert-components",
        title: "2. Components of an Expert System",
        icon: "Boxes",
        blocks: [
          {
            kind: "paragraph",
            text: "A typical expert system contains a knowledge base, inference engine, user interface and facilities for acquiring or maintaining knowledge. An explanation facility may also be provided so that the system can describe the reasoning behind a conclusion."
          },
          {
            kind: "diagram",
            diagramId: "c504-expert-system-architecture",
            caption: "Basic architecture of an expert system."
          },
          {
            kind: "table",
            headers: ["Component", "Role"],
            rows: [
              ["Knowledge Base", "Stores domain facts, rules and relationships."],
              ["Inference Engine", "Applies reasoning procedures to the stored knowledge and current facts."],
              ["User Interface", "Provides communication between the user and the system."],
              ["Knowledge Acquisition", "Supports collection, organization or updating of domain knowledge."],
              ["Explanation Facility", "Provides a justification or trace of how a conclusion was reached."]
            ]
          }
        ]
      },
      {
        id: "knowledge-base",
        title: "3. Knowledge Base",
        icon: "Database",
        blocks: [
          {
            kind: "paragraph",
            text: "The knowledge base contains domain-specific knowledge. It may include declarative facts and rules such as IF–THEN statements. For example: IF temperature is high AND coolant level is low THEN inspect the cooling system. The quality, completeness and consistency of the knowledge base strongly influence the usefulness of an expert system."
          }
        ]
      },
      {
        id: "inference-engine",
        title: "4. Inference Engine",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The inference engine is the reasoning component. It selects and applies relevant rules to known facts to derive new facts or conclusions. Two classic rule-based strategies are forward chaining, which starts from known facts and works toward conclusions, and backward chaining, which starts from a goal and works backward toward supporting facts."
          },
          {
            kind: "diagram",
            diagramId: "c504-forward-backward",
            caption: "Forward-chaining and backward-chaining reasoning directions."
          }
        ]
      },
      {
        id: "user-interface-expert",
        title: "5. User Interface in Expert Systems",
        icon: "MessageSquare",
        blocks: [
          {
            kind: "paragraph",
            text: "The user interface enables users to enter symptoms, observations, requirements or other facts and receive conclusions, recommendations or questions from the system. A good interface should make interaction understandable and should present the result and relevant explanation clearly."
          }
        ]
      },
      {
        id: "features-expert",
        title: "6. Features of Expert Systems",
        icon: "BadgeCheck",
        blocks: [
          {
            kind: "table",
            headers: ["Feature", "Description"],
            rows: [
              ["Domain specificity", "Designed for a defined problem area."],
              ["Knowledge-based reasoning", "Uses stored domain knowledge rather than only fixed procedural code."],
              ["Consistency", "Can apply the same encoded rules consistently for similar inputs."],
              ["Explanation", "May provide reasoning traces or explanations."],
              ["Knowledge maintenance", "Knowledge can be updated as domain rules change."]
            ]
          }
        ]
      },
      {
        id: "expert-life-cycle",
        title: "7. Expert System Life Cycle",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "paragraph",
            text: "An expert-system life cycle can be viewed as knowledge acquisition, knowledge representation, implementation, testing/validation, deployment and maintenance. Knowledge is refined as domain experts and developers identify missing, inconsistent or outdated rules."
          },
          {
            kind: "diagram",
            diagramId: "c504-expert-life-cycle",
            caption: "Conceptual expert-system development and maintenance cycle."
          }
        ]
      },
      {
        id: "limitations-expert",
        title: "8. Limitations of Expert Systems",
        icon: "TriangleAlert",
        blocks: [
          {
            kind: "paragraph",
            text: "Expert systems are normally limited by the scope and quality of their knowledge. They can be difficult to maintain when the domain changes, may fail on cases outside their knowledge and may not possess common-sense reasoning comparable to a human. Knowledge acquisition from experts can also be time-consuming."
          }
        ]
      },
      {
        id: "applications-expert",
        title: "9. Application Areas of Expert Systems",
        icon: "BriefcaseBusiness",
        blocks: [
          {
            kind: "table",
            headers: ["Application area", "Example type of task"],
            rows: [
              ["Medical support", "Rule-based assistance for diagnosis or clinical decision support."],
              ["Finance", "Risk assessment, advisory rules and decision support."],
              ["Manufacturing", "Fault diagnosis, quality control and maintenance support."],
              ["Agriculture", "Advisory systems for crop or disease-related decisions."],
              ["Technical support", "Troubleshooting and fault isolation."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Expert System", definition: "Knowledge-based AI system designed to solve problems or provide advice in a specialized domain." },
      { term: "Knowledge Base", definition: "Repository of domain facts, rules and relationships." },
      { term: "Inference Engine", definition: "Reasoning mechanism that applies rules to facts to derive conclusions." },
      { term: "Forward Chaining", definition: "Data-driven reasoning that starts with known facts and derives consequences." },
      { term: "Backward Chaining", definition: "Goal-driven reasoning that starts with a goal and searches for supporting facts/rules." },
      { term: "Knowledge Acquisition", definition: "Process of obtaining and organizing domain knowledge for an expert system." }
    ],
    examQuestions: [
      "Define an Expert System and explain its architecture with a diagram. (Long)",
      "Explain the components of an Expert System. (Long)",
      "Differentiate forward chaining and backward chaining. (Long)",
      "Explain the Expert System life cycle. (Long)",
      "Discuss features, advantages and limitations of Expert Systems. (Long)",
      "Explain application areas of Expert Systems. (Medium)"
    ]
  },

  {
    unitNumber: 3,
    title: "AI Search Process",
    hours: 8,
    headings: [
      {
        id: "search-intro",
        title: "1. AI Search Process",
        icon: "Search",
        blocks: [
          {
            kind: "paragraph",
            text: "Search is a fundamental AI problem-solving technique. A search algorithm explores a state space to find a sequence of actions that reaches a goal. Search methods differ in how they choose the next state, what information they use and whether they guarantee a solution under stated assumptions."
          },
          {
            kind: "diagram",
            diagramId: "c504-search-tree",
            caption: "Generic state-space search tree with root, alternatives and goal node."
          }
        ]
      },
      {
        id: "brute-force-search",
        title: "2. Brute Force Search",
        icon: "ListTree",
        blocks: [
          {
            kind: "paragraph",
            text: "Brute force search explores possibilities without using domain-specific heuristic guidance. It systematically examines the search space according to a specified uninformed strategy. Its main advantage is simplicity; its limitation is that the search space may grow very rapidly."
          }
        ]
      },
      {
        id: "dfs",
        title: "3. Depth First Search (DFS)",
        icon: "CornerDownRight",
        blocks: [
          {
            kind: "paragraph",
            text: "Depth First Search explores one branch as deeply as possible before backtracking to explore alternatives. It is naturally implemented using a stack or recursion. DFS can use relatively low memory compared with breadth-first search, but it may spend a long time in an unproductive deep branch and does not generally guarantee a shortest solution."
          },
          {
            kind: "diagram",
            diagramId: "c504-dfs-bfs",
            caption: "Traversal order concept for DFS and BFS on a search tree."
          }
        ]
      },
      {
        id: "bfs",
        title: "4. Breadth First Search (BFS)",
        icon: "Rows3",
        blocks: [
          {
            kind: "paragraph",
            text: "Breadth First Search explores nodes level by level. It uses a queue and expands all nodes at the current depth before moving to the next depth. When every step has equal cost, BFS is complete and returns a shallowest solution, but its memory consumption can become large."
          },
          {
            kind: "table",
            headers: ["Property", "DFS", "BFS"],
            rows: [
              ["Primary structure", "Stack / recursion", "Queue"],
              ["Expansion", "Deep branch first", "Level by level"],
              ["Memory", "Usually lower", "Can be high"],
              ["Shortest shallow solution", "Not guaranteed", "Yes when step costs are equal and assumptions hold"]
            ]
          }
        ]
      },
      {
        id: "heuristic-search",
        title: "5. Heuristic Search",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "Heuristic search uses an estimate of remaining cost or desirability to guide exploration. A heuristic function h(n) estimates the cost from state n to a goal. A good heuristic can reduce the number of states explored, although its properties affect completeness, optimality and computational cost."
          }
        ]
      },
      {
        id: "hill-climbing",
        title: "6. Hill Climbing Algorithm",
        icon: "Mountain",
        blocks: [
          {
            kind: "paragraph",
            text: "Hill climbing is a local search method that repeatedly moves from the current state to a neighboring state that improves the evaluation. It does not normally maintain a complete search tree. It can become stuck at a local maximum, plateau or ridge, so variants or randomization may be used in practical systems."
          },
          {
            kind: "diagram",
            diagramId: "c504-hill-climbing",
            caption: "Evaluation landscape illustrating local and global optima."
          }
        ]
      },
      {
        id: "constraint-satisfaction",
        title: "7. Constraint Satisfaction",
        icon: "SlidersHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "A Constraint Satisfaction Problem (CSP) consists of variables, domains of possible values and constraints that restrict which combinations of values are allowed. Solving a CSP means assigning values to variables so that all constraints are satisfied."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "In a timetable CSP, variables may be courses, domains may be available time slots, and constraints may prohibit clashes between courses sharing students or rooms."
          }
        ]
      },
      {
        id: "mean-end-analysis",
        title: "8. Means-End Analysis",
        icon: "GitCompare",
        blocks: [
          {
            kind: "paragraph",
            text: "Means-End Analysis compares the current state with a desired goal state, identifies important differences and chooses an operator that can reduce one or more differences. The process is repeated until the goal is reached or no useful operator is available."
          }
        ]
      },
      {
        id: "best-first-search",
        title: "9. Best First Search",
        icon: "ListFilter",
        blocks: [
          {
            kind: "paragraph",
            text: "Best First Search selects the most promising node according to an evaluation function. A priority queue is typically used. Greedy Best First Search commonly uses f(n)=h(n), focusing on estimated distance to the goal. The choice of evaluation function determines the behavior of the search."
          }
        ]
      },
      {
        id: "a-star",
        title: "10. A* Algorithm",
        icon: "Route",
        blocks: [
          {
            kind: "paragraph",
            text: "A* combines the cost already incurred with a heuristic estimate of remaining cost. Its standard evaluation is f(n)=g(n)+h(n), where g(n) is the path cost from the start to n and h(n) estimates the remaining cost to a goal. Under commonly stated conditions such as an admissible heuristic, A* can provide an optimal solution for the corresponding search formulation."
          },
          {
            kind: "diagram",
            diagramId: "c504-a-star",
            caption: "A* evaluation showing g(n), h(n) and f(n)=g(n)+h(n)."
          }
        ]
      },
      {
        id: "ao-star",
        title: "11. AO* Algorithm",
        icon: "GitMerge",
        blocks: [
          {
            kind: "paragraph",
            text: "AO* is associated with AND-OR graphs. In an OR choice, solving one alternative may be sufficient; in an AND decomposition, multiple subproblems may all need to be solved. AO* uses heuristic estimates and updates solution costs as it expands the graph to identify a least-cost solution subgraph under the problem model."
          }
        ]
      },
      {
        id: "beam-search",
        title: "12. Beam Search",
        icon: "Filter",
        blocks: [
          {
            kind: "paragraph",
            text: "Beam Search is a breadth-oriented heuristic search that keeps only a fixed number of the most promising nodes at each level. The beam width controls how many candidates survive. A smaller beam can reduce memory and computation but may discard a path that would lead to a better solution."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Search Space", definition: "Collection of states considered by a problem-solving search process." },
      { term: "DFS", definition: "Search strategy that explores a branch deeply before backtracking." },
      { term: "BFS", definition: "Search strategy that expands states level by level." },
      { term: "Heuristic", definition: "Estimate used to guide search toward promising states." },
      { term: "Hill Climbing", definition: "Local search that repeatedly moves toward a better neighboring state." },
      { term: "CSP", definition: "Problem defined by variables, domains and constraints." },
      { term: "A*", definition: "Search using f(n)=g(n)+h(n) to combine path cost and heuristic estimate." },
      { term: "Beam Search", definition: "Heuristic search that retains only a fixed number of promising nodes per level." }
    ],
    examQuestions: [
      "Explain the AI search process and state-space search. (Long)",
      "Compare Depth First Search and Breadth First Search. (Long)",
      "Explain heuristic search and its purpose. (Medium)",
      "Explain Hill Climbing and its limitations. (Long)",
      "What is a Constraint Satisfaction Problem? Explain with an example. (Long)",
      "Explain Means-End Analysis. (Medium)",
      "Explain Best First Search and Beam Search. (Long)",
      "Explain A* algorithm with f(n)=g(n)+h(n). (Long)",
      "Explain AO* algorithm and AND-OR graphs. (Long)"
    ]
  },

  {
    unitNumber: 4,
    title: "Natural Language Processing",
    hours: 8,
    headings: [
      {
        id: "nlp-introduction",
        title: "1. Natural Language Processing: Introduction",
        icon: "Languages",
        blocks: [
          {
            kind: "paragraph",
            text: "Natural Language Processing (NLP) is the area of AI concerned with enabling computers to process, analyze, interpret and generate human language. Language may be represented as text or speech. NLP combines linguistic concepts with computational methods to transform language input into useful representations or outputs."
          },
          {
            kind: "diagram",
            diagramId: "c504-nlp-pipeline",
            caption: "Simplified NLP processing pipeline."
          }
        ]
      },
      {
        id: "nlp-need",
        title: "2. Need for NLP",
        icon: "MessageCircle",
        blocks: [
          {
            kind: "paragraph",
            text: "Human language contains ambiguity, context, variation in wording and implicit meaning. NLP is needed to allow computer systems to work with large volumes of natural-language information and to support communication between people and machines."
          },
          {
            kind: "table",
            headers: ["Need", "Reason"],
            rows: [
              ["Information access", "Convert large collections of language into searchable or analyzable information."],
              ["Human-computer interaction", "Allow users to communicate using natural language."],
              ["Automation", "Perform repetitive language-processing tasks at scale."],
              ["Knowledge extraction", "Identify entities, relationships, topics or facts from text."]
            ]
          }
        ]
      },
      {
        id: "nlp-goal",
        title: "3. Goal of NLP",
        icon: "Target",
        blocks: [
          {
            kind: "paragraph",
            text: "The broad goal of NLP is to build computational methods that can process language in a way useful for a target application. Depending on the task, the system may need to identify structure, determine meaning, extract information, classify text, answer questions, translate language or generate language."
          }
        ]
      },
      {
        id: "fundamental-problems-nlu",
        title: "4. Fundamental Problems in Natural Language Understanding",
        icon: "Puzzle",
        blocks: [
          {
            kind: "paragraph",
            text: "Natural Language Understanding (NLU) faces problems such as lexical ambiguity, syntactic ambiguity, semantic ambiguity, context dependence, co-reference, incomplete information and variation in language use. A word or sentence may have multiple interpretations, and the correct interpretation often depends on surrounding context."
          },
          {
            kind: "table",
            headers: ["Problem", "Meaning"],
            rows: [
              ["Lexical ambiguity", "A word can have more than one possible meaning."],
              ["Syntactic ambiguity", "A sentence can have more than one grammatical structure."],
              ["Semantic ambiguity", "Different interpretations of the sentence meaning may be possible."],
              ["Context dependence", "Meaning can depend on previous or surrounding text."],
              ["Co-reference", "Different expressions may refer to the same entity."]
            ]
          }
        ]
      },
      {
        id: "text-recognition",
        title: "5. Text Recognition",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Text recognition converts textual input into representations that can be processed by a language system. Typical preprocessing can include tokenization, normalization, sentence segmentation and other task-specific steps. The exact pipeline depends on the application and language."
          }
        ]
      },
      {
        id: "speech-recognition",
        title: "6. Speech Recognition",
        icon: "Mic",
        blocks: [
          {
            kind: "paragraph",
            text: "Speech recognition converts spoken language into a textual or symbolic representation. A simplified system includes audio capture, feature extraction, acoustic/language modeling and decoding. Real speech contains variations in speaker, accent, background noise, speaking rate and pronunciation."
          },
          {
            kind: "diagram",
            diagramId: "c504-speech-recognition",
            caption: "Simplified speech-recognition pipeline."
          }
        ]
      },
      {
        id: "nlp-approaches",
        title: "7. NLP Approaches",
        icon: "Layers",
        blocks: [
          {
            kind: "table",
            headers: ["Approach", "Basic idea"],
            rows: [
              ["Rule-based", "Uses explicitly designed linguistic rules and knowledge."],
              ["Statistical", "Uses statistical models learned from language data."],
              ["Machine-learning based", "Learns patterns for a task from labeled or unlabeled data."],
              ["Hybrid", "Combines multiple approaches to exploit their different strengths."]
            ]
          }
        ]
      },
      {
        id: "nlp-examples",
        title: "8. Examples of NLP Tasks",
        icon: "List",
        blocks: [
          {
            kind: "table",
            headers: ["Task", "Purpose"],
            rows: [
              ["Text classification", "Assign a document or message to a category."],
              ["Information extraction", "Extract structured facts such as entities or relations."],
              ["Machine translation", "Convert content from one natural language to another."],
              ["Question answering", "Produce an answer to a question using available information."],
              ["Speech recognition", "Convert speech into text or another machine-readable form."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "NLP", definition: "AI field concerned with computational processing of human language." },
      { term: "Natural Language Understanding", definition: "Processing aimed at deriving useful structure or meaning from natural-language input." },
      { term: "Lexical Ambiguity", definition: "Ambiguity caused by a word having multiple possible meanings." },
      { term: "Syntactic Ambiguity", definition: "Ambiguity caused by multiple possible grammatical structures." },
      { term: "Speech Recognition", definition: "Conversion of spoken audio into a textual or symbolic representation." },
      { term: "Text Recognition", definition: "Processing that identifies and represents textual content for further computation." }
    ],
    examQuestions: [
      "Define NLP and explain its need and goals. (Long)",
      "Explain fundamental problems in Natural Language Understanding. (Long)",
      "Differentiate text recognition and speech recognition. (Medium)",
      "Explain the speech-recognition pipeline with a diagram. (Long)",
      "Explain major approaches to NLP. (Long)",
      "Write notes on applications/tasks of NLP. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "Machine Learning",
    hours: 8,
    headings: [
      {
        id: "ml-introduction",
        title: "1. Introduction to Machine Learning",
        icon: "BrainCircuit",
        blocks: [
          {
            kind: "paragraph",
            text: "Machine Learning (ML) is an approach in which a computational model learns patterns or relationships from data or experience and uses what it has learned to make predictions, classifications or decisions. Instead of specifying every rule manually, the learning process estimates a model from examples or feedback."
          },
          {
            kind: "diagram",
            diagramId: "c504-ml-overview",
            caption: "Basic machine-learning workflow from data to model and prediction."
          }
        ]
      },
      {
        id: "supervised",
        title: "2. Supervised Learning",
        icon: "Tags",
        blocks: [
          {
            kind: "paragraph",
            text: "In supervised learning, the training data contains input examples paired with target outputs or labels. The model learns a mapping from inputs to outputs. Classification predicts discrete categories, while regression predicts numerical values."
          },
          {
            kind: "table",
            headers: ["Type", "Output"],
            rows: [
              ["Classification", "A category or class label."],
              ["Regression", "A continuous or numerical value."]
            ]
          }
        ]
      },
      {
        id: "unsupervised",
        title: "3. Unsupervised Learning",
        icon: "ScanSearch",
        blocks: [
          {
            kind: "paragraph",
            text: "In unsupervised learning, target labels are not supplied in the training data. The algorithm seeks useful structure such as clusters, groups, lower-dimensional representations or other patterns. Clustering is a major unsupervised-learning task."
          }
        ]
      },
      {
        id: "reinforcement",
        title: "4. Reinforcement Learning",
        icon: "Gamepad2",
        blocks: [
          {
            kind: "paragraph",
            text: "In reinforcement learning, an agent interacts with an environment, observes states, chooses actions and receives rewards or penalties. The objective is to learn a policy that produces good long-term reward according to the defined problem."
          },
          {
            kind: "diagram",
            diagramId: "c504-reinforcement-learning",
            caption: "Agent–environment interaction in reinforcement learning."
          }
        ]
      },
      {
        id: "decision-tree",
        title: "5. Decision Tree",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "A decision tree represents decisions as a tree structure. Internal nodes test features, branches represent outcomes of those tests and leaf nodes represent predictions or decisions. Decision trees can be used for classification and, with suitable methods, regression."
          },
          {
            kind: "diagram",
            diagramId: "c504-decision-tree",
            caption: "Simple decision-tree structure."
          }
        ]
      },
      {
        id: "knn",
        title: "6. K-Nearest Neighbors (KNN)",
        icon: "CircleDot",
        blocks: [
          {
            kind: "paragraph",
            text: "K-Nearest Neighbors is a similarity-based method. For a new observation, it identifies the K training observations closest according to a selected distance or similarity measure. In classification, the class can be selected by majority vote; in regression, nearby target values can be aggregated."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "With K=3, if the three nearest labeled samples contain two samples of Class A and one of Class B, a simple majority-vote KNN classifier predicts Class A."
          }
        ]
      },
      {
        id: "svm",
        title: "7. Support Vector Machines (SVM)",
        icon: "SeparatorHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "Support Vector Machine is a supervised-learning method that seeks a decision boundary separating classes with a large margin under the chosen formulation. The training observations closest to the separating boundary are called support vectors. Kernel methods can allow nonlinear decision boundaries by working with transformed feature representations."
          },
          {
            kind: "diagram",
            diagramId: "c504-svm-margin",
            caption: "Conceptual SVM separating hyperplane and support vectors."
          }
        ]
      },
      {
        id: "bayes-theorem",
        title: "8. Bayes Theorem",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Bayes theorem relates conditional probabilities. For events A and B, P(A|B) = P(B|A)P(A) / P(B), when P(B) is non-zero. In machine learning, Bayes-based reasoning can combine prior information with observed evidence to estimate posterior probabilities."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Numerical Example",
            text: "Suppose P(A)=0.4, P(B|A)=0.5 and P(B)=0.25. Then P(A|B) = (0.5×0.4)/0.25 = 0.8."
          }
        ]
      },
      {
        id: "clustering",
        title: "9. Clustering",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "Clustering groups observations so that members of the same group are more similar according to the selected representation or distance measure than members of different groups. Clustering is an unsupervised-learning task because class labels are not required."
          }
        ]
      },
      {
        id: "kmeans",
        title: "10. K-Means Clustering",
        icon: "GitCommitHorizontal",
        blocks: [
          {
            kind: "paragraph",
            text: "K-Means partitions observations into K clusters. A common algorithm initializes K centroids, assigns each observation to the nearest centroid, recomputes centroids from the assigned observations and repeats the assignment/update steps until a stopping condition is met."
          },
          {
            kind: "diagram",
            diagramId: "c504-kmeans",
            caption: "Conceptual K-Means assignment and centroid-update cycle."
          }
        ]
      },
      {
        id: "kmedoids",
        title: "11. K-Medoids",
        icon: "LocateFixed",
        blocks: [
          {
            kind: "paragraph",
            text: "K-Medoids is a clustering approach in which each cluster is represented by an actual observation called a medoid. The method seeks representative observations that minimize an appropriate within-cluster dissimilarity objective. Because medoids are real data points, the method can be less directly tied to a numerical mean than K-Means."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Machine Learning", definition: "Learning patterns or models from data or experience for prediction, classification or decision making." },
      { term: "Supervised Learning", definition: "Learning from input examples paired with target outputs or labels." },
      { term: "Unsupervised Learning", definition: "Learning structure from data without supplied target labels." },
      { term: "Reinforcement Learning", definition: "Learning through agent–environment interaction using rewards or penalties." },
      { term: "Decision Tree", definition: "Tree-structured model with feature tests, branches and prediction leaves." },
      { term: "KNN", definition: "Similarity-based method that uses the K nearest training observations." },
      { term: "SVM", definition: "Supervised method based on separating classes using a decision boundary and margin." },
      { term: "K-Means", definition: "Clustering algorithm that iteratively assigns points to centroids and updates centroids." },
      { term: "K-Medoids", definition: "Clustering method representing each cluster by an actual data observation called a medoid." }
    ],
    examQuestions: [
      "Define Machine Learning and explain its major types. (Long)",
      "Differentiate supervised, unsupervised and reinforcement learning. (Long)",
      "Explain Decision Tree with a suitable diagram. (Long)",
      "Explain KNN with an example. (Medium)",
      "Explain SVM and the concept of support vectors and margin. (Long)",
      "State and explain Bayes theorem with a numerical example. (Long)",
      "Explain clustering and K-Means algorithm. (Long)",
      "Differentiate K-Means and K-Medoids. (Long)"
    ]
  }
];
