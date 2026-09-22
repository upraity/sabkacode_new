import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Java Programming (C-201)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 2, syllabus
// effective from session 2025-26.
//
// Every runnable Java program was compiled and executed with OpenJDK 21; the
// printed `output` is the real output. GUI (AWT/Swing/Applet), JDBC and
// Servlet/JSP programs need a display, a database or a web server, so they
// were only compiled (or, for servlets, not compiled) and have no output.

export const javaProgrammingUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Java Fundamentals: Tokens, Data Types, Operators and Control Statements",
    hours: 10,
    headings: [
      {
        id: "java-intro-jvm",
        title: "1. Introduction to Java, JDK, JRE, JVM and the Execution Process",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "Java is a high-level, object-oriented, general-purpose programming language developed by James Gosling and his team at Sun Microsystems (1991, released 1995; now owned by Oracle). Its slogan is 'Write Once, Run Anywhere' (WORA): a Java program is compiled into platform-independent BYTECODE that runs on any computer that has a Java Virtual Machine.",
          },
          {
            kind: "table",
            headers: ["Feature", "Meaning"],
            rows: [
              [
                "Simple and familiar",
                "Syntax is based on C/C++ but without pointers, operator overloading and multiple inheritance of classes.",
              ],
              [
                "Object-oriented",
                "Everything (except primitive values) is an object; supports encapsulation, inheritance, polymorphism and abstraction.",
              ],
              [
                "Platform independent and portable",
                "Bytecode runs on any OS with a JVM; sizes of data types are fixed.",
              ],
              [
                "Robust",
                "Strong type checking, exception handling, automatic garbage collection, no explicit memory pointers.",
              ],
              [
                "Secure",
                "Bytecode verifier, class loader and the security manager/sandbox protect the system.",
              ],
              ["Multithreaded", "Built-in support for running several threads at the same time."],
              ["Distributed", "Networking classes (java.net) and RMI support programs on many machines."],
              ["High performance", "The Just-In-Time (JIT) compiler converts hot bytecode to machine code."],
              ["Dynamic", "Classes are loaded at run time when needed."],
            ],
          },
          { kind: "diagram", diagramId: "jdk-jre-jvm", caption: "Fig 1.1 — JDK, JRE and JVM" },
          {
            kind: "table",
            headers: ["Term", "Full form", "Meaning"],
            rows: [
              [
                "JVM",
                "Java Virtual Machine",
                "An abstract machine (software) that loads, verifies and executes bytecode; it makes Java platform independent. Every operating system has its own JVM, but all understand the same bytecode.",
              ],
              [
                "JRE",
                "Java Runtime Environment",
                "JVM + the standard class libraries (java.lang, java.util ...). Needed to RUN Java programs.",
              ],
              [
                "JDK",
                "Java Development Kit",
                "JRE + development tools: javac (compiler), java (launcher), javadoc, jar, jdb (debugger), appletviewer. Needed to WRITE and compile programs.",
              ],
            ],
          },
          { kind: "diagram", diagramId: "java-execution-process", caption: "Fig 1.2 — Execution process of a Java program" },
          {
            kind: "bullets",
            items: [
              "Steps: (1) write the source program in a text editor and save it as ClassName.java (the file name must match the public class); (2) compile it with 'javac ClassName.java' — the compiler checks syntax and produces ClassName.class containing BYTECODE; (3) run it with 'java ClassName' — the JVM's class loader loads the .class file, the bytecode verifier checks it, and the interpreter/JIT compiler executes it.",
              "CLASSPATH: the list of directories and .jar files in which the JVM and the compiler look for classes. It can be set with the CLASSPATH environment variable or with the -cp (-classpath) option, e.g., java -cp .;lib/mylib.jar Main (use ':' instead of ';' on Linux/macOS). By default it is the current directory.",
            ],
          },
        ],
      },
      {
        id: "java-structure-tokens",
        title: "2. Java Program Structure, Tokens and Programming Style",
        icon: "Code",
        blocks: [
          {
            kind: "table",
            headers: ["Section of a Java program", "Purpose", "Optional?"],
            rows: [
              [
                "Documentation section",
                "Comments: // single line, /* multi-line */, /** documentation comment for javadoc */",
                "Yes",
              ],
              ["Package statement", "package mypack;  — puts the class in a package", "Yes"],
              ["Import statements", "import java.util.Scanner;  — brings classes of other packages", "Yes"],
              [
                "Class definition(s)",
                "class or interface declarations; a program has at least one class",
                "No",
              ],
              [
                "main() method",
                "public static void main(String[] args) — the entry point where execution starts",
                "Needed in the class that is run",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 1 — The first Java program",
            code: String.raw`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
            output: "Hello, Java!",
          },
          {
            kind: "table",
            headers: ["Part of main()", "Meaning"],
            rows: [
              ["public", "The JVM can call it from outside the class."],
              ["static", "It can be called without creating an object of the class."],
              ["void", "It returns nothing."],
              ["String[] args", "Command line arguments as an array of strings."],
              [
                "System.out.println()",
                "Prints a line: System is a class, out is its PrintStream object, println() is a method.",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "TOKENS are the smallest meaningful units of a Java program: (1) Keywords — reserved words such as class, public, static, int, if, while, new, this, super, extends (about 50; const and goto are reserved but unused); (2) Identifiers — names of classes, variables and methods: letters, digits, underscore and $, not starting with a digit, case-sensitive, not a keyword; (3) Literals — constant values: integer (25, 0x1F), floating-point (3.14, 2.5f), character ('A'), string (\"Java\"), boolean (true, false) and null; (4) Operators — + − * / % == && ||, etc.; (5) Separators — ( ) { } [ ] ; , . (6) Comments and white space are ignored by the compiler.",
          },
          {
            kind: "bullets",
            items: [
              "Programming style and naming conventions: class names start with a capital letter (StudentRecord — PascalCase); methods and variables start with a small letter (calculateTotal, rollNumber — camelCase); constants are in capitals with underscores (MAX_SIZE); packages are all lower case (com.example.util). Indent the code consistently, use one statement per line and write meaningful comments.",
              "Java statements: declaration statements (int a;), expression statements (a = b + c;), control statements (if, for, ...), and block statements { ... }. Every simple statement ends with a semicolon.",
            ],
          },
        ],
      },
      {
        id: "java-datatypes",
        title: "3. Constants, Variables, Data Types, Scope and Type Casting",
        icon: "Hash",
        blocks: [
          {
            kind: "table",
            headers: ["Primitive type", "Size", "Range", "Default value"],
            rows: [
              ["byte", "8 bits", "−128 to 127", "0"],
              ["short", "16 bits", "−32,768 to 32,767", "0"],
              ["int", "32 bits", "−2,147,483,648 to 2,147,483,647", "0"],
              ["long", "64 bits", "about ±9.2 × 10¹⁸ (literal ends with L)", "0L"],
              ["float", "32 bits", "about 6–7 decimal digits precision (literal ends with f)", "0.0f"],
              ["double", "64 bits", "about 15 decimal digits precision (default for real numbers)", "0.0"],
              [
                "char",
                "16 bits",
                "One Unicode character (0 to 65,535), written in single quotes",
                "'\\u0000'",
              ],
              ["boolean", "1 bit (logical)", "true or false", "false"],
            ],
          },
          {
            kind: "paragraph",
            text: "Java has two kinds of data types: PRIMITIVE types (the eight above, stored directly as values) and REFERENCE types (classes, arrays, interfaces — variables hold the address of an object; String is a class). The sizes of primitive types are the same on every platform (unlike C). Variables must be DECLARED with a type before use: int marks; and may be initialised: int marks = 75; Local variables have no default value and must be assigned before use.",
          },
          {
            kind: "table",
            headers: ["Scope of a variable", "Declared", "Visible / lives"],
            rows: [
              [
                "Instance variable",
                "Inside a class, outside methods",
                "In all methods of the object; exists as long as the object",
              ],
              [
                "Static (class) variable",
                "With static, inside a class",
                "Shared by all objects; exists as long as the class is loaded",
              ],
              [
                "Local variable",
                "Inside a method or constructor",
                "Only in that method, from its declaration to the end of the block",
              ],
              ["Block variable", "Inside { } of if / for / while", "Only inside that block"],
              ["Parameter", "In the method header", "Inside that method"],
            ],
          },
          {
            kind: "paragraph",
            text: "Symbolic constants are created with the keyword final (a final variable can be assigned only once); class-wide constants are declared static final, e.g., static final double PI = 3.14159; by convention their names are in capitals. Type casting: WIDENING (implicit) conversion from a smaller to a larger type happens automatically (byte → short → int → long → float → double); NARROWING (explicit) conversion needs a cast, (int) 9.99, and may lose data.",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 2 — Data types, ranges and a symbolic constant",
            code: String.raw`public class DataTypes {
    static final double PI = 3.14159;                 // symbolic constant

    public static void main(String[] args) {
        byte b = 100;  short s = 30000;  int i = 2_000_000;  long l = 5_000_000_000L;
        float f = 3.14f;  double d = 3.141592653589;  char c = 'A';  boolean flag = true;

        System.out.println("byte    : " + b + "  (range " + Byte.MIN_VALUE + " to " + Byte.MAX_VALUE + ")");
        System.out.println("short   : " + s + "  (range " + Short.MIN_VALUE + " to " + Short.MAX_VALUE + ")");
        System.out.println("int     : " + i + "  (range " + Integer.MIN_VALUE + " to " + Integer.MAX_VALUE + ")");
        System.out.println("long    : " + l);
        System.out.println("float   : " + f + ",  double : " + d);
        System.out.println("char    : " + c + " (Unicode " + (int) c + "),  boolean : " + flag);
        System.out.println("Size in bits: byte=" + Byte.SIZE + " short=" + Short.SIZE + " int=" + Integer.SIZE
                           + " long=" + Long.SIZE + " char=" + Character.SIZE);
        System.out.println("PI = " + PI);
    }
}`,
            output: String.raw`byte    : 100  (range -128 to 127)
short   : 30000  (range -32768 to 32767)
int     : 2000000  (range -2147483648 to 2147483647)
long    : 5000000000
float   : 3.14,  double : 3.141592653589
char    : A (Unicode 65),  boolean : true
Size in bits: byte=8 short=16 int=32 long=64 char=16
PI = 3.14159`,
          },
        ],
      },
      {
        id: "java-operators",
        title: "4. Operators, Expressions and Type Casting in Practice",
        icon: "Sigma",
        blocks: [
          {
            kind: "table",
            headers: ["Operator type", "Operators", "Note"],
            rows: [
              ["Arithmetic", "+  −  *  /  %", "int / int gives an int; % also works on real numbers in Java"],
              ["Relational", "==  !=  <  >  <=  >=", "Result is boolean"],
              ["Logical", "&&  ||  !", "Short-circuit evaluation; & and | evaluate both sides"],
              [
                "Assignment",
                "=  +=  −=  *=  /=  %=  &=  |=  ^=  <<=  >>=",
                "Compound operators include an implicit cast",
              ],
              [
                "Increment / decrement",
                "++  −−",
                "Prefix (++x) changes then uses; postfix (x++) uses then changes",
              ],
              ["Conditional (ternary)", "condition ? value1 : value2", "Compact if-else"],
              ["Bitwise", "&  |  ^  ~  <<  >>  >>>", ">>> is the unsigned right shift (fills with 0)"],
              ["Type comparison", "instanceof", "Tests whether an object belongs to a class"],
              ["String concatenation", "+", "\"Java\" + 8 gives \"Java8\""],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 3 — Operators, expressions and type casting",
            code: String.raw`public class OperatorsCasting {
    public static void main(String[] args) {
        int a = 17, b = 5;
        System.out.println("a / b = " + a / b + ", a % b = " + a % b + ", (double) a / b = " + (double) a / b);

        int x = 5;
        int y = x++ + ++x;                 // 5 + 7
        System.out.println("x = " + x + ", y = " + y);

        int big = 130;
        byte small = (byte) big;           // narrowing conversion loses data
        System.out.println("(byte) 130 = " + small);
        System.out.println("(int) 9.99 = " + (int) 9.99);

        char ch = 'A';
        ch += 2;                           // compound assignment keeps the type char
        System.out.println("'A' + 2 = " + ch + ",  ch + 1 = " + (ch + 1));

        System.out.println(a > b ? "a is larger" : "b is larger");
        System.out.println("Bitwise: " + (12 & 10) + " " + (12 | 10) + " " + (12 ^ 10) + " " + (~12)
                           + " " + (12 << 2) + " " + (12 >> 2) + " " + (-12 >>> 28));
        String s = "Java";
        System.out.println("s instanceof String : " + (s instanceof String));
    }
}`,
            output: String.raw`a / b = 3, a % b = 2, (double) a / b = 3.4
x = 7, y = 12
(byte) 130 = -126
(int) 9.99 = 9
'A' + 2 = C,  ch + 1 = 68
a is larger
Bitwise: 8 14 6 -13 48 3 15
s instanceof String : true`,
          },
        ],
      },
      {
        id: "java-control",
        title: "5. Decision Statements, Loops and Command Line Arguments",
        icon: "GitBranch",
        blocks: [
          {
            kind: "table",
            headers: ["Statement", "Syntax", "Note"],
            rows: [
              [
                "if / if-else / else-if ladder",
                "if (cond) { ... } else if (cond) { ... } else { ... }",
                "The condition must be boolean (no 0/1 as in C)",
              ],
              [
                "switch",
                "switch (x) { case 1: ...; break; default: ...; }",
                "x may be int, char, byte, short, String or enum; break prevents fall-through",
              ],
              ["for", "for (init; cond; update) { ... }", "Entry-controlled"],
              ["while", "while (cond) { ... }", "Entry-controlled"],
              ["do-while", "do { ... } while (cond);", "Exit-controlled; runs at least once"],
              [
                "Enhanced for (for-each)",
                "for (int v : array) { ... }",
                "Reads every element of an array or collection",
              ],
              [
                "break / continue / return",
                "break; continue; return value;",
                "Labelled: break outer; continue outer;",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 4 — if-else ladder and switch (reads marks with Scanner)",
            code: String.raw`import java.util.Scanner;

public class Decision {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();

        if (marks >= 90)      System.out.println("Grade A+");
        else if (marks >= 75) System.out.println("Grade A");
        else if (marks >= 60) System.out.println("Grade B");
        else if (marks >= 40) System.out.println("Grade C");
        else                  System.out.println("Fail");

        int day = 3;
        switch (day) {
            case 1:  System.out.println("Monday");    break;
            case 2:  System.out.println("Tuesday");   break;
            case 3:  System.out.println("Wednesday"); break;
            default: System.out.println("Some other day");
        }
    }
}`,
            output: String.raw`Enter marks: 82
Grade A
Wednesday`,
          },
          {
            kind: "code",
            language: "java",
            title: "Program 5 — for, while, do-while, enhanced for and labelled loops",
            code: String.raw`public class Loops {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 5; i++) sum += i;
        System.out.println("for          : sum = " + sum);

        int n = 1234, digits = 0;
        while (n > 0) { n /= 10; digits++; }
        System.out.println("while        : digits = " + digits);

        int k = 10;
        do { System.out.println("do-while     : runs once, k = " + k); k++; } while (k < 10);

        int[] marks = {70, 85, 90};
        int total = 0;
        for (int m : marks) total += m;
        System.out.println("enhanced for : total = " + total);

        outer:
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (j == 3) continue outer;      // jump to the next i
                if (i == 3) break outer;         // leave both loops
                System.out.println("i = " + i + ", j = " + j);
            }
        }
    }
}`,
            output: String.raw`for          : sum = 15
