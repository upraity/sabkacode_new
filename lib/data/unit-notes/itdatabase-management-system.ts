import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Database Management System (BMB IT 03)
// — BMB IT Electives, MBA Semester 3. English explanations follow the supplied syllabus.
export const databaseManagementSystemUnitNotesUnitNotes: UnitNote[] = [
  {
    "unitNumber": 1,
    "title": "Introduction to Database Systems",
    "hours": 6,
    "headings": [
      {
        "id": "database-basics",
        "title": "1. Data, Information, Database and DBMS",
        "icon": "Database",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A database is an organized collection of related data. A Database Management System (DBMS) is software that enables users and applications to define, create, store, retrieve, update and control access to databases. A DBMS also provides mechanisms for integrity, concurrency, recovery and security."
          },
          {
            "kind": "table",
            "headers": [
              "Term",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Data",
                "Recorded facts",
                "Student roll number and marks"
              ],
              [
                "Database",
                "Organized collection of related data",
                "University student database"
              ],
              [
                "DBMS",
                "Software managing database operations",
                "Relational database management software"
              ],
              [
                "Database application",
                "Application using database services",
                "Student management portal"
              ]
            ]
          }
        ]
      },
      {
        "id": "database-models",
        "title": "2. Database Models and Architecture",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The syllabus includes hierarchical, network, relational, object-oriented and file-oriented systems. Relational databases organize information into relations (tables) and use keys and constraints to represent relationships. Database architecture can also be discussed in terms of the three-schema approach: external views, a conceptual schema and an internal representation."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-database-architecture",
            "caption": "Three-schema view of database architecture from user/application views through the conceptual model to storage."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-database-architecture",
            "caption": "Three-schema database architecture."
          }
        ]
      },
      {
        "id": "relational-model",
        "title": "3. Relational Database Model",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "In the relational model, a table represents a relation, rows represent tuples and columns represent attributes. A primary key identifies rows, while foreign keys represent references between related tables. Integrity constraints help keep data valid."
          },
          {
            "kind": "table",
            "headers": [
              "Concept",
              "Meaning",
              "Example"
            ],
            "rows": [
              [
                "Relation",
                "Table representing a set of tuples",
                "STUDENT"
              ],
              [
                "Tuple",
                "Row in a relation",
                "One student's record"
              ],
              [
                "Attribute",
                "Column describing a property",
                "student_id"
              ],
              [
                "Primary key",
                "Attribute(s) uniquely identifying a row",
                "student_id"
              ],
              [
                "Foreign key",
                "Attribute referencing another relation",
                "course_id in ENROLLMENT"
              ]
            ]
          }
        ]
      },
      {
        "id": "three-layer-architecture",
        "title": "4. Three-Layer Architecture and Data Independence",
        "icon": "Layers",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The three-schema architecture separates user views from the conceptual organization of data and physical storage. Data independence means that changes at one level can, within limits, be made without forcing changes at other levels. Logical data independence concerns changes to the conceptual schema; physical data independence concerns changes to internal storage structures."
          }
        ]
      },
      {
        "id": "dba",
        "title": "5. Database Administration",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A Database Administrator (DBA) is responsible for operational and governance activities such as access control, backup and recovery, performance management, storage planning, availability and database standards. Exact responsibilities vary by organization and platform."
          },
          {
            "kind": "bullets",
            "items": [
              "Manage users, roles and privileges.",
              "Plan and test backup and recovery procedures.",
              "Monitor performance and resource use.",
              "Support security and audit requirements.",
              "Coordinate database changes and maintenance."
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Database",
        "definition": "An organized collection of related data."
      },
      {
        "term": "DBMS",
        "definition": "Software used to define, store, retrieve, update and control databases."
      },
      {
        "term": "Relational model",
        "definition": "Database model representing data as relations or tables connected through keys and constraints."
      },
      {
        "term": "Primary key",
        "definition": "Attribute or combination of attributes that uniquely identifies a row."
      },
      {
        "term": "Foreign key",
        "definition": "Attribute or attributes that reference a key in another relation."
      },
      {
        "term": "Data independence",
        "definition": "Ability to change a schema level without requiring unnecessary changes at higher levels."
      },
      {
        "term": "DBA",
        "definition": "Database Administrator responsible for database operation, security, recovery and related administration."
      },
      {
        "term": "Schema",
        "definition": "A defined structure describing the organization of database data."
      }
    ],
    "examQuestions": [
      "Define database and DBMS and explain their roles. (Long)",
      "Explain different database models mentioned in the syllabus. (Long)",
      "Explain the relational model with primary and foreign keys. (Long)",
      "Describe the three-schema architecture. (Long)",
      "Explain logical and physical data independence. (Medium)",
      "Discuss the major responsibilities of a DBA. (Long)",
      "What is a primary key? (Short)",
      "What is a foreign key? (Short)",
      "What is a DBMS? (Short)"
    ]
  },
  {
    "unitNumber": 2,
    "title": "Data Modelling & Database Design",
    "hours": 8,
    "headings": [
      {
        "id": "er-model",
        "title": "1. Entity-Relationship Model",
        "icon": "GitCompare",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The Entity-Relationship (ER) model represents business data requirements using entities, attributes and relationships. An entity is a distinguishable object or concept; an attribute describes it; a relationship represents an association between entities."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-er-model",
            "caption": "Illustrative ER structure showing entities, attributes, primary identifiers and a relationship."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-er-model",
            "caption": "Illustrative ER structure."
          }
        ]
      },
      {
        "id": "constraints",
        "title": "2. Relationships and Constraints",
        "icon": "Scale",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Relationships may be one-to-one, one-to-many or many-to-many. Participation and cardinality constraints express how many instances can participate. These concepts help convert business rules into a consistent logical data model."
          },
          {
            "kind": "table",
            "headers": [
              "Relationship",
              "Meaning",
              "Illustration"
            ],
            "rows": [
              [
                "1:1",
                "One instance relates to at most one instance on the other side",
                "Person–Passport"
              ],
              [
                "1:N",
                "One instance relates to many instances",
                "Department–Employee"
              ],
              [
                "M:N",
                "Many instances relate to many instances",
                "Student–Course"
              ]
            ]
          }
        ]
      },
      {
        "id": "relational-schema",
        "title": "3. Relational Schema and Normalization",
        "icon": "Table",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "After conceptual modelling, an ER model can be transformed into relations. Normalization organizes relations to reduce undesirable redundancy and update anomalies. First Normal Form requires atomic values and no repeating groups; higher normal forms address dependency-related redundancy."
          },
          {
            "kind": "paragraph",
            "text": "Normalization should be applied with an understanding of actual business requirements and query needs. The objective is not to create the maximum number of tables, but to produce a consistent and maintainable design."
          }
        ]
      },
      {
        "id": "keys",
        "title": "4. Keys and Referential Integrity",
        "icon": "Key",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Candidate keys are minimal attribute sets capable of uniquely identifying rows. One candidate key is selected as the primary key. A foreign key creates a reference to a key in another relation. Referential integrity prevents references from pointing to nonexistent parent records, subject to the database rules and operation."
          }
        ]
      },
      {
        "id": "dba-design-role",
        "title": "5. DBA Responsibilities in Design",
        "icon": "Users",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The DBA or database team contributes to standards, physical design, security, storage, performance, backup and operational readiness. Database design therefore connects conceptual business requirements with practical implementation and administration."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Entity",
        "definition": "A distinguishable object or concept about which data is stored."
      },
      {
        "term": "Attribute",
        "definition": "A property describing an entity."
      },
      {
        "term": "Relationship",
        "definition": "An association between entities."
      },
      {
        "term": "Cardinality",
        "definition": "Constraint describing how many instances of one entity can be associated with another."
      },
      {
        "term": "Candidate key",
        "definition": "Minimal attribute set that can uniquely identify a relation row."
      },
      {
        "term": "Referential integrity",
        "definition": "Constraint ensuring valid references between related relations."
      },
      {
        "term": "Normalization",
        "definition": "Process of structuring relations to reduce redundancy and update anomalies."
      },
      {
        "term": "ER model",
        "definition": "Conceptual data model based on entities, attributes and relationships."
      }
    ],
    "examQuestions": [
      "Explain the ER model with entities, attributes and relationships. (Long)",
      "Discuss 1:1, 1:N and M:N relationships. (Medium)",
      "Explain cardinality and participation constraints. (Medium)",
      "Explain normalization and its purpose. (Long)",
      "Discuss primary, candidate and foreign keys. (Long)",
      "Explain referential integrity. (Medium)",
      "Convert a simple ER relationship into relational tables conceptually. (Long)",
      "What is an entity? (Short)",
      "What is cardinality? (Short)"
    ]
  },
  {
    "unitNumber": 3,
    "title": "Relational Query Languages",
    "hours": 8,
    "headings": [
      {
        "id": "sql-basics",
        "title": "1. Structured Query Language (SQL)",
        "icon": "Code",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "SQL is a declarative language widely used with relational databases. It includes facilities for defining database structures, querying data, changing data and controlling access. SQL syntax and supported features vary by DBMS, so examples should be understood as standard relational concepts unless a particular platform is specified."
          },
          {
            "kind": "table",
            "headers": [
              "Category",
              "Purpose",
              "Examples"
            ],
            "rows": [
              [
                "DDL",
                "Define database objects",
                "CREATE, ALTER, DROP"
              ],
              [
                "DML",
                "Retrieve or modify data",
                "SELECT, INSERT, UPDATE, DELETE"
              ],
              [
                "DCL",
                "Control privileges",
                "GRANT, REVOKE"
              ],
              [
                "Transaction control",
                "Manage transaction boundaries",
                "COMMIT, ROLLBACK"
              ]
            ]
          }
        ]
      },
      {
        "id": "query-clauses",
        "title": "2. SELECT, Filtering, Sorting and Aggregation",
        "icon": "FileSpreadsheet",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A basic SELECT query identifies the required columns and source relation. WHERE filters rows before grouping; ORDER BY controls presentation order; GROUP BY forms groups for aggregate calculations; HAVING filters groups after aggregation."
          },
          {
            "kind": "paragraph",
            "text": "Common aggregate functions include COUNT, SUM, AVG, MIN and MAX. Correct query design requires understanding whether a condition applies to individual rows or aggregated groups."
          }
        ]
      },
      {
        "id": "joins",
        "title": "3. Joins and Subqueries",
        "icon": "GitCompareArrows",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A join combines rows from related tables according to a condition. An inner join returns matching combinations; outer joins can retain unmatched rows from one or both sides. A subquery is a query nested inside another SQL statement and can be used for filtering, calculation or derived results."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-sql-query-flow",
            "caption": "Conceptual SQL query flow showing source tables, filtering/joining, grouping and final result."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-sql-query-flow",
            "caption": "Conceptual query processing flow."
          }
        ]
      },
      {
        "id": "relational-algebra",
        "title": "4. Relational Algebra",
        "icon": "Sigma",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Relational algebra is a formal procedural foundation for relational query processing. Core operations include selection (choose rows), projection (choose columns), union, set difference, Cartesian product and join. These operations provide a mathematical way to express transformations of relations."
          },
          {
            "kind": "table",
            "headers": [
              "Operation",
              "Purpose"
            ],
            "rows": [
              [
                "Selection (σ)",
                "Choose rows satisfying a condition"
              ],
              [
                "Projection (π)",
                "Choose required attributes/columns"
              ],
              [
                "Union (∪)",
                "Combine compatible relations"
              ],
              [
                "Difference (−)",
                "Return tuples present in one relation but not the other"
              ],
              [
                "Join",
                "Combine related tuples from relations"
              ]
            ]
          }
        ]
      },
      {
        "id": "set-operations",
        "title": "5. Set Operations and Query Quality",
        "icon": "GitCompareArrows",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Set operations require compatible relations according to the operation's rules. Query quality also depends on correct join conditions, appropriate filtering, readable structure and awareness of duplicate rows. Complex queries should be tested against representative data and edge cases."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "SQL",
        "definition": "Structured Query Language used to define, query and manipulate relational databases and control related operations."
      },
      {
        "term": "DDL",
        "definition": "SQL category used to define or modify database structures."
      },
      {
        "term": "DML",
        "definition": "SQL category used to retrieve and modify stored data."
      },
      {
        "term": "Join",
        "definition": "Operation combining rows from related relations according to a matching condition."
      },
      {
        "term": "Subquery",
        "definition": "A query nested within another SQL statement."
      },
      {
        "term": "Selection",
        "definition": "Relational algebra operation that chooses rows satisfying a condition."
      },
      {
        "term": "Projection",
        "definition": "Relational algebra operation that chooses specified attributes."
      },
      {
        "term": "Aggregation",
        "definition": "Combining rows into summaries using functions such as COUNT or SUM."
      }
    ],
    "examQuestions": [
      "Explain SQL and its major categories. (Long)",
      "Explain SELECT, WHERE, ORDER BY and GROUP BY with examples. (Long)",
      "Discuss joins and their types conceptually. (Long)",
      "Explain subqueries and their uses. (Medium)",
      "Explain selection and projection in relational algebra. (Medium)",
      "Discuss relational algebra operations. (Long)",
      "Differentiate WHERE and HAVING. (Medium)",
      "What is a join? (Short)",
      "What is a subquery? (Short)"
    ]
  },
  {
    "unitNumber": 4,
    "title": "Database Implementation & Management",
    "hours": 8,
    "headings": [
      {
        "id": "storage-structures",
        "title": "1. Database Storage and Physical Structures",
        "icon": "HardDrive",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Physical database implementation determines how data and access structures are stored. The design may consider pages or blocks, files, indexes and access paths. Physical choices should support required workloads while balancing storage, performance, maintainability and cost."
          }
        ]
      },
      {
        "id": "indexing",
        "title": "2. Indexing and B-Trees",
        "icon": "TrendingUp",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "An index is an auxiliary structure that can speed retrieval by providing an efficient access path to data. B-tree and B+ tree families are widely used in database indexing because their balanced structure supports efficient search and update operations."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-indexing",
            "caption": "Conceptual B-tree style index showing hierarchical search from root to leaf-level entries."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-indexing",
            "caption": "Index search path."
          }
        ]
      },
      {
        "id": "query-processing",
        "title": "3. Query Processing and Optimization",
        "icon": "Cpu",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Query processing transforms a declarative query into an execution plan. The optimizer may consider access paths, join order, available indexes and estimated costs. The objective is to find an efficient plan while preserving query semantics."
          },
          {
            "kind": "table",
            "headers": [
              "Concern",
              "Why it matters"
            ],
            "rows": [
              [
                "Access path",
                "Index or scan choice affects I/O work"
              ],
              [
                "Join order",
                "Intermediate result size can change dramatically"
              ],
              [
                "Statistics",
                "Optimizer estimates depend on information about data distribution"
              ],
              [
                "Predicate placement",
                "Early filtering may reduce later processing"
              ]
            ]
          }
        ]
      },
      {
        "id": "backup-recovery",
        "title": "4. Backup and Recovery",
        "icon": "RefreshCw",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Backup creates a recoverable copy or representation of database information; recovery restores the database to an acceptable state after failure or corruption. Organizations should define backup frequency, retention, recovery procedures and testing rather than assuming that having a backup automatically guarantees recoverability."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-backup-recovery",
            "caption": "Backup, failure, recovery and verification cycle."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-backup-recovery",
            "caption": "Backup and recovery cycle."
          }
        ]
      },
      {
        "id": "concurrency",
        "title": "5. Concurrency Control and Transaction Management",
        "icon": "Lock",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Concurrency control coordinates simultaneous operations so that transactions do not produce unacceptable inconsistencies. Locking is one approach. Timestamps and other mechanisms can also be used. Transaction management provides atomicity, consistency, isolation and durability (ACID) as core reliability properties in transactional systems."
          },
          {
            "kind": "table",
            "headers": [
              "ACID property",
              "Meaning"
            ],
            "rows": [
              [
                "Atomicity",
                "Transaction is treated as an all-or-nothing unit"
              ],
              [
                "Consistency",
                "Transaction preserves defined integrity rules"
              ],
              [
                "Isolation",
                "Concurrent transactions are controlled so intermediate states are not improperly exposed"
              ],
              [
                "Durability",
                "Committed results persist despite appropriate failures"
              ]
            ]
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Index",
        "definition": "Auxiliary data structure that provides an efficient access path to stored records."
      },
      {
        "term": "B-tree",
        "definition": "Balanced tree structure used for efficient indexed search and update operations."
      },
      {
        "term": "Query optimizer",
        "definition": "DBMS component that evaluates possible execution strategies and selects an efficient plan."
      },
      {
        "term": "Backup",
        "definition": "Copy or recoverable representation of data maintained for restoration purposes."
      },
      {
        "term": "Recovery",
        "definition": "Process of restoring database consistency and availability after failure."
      },
      {
        "term": "Concurrency control",
        "definition": "Mechanisms that coordinate simultaneous transactions to maintain correctness."
      },
      {
        "term": "Transaction",
        "definition": "Logical unit of database work that is committed or rolled back according to transaction rules."
      },
      {
        "term": "ACID",
        "definition": "Atomicity, Consistency, Isolation and Durability properties associated with reliable transactions."
      }
    ],
    "examQuestions": [
      "Explain database storage and physical implementation considerations. (Medium)",
      "Explain indexing and the role of B-trees. (Long)",
      "Discuss query processing and optimization. (Long)",
      "Explain backup and recovery procedures. (Long)",
      "Why is recovery testing important? (Medium)",
      "Explain concurrency control and its need. (Long)",
      "Explain ACID properties. (Long)",
      "What is an index? (Short)",
      "What is a transaction? (Short)"
    ]
  },
  {
    "unitNumber": 5,
    "title": "Security, Authorization, Advanced Topics and Practical Applications",
    "hours": 10,
    "headings": [
      {
        "id": "database-security",
        "title": "1. Database Security and Authorization",
        "icon": "Shield",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Database security protects stored information and database services from unauthorized access, alteration, disclosure or disruption. Authentication establishes identity; authorization determines permitted actions. Role-based access control can simplify privilege management by assigning permissions to roles rather than directly to every individual."
          },
          {
            "kind": "table",
            "headers": [
              "Control",
              "Purpose",
              "Example"
            ],
            "rows": [
              [
                "Authentication",
                "Verify identity",
                "Password plus additional factor"
              ],
              [
                "Authorization",
                "Limit permitted actions",
                "Read-only reporting role"
              ],
              [
                "Encryption",
                "Protect information from unauthorized reading",
                "Encrypted data in transit or at rest"
              ],
              [
                "Auditing",
                "Record and review relevant activity",
                "Database access logs"
              ]
            ]
          }
        ]
      },
      {
        "id": "security-controls",
        "title": "2. Data Access Controls and Audit",
        "icon": "FileCheck",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Access control should follow least privilege and separation of duties where appropriate. Auditing provides evidence about who performed which actions and when. Sensitive data should be protected through appropriate technical and organizational controls."
          },
          {
            "kind": "bullets",
            "items": [
              "Use role-based privileges where practical.",
              "Review unused or excessive permissions.",
              "Protect administrative accounts.",
              "Monitor relevant security events.",
              "Test restoration and security procedures."
            ]
          }
        ]
      },
      {
        "id": "distributed-databases",
        "title": "3. Distributed Databases and Client-Server Architecture",
        "icon": "Network",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A distributed database stores or manages data across multiple networked locations. Distribution can support locality, availability or scalability goals, but introduces challenges such as coordination, consistency, network dependence and distributed failure handling."
          },
          {
            "kind": "paragraph",
            "text": "In client-server architecture, client applications request services from a database or application server. Modern architectures may add service layers between clients and database systems to improve separation and control."
          }
        ]
      },
      {
        "id": "data-warehousing",
        "title": "4. Data Warehousing and Decision Support",
        "icon": "LineChart",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "A data warehouse is designed for analytical use, often integrating data from multiple operational sources. ETL or related data-integration processes extract, transform and load data into analytical structures. Warehouses support reporting, trend analysis and decision-making rather than serving exactly the same workload as operational transaction systems."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-datawarehouse",
            "caption": "Operational sources feeding an integration process and analytical warehouse for reporting and decision support."
          },
          {
            "kind": "diagram",
            "diagramId": "it03-datawarehouse",
            "caption": "Data warehouse integration flow."
          }
        ]
      },
      {
        "id": "practical-cases",
        "title": "5. Practical Applications and Case Studies",
        "icon": "Presentation",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Database systems support applications such as e-commerce, banking, HR, retail, healthcare and education. A practical case should identify entities, relationships, transactions, security requirements, reporting needs, backup/recovery needs and appropriate access controls."
          },
          {
            "kind": "callout",
            "tone": "example",
            "title": "E-commerce case",
            "text": "A simplified e-commerce database may contain CUSTOMER, PRODUCT, ORDER and ORDER_ITEM entities. Customer places orders; each order contains one or more order items; each order item references a product. Security controls should separate customer access from administrative functions, while reporting may use analytical structures rather than heavy transactional queries."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Database security",
        "definition": "Protection of databases and their services against unauthorized access, alteration, disclosure or disruption."
      },
      {
        "term": "Authentication",
        "definition": "Process of verifying the identity of a user or system."
      },
      {
        "term": "Authorization",
        "definition": "Process of determining which resources or operations an authenticated identity may use."
      },
      {
        "term": "Role-based access control",
        "definition": "Access-control approach in which permissions are assigned to roles and users receive roles."
      },
      {
        "term": "Distributed database",
        "definition": "Database whose data or management functions are distributed across networked locations."
      },
      {
        "term": "Client-server architecture",
        "definition": "Architecture in which clients request services from servers that provide data or application functionality."
      },
      {
        "term": "Data warehouse",
        "definition": "Analytical data store designed to support reporting, analysis and decision-making."
      },
      {
        "term": "ETL",
        "definition": "Extract, Transform, Load process used to integrate and prepare data for a target system such as a warehouse."
      }
    ],
    "examQuestions": [
      "Explain database security and authorization mechanisms. (Long)",
      "Discuss role-based access control and least privilege. (Medium)",
      "Explain auditing in database systems. (Medium)",
      "Discuss distributed databases and their advantages and challenges. (Long)",
      "Explain client-server database architecture. (Medium)",
      "What is a data warehouse and why is it used? (Long)",
      "Explain ETL in the context of data warehousing. (Medium)",
      "Design conceptually a database for an e-commerce application. (Long)",
      "What is authentication? (Short)",
      "What is authorization? (Short)"
    ]
  }
] as UnitNote[];
