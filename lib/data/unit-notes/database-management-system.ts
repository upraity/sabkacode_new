import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Database Management System (C-202)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 2, syllabus
// effective from session 2025-26.
//
// Every SQL example was executed in one continuous SQLite session (the
// college database), so the printed `output` is the real result; error messages
// shown for constraint violations are the real SQLite messages.

export const databaseManagementUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Database Systems",
    hours: 10,
    headings: [
      {
        id: "file-system-vs-dbms",
        title: "1. Traditional File System and the Database Approach",
        icon: "FolderOpen",
        blocks: [
          {
            kind: "paragraph",
            text: "DATA are raw facts (a name, a roll number, a mark). A DATABASE is an organised collection of related data stored so that it can be used by many users and programs. A DATABASE MANAGEMENT SYSTEM (DBMS) is the software that creates, stores, protects and retrieves the database (e.g., MySQL, Oracle, SQL Server, MS-Access, PostgreSQL). The database and the DBMS software together are called a DATABASE SYSTEM.",
          },
          {
            kind: "paragraph",
            text: "In the traditional file-oriented system each application (admission, examination, library) keeps its own data files and its own programs. The same information is therefore stored many times and every change in a file format forces changes in all programs that use it.",
          },
          {
            kind: "table",
            headers: ["Problem of the file-oriented system", "How the database approach solves it"],
            rows: [
              [
                "Data redundancy — the same data (student address) is stored in many files, wasting space",
                "Data are stored once and shared; redundancy is controlled",
              ],
              [
                "Data inconsistency — one copy is updated, another is not",
                "One central copy is updated, so all users see the same value",
              ],
              [
                "Data isolation — data lie in different files and formats, so combining them is hard",
                "All data are managed together in one structure and can be related",
              ],
              [
                "Program–data dependence — the file structure is written inside each program",
                "Program–data independence: the structure is stored in the catalogue, outside the programs",
              ],
              [
                "Poor security — no fine-grained access control",
                "User accounts and privileges (GRANT/REVOKE) control access",
              ],
              [
                "No concurrent access control and no recovery after a crash",
                "Transaction management, locking and recovery",
              ],
              [
                "Integrity is enforced by application code only",
                "Integrity constraints are declared once in the database",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Characteristic of the database approach", "Meaning"],
            rows: [
              [
                "Self-describing nature",
                "The database contains a catalogue (data dictionary/metadata) that describes its own structure: tables, columns, types, constraints.",
              ],
              [
                "Insulation between programs and data",
                "Changing the storage structure does not force changes in programs (program–data independence).",
              ],
              [
                "Support of multiple views of data",
                "Different users see different parts or summaries of the same data.",
              ],
              [
                "Sharing of data and multiuser transaction processing",
                "Many users access the database at the same time without spoiling each other's work.",
              ],
              ["Data abstraction", "Users see a conceptual model and not the physical details of storage."],
            ],
          },
        ],
      },
      {
        id: "dbms-users",
        title: "2. Database Users and Components of a Database System",
        icon: "Users",
        blocks: [
          {
            kind: "table",
            headers: ["User", "Role"],
            rows: [
              [
                "Database Administrator (DBA)",
                "Has central control: designs the physical structure, grants access, monitors performance, takes backups, recovers the database.",
              ],
              [
                "Database designers",
                "Decide what data to store and design the logical structure (tables, constraints).",
              ],
              [
                "System analysts and application programmers",
                "Analyse the needs of end users and write the application programs (in Java, PHP, etc.) that use the database.",
              ],
              ["End users — casual", "Occasional users who ask ad-hoc queries (managers)."],
              [
                "End users — naive (parametric)",
                "Use ready-made forms and menus, e.g., bank clerk, railway booking clerk, ATM customer.",
              ],
              [
                "End users — sophisticated",
                "Engineers, scientists and analysts who write their own queries in SQL.",
              ],
              ["Tool developers / DBMS designers", "Build the DBMS software and tools."],
            ],
          },
          {
            kind: "table",
            headers: ["Component of a database system", "Description"],
            rows: [
              ["Hardware", "Computers, disks and network on which the DBMS runs."],
              ["Software", "The DBMS, the operating system and the application programs."],
              ["Data", "The database itself and its metadata."],
              ["Users", "DBA, designers, programmers and end users."],
              ["Procedures", "Rules and instructions for using and managing the system (backup, login)."],
            ],
          },
          {
            kind: "table",
            headers: ["Advantages of using a DBMS", "Disadvantages of using a DBMS"],
            rows: [
              [
                "Controlled redundancy and consistency",
                "High initial cost of software, hardware and training",
              ],
              ["Data sharing and multiple views", "Complexity of the DBMS; needs skilled DBA"],
              [
                "Security and privacy",
                "Overhead for security, concurrency and recovery — slower than a simple file for very small jobs",
              ],
              [
                "Integrity constraints, backup and recovery",
                "Failure of the central system affects every user",
              ],
              [
                "Standards, faster application development, data independence",
                "Not needed for simple, single-user applications",
              ],
            ],
          },
        ],
      },
      {
        id: "schemas-architecture",
        title: "3. Schemas, Instances and the DBMS (Three-Schema) Architecture",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The SCHEMA is the description (design) of the database — the names of tables, columns, data types and constraints; it changes rarely. An INSTANCE (database state) is the actual data stored in the database at a particular moment; it changes with every insertion, update and deletion. Example: STUDENT(roll, name, city) is the schema; the rows currently stored are the instance.",
          },
          { kind: "diagram", diagramId: "three-schema-architecture", caption: "Fig 1.1 — The three-schema architecture" },
          {
            kind: "table",
            headers: ["Level", "Also called", "Describes", "Who uses it"],
            rows: [
              [
                "External level",
                "View level",
                "The part of the database that a group of users needs (many external schemas, i.e., views)",
                "End users, application programs",
              ],
              [
                "Conceptual level",
                "Logical level",
                "The structure of the WHOLE database for the community of users: entities, attributes, relationships, constraints (one conceptual schema)",
                "DBA, designers",
              ],
              [
                "Internal level",
                "Physical level",
                "How data are physically stored: files, indexes, record formats, access paths (one internal schema)",
                "DBA, system",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Data independence", "Meaning", "Achieved by"],
            rows: [
              [
                "Logical data independence",
                "The ability to change the conceptual schema (add a column or table) without changing the external schemas or application programs.",
                "External/conceptual mapping",
              ],
              [
                "Physical data independence",
                "The ability to change the internal schema (new index, different file organisation, new disk) without changing the conceptual schema.",
                "Conceptual/internal mapping",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Mappings: the DBMS converts a request from the external level to the conceptual level and then to the internal level, and brings the result back in the reverse order.",
              "DBMS system architectures: Centralised (all on one machine), 2-tier client–server (client application talks directly to the database server) and 3-tier (client/browser → application server with business logic → database server), which is standard for web applications.",
            ],
          },
        ],
      },
      {
        id: "dbms-languages",
        title: "4. Database Languages, Interfaces and Classification of DBMS",
        icon: "Code",
        blocks: [
          {
            kind: "table",
            headers: ["Language", "Full form", "Purpose", "SQL commands"],
            rows: [
              [
                "DDL",
                "Data Definition Language",
                "Defines and changes the schema (structure)",
                "CREATE, ALTER, DROP, TRUNCATE, RENAME",
              ],
              [
                "DML",
                "Data Manipulation Language",
                "Inserts, deletes, updates and retrieves the data",
                "SELECT, INSERT, UPDATE, DELETE",
              ],
              ["DCL", "Data Control Language", "Controls access rights", "GRANT, REVOKE"],
              ["TCL", "Transaction Control Language", "Controls transactions", "COMMIT, ROLLBACK, SAVEPOINT"],
            ],
          },
          {
            kind: "paragraph",
            text: "DML can be PROCEDURAL (the user says HOW to get the data step by step, one record at a time — e.g., relational algebra, programming-language calls) or NON-PROCEDURAL/declarative (the user says WHAT is wanted and the DBMS decides how — e.g., SQL, relational calculus). Older DBMS also had SDL (storage definition) and VDL (view definition).",
          },
          {
            kind: "table",
            headers: ["User interface of a DBMS", "Description"],
            rows: [
              ["Menu-based", "The user chooses operations from lists of menus."],
              ["Forms-based", "Screens with fields for entering and viewing records (naive users)."],
              ["Graphical (GUI)", "Diagrams and icons to build queries (Access query design)."],
              ["Natural language / speech", "Requests written or spoken in an ordinary language."],
              ["Parametric interface", "Buttons for repeated standard transactions, e.g., 'Deposit'."],
              ["Interfaces for the DBA", "Commands for creating accounts, setting privileges, tuning."],
            ],
          },
          {
            kind: "table",
            headers: ["Basis of classification", "Types of DBMS"],
            rows: [
              [
                "Data model",
                "Relational (tables — most popular), Hierarchical (tree — IMS), Network (graph — IDMS), Object-oriented / Object-relational, NoSQL (document, key-value, graph)",
              ],
              ["Number of users", "Single-user (desktop) and multi-user"],
              ["Number of sites", "Centralised and Distributed (homogeneous or heterogeneous)"],
              ["Purpose", "General-purpose and special-purpose (e.g., airline reservation)"],
              ["Cost", "Commercial (Oracle, SQL Server) and open source (MySQL, PostgreSQL)"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Database", definition: "An organised collection of related data." },
      { term: "DBMS", definition: "Software that creates, stores, secures and retrieves a database." },
      { term: "Data independence", definition: "Changing one level of the architecture without changing the next higher level." },
      { term: "Schema", definition: "The description of the database structure; it changes rarely." },
      { term: "Instance", definition: "The data stored in the database at a particular moment." },
      { term: "DBA", definition: "Database Administrator, who has central control over the database." },
      { term: "DDL / DML", definition: "Languages for defining the structure / for manipulating the data." },
      { term: "Metadata", definition: "Data about data — stored in the catalogue." },
    ],
    examQuestions: [
      "What is a DBMS? Explain the disadvantages of the file-oriented system and how a DBMS overcomes them. (Long)",
      "Explain the characteristics of the database approach. (Medium)",
      "Who are the database users? Explain the role of the DBA. (Medium)",
      "Explain the components of a database system. (Short)",
      "Explain the advantages and disadvantages of a DBMS. (Medium)",
      "Explain the three-schema architecture with a diagram. (Long)",
      "What is data independence? Explain its types. (Medium)",
      "Differentiate between a schema and an instance. (Short)",
      "Explain DDL, DML, DCL and TCL with examples. (Medium)",
      "How are DBMS classified? (Short)",
    ],
  },
  {
    unitNumber: 2,
    title: "Data Modelling and the Entity–Relationship Model",
    hours: 10,
    headings: [
      {
        id: "er-concepts",
        title: "1. Data Modelling and the Concepts of the ER Model",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A DATA MODEL is a collection of concepts for describing the structure of a database. The ENTITY–RELATIONSHIP (ER) MODEL, proposed by Peter Chen (1976), is a high-level conceptual model. The designer first draws an ER diagram of the real world and then converts it into the relational schema. Its building blocks are entities, attributes and relationships.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning", "Example"],
            rows: [
              [
                "Entity",
                "A 'thing' or object of the real world that can be distinguished from others.",
                "The student Amit; the course C101",
              ],
              [
                "Entity type",
                "The collection of entities having the same attributes (like a table's design).",
                "STUDENT, COURSE",
              ],
              [
                "Entity set",
                "The collection of all entities of one type at a given time (the instance).",
                "All students currently in the database",
              ],
              ["Attribute", "A property that describes an entity or a relationship.", "roll, name, city"],
              ["Relationship", "An association among two or more entities.", "Student ENROLS IN Course"],
              ["Relationship type / set", "The collection of similar relationships.", "ENROLS_IN"],
            ],
          },
          {
            kind: "table",
            headers: ["Kind of attribute", "Meaning", "Example"],
            rows: [
              ["Simple (atomic)", "Cannot be divided further.", "roll, marks"],
              [
                "Composite",
                "Can be divided into smaller parts.",
                "name = first name + last name; address = street + city + pin",
              ],
              ["Single-valued", "One value for one entity.", "date of birth"],
              ["Multi-valued", "Many values for one entity (double ellipse).", "phone numbers, skills"],
              [
                "Derived",
                "Can be calculated from other attributes (dashed ellipse).",
                "age from date of birth",
              ],
              ["Key attribute", "Uniquely identifies each entity (underlined).", "roll"],
              ["NULL", "Value unknown, not applicable or missing.", "middle name"],
            ],
          },
        ],
      },
      {
        id: "er-keys",
        title: "2. Keys",
        icon: "Crosshair",
        blocks: [
          {
            kind: "table",
            headers: ["Key", "Definition", "Example (STUDENT(roll, name, email, phone))"],
            rows: [
              [
                "Super key",
                "Any set of attributes that uniquely identifies a tuple (may contain extra attributes).",
                "{roll}, {roll, name}, {email, phone}",
              ],
              ["Candidate key", "A minimal super key — no attribute can be removed.", "{roll}, {email}"],
              [
                "Primary key",
                "The candidate key chosen by the designer to identify tuples; not NULL and unique.",
                "{roll}",
              ],
              ["Alternate key", "A candidate key that is not chosen as the primary key.", "{email}"],
              ["Composite key", "A key made of two or more attributes.", "{roll, course_id} in ENROLMENT"],
              [
                "Foreign key",
                "An attribute (or set) in one table that refers to the primary key of another table; used for relationships.",
                "STUDENT.dept_id refers to DEPARTMENT.dept_id",
              ],
            ],
          },
        ],
      },
      {
        id: "er-relationships",
        title: "3. Relationship Types, Cardinality, Participation and Roles",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "The DEGREE of a relationship type is the number of entity types that take part in it: unary (recursive — an employee supervises an employee), binary (most common — student enrols in course) and ternary (supplier supplies part to project). The CARDINALITY RATIO (mapping cardinality) says how many entities of one type can be related to entities of the other.",
          },
          {
            kind: "table",
            headers: ["Cardinality", "Meaning", "Example"],
            rows: [
              [
                "One-to-one (1:1)",
                "An entity of A is related to at most one of B and vice versa.",
                "Department — HOD (one head for one department)",
              ],
              [
                "One-to-many (1:N)",
                "One entity of A is related to many entities of B, but each B to only one A.",
                "Department — Students",
              ],
              ["Many-to-one (N:1)", "The reverse of 1:N.", "Students — Department"],
              ["Many-to-many (M:N)", "Many entities of A are related to many of B.", "Students — Courses"],
            ],
          },
          {
            kind: "table",
            headers: ["Structural constraint", "Meaning", "Notation"],
            rows: [
              [
                "Total participation (existence dependency)",
                "EVERY entity of the set must take part in the relationship.",
                "Double line",
              ],
              ["Partial participation", "SOME entities may not take part.", "Single line"],
              [
                "Role name",
                "The function an entity plays in a relationship; needed for recursive relationships (Supervisor, Subordinate).",
                "Label on the line",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "WEAK ENTITY TYPE: an entity type that has no key of its own and depends on another (the OWNER or identifying entity) through an IDENTIFYING relationship. It has a partial key (discriminator) that is unique only within the owner. Example: DEPENDENT(name, age) of an EMPLOYEE — the name is unique only for one employee. A weak entity is shown by a double rectangle, its identifying relationship by a double diamond and its partial key by a dashed underline; participation in the identifying relationship is always total.",
          },
        ],
      },
      {
        id: "er-diagram",
        title: "4. ER Diagram: Notation, Naming Conventions and Design Issues",
        icon: "Presentation",
        blocks: [
          { kind: "diagram", diagramId: "er-symbols", caption: "Fig 2.1 — Symbols used in an ER diagram" },
          { kind: "diagram", diagramId: "er-university", caption: "Fig 2.2 — ER diagram of a college database" },
          {
            kind: "bullets",
            items: [
              "Reading Fig 2.2: DEPARTMENT and STUDENT are related by 'has' (1:N — a department has many students and each student belongs to one department; total participation of STUDENT). STUDENT and COURSE are related by 'enrols in' (M:N) which has its own attribute grade.",
              "Naming conventions: entity types are singular nouns in capital letters (STUDENT); attributes are nouns in small letters (roll_no); relationship names are verbs (enrols, works_for); roles are given when the same entity type takes part more than once; choose names that are clear and consistent, and avoid abbreviations.",
              "Design issues: (1) Attribute or entity? If a concept has its own attributes or is related to many other things, make it an entity (address of a student is an attribute; a department is an entity). (2) Entity or relationship? A verb linking two nouns is usually a relationship; if it needs many attributes and its own identity, it can be an entity. (3) Binary or ternary? A ternary relationship (supplier–part–project) cannot always be replaced by three binary ones without losing information. (4) Avoid redundancy: do not store the same fact as an attribute and also as a relationship. (5) Choose appropriate keys and participation constraints.",
            ],
          },
        ],
      },
      {
        id: "er-to-relational",
        title: "5. Mapping an ER Diagram to Relational Tables",
        icon: "Table",
        blocks: [
          {
            kind: "table",
            headers: ["ER construct", "Rule for conversion to relations"],
            rows: [
              [
                "Strong entity type",
                "Make a table with all its simple attributes; the key attribute becomes the primary key. A composite attribute is replaced by its component attributes.",
              ],
              [
                "Multi-valued attribute",
                "Make a separate table with the owner's key + the attribute; together they form the primary key.",
              ],
              [
                "Weak entity type",
                "Make a table with its attributes plus the owner's primary key as a foreign key; primary key = owner's key + partial key.",
              ],
              [
                "1:1 relationship",
                "Put the primary key of one side as a foreign key in the table of the other side (preferably the side with total participation).",
              ],
              [
                "1:N relationship",
                "Put the primary key of the '1' side as a foreign key in the table of the 'N' side.",
              ],
              [
                "M:N relationship",
                "Make a NEW table for the relationship with the primary keys of both entities as foreign keys (together the primary key) and the relationship's own attributes.",
              ],
              ["Ternary relationship", "New table with the keys of all three entity types."],
            ],
          },
          {
            kind: "paragraph",
            text: "Applying these rules to Fig 2.2 gives four tables: DEPARTMENT (dept_id, dept_name, hod), STUDENT (roll, name, city, dept_id [FK], marks) — the foreign key comes from the 1:N relationship 'has'; COURSE (course_id, title, credits), and ENROLMENT (roll [FK], course_id [FK], grade) — a new table for the M:N relationship 'enrols in' whose primary key is (roll, course_id). The statements below create this schema; the same tables are used in the SQL examples of the following units.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Relational schema obtained from the ER diagram",
            code: String.raw`CREATE TABLE department (
  dept_id   TEXT PRIMARY KEY,
  dept_name TEXT NOT NULL UNIQUE,
  hod       TEXT
);

CREATE TABLE student (
  roll    INTEGER PRIMARY KEY,
  name    TEXT NOT NULL,
  city    TEXT,
  dept_id TEXT REFERENCES department(dept_id),
  marks   INTEGER CHECK (marks BETWEEN 0 AND 100)
);

CREATE TABLE course (
  course_id TEXT PRIMARY KEY,
  title     TEXT NOT NULL,
  credits   INTEGER
);

CREATE TABLE enrolment (
  roll      INTEGER REFERENCES student(roll),
  course_id TEXT    REFERENCES course(course_id),
  grade     TEXT,
  PRIMARY KEY (roll, course_id)
);`,
            output: "",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Entity", definition: "A distinguishable object of the real world." },
      { term: "Attribute", definition: "A property that describes an entity or relationship." },
      { term: "Candidate key", definition: "A minimal set of attributes that uniquely identifies a tuple." },
      { term: "Foreign key", definition: "An attribute referring to the primary key of another table." },
      { term: "Cardinality ratio", definition: "The number of entities of one type that can be related to entities of another (1:1, 1:N, M:N)." },
      { term: "Total participation", definition: "Every entity of the set takes part in the relationship." },
      { term: "Weak entity", definition: "An entity type without a key of its own that depends on an owner entity." },
      { term: "ER diagram", definition: "The diagram that shows entities, attributes and relationships." },
    ],
    examQuestions: [
      "What is the ER model? Explain entity, attribute and relationship with examples. (Long)",
      "Explain the types of attributes. (Medium)",
      "Explain the different types of keys with examples. (Long)",
      "Explain the cardinality ratios and participation constraints. (Medium)",
      "What is a weak entity type? How is it shown in an ER diagram? (Medium)",
      "Draw the ER diagram of a college / library / bank database and convert it into tables. (Long)",
      "State the rules for converting an ER diagram to a relational schema. (Medium)",
      "Write short notes on the naming conventions and design issues of the ER model. (Medium)",
      "Differentiate between a super key, a candidate key and a primary key. (Short)",
    ],
  },
  {
    unitNumber: 3,
    title: "The Relational Model, Constraints and Relational Algebra",
    hours: 10,
    headings: [
      {
        id: "relational-model",
        title: "1. The Relational Data Model: Concepts and Characteristics",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "The relational model, proposed by E. F. Codd (1970), represents the whole database as a collection of RELATIONS. Informally a relation looks like a TABLE of values — each row represents a fact about an entity or relationship. It is the basis of almost every commercial DBMS today (Oracle, MySQL, SQL Server, PostgreSQL).",
          },
          {
            kind: "table",
            headers: ["Formal term", "Informal term", "Meaning"],
            rows: [
              ["Relation", "Table", "A set of tuples with the same attributes."],
              ["Tuple", "Row / record", "One ordered list of values — one fact."],
              ["Attribute", "Column / field", "A name for one column of the relation."],
              [
                "Domain",
                "Set of allowed values",
                "The set of atomic values an attribute may take, e.g., marks: integers 0–100.",
              ],
              ["Degree of a relation", "Number of columns", "Number of attributes."],
              ["Cardinality of a relation", "Number of rows", "Number of tuples in the current state."],
              [
                "Relation schema R(A₁, A₂, ..., Aₙ)",
                "Table design",
                "The name of the relation and its attributes, e.g., STUDENT(roll, name, city, dept_id, marks).",
              ],
              ["Relation state (instance)", "Table contents", "The set of tuples currently in the relation."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Characteristics of a relation: (1) a relation is a SET of tuples — no duplicate tuples and the order of tuples does not matter; (2) the order of attributes is not important (as long as names and values correspond); (3) every value is ATOMIC (single, indivisible) — multi-valued and composite attributes are not allowed (first normal form); (4) each attribute has a distinct name and a domain; (5) NULL is a special value for unknown or not applicable.",
              "Codd's rules ensure that a DBMS is truly relational — for example, all information is represented as values in tables, NULLs are handled systematically, and data independence is provided.",
            ],
          },
        ],
      },
      {
        id: "relational-constraints",
        title: "2. Relational Constraints and Database Schemas",
        icon: "Scale",
        blocks: [
          {
            kind: "table",
            headers: ["Constraint", "Rule", "Example"],
            rows: [
              [
                "Domain constraint",
                "The value of every attribute must be atomic and from its domain (data type, range).",
                "marks must be an integer between 0 and 100",
              ],
              [
                "Key constraint",
                "No two tuples may have the same value for the key (primary/candidate key).",
                "Two students cannot have the same roll number",
              ],
              [
                "Entity integrity constraint",
                "The primary key of a tuple cannot be NULL.",
                "roll cannot be NULL",
              ],
              [
                "Referential integrity constraint",
                "A foreign key value must either be NULL or match an existing primary key value in the referenced relation.",
                "STUDENT.dept_id must be an existing DEPARTMENT.dept_id",
              ],
              [
                "Semantic (business) constraints",
                "Rules from the real world, enforced with CHECK, triggers, assertions.",
                "salary must be greater than 0",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "A RELATIONAL DATABASE SCHEMA is a set of relation schemas together with the integrity constraints. The schema of our college database (created in Unit II) is: DEPARTMENT(dept_id, dept_name, hod); STUDENT(roll, name, city, dept_id, marks) with dept_id → DEPARTMENT; COURSE(course_id, title, credits); ENROLMENT(roll, course_id, grade) with roll → STUDENT and course_id → COURSE. The next block fills the tables with data; this is the database state used in all examples below.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Inserting tuples and viewing a relation state",
            code: String.raw`INSERT INTO department VALUES ('CS', 'Computer Science', 'Dr. Mehta'),
                              ('MA', 'Mathematics',      'Dr. Rao'),
                              ('PH', 'Physics',          'Dr. Sen');

INSERT INTO student VALUES (1, 'Amit',  'Agra',   'CS', 78),
                           (2, 'Neha',  'Delhi',  'CS', 91),
                           (3, 'Ravi',  'Agra',   'MA', 64),
                           (4, 'Sana',  'Meerut', 'MA', 85),
                           (5, 'Karan', 'Delhi',  'CS', 55),
                           (6, 'Pooja', 'Agra',   'PH', 72);

INSERT INTO course VALUES ('C101', 'Programming in C', 4),
                          ('C102', 'Database Systems', 4),
                          ('C103', 'Discrete Maths',   3);

INSERT INTO enrolment VALUES (1, 'C101', 'A'), (1, 'C102', 'B'), (2, 'C101', 'A'), (2, 'C102', 'A'),
                             (3, 'C103', 'B'), (4, 'C103', 'A'), (5, 'C101', 'C'), (6, 'C102', 'B');

SELECT * FROM student;`,
            output: String.raw`(3 rows affected)

(6 rows affected)

(3 rows affected)

(8 rows affected)

roll  name   city    dept_id  marks
----  -----  ------  -------  -----
1     Amit   Agra    CS       78
2     Neha   Delhi   CS       91
3     Ravi   Agra    MA       64
4     Sana   Meerut  MA       85
5     Karan  Delhi   CS       55
6     Pooja  Agra    PH       72
(6 rows)`,
          },
        ],
      },
      {
        id: "constraint-violations",
        title: "3. Update Operations and Constraint Violations",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "paragraph",
            text: "There are three basic update operations on a relation: INSERT adds a tuple, DELETE removes tuples and UPDATE (modify) changes attribute values. Each operation must leave the database in a state that satisfies all constraints; otherwise the DBMS rejects it. The messages below are the real error messages of the SQLite database engine that was used to run these examples.",
          },
          {
            kind: "table",
            headers: ["Operation", "Constraint that may be violated", "Usual action of the DBMS"],
            rows: [
              [
                "INSERT",
                "Domain (bad value), key (duplicate), entity integrity (NULL key), referential integrity (foreign key not present)",
                "REJECT the insertion (or ask the user to correct the data)",
              ],
              [
                "DELETE",
                "Referential integrity — other tuples refer to the tuple being deleted",
                "RESTRICT (reject); CASCADE (delete the referring tuples too); SET NULL / SET DEFAULT (change the foreign key)",
              ],
              [
                "UPDATE",
                "Same as insert/delete when a key or foreign key is modified; domain violation when other attributes are changed",
                "Reject, or cascade the change of a key to the referring tuples",
              ],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "Key constraint and entity integrity violations",
            code: String.raw`-- duplicate primary key (key constraint)
INSERT INTO student VALUES (1, 'Rohit', 'Agra', 'CS', 60);

-- NULL in a NOT NULL attribute
INSERT INTO student VALUES (7, NULL, 'Agra', 'CS', 60);`,
            output: String.raw`-- duplicate primary key (key constraint)
Error: UNIQUE constraint failed: student.roll

-- NULL in a NOT NULL attribute
Error: NOT NULL constraint failed: student.name`,
          },
          {
            kind: "code",
            language: "sql",
            title: "Domain (CHECK) and referential integrity violations",
            code: String.raw`-- marks outside the domain 0..100
INSERT INTO student VALUES (7, 'Rohit', 'Agra', 'CS', 150);

-- foreign key that does not exist in DEPARTMENT
INSERT INTO student VALUES (7, 'Rohit', 'Agra', 'XX', 60);

-- deleting a department that students refer to
DELETE FROM department WHERE dept_id = 'CS';`,
            output: String.raw`-- marks outside the domain 0..100
Error: CHECK constraint failed: marks BETWEEN 0 AND 100

-- foreign key that does not exist in DEPARTMENT
Error: FOREIGN KEY constraint failed

-- deleting a department that students refer to
Error: FOREIGN KEY constraint failed`,
          },
        ],
      },
      {
        id: "relational-algebra",
        title: "4. Relational Algebra: Basic Operations",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "Relational algebra is a PROCEDURAL query language: a set of operations that take one or two relations as input and produce a new relation as output. Because the output is again a relation, operations can be combined into expressions. It is the theoretical foundation of SQL.",
          },
          {
            kind: "table",
            headers: ["Operation", "Symbol and notation", "Meaning", "SQL equivalent"],
            rows: [
              [
                "Select",
                "σ condition (R)",
                "Chooses the TUPLES (rows) that satisfy a condition.",
                "SELECT * FROM R WHERE condition",
              ],
              [
                "Project",
                "π A₁, A₂ (R)",
                "Chooses the ATTRIBUTES (columns); duplicate rows are removed.",
                "SELECT DISTINCT A1, A2 FROM R",
              ],
              [
                "Rename",
                "ρ S(B₁, B₂) (R)",
                "Gives a new name to a relation and/or its attributes.",
                "AS alias",
              ],
              [
                "Union",
                "R ∪ S",
                "Tuples in R or S or both. R and S must be union-compatible (same number and domains of attributes).",
                "UNION",
              ],
              ["Intersection", "R ∩ S", "Tuples in both R and S.", "INTERSECT"],
              ["Set difference", "R − S", "Tuples in R but not in S.", "EXCEPT (MINUS in Oracle)"],
              [
                "Cartesian product",
                "R × S",
                "Every tuple of R combined with every tuple of S; degree = degree(R) + degree(S), cardinality = m × n.",
                "CROSS JOIN",
              ],
              [
                "Join (θ-join)",
                "R ⋈ condition S",
                "A product followed by a selection: combines related tuples. Equi-join: the condition uses '='.",
                "JOIN ... ON condition",
              ],
              [
                "Natural join",
                "R ⋈ S",
                "Equi-join on all attributes with the same name, with the duplicate column removed.",
                "NATURAL JOIN / USING",
              ],
              [
                "Division",
                "R ÷ S",
                "Tuples of R that are related to ALL tuples of S — for queries with the word 'all'.",
                "NOT EXISTS ... EXCEPT",
              ],
              [
                "Aggregate / grouping",
                "G₁, G₂ ℱ COUNT(A), AVG(B) (R)",
                "Applies aggregate functions to groups of tuples.",
                "GROUP BY with COUNT, SUM, AVG, MIN, MAX",
              ],
              [
                "Outer join",
                "R ⟕ S, R ⟖ S, R ⟗ S",
                "Keeps unmatched tuples of the left, right or both relations, padding with NULL.",
                "LEFT / RIGHT / FULL OUTER JOIN",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "The following examples use the college database. Each query is written in relational algebra (in the comment) and the result is the real output of the equivalent SQL statement run on the database state shown above.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Select and project",
            code: String.raw`-- σ marks>75 (STUDENT)
SELECT * FROM student WHERE marks > 75;

-- π name, marks ( σ dept_id='CS' (STUDENT) )
SELECT name, marks FROM student WHERE dept_id = 'CS';

-- π city (STUDENT)  -- duplicates are eliminated
SELECT DISTINCT city FROM student ORDER BY city;`,
            output: String.raw`-- σ marks>75 (STUDENT)
roll  name  city    dept_id  marks
----  ----  ------  -------  -----
1     Amit  Agra    CS       78
2     Neha  Delhi   CS       91
4     Sana  Meerut  MA       85
(3 rows)

-- π name, marks ( σ dept_id='CS' (STUDENT) )
name   marks
-----  -----
Amit   78
Neha   91
Karan  55
(3 rows)

-- π city (STUDENT)  -- duplicates are eliminated
city
------
Agra
Delhi
Meerut
(3 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "Union, intersection and difference of two union-compatible relations",
            code: String.raw`-- R1 = π roll (σ city='Agra' (STUDENT))    R2 = π roll (σ dept_id='CS' (STUDENT))
-- R1 ∪ R2
SELECT roll FROM student WHERE city = 'Agra'
UNION
SELECT roll FROM student WHERE dept_id = 'CS';

-- R1 ∩ R2
SELECT roll FROM student WHERE city = 'Agra'
INTERSECT
SELECT roll FROM student WHERE dept_id = 'CS';

-- R1 − R2
SELECT roll FROM student WHERE city = 'Agra'
EXCEPT
SELECT roll FROM student WHERE dept_id = 'CS';`,
            output: String.raw`-- R1 = π roll (σ city='Agra' (STUDENT))    R2 = π roll (σ dept_id='CS' (STUDENT))
-- R1 ∪ R2
roll
----
1
2
3
5
6
(5 rows)

-- R1 ∩ R2
roll
----
1
(1 row)

-- R1 − R2
roll
----
3
6
(2 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "Cartesian product, natural join and θ-join",
            code: String.raw`-- STUDENT × COURSE : cardinality = 6 x 3
SELECT COUNT(*) AS tuples FROM student CROSS JOIN course;

-- STUDENT ⋈ DEPARTMENT  (natural join on dept_id)
SELECT roll, name, dept_name FROM student NATURAL JOIN department ORDER BY roll;

-- STUDENT ⋈ (student.roll = enrolment.roll) ENROLMENT  (equi-join)
SELECT s.name, e.course_id, e.grade
FROM student s JOIN enrolment e ON s.roll = e.roll
WHERE e.grade = 'A' ORDER BY s.name, e.course_id;`,
            output: String.raw`-- STUDENT × COURSE : cardinality = 6 x 3
tuples
------
18
(1 row)

-- STUDENT ⋈ DEPARTMENT  (natural join on dept_id)
roll  name   dept_name
----  -----  ----------------
1     Amit   Computer Science
2     Neha   Computer Science
3     Ravi   Mathematics
4     Sana   Mathematics
5     Karan  Computer Science
6     Pooja  Physics
(6 rows)

-- STUDENT ⋈ (student.roll = enrolment.roll) ENROLMENT  (equi-join)
name  course_id  grade
----  ---------  -----
Amit  C101       A
Neha  C101       A
Neha  C102       A
Sana  C103       A
(4 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "Division, rename and aggregate",
            code: String.raw`-- Division: rolls of students who took ALL the courses taken by roll 1
--   π roll,course_id (ENROLMENT)  ÷  π course_id ( σ roll=1 (ENROLMENT) )
SELECT DISTINCT e.roll FROM enrolment e
WHERE NOT EXISTS (
        SELECT course_id FROM enrolment WHERE roll = 1
        EXCEPT
        SELECT course_id FROM enrolment WHERE roll = e.roll );

-- ρ Top(student_name, score) ( π name, marks ( σ marks>=85 (STUDENT) ) )
SELECT name AS student_name, marks AS score FROM student WHERE marks >= 85;

-- dept_id ℱ COUNT(roll), AVG(marks) (STUDENT)
SELECT dept_id, COUNT(*) AS students, ROUND(AVG(marks), 2) AS avg_marks
FROM student GROUP BY dept_id ORDER BY dept_id;`,
            output: String.raw`-- Division: rolls of students who took ALL the courses taken by roll 1
--   π roll,course_id (ENROLMENT)  ÷  π course_id ( σ roll=1 (ENROLMENT) )
roll
----
1
2
(2 rows)

-- ρ Top(student_name, score) ( π name, marks ( σ marks>=85 (STUDENT) ) )
student_name  score
------------  -----
Neha          91
Sana          85
(2 rows)

-- dept_id ℱ COUNT(roll), AVG(marks) (STUDENT)
dept_id  students  avg_marks
-------  --------  ---------
CS       3         74.67
MA       2         74.5
PH       1         72.0
(3 rows)`,
          },
          {
            kind: "table",
            headers: ["Query in English", "Relational algebra expression"],
            rows: [
              [
                "Names of the students of CS with marks above 60",
                "π name ( σ dept_id = 'CS' ∧ marks > 60 (STUDENT) )",
              ],
              [
                "Names of students together with their department names",
                "π name, dept_name ( STUDENT ⋈ DEPARTMENT )",
              ],
              [
                "Roll numbers of students who took course C101 or C103",
                "π roll ( σ course_id = 'C101' (ENROLMENT) ) ∪ π roll ( σ course_id = 'C103' (ENROLMENT) )",
              ],
              [
                "Roll numbers of students who took both C101 and C102",
                "π roll ( σ course_id = 'C101' (ENROLMENT) ) ∩ π roll ( σ course_id = 'C102' (ENROLMENT) )",
              ],
              ["Students who have not enrolled in any course", "π roll (STUDENT) − π roll (ENROLMENT)"],
              [
                "Titles of courses taken by 'Neha'",
                "π title ( COURSE ⋈ ENROLMENT ⋈ σ name = 'Neha' (STUDENT) )",
              ],
            ],
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Remember: σ chooses ROWS, π chooses COLUMNS. Union, intersection and difference need union-compatible relations. Division is used whenever a query contains the word 'all' ('students who have taken ALL courses'). Always write the result as an expression, and for long queries build it in steps using temporary relations (R1 ← ..., R2 ← ...).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Relation", definition: "A table: a set of tuples with the same attributes." },
      { term: "Tuple / Attribute / Domain", definition: "A row / a column / the set of values allowed for a column." },
      { term: "Entity integrity", definition: "The primary key cannot be NULL." },
      { term: "Referential integrity", definition: "A foreign key must be NULL or match an existing primary key." },
      { term: "Selection σ", definition: "Chooses tuples that satisfy a condition." },
      { term: "Projection π", definition: "Chooses the listed attributes and removes duplicates." },
      { term: "Natural join ⋈", definition: "Joins two relations on all attributes with the same name." },
      { term: "Division ÷", definition: "Finds tuples related to all tuples of another relation." },
    ],
    examQuestions: [
      "Explain the relational model: relation, tuple, attribute, domain, degree and cardinality. (Medium)",
      "What are the characteristics of a relation? (Short)",
      "Explain the relational integrity constraints with examples. (Long)",
      "What happens when a constraint is violated in insert, delete and update operations? (Medium)",
      "Explain the basic operations of relational algebra with examples. (Long)",
      "What is a join? Explain theta-join, equi-join and natural join. (Medium)",
      "Explain the division operation with an example. (Medium)",
      "Write relational algebra expressions for 5 given queries on the STUDENT, COURSE, ENROLMENT relations. (Long)",
      "Explain the additional relational operations: aggregate functions, grouping and outer join. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "SQL and Normalization",
    hours: 14,
    headings: [
      {
        id: "sql-ddl",
        title: "1. SQL: Data Definition, Data Types, Constraints and Schema Changes",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "SQL (Structured Query Language, pronounced 'S-Q-L' or 'sequel') is the standard language of relational databases, standardised by ANSI/ISO (SQL-86, SQL-92, SQL:1999 ... ). It is NON-PROCEDURAL — the user states WHAT is wanted, not how to get it. The same SQL works, with small differences (dialects), on Oracle, MySQL, SQL Server, PostgreSQL and SQLite. The examples in this unit continue with the college database and were run in SQLite.",
          },
          {
            kind: "table",
            headers: ["Data type", "Use", "Example"],
            rows: [
              ["INT / INTEGER, SMALLINT", "Whole numbers", "roll INTEGER"],
              [
                "DECIMAL(p, s) / NUMERIC, FLOAT, REAL",
                "Numbers with a fraction; p = total digits, s = digits after the point",
                "price DECIMAL(8,2)",
              ],
              ["CHAR(n)", "Fixed-length text (padded with spaces)", "gender CHAR(1)"],
              [
                "VARCHAR(n) / VARCHAR2(n) / TEXT",
                "Variable-length text up to n characters",
                "name VARCHAR(30)",
              ],
              ["DATE, TIME, TIMESTAMP", "Date and time values", "dob DATE"],
              ["BOOLEAN, BLOB", "True/false; binary large object (image, file)", "photo BLOB"],
            ],
          },
          {
            kind: "table",
            headers: ["Constraint", "Meaning"],
            rows: [
              ["NOT NULL", "The column cannot contain NULL."],
              ["UNIQUE", "All values in the column (or combination) must be different; NULL allowed."],
              ["PRIMARY KEY", "NOT NULL + UNIQUE; identifies each row (only one per table)."],
              [
                "FOREIGN KEY ... REFERENCES",
                "Value must exist in the referenced table's key; options ON DELETE / ON UPDATE CASCADE, SET NULL, RESTRICT.",
              ],
              ["CHECK (condition)", "Values must satisfy the condition."],
              ["DEFAULT value", "Value used when none is given."],
            ],
          },
          {
            kind: "table",
            headers: ["DDL command", "Purpose", "Syntax"],
            rows: [
              ["CREATE TABLE", "Creates a table", "CREATE TABLE t (col type constraint, ...);"],
              ["ALTER TABLE ... ADD", "Adds a column", "ALTER TABLE t ADD COLUMN col type;"],
              [
                "ALTER TABLE ... MODIFY / ALTER COLUMN",
                "Changes the data type or size of a column (Oracle: MODIFY, SQL Server: ALTER COLUMN, MySQL: MODIFY)",
                "ALTER TABLE t MODIFY col type;",
              ],
              ["ALTER TABLE ... DROP COLUMN", "Removes a column", "ALTER TABLE t DROP COLUMN col;"],
              ["RENAME", "Renames a table or column", "ALTER TABLE t RENAME COLUMN a TO b;"],
              [
                "TRUNCATE TABLE",
                "Deletes ALL rows quickly, keeps the structure; cannot be rolled back in most systems",
                "TRUNCATE TABLE t;",
              ],
              ["DROP TABLE", "Deletes the table (structure and data)", "DROP TABLE t;"],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "CREATE TABLE with all kinds of constraints; ALTER TABLE",
            code: String.raw`CREATE TABLE employee (
  emp_id  INTEGER PRIMARY KEY,
  ename   TEXT    NOT NULL,
  job     TEXT    DEFAULT 'Clerk',
  salary  INTEGER CHECK (salary > 0),
  dept_id TEXT    REFERENCES department(dept_id)
);

INSERT INTO employee VALUES (101, 'Anil',   'Manager', 60000, 'CS'),
                            (102, 'Bina',   'Analyst', 45000, 'CS'),
                            (103, 'Chetan', 'Clerk',   20000, 'MA'),
                            (104, 'Deepa',  'Analyst', 48000, 'MA');

-- job is omitted, so the DEFAULT value is used
INSERT INTO employee (emp_id, ename, salary, dept_id) VALUES (105, 'Esha', 22000, 'PH');

ALTER TABLE employee ADD COLUMN email TEXT;          -- schema change: add a column
ALTER TABLE employee RENAME COLUMN email TO mail;    -- rename it
ALTER TABLE employee DROP COLUMN mail;               -- remove it again

SELECT * FROM employee;`,
            output: String.raw`(4 rows affected)

-- job is omitted, so the DEFAULT value is used
(1 row affected)

emp_id  ename   job      salary  dept_id
------  ------  -------  ------  -------
101     Anil    Manager  60000   CS
102     Bina    Analyst  45000   CS
103     Chetan  Clerk    20000   MA
104     Deepa   Analyst  48000   MA
105     Esha    Clerk    22000   PH
(5 rows)`,
          },
        ],
      },
      {
        id: "sql-commands-operators",
        title: "2. Types of SQL Commands and SQL Operators",
        icon: "Settings",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Commands"],
            rows: [
              ["DDL — Data Definition Language", "CREATE, ALTER, DROP, TRUNCATE, RENAME"],
              ["DML — Data Manipulation Language", "SELECT, INSERT, UPDATE, DELETE"],
              ["DCL — Data Control Language", "GRANT, REVOKE  (e.g., GRANT SELECT ON student TO amit;)"],
              ["TCL — Transaction Control Language", "COMMIT, ROLLBACK, SAVEPOINT"],
            ],
          },
          {
            kind: "table",
            headers: ["Operator", "Symbols / keywords", "Example"],
            rows: [
              ["Arithmetic", "+  −  *  /  %", "salary * 12"],
              ["Comparison", "=  <> (or !=)  <  >  <=  >=", "marks >= 60"],
              ["Logical", "AND, OR, NOT", "city = 'Agra' AND marks > 60"],
              ["Range", "BETWEEN a AND b (inclusive)", "marks BETWEEN 60 AND 80"],
              ["List", "IN (list), NOT IN", "city IN ('Agra', 'Delhi')"],
              ["Pattern matching", "LIKE with % (any characters) and _ (one character)", "name LIKE 'S%'"],
              ["NULL test", "IS NULL, IS NOT NULL (never use = NULL)", "grade IS NULL"],
              ["Concatenation", "|| (standard/Oracle/SQLite), CONCAT()", "name || ' from ' || city"],
              ["Set", "UNION, INTERSECT, EXCEPT / MINUS", "see set operations"],
            ],
          },
        ],
      },
      {
        id: "sql-dml",
        title: "3. INSERT, UPDATE and DELETE Statements",
        icon: "RefreshCw",
        blocks: [
          {
            kind: "table",
            headers: ["Statement", "Syntax", "Example"],
            rows: [
              [
                "INSERT (all columns)",
                "INSERT INTO t VALUES (v1, v2, ...);",
                "INSERT INTO course VALUES ('C104', 'Web Design', 3);",
              ],
              [
                "INSERT (chosen columns)",
                "INSERT INTO t (c1, c2) VALUES (v1, v2);",
                "the omitted columns get DEFAULT or NULL",
              ],
              ["INSERT from a query", "INSERT INTO t2 SELECT ... FROM t1;", "copy rows between tables"],
              [
                "UPDATE",
                "UPDATE t SET c1 = v1, c2 = v2 WHERE condition;",
                "without WHERE ALL rows are changed",
              ],
              [
                "DELETE",
                "DELETE FROM t WHERE condition;",
                "without WHERE ALL rows are deleted (structure remains)",
              ],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "UPDATE and DELETE",
            code: String.raw`-- give every analyst a raise of 5000
UPDATE employee SET salary = salary + 5000 WHERE job = 'Analyst';

-- remove one employee
DELETE FROM employee WHERE emp_id = 103;

SELECT emp_id, ename, job, salary FROM employee ORDER BY emp_id;`,
            output: String.raw`-- give every analyst a raise of 5000
(2 rows affected)

-- remove one employee
(1 row affected)

emp_id  ename  job      salary
------  -----  -------  ------
101     Anil   Manager  60000
102     Bina   Analyst  50000
104     Deepa  Analyst  53000
105     Esha   Clerk    22000
(4 rows)`,
          },
        ],
      },
      {
        id: "sql-select",
        title: "4. Queries: SELECT, WHERE, ORDER BY, Aggregate Functions and GROUP BY",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "The general form of a query is: SELECT [DISTINCT] columns / expressions FROM tables [WHERE condition] [GROUP BY columns] [HAVING group-condition] [ORDER BY columns [ASC | DESC]]. The clauses are processed in the order FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE filters ROWS before grouping; HAVING filters GROUPS after grouping.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Conditions: BETWEEN, IN, LIKE, arithmetic, aliases and ORDER BY",
            code: String.raw`-- BETWEEN (inclusive)
SELECT name, marks FROM student WHERE marks BETWEEN 60 AND 80 ORDER BY marks;

-- IN with a list
SELECT name, city FROM student WHERE city IN ('Agra', 'Meerut') ORDER BY roll;

-- LIKE: names that start with S or end with a
SELECT name FROM student WHERE name LIKE 'S%' OR name LIKE '%a' ORDER BY name;

-- expression with an alias, sorted in descending order
SELECT name, marks + 5 AS marks_with_grace FROM student ORDER BY marks DESC;`,
            output: String.raw`-- BETWEEN (inclusive)
name   marks
-----  -----
Ravi   64
Pooja  72
Amit   78
(3 rows)

-- IN with a list
name   city
-----  ------
Amit   Agra
Ravi   Agra
Sana   Meerut
Pooja  Agra
(4 rows)

-- LIKE: names that start with S or end with a
name
-----
Neha
Pooja
Sana
(3 rows)

-- expression with an alias, sorted in descending order
name   marks_with_grace
-----  ----------------
Neha   96
Sana   90
Amit   83
Pooja  77
Ravi   69
Karan  60
(6 rows)`,
          },
          {
            kind: "table",
            headers: ["Aggregate function", "Returns"],
            rows: [
              ["COUNT(*) / COUNT(col)", "Number of rows / number of non-NULL values"],
              ["SUM(col)", "Total of the values"],
              ["AVG(col)", "Average of the values"],
              ["MAX(col) / MIN(col)", "Largest / smallest value"],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "Aggregate functions, GROUP BY and HAVING",
            code: String.raw`-- one row for the whole table
SELECT COUNT(*) AS total, MAX(marks) AS highest, MIN(marks) AS lowest,
       ROUND(AVG(marks), 2) AS average, SUM(marks) AS total_marks
FROM student;

-- one row per group; HAVING keeps only the groups with more than one student
SELECT city, COUNT(*) AS students FROM student
GROUP BY city HAVING COUNT(*) > 1 ORDER BY city;

-- built-in functions
SELECT UPPER(name) AS upper_name, LENGTH(name) AS len, SUBSTR(name, 1, 3) AS first3
FROM student WHERE roll <= 3 ORDER BY roll;`,
            output: String.raw`-- one row for the whole table
total  highest  lowest  average  total_marks
-----  -------  ------  -------  -----------
6      91       55      74.17    445
(1 row)

-- one row per group; HAVING keeps only the groups with more than one student
city   students
-----  --------
Agra   3
Delhi  2
(2 rows)

-- built-in functions
upper_name  len  first3
----------  ---  ------
AMIT        4    Ami
NEHA        4    Neh
RAVI        4    Rav
(3 rows)`,
          },
        ],
      },
      {
        id: "sql-joins-sets",
        title: "5. Joins, Union, Intersection and Minus",
        icon: "GitCompare",
        blocks: [
          {
            kind: "table",
            headers: ["Join", "Result"],
            rows: [
              ["INNER JOIN (JOIN)", "Only the rows that have a match in both tables."],
              [
                "LEFT (OUTER) JOIN",
                "All rows of the left table; NULL for the right columns when there is no match.",
              ],
              [
                "RIGHT (OUTER) JOIN",
                "All rows of the right table; NULL for the left columns when there is no match.",
              ],
              ["FULL (OUTER) JOIN", "All rows of both tables, matched where possible."],
              ["CROSS JOIN", "Cartesian product: every row with every row."],
              ["SELF JOIN", "A table joined with itself using two aliases."],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "Inner join, left outer join, self join and a three-table join",
            code: String.raw`INSERT INTO department VALUES ('EN', 'English', 'Dr. Paul');   -- a department with no student

-- INNER JOIN
SELECT s.name, d.dept_name FROM student s INNER JOIN department d ON s.dept_id = d.dept_id ORDER BY s.roll;

-- LEFT OUTER JOIN: every department, even the one without students
SELECT d.dept_name, s.name FROM department d LEFT JOIN student s ON d.dept_id = s.dept_id
ORDER BY d.dept_id, s.roll;

-- SELF JOIN: pairs of students living in the same city
SELECT a.name AS student1, b.name AS student2, a.city
FROM student a JOIN student b ON a.city = b.city AND a.roll < b.roll ORDER BY a.city, a.roll;

-- Joining three tables
SELECT s.name, c.title, e.grade
FROM student s JOIN enrolment e ON s.roll = e.roll JOIN course c ON c.course_id = e.course_id
WHERE e.grade = 'A' ORDER BY s.name, c.title;`,
            output: String.raw`(1 row affected)

-- INNER JOIN
name   dept_name
-----  ----------------
Amit   Computer Science
Neha   Computer Science
Ravi   Mathematics
Sana   Mathematics
Karan  Computer Science
Pooja  Physics
(6 rows)

-- LEFT OUTER JOIN: every department, even the one without students
dept_name         name
----------------  -----
Computer Science  Amit
Computer Science  Neha
Computer Science  Karan
English           NULL
Mathematics       Ravi
Mathematics       Sana
Physics           Pooja
(7 rows)

-- SELF JOIN: pairs of students living in the same city
student1  student2  city
--------  --------  -----
Amit      Pooja     Agra
Amit      Ravi      Agra
Ravi      Pooja     Agra
Neha      Karan     Delhi
(4 rows)

-- Joining three tables
name  title             grade
----  ----------------  -----
Amit  Programming in C  A
Neha  Database Systems  A
Neha  Programming in C  A
Sana  Discrete Maths    A
(4 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "UNION, INTERSECT and EXCEPT (MINUS in Oracle)",
            code: String.raw`-- cities where CS students live  UNION  cities where MA students live
SELECT city FROM student WHERE dept_id = 'CS'
UNION
SELECT city FROM student WHERE dept_id = 'MA';

-- cities common to both
SELECT city FROM student WHERE dept_id = 'CS'
INTERSECT
SELECT city FROM student WHERE dept_id = 'MA';

-- cities of CS students that do not occur for MA students (Oracle: MINUS)
SELECT city FROM student WHERE dept_id = 'CS'
EXCEPT
SELECT city FROM student WHERE dept_id = 'MA';`,
            output: String.raw`-- cities where CS students live  UNION  cities where MA students live
city
------
Agra
Delhi
Meerut
(3 rows)

-- cities common to both
city
----
Agra
(1 row)

-- cities of CS students that do not occur for MA students (Oracle: MINUS)
city
-----
Delhi
(1 row)`,
          },
        ],
      },
      {
        id: "sql-subqueries-views",
        title: "6. Nested Queries, Subqueries and Views (Virtual Tables)",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A SUBQUERY (nested query) is a SELECT statement written inside another statement, in brackets. It can return a single value (scalar subquery, used with =, >, <), a list of values (used with IN, ANY, ALL) or be tested with EXISTS. In a CORRELATED subquery the inner query refers to a column of the outer query, so it is evaluated once for every outer row.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Scalar, IN, EXISTS and correlated subqueries",
            code: String.raw`-- scalar subquery: students who scored above the overall average
SELECT name, marks FROM student WHERE marks > (SELECT AVG(marks) FROM student) ORDER BY marks DESC;

-- IN: students enrolled in course C102
SELECT name FROM student WHERE roll IN (SELECT roll FROM enrolment WHERE course_id = 'C102') ORDER BY name;

-- NOT EXISTS: departments that have no student
SELECT dept_name FROM department d WHERE NOT EXISTS (SELECT 1 FROM student s WHERE s.dept_id = d.dept_id);

-- correlated subquery: students above the average of THEIR OWN department
SELECT name, dept_id, marks FROM student s
WHERE marks > (SELECT AVG(marks) FROM student WHERE dept_id = s.dept_id) ORDER BY roll;`,
            output: String.raw`-- scalar subquery: students who scored above the overall average
name  marks
----  -----
Neha  91
Sana  85
Amit  78
(3 rows)

-- IN: students enrolled in course C102
name
-----
Amit
Neha
Pooja
(3 rows)

-- NOT EXISTS: departments that have no student
dept_name
---------
English
(1 row)

-- correlated subquery: students above the average of THEIR OWN department
name  dept_id  marks
----  -------  -----
Amit  CS       78
Neha  CS       91
Sana  MA       85
(3 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "ANY and ALL (standard SQL, Oracle, MySQL — not supported by SQLite)",
            code: String.raw`-- marks greater than the marks of AT LEAST ONE student of MA  (same as > MIN)
SELECT name FROM student WHERE marks > ANY (SELECT marks FROM student WHERE dept_id = 'MA');

-- marks greater than the marks of EVERY student of MA       (same as > MAX)
SELECT name FROM student WHERE marks > ALL (SELECT marks FROM student WHERE dept_id = 'MA');`,
          },
          {
            kind: "paragraph",
            text: "A VIEW is a virtual table defined by a stored query. It holds no data of its own; the query is run whenever the view is used. Uses: security (show only some columns/rows), simplifying complex queries, logical data independence (external schema). A simple view on one table can usually be updated (the change goes to the base table); a view with joins, DISTINCT, GROUP BY or aggregates is normally read-only.",
          },
          {
            kind: "code",
            language: "sql",
            title: "Creating, using and dropping a view",
            code: String.raw`CREATE VIEW cs_students AS
  SELECT roll, name, marks FROM student WHERE dept_id = 'CS';

SELECT * FROM cs_students ORDER BY marks DESC;

DROP VIEW cs_students;`,
            output: String.raw`roll  name   marks
----  -----  -----
2     Neha   91
1     Amit   78
5     Karan  55
(3 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "A stored procedure (MySQL syntax — for reference, not run)",
            code: String.raw`DELIMITER //
CREATE PROCEDURE add_student(IN p_roll INT, IN p_name VARCHAR(30), IN p_dept CHAR(2))
BEGIN
  INSERT INTO student (roll, name, dept_id) VALUES (p_roll, p_name, p_dept);
END //
DELIMITER ;

CALL add_student(7, 'Rohit', 'CS');`,
          },
          {
            kind: "paragraph",
            text: "A stored procedure is a named group of SQL statements saved in the database and executed with CALL (or EXEC). It reduces network traffic, can take parameters, is precompiled and gives better security and reuse. Syntax differs between Oracle (PL/SQL), MySQL and SQL Server (T-SQL).",
          },
        ],
      },
      {
        id: "functional-dependencies",
        title: "7. Functional Dependencies, Armstrong's Axioms and Closure",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Design theory answers the question: how do we group attributes into tables so that there is no redundancy and no anomaly? A FUNCTIONAL DEPENDENCY (FD) X → Y (read 'X determines Y') holds in a relation if any two tuples that have the same X value also have the same Y value. Example: roll → name (the roll number determines the name), while name → roll does not hold because two students can have the same name. The left side X is the determinant.",
          },
          {
            kind: "table",
            headers: ["Armstrong's axiom / derived rule", "Statement"],
            rows: [
              ["Reflexivity", "If Y ⊆ X then X → Y (trivial dependency)"],
              ["Augmentation", "If X → Y then XZ → YZ"],
              ["Transitivity", "If X → Y and Y → Z then X → Z"],
              ["Union (derived)", "If X → Y and X → Z then X → YZ"],
              ["Decomposition (derived)", "If X → YZ then X → Y and X → Z"],
              ["Pseudo-transitivity (derived)", "If X → Y and WY → Z then WX → Z"],
            ],
          },
          {
            kind: "paragraph",
            text: "The three axioms are SOUND (they never produce a wrong FD) and COMPLETE (every FD implied by a set F can be derived). The CLOSURE F⁺ of a set F is the set of all FDs implied by F. The CLOSURE OF AN ATTRIBUTE SET X, written X⁺, is the set of all attributes determined by X. Algorithm: start with X⁺ = X; repeatedly, for every FD  L → R  in F with L ⊆ X⁺, add R to X⁺; stop when nothing more can be added. X is a SUPER KEY if X⁺ contains all attributes of the relation, and a CANDIDATE KEY if it is a minimal such set.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Attribute closure and candidate keys",
            text: "R(A, B, C, D, E) with F = { A → BC,  CD → E,  B → D,  E → A }.   Compute A⁺: start {A}; A → BC adds B, C → {A, B, C}; B → D adds D → {A, B, C, D}; CD → E adds E → {A, B, C, D, E}.  So A⁺ = R and A is a key.   B⁺ = {B, D} (B → D only), so B is not a key.   E⁺: E → A gives A, then everything → E is a key.   (B, C)⁺ = {B, C, D, E, A} and (C, D)⁺ = {C, D, E, A, B}.  Candidate keys: A, E, BC, CD.",
          },
          {
            kind: "callout",
            tone: "example",
            title: "Another example — finding the key",
            text: "R(A, B, C, D, E) with F = { A → B,  BC → D,  D → E }.  A and C never appear on the right side, so every key must contain both A and C.  (AC)⁺: {A, C} → A → B gives B → BC → D gives D → D → E gives E → {A, B, C, D, E}.  So AC is the only candidate key.",
          },
        ],
      },
      {
        id: "normal-forms",
        title: "8. Normalization: Anomalies and Normal Forms (1NF, 2NF, 3NF, BCNF)",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "NORMALIZATION is the process of organising the tables of a database — by decomposing them according to functional dependencies — to remove redundancy and the anomalies it causes. The steps are shown in the figure; each normal form is stricter than the one before it, and a decomposition must always be LOSSLESS (the original table can be rebuilt by a natural join) and preferably dependency preserving.",
          },
          { kind: "diagram", diagramId: "normalization-flow", caption: "Fig 4.1 — Steps of normalization" },
          {
            kind: "table",
            headers: ["Normal form", "Condition", "What is removed"],
            rows: [
              [
                "First Normal Form (1NF)",
                "All attribute values are atomic: no repeating groups, no multi-valued or composite attributes.",
                "Repeating groups",
              ],
              [
                "Second Normal Form (2NF)",
                "In 1NF, and no non-prime attribute is partially dependent on a candidate key (every non-key attribute depends on the WHOLE key). Only matters when the key is composite.",
                "Partial dependencies",
              ],
              [
                "Third Normal Form (3NF)",
                "In 2NF, and no non-prime attribute is transitively dependent on the key. For every FD X → A: X is a super key OR A is a prime attribute.",
                "Transitive dependencies",
              ],
              [
                "Boyce–Codd Normal Form (BCNF)",
                "For every non-trivial FD X → Y, X is a super key. (Stricter than 3NF.)",
                "Remaining anomalies caused by FDs whose determinant is not a key",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Prime attribute = an attribute that is part of some candidate key. The anomalies of an un-normalised table: an INSERTION anomaly (a fact cannot be recorded without an unrelated fact), a DELETION anomaly (deleting one fact loses another) and an UPDATE anomaly (a fact stored many times must be changed in many rows, risking inconsistency). The example below shows all of them on a single table ORDERS_FLAT with the dependencies order_id → customer_id;  customer_id → customer_name, city;  product_id → product_name;  (order_id, product_id) → qty. The only candidate key is (order_id, product_id).",
          },
          {
            kind: "code",
            language: "sql",
            title: "An un-normalised table and its redundancy",
            code: String.raw`CREATE TABLE orders_flat (
  order_id INTEGER, product_id TEXT, product_name TEXT, qty INTEGER,
  customer_id TEXT, customer_name TEXT, city TEXT
);

INSERT INTO orders_flat VALUES (1, 'P1', 'Pen',  10, 'C1', 'Amit', 'Agra'),
                               (1, 'P2', 'Book',  2, 'C1', 'Amit', 'Agra'),
                               (2, 'P1', 'Pen',   5, 'C2', 'Neha', 'Delhi'),
                               (3, 'P3', 'Bag',   1, 'C1', 'Amit', 'Agra');

SELECT * FROM orders_flat;`,
            output: String.raw`(4 rows affected)

order_id  product_id  product_name  qty  customer_id  customer_name  city
--------  ----------  ------------  ---  -----------  -------------  -----
1         P1          Pen           10   C1           Amit           Agra
1         P2          Book          2    C1           Amit           Agra
2         P1          Pen           5    C2           Neha           Delhi
3         P3          Bag           1    C1           Amit           Agra
(4 rows)`,
          },
          {
            kind: "table",
            headers: ["Anomaly in ORDERS_FLAT", "Why it happens"],
            rows: [
              [
                "Update anomaly",
                "Amit's city is stored in 3 rows; changing it means updating all 3 — missing one makes the data inconsistent.",
              ],
              [
                "Insertion anomaly",
                "A new product P9 cannot be stored until somebody orders it (the key needs an order_id).",
              ],
              [
                "Deletion anomaly",
                "Deleting order 2 (the only row of customer C2) also deletes all information about Neha.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Step", "Violation found", "Decomposition"],
            rows: [
              [
                "To 2NF",
                "Partial dependencies: order_id → customer_id, customer_name, city  and  product_id → product_name (they depend on part of the key)",
                "ORDER_ITEM(order_id, product_id, qty);  PRODUCT(product_id, product_name);  ORDERS(order_id, customer_id, customer_name, city)",
              ],
              [
                "To 3NF",
                "Transitive dependency in ORDERS: order_id → customer_id → customer_name, city",
                "ORDERS(order_id, customer_id);  CUSTOMER(customer_id, customer_name, city)",
              ],
              [
                "Result (3NF, also BCNF)",
                "Every determinant is now a key of its table",
                "ORDER_ITEM, PRODUCT, ORDERS, CUSTOMER",
              ],
            ],
          },
          {
            kind: "code",
            language: "sql",
            title: "Decomposition into 3NF and proof that it is lossless (the join gives back exactly the original)",
            code: String.raw`CREATE TABLE product    AS SELECT DISTINCT product_id, product_name FROM orders_flat;
CREATE TABLE customer   AS SELECT DISTINCT customer_id, customer_name, city FROM orders_flat;
CREATE TABLE orders     AS SELECT DISTINCT order_id, customer_id FROM orders_flat;
CREATE TABLE order_item AS SELECT order_id, product_id, qty FROM orders_flat;

SELECT * FROM customer ORDER BY customer_id;

-- rows produced by the join that are NOT in the original  (should be none)
SELECT o.order_id, i.product_id, p.product_name, i.qty, c.customer_id, c.customer_name, c.city
FROM order_item i JOIN orders o ON o.order_id = i.order_id
                  JOIN product p ON p.product_id = i.product_id
                  JOIN customer c ON c.customer_id = o.customer_id
EXCEPT SELECT * FROM orders_flat;

-- rows of the original that the join cannot rebuild (should be none)
SELECT * FROM orders_flat
EXCEPT
SELECT o.order_id, i.product_id, p.product_name, i.qty, c.customer_id, c.customer_name, c.city
FROM order_item i JOIN orders o ON o.order_id = i.order_id
                  JOIN product p ON p.product_id = i.product_id
                  JOIN customer c ON c.customer_id = o.customer_id;`,
            output: String.raw`customer_id  customer_name  city
-----------  -------------  -----
C1           Amit           Agra
C2           Neha           Delhi
(2 rows)

-- rows produced by the join that are NOT in the original  (should be none)
order_id  product_id  product_name  qty  customer_id  customer_name  city
--------  ----------  ------------  ---  -----------  -------------  ----
(0 rows)

-- rows of the original that the join cannot rebuild (should be none)
order_id  product_id  product_name  qty  customer_id  customer_name  city
--------  ----------  ------------  ---  -----------  -------------  ----
(0 rows)`,
          },
          {
            kind: "callout",
            tone: "example",
            title: "3NF but not BCNF",
            text: "R(Student, Course, Instructor) where each instructor teaches only one course, so the FDs are  {Student, Course} → Instructor  and  Instructor → Course.  The candidate keys are {Student, Course} and {Student, Instructor}, so all three attributes are prime and R is in 3NF.  But in Instructor → Course the determinant Instructor is not a super key, so R is NOT in BCNF (Course is stored again for every student of the instructor).  BCNF decomposition: R1(Instructor, Course) and R2(Student, Instructor).  It is lossless, but the dependency {Student, Course} → Instructor can no longer be checked inside one table — it is not preserved. This is why 3NF (which is always dependency preserving) is sometimes preferred to BCNF.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "SQL", definition: "Structured Query Language, the standard non-procedural language of relational databases." },
      { term: "View", definition: "A virtual table defined by a stored query." },
      { term: "Subquery", definition: "A query nested inside another query." },
      { term: "Functional dependency", definition: "X → Y: the value of X determines the value of Y." },
      { term: "Closure X⁺", definition: "The set of all attributes functionally determined by X." },
      { term: "Normalization", definition: "Decomposing tables to remove redundancy and anomalies." },
      { term: "Partial / Transitive dependency", definition: "A non-key attribute depending on part of a key / on another non-key attribute." },
      { term: "BCNF", definition: "For every non-trivial FD X → Y, X is a super key." },
      { term: "Lossless decomposition", definition: "A decomposition whose natural join reproduces the original relation." },
    ],
    examQuestions: [
      "Explain the DDL commands of SQL (CREATE, ALTER, DROP) with examples. (Medium)",
      "Explain the constraints that can be defined in SQL. (Medium)",
      "Explain the INSERT, UPDATE and DELETE statements with examples. (Medium)",
      "Explain the SQL operators (BETWEEN, IN, LIKE, IS NULL). (Medium)",
      "Explain aggregate functions and GROUP BY ... HAVING with examples. (Medium)",
      "What is a join? Explain the types of joins with examples. (Long)",
      "Explain UNION, INTERSECT and MINUS. (Medium)",
      "What is a subquery? Differentiate between nested and correlated subqueries. (Medium)",
      "What is a view? How is it created and what are its advantages? (Medium)",
      "What is a functional dependency? State Armstrong's axioms. (Medium)",
      "Find the closure of A and the candidate keys of R(A,B,C,D,E) with F = {A→BC, CD→E, B→D, E→A}. (Long)",
      "What is normalization? Explain 1NF, 2NF, 3NF and BCNF with examples. (Long)",
      "Explain insertion, deletion and update anomalies. (Medium)",
      "Differentiate between 3NF and BCNF. (Medium)",
      "Write the SQL to create the STUDENT and COURSE tables with primary and foreign keys and give queries for five requirements. (Long)",
    ],
  },
  {
    unitNumber: 5,
    title: "Transaction Processing, Concurrency Control and Distributed Databases",
    hours: 10,
    headings: [
      {
        id: "transaction-concepts",
        title: "1. Transactions: Concepts, Operations and States",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "A TRANSACTION is a logical unit of work — a sequence of database operations that must be executed as a whole. Example: transferring Rs. 1000 from account A to account B consists of (1) read A, (2) A = A − 1000, (3) write A, (4) read B, (5) B = B + 1000, (6) write B. If the system failed after step 3 the money would vanish, so either all six steps must take effect or none. The database operations of a transaction are READ(X) (copy item X from disk to memory) and WRITE(X) (copy the value back to the database); a transaction is delimited by BEGIN TRANSACTION and END (COMMIT or ROLLBACK).",
          },
          { kind: "diagram", diagramId: "transaction-states", caption: "Fig 5.1 — State transition diagram of a transaction" },
          {
            kind: "table",
            headers: ["State", "Meaning"],
            rows: [
              ["Active", "The initial state; the transaction is executing its read/write operations."],
              [
                "Partially committed",
                "The last statement has been executed, but the changes may still be only in memory.",
              ],
              [
                "Committed",
                "All changes are permanently recorded in the database; the transaction has succeeded.",
              ],
              ["Failed", "Normal execution cannot continue (error, constraint violation, system failure)."],
              [
                "Aborted (rolled back)",
                "The changes are undone and the database is restored to its state before the transaction; the transaction may be restarted or killed.",
              ],
              ["Terminated", "The transaction has left the system (after commit or abort)."],
            ],
          },
          {
            kind: "table",
            headers: ["TCL command", "Purpose"],
            rows: [
              ["BEGIN / START TRANSACTION", "Starts a transaction."],
              ["COMMIT", "Makes all changes of the transaction permanent."],
              ["ROLLBACK", "Undoes all changes since the start of the transaction."],
              [
                "SAVEPOINT name / ROLLBACK TO name",
                "Marks a point inside a transaction to which one can partially roll back.",
              ],
            ],
          },
        ],
      },
      {
        id: "acid",
        title: "2. Desirable Properties of Transactions (ACID)",
        icon: "Award",
        blocks: [
          {
            kind: "table",
            headers: ["Property", "Meaning", "Ensured by", "Bank-transfer example"],
            rows: [
              [
                "Atomicity",
                "All or nothing: either every operation of the transaction is done or none.",
                "Recovery subsystem (log, undo)",
                "If the credit fails, the debit is undone.",
              ],
              [
                "Consistency",
                "A transaction takes the database from one consistent state to another consistent state, preserving all constraints.",
                "Programmer + DBMS (integrity constraints)",
                "Total money A + B is the same before and after.",
              ],
              [
                "Isolation",
                "Concurrent transactions do not interfere; each appears to run alone.",
                "Concurrency control subsystem",
                "Another user does not see the money 'in the middle' of the transfer.",
              ],
              [
                "Durability",
                "Once committed, the changes survive any later failure.",
                "Recovery subsystem (log on stable storage)",
                "After 'transfer successful' a power failure does not lose it.",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "The blocks below show these properties on a running SQLite database. Two accounts are created and Rs. 1000 is transferred inside one transaction (COMMIT makes it permanent).",
          },
          {
            kind: "code",
            language: "sql",
            title: "A successful transfer: BEGIN ... COMMIT",
            code: String.raw`CREATE TABLE account (
  acc_no  INTEGER PRIMARY KEY,
  holder  TEXT,
  balance INTEGER CHECK (balance >= 0)
);
INSERT INTO account VALUES (1, 'Amit', 5000), (2, 'Neha', 3000);

BEGIN;
UPDATE account SET balance = balance - 1000 WHERE acc_no = 1;
UPDATE account SET balance = balance + 1000 WHERE acc_no = 2;
COMMIT;

SELECT * FROM account ORDER BY acc_no;`,
            output: String.raw`(2 rows affected)

(1 row affected)

(1 row affected)

acc_no  holder  balance
------  ------  -------
1       Amit    4000
2       Neha    4000
(2 rows)`,
          },
          {
            kind: "paragraph",
            text: "Atomicity and consistency: now Rs. 9000 is 'transferred' from Amit to Neha. The credit to Neha works, but the debit from Amit would make his balance negative and violates the CHECK constraint. The transaction is rolled back and neither account changes.",
          },
          {
            kind: "code",
            language: "sql",
            title: "A failed transfer is rolled back completely",
            code: String.raw`BEGIN;
UPDATE account SET balance = balance + 9000 WHERE acc_no = 2;   -- credit succeeds
UPDATE account SET balance = balance - 9000 WHERE acc_no = 1;   -- debit violates CHECK (balance >= 0)
ROLLBACK;                                                        -- undo everything

SELECT * FROM account ORDER BY acc_no;`,
            output: String.raw`(1 row affected)

Error: CHECK constraint failed: balance >= 0

acc_no  holder  balance
------  ------  -------
1       Amit    4000
2       Neha    4000
(2 rows)`,
          },
          {
            kind: "code",
            language: "sql",
            title: "SAVEPOINT: undo only a part of a transaction",
            code: String.raw`BEGIN;
UPDATE account SET balance = balance + 500 WHERE acc_no = 1;
SAVEPOINT after_credit;
UPDATE account SET balance = balance + 700 WHERE acc_no = 1;
ROLLBACK TO after_credit;          -- only the second update is undone
COMMIT;

SELECT * FROM account ORDER BY acc_no;`,
            output: String.raw`(1 row affected)

(1 row affected)

acc_no  holder  balance
------  ------  -------
1       Amit    4500
2       Neha    4000
(2 rows)`,
          },
        ],
      },
      {
        id: "schedules",
        title: "3. Schedules, Concurrency Problems and Serializability",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "A SCHEDULE (history) is the chronological order in which the operations of several transactions are executed. In a SERIAL schedule the transactions run one after another with no interleaving — always correct but slow. A NON-SERIAL (concurrent, interleaved) schedule gives better throughput and response time, but must be equivalent to some serial schedule (SERIALIZABLE) to be correct. Concurrency is needed to use the CPU while other transactions wait for the disk, and to serve many users.",
          },
          {
            kind: "table",
            headers: ["Problem", "What happens", "Example"],
            rows: [
              [
                "Lost update",
                "Two transactions read the same value and both write; one update overwrites the other.",
                "See the schedule below.",
              ],
              [
                "Dirty read (temporary update)",
                "T2 reads a value written by T1 that has not committed; T1 then aborts, so T2 has used a value that never existed.",
                "T1 writes X = 500, T2 reads 500, T1 rolls back to the old value",
              ],
              [
                "Unrepeatable read",
                "T1 reads a value twice and gets different values because T2 changed and committed it in between.",
                "T1 reads balance 100, T2 withdraws, T1 reads again and gets 60",
              ],
              [
                "Phantom read",
                "T1 runs the same query twice and the second time finds new rows inserted by T2.",
                "COUNT(*) of students of CS changes from 3 to 4 within T1",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Time", "T1 (withdraw 10)", "T2 (deposit 20)", "Value of X in the database"],
            rows: [
              ["1", "READ(X) → 100", "", "100"],
              ["2", "", "READ(X) → 100", "100"],
              ["3", "X = 100 − 10 = 90", "", "100"],
              ["4", "", "X = 100 + 20 = 120", "100"],
              ["5", "WRITE(X) → 90", "", "90"],
              ["6", "", "WRITE(X) → 120", "120"],
            ],
          },
          {
            kind: "paragraph",
            text: "LOST UPDATE: the correct final value after both transactions is 100 − 10 + 20 = 110, but the schedule gives 120 — T1's update has been lost. A serial schedule (T1 then T2 or T2 then T1) would have given 110.",
          },
          {
            kind: "paragraph",
            text: "Conflict serializability: two operations CONFLICT if they belong to different transactions, access the same data item and at least one is a WRITE (read–write, write–read, write–write). A schedule is conflict serializable if it can be converted into a serial schedule by swapping non-conflicting operations. TEST: draw a PRECEDENCE (serialisation) GRAPH — a node for each transaction and an edge Tᵢ → Tⱼ whenever an operation of Tᵢ conflicts with, and comes before, an operation of Tⱼ. The schedule is conflict serializable if and only if the graph has NO CYCLE; a topological order of the graph gives the equivalent serial order.",
          },
          {
            kind: "table",
            headers: ["Schedule", "Conflicts found", "Precedence graph", "Result"],
            rows: [
              [
                "S1: R1(A) W1(A) R2(A) W2(A) R1(B) W1(B) R2(B) W2(B)",
                "On A: W1(A) before R2(A) and W2(A) → T1 → T2.  On B: R1(B), W1(B) before R2(B), W2(B) → T1 → T2.",
                "T1 → T2  (no cycle)",
                "Conflict serializable; equivalent to the serial schedule T1 then T2",
              ],
              [
                "S2: R1(A) W1(A) R2(A) W2(A) R2(B) W2(B) R1(B) W1(B)",
                "On A: T1 before T2 → T1 → T2.  On B: W2(B) before R1(B) and W1(B) → T2 → T1.",
                "T1 → T2 and T2 → T1  (a cycle)",
                "NOT conflict serializable",
              ],
            ],
          },
        ],
      },
      {
        id: "locking",
        title: "4. Locking Techniques for Concurrency Control",
        icon: "Scale",
        blocks: [
          {
            kind: "paragraph",
            text: "A LOCK is a variable attached to a data item that controls access to it. Before reading or writing an item a transaction must obtain a lock on it and it releases the lock when it no longer needs it. There are two modes: SHARED (S, read) lock — many transactions may hold it at the same time; EXCLUSIVE (X, write) lock — only one transaction may hold it and no one else may read or write the item.",
          },
          {
            kind: "table",
            headers: ["Requested lock ↓ / Lock held →", "Shared (S)", "Exclusive (X)"],
            rows: [
              ["Shared (S)", "Granted (compatible)", "Wait"],
              ["Exclusive (X)", "Wait", "Wait"],
            ],
          },
          {
            kind: "paragraph",
            text: "Locks alone do not guarantee serializability (a transaction could unlock an item too early). TWO-PHASE LOCKING (2PL) protocol: every transaction has a GROWING phase, in which it may obtain locks but not release any, and a SHRINKING phase, in which it may release locks but not obtain any. The moment of the first unlock is the LOCK POINT. Every schedule produced by 2PL is conflict serializable. STRICT 2PL holds all exclusive locks until the transaction commits or aborts, which also prevents dirty reads and cascading rollbacks and is used by most DBMS.",
          },
          { kind: "diagram", diagramId: "two-phase-locking", caption: "Fig 5.2 — Two-phase locking: number of locks held over time" },
          {
            kind: "table",
            headers: ["Time", "T1 (withdraw 10)", "T2 (deposit 20)", "Remark"],
            rows: [
              ["1", "LOCK-X(X); READ(X) → 100", "", "T1 gets the exclusive lock"],
              ["2", "", "LOCK-X(X)", "T2 must WAIT"],
              ["3", "X = 90; WRITE(X)", "(waiting)", ""],
              ["4", "COMMIT; UNLOCK(X)", "(lock granted) READ(X) → 90", "T2 sees T1's committed value"],
              ["5", "", "X = 110; WRITE(X); COMMIT", "Correct final value 110 — no lost update"],
            ],
          },
          {
            kind: "table",
            headers: ["Problem of locking", "Explanation and remedy"],
            rows: [
              [
                "Deadlock",
                "Two or more transactions wait for each other's locks for ever. T1 holds a lock on A and waits for B; T2 holds B and waits for A. Detected with a WAIT-FOR GRAPH (a cycle means deadlock); resolved by aborting a victim transaction.",
              ],
              [
                "Deadlock prevention",
                "Wait–Die (older waits for younger, a younger requester dies), Wound–Wait (an older requester aborts the younger holder), or acquiring all locks in advance / in a fixed order; timeouts.",
              ],
              [
                "Starvation",
                "A transaction waits indefinitely because others keep getting the locks. Remedy: first-come first-served lock queue, priority to older transactions.",
              ],
            ],
          },
        ],
      },
      {
        id: "timestamp",
        title: "5. Concurrency Control Based on Timestamp Ordering",
        icon: "History",
        blocks: [
          {
            kind: "paragraph",
            text: "Timestamp ordering does not use locks, so there is no deadlock. Each transaction T gets a unique TIMESTAMP TS(T) when it starts (the system clock or a counter); an older transaction has a smaller timestamp. The DBMS makes the concurrent execution equivalent to the serial order of the timestamps. For every item X it keeps read_TS(X) — the largest timestamp of a transaction that has read X, and write_TS(X) — the largest timestamp of a transaction that has written X.",
          },
          {
            kind: "table",
            headers: ["Operation of T on X", "Condition", "Action"],
            rows: [
              [
                "READ(X)",
                "If TS(T) < write_TS(X) — a younger transaction has already written X",
                "ABORT T and restart it with a new (larger) timestamp",
              ],
              ["READ(X)", "Otherwise", "Execute the read; set read_TS(X) = max(read_TS(X), TS(T))"],
              [
                "WRITE(X)",
                "If TS(T) < read_TS(X) — a younger transaction has already read X, or TS(T) < write_TS(X)",
                "ABORT T and restart it",
              ],
              ["WRITE(X)", "Otherwise", "Execute the write; set write_TS(X) = TS(T)"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Example",
            text: "Let T1 have TS = 5 and T2 have TS = 10; initially read_TS(X) = write_TS(X) = 0.  (1) T2 reads X: 10 > write_TS(X) = 0, so it is allowed and read_TS(X) becomes 10.  (2) T1 now tries to WRITE(X): TS(T1) = 5 < read_TS(X) = 10, so a younger transaction has already read X — T1 is ABORTED and restarted with a new timestamp (say 11).  The resulting order is T2 → T1, consistent with the timestamps at the moment of conflict.",
          },
          {
            kind: "bullets",
            items: [
              "Thomas' write rule (an improvement): when TS(T) < write_TS(X) but TS(T) ≥ read_TS(X), the write of T is obsolete (a younger transaction has already overwritten X and nobody has read the old value), so the write is simply IGNORED and T is not aborted.",
              "Advantages: free from deadlock, serializable in timestamp order. Disadvantages: transactions may be aborted and restarted many times (cyclic restart), and it does not by itself prevent cascading rollbacks.",
              "Locking vs timestamps: locking is pessimistic (wait before conflict) and can deadlock; timestamp ordering is optimistic (proceed and abort on conflict) with no deadlock.",
            ],
          },
        ],
      },
      {
        id: "distributed-db",
        title: "6. Distributed Database Concepts and Recovery Basics",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "A DISTRIBUTED DATABASE (DDB) is a collection of logically related data that is physically spread over several computers (sites) connected by a network; the software that manages it is a Distributed DBMS (DDBMS). Example: the branches of a bank keep the data of their own customers locally, yet the bank can see all data as one database.",
          },
          {
            kind: "table",
            headers: ["Concept", "Meaning"],
            rows: [
              [
                "Fragmentation",
                "Splitting a table into parts stored at different sites: HORIZONTAL (subsets of rows, e.g., customers of each city), VERTICAL (subsets of columns, always including the key) and MIXED. The original table must be reconstructible (union or join).",
              ],
              [
                "Replication",
                "Keeping copies of the same data at several sites: improves availability and read speed, but updates must be applied to all copies.",
              ],
              ["Allocation", "Deciding at which site each fragment or copy is stored."],
              [
                "Distribution transparency",
                "The user need not know where the data are (location transparency), that it is fragmented (fragmentation transparency) or replicated (replication transparency).",
              ],
              [
                "Two-phase commit (2PC)",
                "Protocol to commit a distributed transaction: phase 1 — the coordinator asks all sites 'can you commit?' (prepare); phase 2 — if ALL say yes it tells them to commit, otherwise to abort. It keeps the transaction atomic across sites.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Advantages of a DDBMS", "Disadvantages"],
            rows: [
              ["Local control and faster local access", "Complex design and management"],
              [
                "Reliability and availability — the system works even if a site fails",
                "Higher cost of software and communication",
              ],
              ["Easy growth by adding sites", "Security and integrity are harder to ensure"],
              [
                "Reflects the structure of a distributed organisation",
                "Concurrency control and recovery are more complicated",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Recovery idea", "Explanation"],
            rows: [
              [
                "System log (journal)",
                "A sequential file recording every start, write (old value, new value), commit and abort of transactions. The log is written to stable storage BEFORE the database is changed (write-ahead logging).",
              ],
              [
                "UNDO / REDO",
                "After a failure, transactions that had not committed are UNDONE using the old values; committed transactions whose changes did not reach the disk are REDONE using the new values.",
              ],
              [
                "Checkpoint",
                "A point at which all buffers are forced to disk, so recovery need not look at the log before it.",
              ],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Transaction", definition: "A logical unit of work made of read/write operations that must be done completely or not at all." },
      { term: "ACID", definition: "Atomicity, Consistency, Isolation, Durability — the desirable properties of transactions." },
      { term: "Schedule", definition: "The order in which operations of several transactions are executed." },
      { term: "Serializable schedule", definition: "A concurrent schedule equivalent to some serial schedule." },
      {
        term: "Two-phase locking",
        definition: "A protocol with a growing phase (only locks are acquired) followed by a shrinking phase (only locks are released).",
      },
      { term: "Deadlock", definition: "A situation in which transactions wait for each other's locks for ever." },
      { term: "Timestamp", definition: "A unique number given to a transaction at its start to order the transactions." },
      { term: "Fragmentation", definition: "Splitting a table into pieces stored at different sites." },
    ],
    examQuestions: [
      "What is a transaction? Explain the states of a transaction with a diagram. (Medium)",
      "Explain the ACID properties of transactions with examples. (Long)",
      "What are the problems of concurrent execution? Explain the lost update and dirty read problems. (Medium)",
      "What is a schedule? Differentiate between serial and serializable schedules. (Medium)",
      "Test whether the schedule R1(A) W1(A) R2(A) W2(A) R2(B) W2(B) R1(B) W1(B) is conflict serializable. (Long)",
      "Explain the shared and exclusive locks. State the two-phase locking protocol. (Long)",
      "What is a deadlock? How can it be detected and prevented? (Medium)",
      "Explain the timestamp ordering protocol with the read and write rules. (Long)",
      "Compare locking-based and timestamp-based concurrency control. (Short)",
      "Write short notes on distributed databases, fragmentation and replication. (Medium)",
      "Explain the two-phase commit protocol briefly. (Short)",
    ],
  },
];