while        : digits = 4
do-while     : runs once, k = 10
enhanced for : total = 245
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2`,
          },
          {
            kind: "paragraph",
            text: "Command line arguments are the values typed after the class name when the program is run: java CommandLine 10 20 30. They arrive as an array of Strings in the parameter args of main(); args.length gives their number and numbers must be converted with Integer.parseInt() or Double.parseDouble().",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 6 — Command line arguments (run as: java CommandLine 10 20 30)",
            code: String.raw`public class CommandLine {
    public static void main(String[] args) {
        int sum = 0;
        System.out.println("Number of arguments = " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("args[" + i + "] = " + args[i]);
            sum += Integer.parseInt(args[i]);       // String -> int
        }
        System.out.println("Sum = " + sum);
    }
}`,
            output: String.raw`Number of arguments = 3
args[0] = 10
args[1] = 20
args[2] = 30
Sum = 60`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bytecode", definition: "The platform-independent code produced by javac and executed by the JVM." },
      { term: "JVM", definition: "Java Virtual Machine — the software machine that loads, verifies and runs bytecode." },
      { term: "JDK / JRE", definition: "Development kit (compiler + tools + JRE) / runtime environment (JVM + libraries)." },
      { term: "CLASSPATH", definition: "The list of places where the JVM and compiler search for classes." },
      { term: "Token", definition: "The smallest unit of a program: keyword, identifier, literal, operator or separator." },
      { term: "Primitive type", definition: "One of the eight basic types (byte, short, int, long, float, double, char, boolean)." },
      { term: "Type casting", definition: "Converting a value from one data type to another." },
      { term: "final", definition: "A modifier that makes a variable a constant, a method non-overridable, or a class non-extendable." },
    ],
    examQuestions: [
      "What is Java? Explain its features. (Long)",
      "Differentiate between JDK, JRE and JVM. (Medium)",
      "Explain the execution process of a Java program with a diagram. (Medium)",
      "What is CLASSPATH? How is it set? (Short)",
      "Explain the structure of a Java program with an example. (Medium)",
      "What are tokens? Explain the tokens of Java. (Medium)",
      "Explain the primitive data types of Java with size and range. (Long)",
      "What is the scope of a variable? Explain the kinds of variables. (Medium)",
      "Explain type casting with an example. (Short)",
      "Explain the operators of Java with examples. (Long)",
      "Explain decision-making and looping statements of Java. (Long)",
      "What are command line arguments? Write a program that adds the numbers given on the command line. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Classes, Objects, Inheritance, Interfaces and Arrays",
    hours: 12,
    headings: [
      {
        id: "classes-objects",
        title: "1. Classes, Objects, Members and Visibility Control",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "A CLASS is a blueprint (template) that defines the data (fields / instance variables) and the behaviour (methods) of a kind of object; an OBJECT is an instance of a class created at run time with the new operator. Object-oriented programming is based on four principles: ENCAPSULATION (binding data and methods together and hiding the data — private fields with public getters/setters), INHERITANCE (a class acquires the members of another), POLYMORPHISM (one name, many forms — overloading and overriding) and ABSTRACTION (showing only what is needed — abstract classes and interfaces).",
          },
          {
            kind: "bullets",
            items: [
              "Defining a class: class Student { fields; constructors; methods }. Creating an object: Student s = new Student(); — 'Student s' declares a reference variable (on the stack) and 'new' allocates the object on the heap. Accessing members uses the dot operator: s.display(); the keyword this refers to the current object.",
              "Garbage collection: objects that are no longer referenced are removed automatically by the garbage collector; the programmer does not free memory.",
            ],
          },
          {
            kind: "table",
            headers: [
              "Access modifier (visibility control)",
              "Same class",
              "Same package",
              "Subclass in another package",
              "Anywhere",
            ],
            rows: [
              ["private", "Yes", "No", "No", "No"],
              ["default (no keyword)", "Yes", "Yes", "No", "No"],
              ["protected", "Yes", "Yes", "Yes", "No"],
              ["public", "Yes", "Yes", "Yes", "Yes"],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 7 — Class, objects, private members, constructors, this and static",
            code: String.raw`class Student {
    private int roll;                       // private: hidden from other classes (encapsulation)
    private String name;
    private double marks;
    static int count = 0;                   // static: one copy shared by all objects

    Student(int roll, String name, double marks) {   // parameterised constructor
        this.roll = roll;                   // this.roll = the field, roll = the parameter
        this.name = name;
        this.marks = marks;
        count++;
    }

    Student() { this(0, "Unknown", 0.0); }  // constructor chaining with this(...)

    void setMarks(double marks) {           // setter with validation
        if (marks >= 0 && marks <= 100) this.marks = marks;
    }

    String grade() { return marks >= 60 ? "First" : marks >= 40 ? "Second" : "Fail"; }

    void display() { System.out.println(roll + "  " + name + "  " + marks + "  " + grade()); }
}

public class StudentDemo {
    public static void main(String[] args) {
        Student s1 = new Student(1, "Amit", 78.5);
        Student s2 = new Student();          // default values through this(...)
        s2.setMarks(55);
        s2.setMarks(150);                    // rejected: outside 0..100
        s1.display();
        s2.display();
        System.out.println("Students created = " + Student.count);
    }
}`,
            output: String.raw`1  Amit  78.5  First
0  Unknown  55.0  Second
Students created = 2`,
          },
        ],
      },
      {
        id: "constructors-methods",
        title: "2. Constructors, Method Overloading, Static Members and Nesting of Methods",
        icon: "Settings",
        blocks: [
          {
            kind: "table",
            headers: ["Constructor", "Method"],
            rows: [
              ["Same name as the class, no return type", "Any name, has a return type (or void)"],
              [
                "Called automatically when an object is created with new",
                "Called explicitly on an object or class",
              ],
              ["Used to initialise the object", "Used to perform operations"],
              [
                "If none is written, the compiler supplies a default constructor (no arguments)",
                "Not supplied automatically",
              ],
              [
                "Can be overloaded; cannot be inherited, abstract or final",
                "Can be overloaded, inherited and overridden",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Method overloading (compile-time polymorphism): several methods in one class with the same name but a different number or type of parameters; the return type alone is not enough. The compiler chooses the method by the arguments.",
              "Static members: a static variable or method belongs to the CLASS, not to an object; it is accessed as ClassName.member, and a static method cannot use this or non-static members directly. A static block { } runs once when the class is loaded.",
              "Nesting of methods: a method calling another method of the same class (Java does not allow defining a method inside a method).",
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 8 — Method overloading and nesting of methods",
            code: String.raw`public class Overload {
    static int add(int a, int b)             { return a + b; }
    static int add(int a, int b, int c)      { return a + b + c; }
    static double add(double a, double b)    { return a + b; }
    static String add(String a, String b)    { return a + b; }

    static int square(int n) { return n * n; }
    static int sumOfSquares(int a, int b) {           // nesting: one method calls another
        return square(a) + square(b);
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));               // add(int, int)
        System.out.println(add(2, 3, 4));            // add(int, int, int)
        System.out.println(add(2.5, 3.5));           // add(double, double)
        System.out.println(add("Ja", "va"));         // add(String, String)
        System.out.println(sumOfSquares(3, 4));
    }
}`,
            output: String.raw`5
9
6.0
Java
25`,
          },
        ],
      },
      {
        id: "inheritance",
        title: "3. Inheritance: Extending a Class, super, Overriding, final and finalize()",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "INHERITANCE lets a new class (subclass, child, derived class) acquire the fields and methods of an existing class (superclass, parent, base class) using the keyword extends. It gives code reuse and the 'is-a' relationship. Java supports single, multilevel and hierarchical inheritance among classes; a class can extend only ONE class (no multiple inheritance of classes, to avoid ambiguity), but multiple inheritance of type is achieved through interfaces. Every class extends the class Object implicitly.",
          },
          { kind: "diagram", diagramId: "inheritance-types", caption: "Fig 2.1 — Types of inheritance in Java" },
          {
            kind: "table",
            headers: ["Keyword", "Use"],
            rows: [
              ["extends", "class Employee extends Person { ... }"],
              [
                "super",
                "Refers to the superclass: super(args) calls the superclass constructor (must be the first statement); super.method() calls the superclass version of an overridden method; super.field accesses a hidden field.",
              ],
              ["final variable", "A constant — its value cannot be changed after assignment."],
              ["final method", "Cannot be overridden in a subclass."],
              ["final class", "Cannot be extended (e.g., String)."],
              [
                "abstract",
                "For classes that cannot be instantiated and methods that have no body (see next section).",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Method overloading", "Method overriding"],
            rows: [
              [
                "Same class (or subclass); same name, DIFFERENT parameters",
                "Subclass redefines a method of the superclass with the SAME name and parameters",
              ],
              [
                "Resolved at compile time (static binding)",
                "Resolved at run time by the actual object (dynamic binding) — run-time polymorphism",
              ],
              [
                "Return type may differ",
                "Return type must be the same (or a subtype); access cannot be weaker",
              ],
              [
                "Static and private methods can be overloaded",
                "Static, private and final methods cannot be overridden",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 9 — Multilevel inheritance, super, overriding and final",
            code: String.raw`class Person {
    String name;
    Person(String name) { this.name = name; }
    void show() { System.out.println("Person   : " + name); }
}

class Employee extends Person {
    double salary;
    Employee(String name, double salary) {
        super(name);                       // call the superclass constructor
        this.salary = salary;
    }
    @Override
    void show() {                          // overriding
        super.show();                      // call the superclass version
        System.out.println("Salary   : " + salary);
    }
}

class Manager extends Employee {
    final String role = "Manager";         // final variable: a constant
    Manager(String name, double salary) { super(name, salary); }
    @Override
    void show() {
        super.show();
        System.out.println("Role     : " + role);
    }
}

public class Inherit {
    public static void main(String[] args) {
        Person p = new Manager("Anil", 60000);   // superclass reference, subclass object
        p.show();                                // dynamic binding: Manager's show() runs
        System.out.println("p is an Employee? " + (p instanceof Employee));
    }
}`,
            output: String.raw`Person   : Anil
Salary   : 60000.0
Role     : Manager
p is an Employee? true`,
          },
          {
            kind: "paragraph",
            text: "finalize(): the method protected void finalize() of the class Object was meant to be called by the garbage collector just before an object is destroyed, to release resources. It is unpredictable (it may never run) and has been DEPRECATED since Java 9 and marked 'for removal' — modern programs use try-with-resources (AutoCloseable) or explicit close() methods instead. It is still part of the syllabus, so remember the idea: the garbage collector calls finalize() once, before reclaiming the object.",
          },
        ],
      },
      {
        id: "abstract-interface",
        title: "4. Abstract Classes, Methods and Interfaces",
        icon: "Layers",
        blocks: [
          {
            kind: "table",
            headers: ["Abstract class", "Interface"],
            rows: [
              [
                "Declared with abstract class; may have abstract methods (no body) and concrete methods",
                "Declared with interface; methods are abstract by default (plus default and static methods since Java 8)",
              ],
              [
                "A class extends only one abstract class",
                "A class can implement any number of interfaces (multiple inheritance of type)",
              ],
              [
                "Can have instance variables, constructors and any access modifiers",
                "Only constants (public static final); no constructors",
              ],
              [
                "Cannot be instantiated; a subclass must implement all abstract methods (or be abstract too)",
                "Cannot be instantiated; the implementing class must define all its methods (public)",
              ],
              [
                "Use when classes share common code and state (is-a)",
                "Use to define a capability/contract (can-do): Drawable, Comparable",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 10 — Abstract class, interfaces and run-time polymorphism",
            code: String.raw`interface Drawable  { void draw();  default void info() { System.out.println("This is a drawable shape"); } }
interface Resizable { void resize(int percent); }

abstract class Shape {
    abstract double area();                              // abstract method: no body
    void describe() {                                    // concrete method
        System.out.println(getClass().getSimpleName() + " area = " + String.format("%.2f", area()));
    }
}

class Circle extends Shape implements Drawable, Resizable {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
    public void draw() { System.out.println("Drawing a circle of radius " + r); }
    public void resize(int percent) { r = r * percent / 100.0; }
}

class Rect extends Shape {
    double w, h;
    Rect(double w, double h) { this.w = w; this.h = h; }
    double area() { return w * h; }
}

public class AbstractDemo {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rect(3, 4) };
        for (Shape s : shapes) s.describe();             // the right area() is chosen at run time

        Circle c = new Circle(2);
        c.draw();
        c.info();                                        // default method of the interface
        c.resize(50);                                    // radius becomes 1.0
        c.describe();
    }
}`,
            output: String.raw`Circle area = 12.57
Rect area = 12.00
Drawing a circle of radius 2.0
This is a drawable shape
Circle area = 3.14`,
          },
        ],
      },
      {
        id: "arrays-wrappers",
        title: "5. Arrays and Wrapper Classes",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "An ARRAY is an object that stores a fixed number of elements of the same type in contiguous memory, indexed from 0. Creating an array takes two steps: declare (int[] a;) and create (a = new int[5];) — or both together, or with an initialiser: int[] a = {10, 20, 30}; The length is available as a.length (a field, not a method). Accessing an index outside 0 .. length−1 throws ArrayIndexOutOfBoundsException at run time. A TWO-DIMENSIONAL array is an array of arrays: int[][] m = new int[3][4]; rows may have different lengths (jagged array).",
          },
          {
            kind: "paragraph",
            text: "WRAPPER CLASSES (in java.lang) turn the primitive types into objects: Byte, Short, Integer, Long, Float, Double, Character, Boolean. They are needed by collections (which store only objects) and provide useful methods (parseInt(), valueOf(), toString(), MAX_VALUE, isDigit()). Autoboxing converts a primitive to its wrapper automatically (Integer x = 25;) and unboxing does the reverse (int y = x;).",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 11 — One- and two-dimensional arrays, jagged arrays and wrapper classes",
            code: String.raw`import java.util.Arrays;

public class ArraysWrapper {
    public static void main(String[] args) {
        int[] a = new int[5];
        for (int i = 0; i < a.length; i++) a[i] = (i + 1) * 10;
        int max = a[0];
        for (int v : a) if (v > max) max = v;
        System.out.println("Array = " + Arrays.toString(a) + ", length = " + a.length + ", max = " + max);

        int[][] m = { {1, 2, 3}, {4, 5, 6} };
        int[][] t = new int[3][2];                       // transpose
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                t[j][i] = m[i][j];
        System.out.println("Matrix    = " + Arrays.deepToString(m));
        System.out.println("Transpose = " + Arrays.deepToString(t));

        int[][] jag = new int[3][];                      // jagged array
        for (int i = 0; i < 3; i++) {
            jag[i] = new int[i + 1];
            Arrays.fill(jag[i], i + 1);
        }
        System.out.println("Jagged    = " + Arrays.deepToString(jag));

        int[] unsorted = {42, 7, 19, 3};
        Arrays.sort(unsorted);
        System.out.println("Sorted    = " + Arrays.toString(unsorted));

        Integer boxed = 25;                              // autoboxing
        int prim = boxed;                                // unboxing
        int n = Integer.parseInt("123");
        double d = Double.parseDouble("3.5");
        System.out.println(boxed + " " + prim + " " + (n + 1) + " " + (d * 2) + " "
                           + Integer.toBinaryString(10) + " " + Integer.MAX_VALUE + " " + Character.isDigit('7'));
    }
}`,
            output: String.raw`Array = [10, 20, 30, 40, 50], length = 5, max = 50
Matrix    = [[1, 2, 3], [4, 5, 6]]
Transpose = [[1, 4], [2, 5], [3, 6]]
Jagged    = [[1], [2, 2], [3, 3, 3]]
Sorted    = [3, 7, 19, 42]
25 25 124 7.0 1010 2147483647 true`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Class / Object", definition: "A blueprint / an instance of the blueprint created with new." },
      { term: "Encapsulation", definition: "Binding data and methods together and hiding the data with private access." },
      { term: "Constructor", definition: "A special method with the class name that initialises a new object." },
      { term: "Overloading / Overriding", definition: "Same name, different parameters in one class / same signature redefined in a subclass." },
      { term: "super / this", definition: "Reference to the superclass / to the current object." },
      { term: "Abstract class", definition: "A class that cannot be instantiated and may contain abstract methods." },
      { term: "Interface", definition: "A contract of abstract methods that a class implements." },
      { term: "Wrapper class", definition: "A class that wraps a primitive value into an object (Integer, Double ...)." },
    ],
    examQuestions: [
      "Explain the principles of object-oriented programming. (Medium)",
      "How do you define a class and create objects? Write a program with a class Student. (Long)",
      "What is a constructor? Explain its types with examples. (Medium)",
      "What is method overloading? How is it different from overriding? (Medium)",
      "Explain static members with an example. (Short)",
      "What is inheritance? Explain its types with examples in Java. (Long)",
      "Explain the use of the keywords super, final and this. (Medium)",
      "What is finalize()? Explain briefly. (Short)",
      "Differentiate between an abstract class and an interface. Write a program using both. (Long)",
      "Explain the visibility (access) modifiers of Java. (Medium)",
      "What are arrays? Explain one-dimensional and two-dimensional arrays with programs. (Long)",
      "What are wrapper classes? Explain autoboxing and unboxing. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Packages, Multithreaded Programming and Exception Handling",
    hours: 12,
    headings: [
      {
        id: "packages",
        title: "1. Packages",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "A PACKAGE is a group of related classes and interfaces stored together in a directory (folder) of the same name. Packages avoid name conflicts (two classes with the same name can live in different packages), give access protection (package-private members) and make classes easy to find and reuse. Java itself is organised in packages called the JAVA API (Application Programming Interface).",
          },
          {
            kind: "table",
            headers: ["Java API package", "Contents"],
            rows: [
              [
                "java.lang",
                "Fundamental classes: Object, String, StringBuffer, Math, Integer (wrappers), Thread, System, exceptions. Imported automatically.",
              ],
              ["java.util", "Utilities: collections (ArrayList, HashMap), Scanner, Date, Random, Arrays."],
              ["java.io", "Input/output: streams, readers, writers, File."],
              ["java.awt, javax.swing", "Graphical user interface: windows, components, layouts, events."],
              ["java.applet", "Applet class for browser programs."],
              ["java.net", "Networking: Socket, ServerSocket, URL."],
              ["java.sql", "Database access with JDBC."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Using system packages: import java.util.Scanner; (one class), import java.util.*; (all classes of the package), or the fully qualified name java.util.Scanner sc = new java.util.Scanner(System.in);  The import statement comes after the package statement and before the classes.",
              "Naming conventions: package names are written in lower case; to make them unique companies use the reverse of their Internet domain name, e.g., com.example.project.util; the classes must be stored in the matching directory structure com/example/project/util.",
              "Creating a package: (1) write the statement package mypack; as the FIRST statement of the source file; (2) make the classes and members that others need public; (3) compile with javac -d . Calc.java — the -d option creates the directory mypack and puts Calc.class in it. Adding a class to an existing package: write the same package statement at the top of the new file and compile it the same way.",
              "Accessing a package: from another program use import mypack.Calc; (or mypack.*) and set the CLASSPATH so that the directory containing mypack is found; or use the fully qualified name mypack.Calc.add(2, 3).",
              "Hiding classes: a class declared WITHOUT the public keyword has package access — it is visible only to other classes of the same package and hidden from the outside world. Only one public class is allowed per file and its name must match the file name.",
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 12 — A class placed in a package (compile: javac -d . Calc.java;  run: java mypack.Calc)",
            code: String.raw`package mypack;

public class Calc {
    public static int add(int a, int b) { return a + b; }

    public static void main(String[] args) {
        System.out.println("Sum from package mypack = " + add(4, 6));
    }
}

class Helper {                       // no 'public': hidden outside the package
    static String secret() { return "package-private"; }
}`,
            output: "Sum from package mypack = 10",
          },
          {
            kind: "code",
            language: "java",
            title: "Using the package from another file (not run — needs the compiled mypack on the CLASSPATH)",
            code: String.raw`import mypack.Calc;                  // or: import mypack.*;

public class UsePackage {
    public static void main(String[] args) {
        System.out.println(Calc.add(20, 22));       // 42
        // mypack.Helper.secret();                  // error: Helper is not public
    }
}`,
          },
        ],
      },
      {
        id: "threads",
        title: "2. Multithreaded Programming: Creating Threads, Life Cycle, Priority and Synchronization",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "A THREAD is a lightweight path of execution inside a program. MULTITASKING lets an operating system run several programs at once (process-based); MULTITHREADING runs several threads of ONE program at once (thread-based). Threads of a process share the same memory, so they are cheap to create and communicate easily; a typical use is downloading a file in one thread while the user interface stays responsive. Every Java program has a main thread.",
          },
          {
            kind: "table",
            headers: ["Way of creating a thread", "Steps"],
            rows: [
              [
                "Extending the Thread class",
                "(1) class MyThread extends Thread; (2) override public void run() with the code of the thread; (3) create an object and call start(). start() creates the new thread which then calls run() — calling run() directly would not create a thread.",
              ],
              [
                "Implementing the Runnable interface (preferred)",
                "(1) class MyTask implements Runnable; (2) implement run(); (3) pass the object to the constructor: new Thread(new MyTask()).start(). Allows the class to extend another class as well; a lambda can be used: new Thread(() -> ...).",
              ],
            ],
          },
          { kind: "diagram", diagramId: "thread-life-cycle", caption: "Fig 3.1 — Life cycle of a thread" },
          {
            kind: "table",
            headers: ["State", "Meaning"],
            rows: [
              ["New", "The thread object has been created but start() has not been called."],
              [
                "Runnable",
                "start() has been called; the thread is ready and waits for (or is using) the CPU.",
              ],
              ["Running", "The scheduler has given it the CPU and run() is executing."],
              [
                "Blocked / Waiting / Timed waiting",
                "The thread cannot run: waiting for a lock (blocked), for notify() or another thread (waiting), or sleeping for a given time (sleep(ms) — timed waiting). After the condition ends it returns to Runnable.",
              ],
              ["Terminated (Dead)", "run() has finished or the thread was stopped; it cannot be restarted."],
            ],
          },
          {
            kind: "table",
            headers: ["Thread method", "Purpose"],
            rows: [
              ["start()", "Starts the thread (calls run())."],
              ["run()", "The code executed by the thread."],
              [
                "sleep(long ms)",
                "Pauses the current thread for ms milliseconds (throws InterruptedException).",
              ],
              ["join()", "Makes the calling thread wait until this thread finishes."],
              ["yield()", "Hints that the current thread is willing to give up the CPU."],
              ["isAlive(), getName(), setName()", "State and name of the thread."],
              [
                "setPriority(int) / getPriority()",
                "Priority from Thread.MIN_PRIORITY (1) to Thread.MAX_PRIORITY (10); default NORM_PRIORITY (5). Higher priority threads are preferred by the scheduler but no result is guaranteed.",
              ],
              ["interrupt()", "Interrupts a sleeping or waiting thread."],
              ["wait(), notify(), notifyAll()", "Inter-thread communication inside synchronized code."],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Stopping and blocking a thread: the old methods stop(), suspend() and resume() are deprecated because they are unsafe. A thread should stop cooperatively — by letting run() end, or by checking a volatile boolean flag or the interrupted status. A thread is blocked by sleep(), wait(), join(), waiting for I/O or for a synchronized lock.",
              "Thread exceptions: InterruptedException (a sleeping/waiting thread is interrupted — must be caught), IllegalThreadStateException (calling start() twice), IllegalMonitorStateException (calling wait()/notify() outside synchronized code), and IllegalArgumentException (priority outside 1–10).",
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 13 — Extending Thread, implementing Runnable, join(), thread states and priorities",
            code: String.raw`class MyThread extends Thread {
    MyThread(String name) { super(name); }
    public void run() {
        for (int i = 1; i <= 3; i++) System.out.println(getName() + " prints " + i);
    }
}

class MyTask implements Runnable {
    public void run() { System.out.println("Runnable is running in " + Thread.currentThread().getName()); }
}

public class ThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t1 = new MyThread("Thread-A");
        t1.start();
        t1.join();                                   // wait until t1 finishes

        Thread t2 = new Thread(new MyTask(), "Thread-B");
        t2.start();
        t2.join();
        System.out.println("main continues after both threads");

        Thread t3 = new Thread(() -> {
            try { Thread.sleep(300); } catch (InterruptedException e) { }
        });
        System.out.println("State after creation  : " + t3.getState());
        t3.start();
        Thread.sleep(100);
        System.out.println("State while sleeping  : " + t3.getState());
        t3.join();
        System.out.println("State after finishing : " + t3.getState());

        System.out.println("Priorities: min=" + Thread.MIN_PRIORITY + ", normal=" + Thread.NORM_PRIORITY
                           + ", max=" + Thread.MAX_PRIORITY);
    }
}`,
            output: String.raw`Thread-A prints 1
Thread-A prints 2
Thread-A prints 3
Runnable is running in Thread-B
main continues after both threads
State after creation  : NEW
State while sleeping  : TIMED_WAITING
State after finishing : TERMINATED
Priorities: min=1, normal=5, max=10`,
          },
          {
            kind: "paragraph",
            text: "SYNCHRONIZATION: when two threads change the same data at the same time, the result depends on the timing (a RACE CONDITION) — for example two threads doing count++ (read, add, write) can overwrite each other's update, as in the lost-update problem of databases. A method or block declared synchronized can be executed by only one thread at a time on the same object (it locks the object's MONITOR); other threads wait. The danger of locking is DEADLOCK — two threads each holding a lock that the other needs.",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 14 — A synchronized method protects a shared counter",
            code: String.raw`class Counter {
    private int c = 0;
    synchronized void increment() { c++; }         // only one thread at a time
    int get() { return c; }
}

public class SyncDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Runnable job = () -> { for (int i = 0; i < 1000; i++) counter.increment(); };

        Thread a = new Thread(job), b = new Thread(job);
        a.start();  b.start();
        a.join();   b.join();
        System.out.println("Final count = " + counter.get());   // always 2000
    }
}`,
            output: "Final count = 2000",
          },
        ],
      },
      {
        id: "exceptions",
        title: "3. Managing Errors and Exceptions",
        icon: "AlertTriangle",
        blocks: [
          {
            kind: "table",
            headers: ["Type of error", "Meaning", "Example"],
            rows: [
              [
                "Compile-time (syntax) error",
                "Violation of the language rules; found by javac; the program is not produced.",
                "Missing semicolon, undeclared variable, type mismatch",
              ],
              [
                "Run-time error (exception)",
                "Occurs while the program is running and stops it if not handled.",
                "Division by zero, array index out of range, file not found",
              ],
              ["Logical error", "The program runs but gives wrong results.", "Using + instead of *"],
            ],
          },
          {
            kind: "paragraph",
            text: "An EXCEPTION is an abnormal event during execution that disturbs the normal flow of the program. Java handles it with objects: when an error occurs an exception object is created and THROWN; the runtime looks for a matching handler (catch block); if none is found the program terminates with a message. Exception handling separates error-handling code from normal code and lets the program continue.",
          },
          { kind: "diagram", diagramId: "exception-hierarchy", caption: "Fig 3.2 — Hierarchy of exception classes" },
          {
            kind: "table",
            headers: ["Kind", "Classes", "Rule"],
            rows: [
              [
                "Checked exceptions",
                "Subclasses of Exception except RuntimeException: IOException, SQLException, InterruptedException, ClassNotFoundException",
                "The compiler forces you to catch them or declare them with throws.",
              ],
              [
                "Unchecked exceptions",
                "RuntimeException and its subclasses: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException, ClassCastException",
                "Not checked by the compiler; usually programming mistakes.",
              ],
              [
                "Errors",
                "Subclasses of Error: OutOfMemoryError, StackOverflowError",
                "Serious problems of the JVM; should not be caught.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Keyword", "Purpose"],
            rows: [
              ["try { ... }", "Encloses the statements that may throw an exception."],
              [
                "catch (Type e) { ... }",
                "Handles the exception of that type; several catch blocks may follow one try (multiple catch) — the more specific exception must come before the general one.",
              ],
              [
                "finally { ... }",
                "Always executed (whether or not an exception occurred), used to release resources (close files).",
              ],
              ["throw", "Throws an exception object explicitly: throw new IllegalArgumentException('bad');"],
              [
                "throws",
                "Written in a method header to declare the checked exceptions the method may throw.",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 15 — try, multiple catch and finally",
            code: String.raw`public class ExceptionDemo {
    static int divide(int a, int b) { return a / b; }

    public static void main(String[] args) {
        try {
            System.out.println("10 / 2 = " + divide(10, 2));
            System.out.println("10 / 0 = " + divide(10, 0));       // throws ArithmeticException
            System.out.println("this line is skipped");
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("finally block always runs");
        }

        String[] tests = {"1", "abc", "25", null};
        int[] arr = new int[3];
        for (String t : tests) {
            try {
                int v = Integer.parseInt(t);
                arr[v] = 1;
                System.out.println("arr[" + v + "] set");
            } catch (NumberFormatException e) {
                System.out.println("Not a number: " + e.getMessage());
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Bad index: " + e.getMessage());
            } catch (Exception e) {                                 // general handler last
                System.out.println("Other: " + e);
            }
        }
    }
}`,
            output: String.raw`10 / 2 = 5
Caught: / by zero
finally block always runs
arr[1] set
Not a number: For input string: "abc"
Bad index: Index 25 out of bounds for length 3
Not a number: Cannot parse null string`,
          },
          {
            kind: "code",
            language: "java",
            title: "Program 16 — Throwing our own exception (throw, throws and a user-defined exception class)",
            code: String.raw`class InsufficientFundsException extends Exception {          // user-defined checked exception
    InsufficientFundsException(String message) { super(message); }
}

class Account {
    private double balance;
    Account(double balance) { this.balance = balance; }

    void withdraw(double amount) throws InsufficientFundsException {   // declares the exception
        if (amount > balance)
            throw new InsufficientFundsException("Balance " + balance + " is less than " + amount);
        balance -= amount;
    }
    double getBalance() { return balance; }
}

public class CustomException {
    public static void main(String[] args) {
        Account acc = new Account(500);
        try {
            acc.withdraw(300);
            System.out.println("Withdrew 300, balance = " + acc.getBalance());
            acc.withdraw(900);                                      // throws
            System.out.println("not reached");
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Final balance = " + acc.getBalance());
        }
    }
}`,
            output: String.raw`Withdrew 300, balance = 200.0
Error: Balance 200.0 is less than 900.0
Final balance = 200.0`,
          },
          {
            kind: "paragraph",
            text: "Using exceptions for debugging: the exception object records where and why the error happened. getMessage() gives the description, toString() the class name and message, and printStackTrace() prints the CALL STACK — the chain of method calls (with file names and line numbers) that led to the error, starting with the method where it occurred. Reading the stack trace from the top tells the debugger exactly which line to examine.",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 17 — Using the stack trace to locate an error",
            code: String.raw`public class Debug {
    static int risky(int[] data, int index) {
        return data[index];                          // line 3: fails when the index is wrong
    }
    static void process() {
        risky(new int[2], 5);
    }
    public static void main(String[] args) {
        try {
            process();
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Message  : " + e.getMessage());
            System.out.println("toString : " + e);
            e.printStackTrace(System.out);           // where did it happen, and who called it?
        }
    }
}`,
            output: String.raw`Message  : Index 5 out of bounds for length 2
toString : java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 2
java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 2
	at Debug.risky(Debug.java:3)
	at Debug.process(Debug.java:6)
	at Debug.main(Debug.java:10)`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Package", definition: "A group of related classes and interfaces stored in a directory of the same name." },
      { term: "Thread", definition: "A lightweight path of execution within a program." },
      { term: "Runnable", definition: "An interface with the single method run() that defines the task of a thread." },
      { term: "Synchronization", definition: "Allowing only one thread at a time to use shared data (synchronized methods/blocks)." },
      { term: "Deadlock", definition: "Threads waiting for each other's locks forever." },
      { term: "Exception", definition: "An abnormal run-time event represented by an object that can be caught and handled." },
      { term: "Checked exception", definition: "An exception that the compiler forces the programmer to handle or declare." },
      { term: "finally", definition: "A block that is always executed after try/catch." },
    ],
    examQuestions: [
      "What is a package? Explain how to create and access a package with an example. (Long)",
      "Write a note on the Java API packages. (Medium)",
      "What is a package-private (hidden) class? (Short)",
      "What is a thread? Explain the ways of creating a thread with examples. (Long)",
      "Explain the life cycle of a thread with a diagram. (Long)",
      "Explain thread priority and the important thread methods. (Medium)",
      "What is synchronization? Why is it needed? Write a program. (Medium)",
      "What is an exception? Explain the exception hierarchy. (Medium)",
      "Explain try, catch, finally, throw and throws with examples. (Long)",
      "Write a program with multiple catch statements. (Medium)",
      "How do you create a user-defined exception? Write a program. (Long)",
      "How can exceptions be used for debugging? (Short)",
    ],
  },
  {
    unitNumber: 4,
    title: "Strings, Math Functions, Input/Output Streams and Applets",
    hours: 10,
    headings: [
      {
        id: "strings-math",
        title: "1. String Handling and Mathematical Functions",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "In Java a String is an OBJECT of the class java.lang.String (not a character array ending in '\\0' as in C). Strings are IMMUTABLE — once created their contents never change; every 'modification' creates a new String. For strings that change often use the mutable classes StringBuffer (thread-safe) and StringBuilder (faster, not thread-safe). String literals are stored in the string pool, so two equal literals refer to the same object; new String(\"hello\") always creates a new object. == compares references, equals() compares the contents.",
          },
          {
            kind: "table",
            headers: ["String method", "Purpose", "Example on s = \"Java Programming\""],
            rows: [
              ["length()", "Number of characters", "s.length() → 16"],
              ["charAt(i)", "Character at index i", "s.charAt(0) → 'J'"],
              [
                "substring(b) / substring(b, e)",
                "Part of the string (e is exclusive)",
                "s.substring(5) → \"Programming\"",
              ],
              [
                "indexOf(str) / lastIndexOf()",
                "Position of the first / last occurrence, −1 if absent",
                "s.indexOf(\"Pro\") → 5",
              ],
              ["toUpperCase() / toLowerCase()", "Change case", "\"JAVA PROGRAMMING\""],
              ["trim()", "Removes leading and trailing spaces", "\"  hi \".trim() → \"hi\""],
              ["replace(old, new)", "Replaces characters or substrings", "s.replace('a', 'A')"],
              ["equals() / equalsIgnoreCase()", "Compares contents", "\"Java\".equals(\"java\") → false"],
              [
                "compareTo()",
                "Alphabetical comparison: 0 if equal, negative if smaller, positive if greater",
                "\"apple\".compareTo(\"banana\") → −1",
              ],
              [
                "startsWith() / endsWith() / contains()",
                "Tests on the contents",
                "s.contains(\"gram\") → true",
              ],
              ["split(regex)", "Breaks into a String array", "\"a,b,c\".split(\",\")"],
              ["concat(), + , valueOf(), isEmpty()", "Joining and conversion", "String.valueOf(25)"],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 18 — String, StringBuilder and the difference between == and equals()",
            code: String.raw`public class StringDemo {
    public static void main(String[] args) {
        String s = "  Java Programming  ";
        String t = s.trim();
        System.out.println("length = " + s.length() + ", after trim = " + t.length());
        System.out.println(t.toUpperCase() + " | " + t.toLowerCase());
        System.out.println(t.charAt(0) + " " + t.indexOf("Pro") + " " + t.substring(5) + " " + t.substring(0, 4));
        System.out.println(t.replace('a', 'A') + " | " + t.contains("gram") + " | " + t.startsWith("Java"));
        System.out.println("apple".compareTo("banana") + " " + "Java".equals("java") + " " + "Java".equalsIgnoreCase("java"));

        String[] parts = "red,green,blue".split(",");
        System.out.println(parts.length + " parts, last = " + parts[parts.length - 1]);

        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World").insert(0, ">> ").reverse();          // mutable: the same object is changed
        System.out.println(sb);

        String a = "hello", b = "hello", c = new String("hello");
        System.out.println((a == b) + " " + (a == c) + " " + a.equals(c));
    }
}`,
            output: String.raw`length = 20, after trim = 16
JAVA PROGRAMMING | java programming
J 5 Programming Java
JAvA ProgrAmming | true | true
-1 false true
3 parts, last = blue
dlroW olleH >>
true false true`,
          },
          {
            kind: "table",
            headers: ["Math method (java.lang.Math)", "Result", "Example"],
            rows: [
              ["sqrt(x), cbrt(x)", "Square root, cube root", "Math.sqrt(144) → 12.0"],
              ["pow(x, y)", "x raised to the power y", "Math.pow(2, 10) → 1024.0"],
              ["abs(x), max(a, b), min(a, b)", "Absolute value, larger, smaller", "Math.abs(-7.5) → 7.5"],
              [
                "ceil(x), floor(x), round(x)",
                "Round up, round down, round to nearest",
                "Math.ceil(4.2) → 5.0",
              ],
              [
                "sin, cos, tan (radians), toRadians(), toDegrees()",
                "Trigonometry",
                "Math.sin(Math.PI / 2) → 1.0",
              ],
              ["log(x), log10(x), exp(x)", "Natural log, common log, e^x", "Math.log10(1000) → 3.0"],
              ["random()", "Random double in [0.0, 1.0)", "(int) (Math.random() * 6) + 1"],
              ["Math.PI, Math.E", "Constants", "3.141592653589793"],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 19 — Mathematical functions",
            code: String.raw`public class MathDemo {
    public static void main(String[] args) {
        System.out.println("sqrt(144)   = " + Math.sqrt(144));
        System.out.println("pow(2, 10)  = " + Math.pow(2, 10));
        System.out.println("abs(-7.5)   = " + Math.abs(-7.5));
        System.out.println("ceil(4.2)   = " + Math.ceil(4.2) + ",  floor(4.8) = " + Math.floor(4.8));
        System.out.println("round(4.5)  = " + Math.round(4.5) + ",  round(-4.5) = " + Math.round(-4.5));
        System.out.println("max(10, 25) = " + Math.max(10, 25) + ",  min(10, 25) = " + Math.min(10, 25));
        System.out.println("sin(90 deg) = " + Math.sin(Math.toRadians(90)));
        System.out.println("log10(1000) = " + Math.log10(1000) + ",  cbrt(27) = " + Math.cbrt(27));
        System.out.println("hypot(3, 4) = " + Math.hypot(3, 4));
        System.out.println("PI = " + Math.PI);
    }
}`,
            output: String.raw`sqrt(144)   = 12.0
pow(2, 10)  = 1024.0
abs(-7.5)   = 7.5
ceil(4.2)   = 5.0,  floor(4.8) = 4.0
round(4.5)  = 5,  round(-4.5) = -4
max(10, 25) = 25,  min(10, 25) = 10
sin(90 deg) = 1.0
log10(1000) = 3.0,  cbrt(27) = 3.0
hypot(3, 4) = 5.0
PI = 3.141592653589793`,
          },
        ],
      },
      {
        id: "io-streams",
        title: "2. Input/Output Basics: Streams, Console Input and Data Streams",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "A STREAM is a flow of data between a program and a source or destination (keyboard, screen, file, network). Java's java.io package has two families: BYTE STREAMS (InputStream and OutputStream and their subclasses) read and write raw bytes — used for binary data such as images; CHARACTER STREAMS (Reader and Writer) read and write Unicode characters — used for text. Data is normally wrapped in BUFFERED streams for speed.",
          },
          {
            kind: "table",
            headers: ["Byte streams", "Character streams", "Purpose"],
            rows: [
              ["InputStream / OutputStream", "Reader / Writer", "Abstract base classes"],
              ["FileInputStream / FileOutputStream", "FileReader / FileWriter", "Read / write files"],
              [
                "BufferedInputStream / BufferedOutputStream",
                "BufferedReader / BufferedWriter",
                "Buffering (readLine() is in BufferedReader)",
              ],
              [
                "DataInputStream / DataOutputStream",
                "—",
                "Read / write primitive types (int, double, UTF strings) in binary form",
              ],
              [
                "—",
                "InputStreamReader / OutputStreamWriter",
                "Bridge: converts a byte stream to a character stream",
              ],
              ["PrintStream (System.out)", "PrintWriter", "Formatted printing: print(), println(), printf()"],
            ],
          },
          {
            kind: "table",
            headers: ["Standard I/O stream", "Object", "Type"],
            rows: [
              ["Standard input (keyboard)", "System.in", "InputStream"],
              ["Standard output (screen)", "System.out", "PrintStream"],
              ["Standard error (screen)", "System.err", "PrintStream — used for error messages"],
            ],
          },
          {
            kind: "paragraph",
            text: "Reading from the keyboard: (1) a single CHARACTER — System.in.read() returns one byte as an int (or read() of a Reader); (2) a LINE or string — wrap System.in in an InputStreamReader and a BufferedReader and call readLine(), which returns a String (null at end of input); numbers are then converted with Integer.parseInt(); (3) the Scanner class (java.util) with nextInt(), nextDouble(), next(), nextLine() — simpler for tokens.",
          },
          {
            kind: "code",
            language: "java",
            title: "Program 20 — Reading a line, a number and a character with BufferedReader",
            code: String.raw`import java.io.*;

public class ReadInput {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter your name: ");
        String name = br.readLine();                         // a whole line
        System.out.print("Enter your age: ");
        int age = Integer.parseInt(br.readLine());           // String -> int
        System.out.print("Enter a character: ");
        char ch = (char) br.read();                          // a single character

        System.out.println("Hello " + name + ", next year you will be " + (age + 1) + ", character = " + ch);
    }
}`,
            output: String.raw`Enter your name: Amit
Enter your age: 21
Enter a character: X
Hello Amit, next year you will be 22, character = X`,
          },
          {
            kind: "code",
            language: "java",
            title: "Program 21 — Byte streams, character streams and data streams with files",
            code: String.raw`import java.io.*;

public class StreamDemo {
    public static void main(String[] args) throws IOException {
        // byte stream: write and read raw bytes
        try (FileOutputStream out = new FileOutputStream("bytes.dat")) {
            out.write(new byte[] {72, 105, 33});
        }
        try (FileInputStream in = new FileInputStream("bytes.dat")) {
            StringBuilder sb = new StringBuilder();
            int b;
            while ((b = in.read()) != -1) sb.append((char) b);
            System.out.println("Byte stream read     : " + sb);
        }

        // character stream: write and read text lines
        try (FileWriter fw = new FileWriter("text.txt")) {
            fw.write("Line one\nLine two\n");
        }
        try (BufferedReader br = new BufferedReader(new FileReader("text.txt"))) {
            String line;
            while ((line = br.readLine()) != null) System.out.println("Character stream read: " + line);
        }

        // data streams: primitive values in binary form
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream("data.bin"))) {
            dos.writeInt(101);
            dos.writeDouble(78.5);
            dos.writeUTF("Amit");
        }
        try (DataInputStream dis = new DataInputStream(new FileInputStream("data.bin"))) {
            System.out.println("Data stream read     : " + dis.readInt() + ", " + dis.readDouble() + ", " + dis.readUTF());
        }
        System.out.println("Size of data.bin     : " + new File("data.bin").length() + " bytes");   // 4 + 8 + (2 + 4)
    }
}`,
            output: String.raw`Byte stream read     : Hi!
Character stream read: Line one
Character stream read: Line two
Data stream read     : 101, 78.5, Amit
Size of data.bin     : 18 bytes`,
          },
        ],
      },
      {
        id: "applets",
        title: "3. Applets",
        icon: "AppWindow",
        blocks: [
          {
            kind: "paragraph",
            text: "An APPLET is a small Java program that is embedded in a web page and runs inside a Java-enabled browser (or the appletviewer tool). It extends the class java.applet.Applet (or javax.swing.JApplet). Applets made Java popular in the 1990s, but they are now obsolete: they are deprecated since Java 9 and no modern browser supports them (removed from browsers, and the Applet API is marked for removal). They remain in the syllabus for their concepts, which are also useful in AWT and Swing programming.",
          },
          {
            kind: "table",
            headers: ["Applet", "Application"],
            rows: [
              ["Runs inside a browser or the appletviewer", "Runs by itself with the java command"],
              [
                "Does not have a main() method; the browser calls init(), start(), paint()...",
                "Starts execution from main()",
              ],
              ["Extends Applet", "Any class with main()"],
              [
                "Restricted by a security sandbox: cannot read or write local files or connect to other hosts",
                "Full access to the local system",
              ],
              ["Output through the applet window (Graphics)", "Output on the console or a window"],
            ],
          },
          { kind: "diagram", diagramId: "applet-life-cycle", caption: "Fig 4.1 — Life cycle of an applet" },
          {
            kind: "table",
            headers: ["Method", "Called", "Typical use"],
            rows: [
              [
                "init()",
                "Once, when the applet is first loaded",
                "Initialise variables, load images, set colours",
              ],
              [
                "start()",
                "After init() and each time the page becomes visible again",
                "Start animation or threads",
              ],
              [
                "paint(Graphics g)",
                "Whenever the applet must be drawn (also via repaint())",
                "Draw text and shapes",
              ],
              ["stop()", "When the page is left or the applet is hidden", "Pause threads"],
              ["destroy()", "Once, when the applet is removed", "Release resources"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Preparing to write an applet: import java.applet.Applet and java.awt.* ; make the class public and extend Applet; override the life-cycle methods that are needed (mostly paint()).",
              "Building the applet code: save as HelloApplet.java and compile with javac HelloApplet.java to obtain HelloApplet.class (an executable applet is a compiled .class file).",
              "Designing a web page and the APPLET tag: the class is embedded in an HTML file with the <applet> tag: <applet code='HelloApplet.class' width='300' height='100'> ... </applet>. Attributes: code (class file), width and height (size), codebase (directory of the class), alt/name, and the <param name value> tag to pass parameters. (HTML5 has removed <applet>; the older <object> tag was used later.)",
              "Running the applet: from the command line with appletviewer HelloApplet.html, or by opening the HTML file in an old applet-enabled browser.",
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 22 — An applet showing its life cycle methods (compiled only — an applet needs appletviewer or an old browser)",
            code: String.raw`import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;

public class HelloApplet extends Applet {
    String msg = "";

    public void init()  { setBackground(Color.yellow); msg = "init() "; }
    public void start() { msg += "start() "; }
    public void paint(Graphics g) {
        g.setColor(Color.blue);
        g.drawString(msg + "paint()", 20, 40);
        g.drawRect(10, 10, 220, 50);
    }
    public void stop()    { }
    public void destroy() { }
}`,
          },
          {
            kind: "code",
            language: "html",
            title: "HelloApplet.html — adding the applet to a web page (obsolete; for run with appletviewer)",
            code: String.raw`<html>
<body>
  <h3>My first applet</h3>
  <applet code="HelloApplet.class" width="300" height="100">
    Your browser does not support Java applets.
  </applet>
</body>
</html>

<!-- run:   javac HelloApplet.java
            appletviewer HelloApplet.html   -->`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Immutable", definition: "An object whose state cannot be changed after creation (String)." },
      { term: "StringBuilder", definition: "A mutable sequence of characters for building strings efficiently." },
      { term: "Stream", definition: "A flow of data between a program and a source or destination." },
      { term: "Byte / Character stream", definition: "Streams for binary data (InputStream/OutputStream) / for text (Reader/Writer)." },
      { term: "BufferedReader", definition: "A character stream with buffering that provides readLine()." },
      { term: "Applet", definition: "A small Java program run inside a browser or appletviewer." },
      { term: "paint()", definition: "The applet method in which the display is drawn using a Graphics object." },
    ],
    examQuestions: [
      "Explain the String class and any eight of its methods with examples. (Long)",
      "Differentiate between String, StringBuffer and StringBuilder. What is the difference between == and equals()? (Medium)",
      "Explain the mathematical functions of the Math class. (Medium)",
      "What are streams? Explain byte and character streams. (Medium)",
      "How do you read a character and a line from the keyboard in Java? (Medium)",
      "Explain the data streams with an example. (Medium)",
      "What is an applet? Differentiate between an applet and an application. (Medium)",
      "Explain the life cycle of an applet with a diagram. (Long)",
      "Explain the applet tag and how to run an applet. (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "AWT, Event Handling, JDBC, Sockets, Swing, Servlets and JSP",
    hours: 12,
    headings: [
      {
        id: "awt",
        title: "1. AWT Programming: Components, Graphics, Dialog Boxes and Layouts",
        icon: "MonitorPlay",
        blocks: [
          {
            kind: "paragraph",
            text: "The ABSTRACT WINDOW TOOLKIT (AWT, package java.awt) is Java's original library for building graphical user interfaces (GUI). AWT components are 'heavyweight' — they use the native controls of the operating system, so they look like the local platform. All AWT classes descend from Component; a Container can hold other components.",
          },
          { kind: "diagram", diagramId: "awt-hierarchy", caption: "Fig 5.1 — Class hierarchy of the AWT" },
          {
            kind: "table",
            headers: ["AWT component (control)", "Description"],
            rows: [
              [
                "Frame",
                "A top-level window with a title bar and border; the usual main window (BorderLayout by default).",
              ],
              ["Panel", "A container without a border, used to group components (FlowLayout by default)."],
              ["Label", "Displays a line of read-only text."],
              ["Button", "A push button that generates an ActionEvent when clicked."],
              ["TextField / TextArea", "Single-line / multi-line text input."],
              [
                "Checkbox / CheckboxGroup",
                "A tick box / a group of options of which only one can be selected (radio buttons).",
              ],
              ["Choice / List", "Drop-down list / scrolling list of items."],
              ["Scrollbar, Canvas, MenuBar, Menu, MenuItem", "Scrolling, drawing area and menus."],
              [
                "Dialog / FileDialog",
                "Dialog boxes: a pop-up window (modal blocks the parent window until closed) / a box for choosing a file to open or save.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Layout manager", "How it arranges the components"],
            rows: [
              [
                "FlowLayout",
                "Left to right in a row, moving to the next row when full (default of Panel and Applet).",
              ],
              ["BorderLayout", "Five regions: North, South, East, West and Center (default of Frame)."],
              ["GridLayout", "A grid of equal-sized cells filled row by row."],
              ["CardLayout", "Components stacked like cards; only one is visible at a time."],
              ["GridBagLayout", "A flexible grid where components can span cells."],
              ["null layout (setLayout(null))", "Manual positioning with setBounds(x, y, w, h)."],
            ],
          },
          {
            kind: "paragraph",
            text: "Graphics: to draw, a component overrides paint(Graphics g). The Graphics object provides drawString(text, x, y), drawLine(x1, y1, x2, y2), drawRect / fillRect(x, y, w, h), drawOval / fillOval, drawPolygon, setColor(Color), setFont(Font) and drawImage(). The origin (0, 0) is the TOP-LEFT corner, x increases to the right and y increases DOWNWARDS.",
          },
          {
            kind: "paragraph",
            text: "EVENT HANDLING uses the DELEGATION EVENT MODEL: an event SOURCE (a button) generates an EVENT OBJECT (ActionEvent) and sends it to a registered LISTENER (an object implementing ActionListener), whose handler method (actionPerformed) is called. Steps: (1) implement the listener interface; (2) register the listener with the source: button.addActionListener(this); (3) write the handler method.",
          },
          {
            kind: "table",
            headers: ["Event class", "Listener interface and methods", "Generated by"],
            rows: [
              [
                "ActionEvent",
                "ActionListener — actionPerformed()",
                "Button click, menu item, Enter in a TextField",
              ],
              ["ItemEvent", "ItemListener — itemStateChanged()", "Checkbox, Choice, List"],
              [
                "MouseEvent",
                "MouseListener — mouseClicked(), mousePressed(), mouseReleased(), mouseEntered(), mouseExited();  MouseMotionListener — mouseMoved(), mouseDragged()",
                "Mouse actions",
              ],
              ["KeyEvent", "KeyListener — keyPressed(), keyReleased(), keyTyped()", "Keyboard"],
              [
                "WindowEvent",
                "WindowListener — windowClosing(), windowOpened() ...",
                "Window closing, opening, minimising",
              ],
              ["TextEvent, AdjustmentEvent", "TextListener, AdjustmentListener", "Text change, scrollbar"],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 23 — An AWT window with a label, text field, button and event handling (compiled only — needs a display)",
            code: String.raw`import java.awt.*;
import java.awt.event.*;

public class GreetingFrame extends Frame implements ActionListener {
    Label   prompt = new Label("Enter your name:");
    TextField input = new TextField(15);
    Button  ok = new Button("Greet");
    Label   result = new Label("");

    GreetingFrame() {
        setTitle("AWT demo");
        setLayout(new FlowLayout());
        add(prompt);  add(input);  add(ok);  add(result);
        ok.addActionListener(this);                       // register the listener
        addWindowListener(new WindowAdapter() {           // close button
            public void windowClosing(WindowEvent e) { dispose(); }
        });
        setSize(300, 150);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {          // event handler
        result.setText("Hello, " + input.getText() + "!");
    }

    public static void main(String[] args) { new GreetingFrame(); }
}`,
          },
          {
            kind: "code",
            language: "java",
            title: "Program 24 — Graphics, layouts and a dialog box (compiled only — needs a display)",
            code: String.raw`import java.awt.*;
import java.awt.event.*;

class DrawPanel extends Canvas {
    public void paint(Graphics g) {
        g.setColor(Color.red);   g.fillRect(20, 20, 100, 60);
        g.setColor(Color.blue);  g.drawOval(140, 20, 80, 60);
        g.setColor(Color.black); g.drawLine(20, 100, 220, 100);
        g.drawString("AWT Graphics", 60, 130);
    }
}

public class LayoutDemo {
    public static void main(String[] args) {
        Frame f = new Frame("Layouts");
        f.setLayout(new BorderLayout());                  // North, South, East, West, Center
        f.add(new Button("North"), BorderLayout.NORTH);
        f.add(new Button("South"), BorderLayout.SOUTH);

        Panel grid = new Panel(new GridLayout(2, 2));     // 2 x 2 grid in the centre
        for (int i = 1; i <= 4; i++) grid.add(new Button("Grid " + i));
        f.add(grid, BorderLayout.CENTER);
        f.add(new DrawPanel(), BorderLayout.EAST);
        f.setSize(420, 260);
        f.setVisible(true);

        Dialog d = new Dialog(f, "Message", true);        // modal dialog box
        d.setLayout(new FlowLayout());
        d.add(new Label("Layouts created successfully"));
        Button close = new Button("OK");
        close.addActionListener(e -> d.dispose());
        d.add(close);
        d.setSize(220, 100);
        d.setVisible(true);
    }
}`,
          },
        ],
      },
      {
        id: "jdbc",
        title: "2. JDBC: Architecture, Connectivity, Statements and ResultSet",
        icon: "Network",
        blocks: [
          {
            kind: "paragraph",
            text: "JDBC (Java Database Connectivity) is the standard Java API (package java.sql) for connecting to relational databases, sending SQL statements and processing the results. A program written with JDBC works with any database (MySQL, Oracle, SQL Server, PostgreSQL) for which a JDBC DRIVER is available, so the database can be changed with almost no change in the program.",
          },
          { kind: "diagram", diagramId: "jdbc-architecture", caption: "Fig 5.2 — JDBC architecture" },
          {
            kind: "table",
            headers: ["Component", "Role"],
            rows: [
              [
                "Java application",
                "Uses the JDBC API classes: DriverManager, Connection, Statement, PreparedStatement, ResultSet.",
              ],
              ["JDBC API", "The interfaces in java.sql / javax.sql."],
              ["DriverManager", "Manages the drivers and creates connections for a database URL."],
              [
                "JDBC driver",
                "Translates JDBC calls into the protocol of a particular database. Types: Type 1 JDBC–ODBC bridge (removed), Type 2 native-API driver, Type 3 network-protocol (middleware) driver, Type 4 thin driver written entirely in Java (most used).",
              ],
              ["Database", "Executes the SQL and returns the results."],
            ],
          },
          {
            kind: "table",
            headers: ["Step", "Code"],
            rows: [
              [
                "1. Load / register the driver (automatic in JDBC 4+ when the driver JAR is on the classpath)",
                "Class.forName(\"com.mysql.cj.jdbc.Driver\");",
              ],
              [
                "2. Establish the connection",
                "Connection con = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/college\", \"user\", \"password\");",
              ],
              ["3. Create a statement", "Statement st = con.createStatement();"],
              [
                "4. Execute the SQL",
                "ResultSet rs = st.executeQuery(\"SELECT ...\");   (SELECT)   |   int n = st.executeUpdate(\"INSERT ...\");   (INSERT/UPDATE/DELETE, returns rows affected)",
              ],
              [
                "5. Process the ResultSet",
                "while (rs.next()) { rs.getInt(\"roll\"); rs.getString(\"name\"); }",
              ],
              ["6. Close the resources", "rs.close(); st.close(); con.close();  (or use try-with-resources)"],
            ],
          },
          {
            kind: "table",
            headers: ["Interface", "Important methods"],
            rows: [
              [
                "Connection",
                "createStatement(), prepareStatement(sql), prepareCall(sql), setAutoCommit(false), commit(), rollback(), close()",
              ],
              [
                "Statement",
                "executeQuery(sql), executeUpdate(sql), execute(sql), close() — for static SQL; risk of SQL injection when text from users is added to the string",
              ],
              [
                "PreparedStatement",
                "Precompiled SQL with ? parameters: setInt(1, v), setString(2, v), executeQuery(), executeUpdate() — faster and safe against SQL injection",
              ],
              ["CallableStatement", "Calls stored procedures: {call procedure_name(?, ?)}"],
              [
                "ResultSet",
                "next() moves to the next row (returns false at the end), getInt / getString / getDouble (by column name or number), close()",
              ],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 25 — Reading and inserting data with JDBC (compiled only — needs a MySQL server and its driver JAR)",
            code: String.raw`import java.sql.*;

public class JdbcDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/college";

        try (Connection con = DriverManager.getConnection(url, "root", "password")) {

            // INSERT with a PreparedStatement (parameters are marked with ?)
            String sql = "INSERT INTO student (roll, name, marks) VALUES (?, ?, ?)";
            try (PreparedStatement ps = con.prepareStatement(sql)) {
                ps.setInt(1, 7);
                ps.setString(2, "Rohit");
                ps.setInt(3, 68);
                int rows = ps.executeUpdate();
                System.out.println(rows + " row inserted");
            }

            // SELECT with a Statement and a ResultSet
            try (Statement st = con.createStatement();
                 ResultSet rs = st.executeQuery("SELECT roll, name, marks FROM student")) {
                while (rs.next()) {
                    System.out.println(rs.getInt("roll") + " " + rs.getString("name") + " " + rs.getInt("marks"));
                }
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}`,
          },
        ],
      },
      {
        id: "sockets",
        title: "3. Socket Programming",
        icon: "Wifi",
        blocks: [
          {
            kind: "paragraph",
            text: "A SOCKET is one end of a two-way communication link between two programs over a network, identified by an IP address and a PORT number. In Java (package java.net) TCP communication uses two classes: ServerSocket — waits (accept()) for client connections on a port; and Socket — the connection itself, from which input and output streams are obtained (getInputStream(), getOutputStream()). The server is started first and the client connects to its host and port.",
          },
          {
            kind: "bullets",
            items: [
              "Server: (1) new ServerSocket(port); (2) Socket s = server.accept(); — blocks until a client connects; (3) read from s.getInputStream() and write to s.getOutputStream(); (4) close the streams and sockets.",
              "Client: (1) new Socket(hostName, port); (2) get the streams; (3) send a request and read the reply; (4) close.",
              "TCP is connection-oriented and reliable (Socket, ServerSocket); UDP is connectionless and faster but unreliable (DatagramSocket, DatagramPacket). Ports 0–1023 are reserved for well-known services (HTTP 80, FTP 21).",
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 26 — A server and a client talking over a TCP socket (both run here on localhost)",
            code: String.raw`import java.io.*;
import java.net.*;

public class SocketDemo {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(0);            // 0 = choose any free port
        int port = server.getLocalPort();

        Thread serverThread = new Thread(() -> {              // the server side
            try (Socket s = server.accept();                  // wait for a client
                 BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
                 PrintWriter out = new PrintWriter(s.getOutputStream(), true)) {
                String msg = in.readLine();
                System.out.println("Server received: " + msg);
                out.println("Hello client, you said: " + msg);
            } catch (IOException e) { e.printStackTrace(); }
        });
        serverThread.start();

        try (Socket client = new Socket("localhost", port);   // the client side
             PrintWriter out = new PrintWriter(client.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()))) {
            out.println("Hi server");
            System.out.println("Client received: " + in.readLine());
        }
        serverThread.join();
        server.close();
    }
}`,
            output: String.raw`Server received: Hi server
Client received: Hello client, you said: Hi server`,
          },
        ],
      },
      {
        id: "swing",
        title: "4. Introduction to Swing",
        icon: "Presentation",
        blocks: [
          {
            kind: "paragraph",
            text: "SWING (package javax.swing) is a richer GUI library built on top of AWT. Its components are 'lightweight' — drawn by Java itself, not by the operating system — so they look and behave the same on every platform and offer a pluggable look-and-feel. Swing class names start with J: JFrame, JPanel, JLabel, JButton, JTextField, JTextArea, JCheckBox, JRadioButton, JComboBox, JList, JTable, JTree, JMenuBar, JOptionPane. The event model is the same as in AWT. Components are added to the CONTENT PANE of a JFrame (add() forwards to it) and setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) closes the program with the window.",
          },
          {
            kind: "table",
            headers: ["AWT", "Swing"],
            rows: [
              ["Heavyweight (native peers)", "Lightweight (pure Java)"],
              ["Look depends on the platform", "Pluggable look and feel"],
              ["Fewer, simple components", "Rich components: tables, trees, tabbed panes, tooltips"],
              ["Package java.awt", "Package javax.swing (extends AWT)"],
              ["Slightly faster to start", "More flexible and consistent"],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "Program 27 — A Swing window with JOptionPane (compiled only — needs a display)",
            code: String.raw`import javax.swing.*;
import java.awt.FlowLayout;

public class SwingDemo {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Swing demo");
            frame.setLayout(new FlowLayout());
            JLabel label = new JLabel("Name:");
            JTextField field = new JTextField(12);
            JButton button = new JButton("Greet");
            button.addActionListener(e ->
                JOptionPane.showMessageDialog(frame, "Hello, " + field.getText() + "!"));   // dialog box
            frame.add(label);  frame.add(field);  frame.add(button);
            frame.setSize(300, 120);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setVisible(true);
        });
    }
}`,
          },
        ],
      },
      {
        id: "servlet-jsp",
        title: "5. Servlets and JSP",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "A SERVLET is a Java class that runs on a web server (inside a servlet container such as Apache Tomcat) and generates dynamic web pages: it receives an HTTP request from the browser, processes it (possibly using JDBC) and sends back a response, normally HTML. A servlet extends HttpServlet and overrides doGet() and doPost(). Because the container keeps the servlet in memory and creates a new THREAD (not a new process) per request, servlets are much faster than CGI programs.",
          },
          {
            kind: "table",
            headers: ["Servlet life-cycle method", "When it is called"],
            rows: [
              ["init()", "Once, when the servlet is first loaded — initialisation."],
              [
                "service() → doGet() / doPost()",
                "For every request; the container passes HttpServletRequest and HttpServletResponse objects.",
              ],
              ["destroy()", "Once, when the servlet is removed — release resources."],
            ],
          },
          {
            kind: "code",
            language: "java",
            title: "A servlet (not compiled here — needs the servlet API of a container such as Tomcat)",
            code: String.raw`import java.io.*;
import javax.servlet.*;             // Jakarta EE 9+ uses  jakarta.servlet.*
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        String name = request.getParameter("name");           // ?name=Amit
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Hello, " + (name == null ? "guest" : name) + "!</h2>");
        out.println("</body></html>");
    }
}`,
          },
          {
            kind: "paragraph",
            text: "JSP (JavaServer Pages) lets a web designer write an HTML page with Java code embedded in special tags; the container translates the JSP into a servlet the first time it is requested, compiles it and runs it. JSP is better for presentation (HTML-heavy pages), servlets for logic (Java-heavy code); in the MVC pattern servlets act as controllers and JSP pages as views.",
          },
          {
            kind: "table",
            headers: ["JSP element", "Syntax", "Purpose"],
            rows: [
              [
                "Directive",
                "<%@ page import=\"java.util.*\" %>",
                "Instructions for the container (page, include, taglib)",
              ],
              [
                "Declaration",
                "<%! int count = 0; %>",
                "Declares variables and methods of the generated servlet",
              ],
              ["Scriptlet", "<% ... Java statements ... %>", "Java code executed for each request"],
              ["Expression", "<%= expression %>", "Evaluates the expression and writes it to the page"],
              ["Comment", "<%-- comment --%>", "Not sent to the browser"],
              [
                "Implicit objects",
                "request, response, out, session, application",
                "Ready-made objects available in every JSP",
              ],
            ],
          },
          {
            kind: "code",
            language: "html",
            title: "hello.jsp — a JSP page (needs a JSP container such as Tomcat)",
            code: String.raw`<%@ page import="java.util.Date" %>
<html>
<body>
  <h2>Welcome <%= request.getParameter("name") %></h2>
  <p>Server time: <%= new Date() %></p>
  <% for (int i = 1; i <= 3; i++) { %>
       <p>Line number <%= i %></p>
  <% } %>
</body>
</html>`,
          },
          {
            kind: "table",
            headers: ["Servlet", "JSP"],
            rows: [
              ["Java code containing HTML (println)", "HTML containing Java code"],
              [
                "Must be compiled and configured (web.xml or annotations)",
                "Compiled automatically by the container on first request",
              ],
              ["Suited for control and business logic", "Suited for presentation"],
              ["Harder to write HTML in", "Easy for web designers"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "AWT", definition: "Abstract Window Toolkit — Java's original GUI library (java.awt)." },
      { term: "Layout manager", definition: "An object that arranges the components inside a container." },
      { term: "Delegation event model", definition: "Events from a source are sent to registered listener objects that handle them." },
      { term: "JDBC", definition: "Java Database Connectivity — the API for accessing relational databases." },
      { term: "ResultSet", definition: "The table of rows returned by an SQL query in JDBC." },
      { term: "Socket", definition: "One end of a network connection identified by an IP address and port." },
      { term: "Swing", definition: "The lightweight GUI library javax.swing built on AWT." },
      { term: "Servlet", definition: "A Java class running on a web server that handles HTTP requests." },
      { term: "JSP", definition: "JavaServer Pages — HTML pages with embedded Java that are converted to servlets." },
    ],
    examQuestions: [
      "What is AWT? Explain the AWT hierarchy and any five AWT components. (Long)",
      "Explain the layout managers of AWT. (Medium)",
      "Explain the delegation event model. Write a program to handle a button click. (Long)",
      "How is graphics drawn in AWT? Explain the methods of the Graphics class. (Medium)",
      "Explain dialog boxes in AWT/Swing. (Short)",
      "Explain the JDBC architecture and the drivers of JDBC. (Long)",
      "Explain the steps to connect a Java program to a database and execute SQL statements. (Long)",
      "Differentiate between Statement, PreparedStatement and CallableStatement. (Medium)",
      "What is a socket? Write a client–server program using TCP sockets. (Long)",
      "Differentiate between AWT and Swing. (Medium)",
      "What is a servlet? Explain its life cycle. (Medium)",
      "What is JSP? Explain JSP tags and differentiate JSP from servlets. (Medium)",
    ],
  },
];
