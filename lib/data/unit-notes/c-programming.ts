import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Introduction to Programming using C (C-102)
// — Dr. Bhimrao Ambedkar University, Agra (DBRAU) BCA Semester 1, syllabus
// effective from session 2025-26.
//
// Every C program below was compiled with GCC and executed; the printed
// `output` is the real terminal output. Programs use `kind: "code"` blocks —
// see README-INTEGRATION.md in the zip for the one-time type + renderer
// addition.

export const cProgrammingUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "C Basics: Data Types, Variables and Operators",
    hours: 10,
    headings: [
      {
        id: "intro-c",
        title: "1. Introduction to C and Structure of a C Program",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "C is a general-purpose, structured, procedural programming language developed by Dennis Ritchie at AT&T Bell Laboratories, USA, in 1972 (evolved from the languages BCPL and B). It was first used to rewrite the UNIX operating system. It was standardised as ANSI C (1989), also known as C89/C90, and later as C99 and C11. Because it combines the power of assembly language with the ease of a high-level language, C is called a 'middle-level language'.",
          },
          {
            kind: "table",
            headers: ["Feature of C", "Explanation"],
            rows: [
              [
                "Simple and structured",
                "Programs are divided into functions and use if/loops, making them easy to write, read and debug.",
              ],
              [
                "Portable (machine independent)",
                "A C program written on one computer can be compiled and run on another with little or no change.",
              ],
              [
                "Fast and efficient",
                "Compiled code runs very quickly; C is used to build operating systems and embedded software.",
              ],
              ["Rich library", "Hundreds of built-in functions for input/output, strings, maths etc."],
              [
                "Pointers and dynamic memory",
                "Direct access to memory addresses and run-time memory allocation.",
              ],
              ["Extensible", "Users can add their own functions to the library."],
              [
                "Case sensitive",
                "'Total' and 'total' are different names; keywords are written in lower case.",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Applications: operating systems (UNIX, Linux kernel, parts of Windows), compilers and interpreters, database systems, embedded systems and device drivers, games and graphics.",
          },
          { kind: "diagram", diagramId: "c-program-structure", caption: "Fig 1.1 — Structure of a C program" },
          {
            kind: "table",
            headers: ["Section", "Purpose", "Example"],
            rows: [
              [
                "Documentation",
                "Comments describing the program (ignored by the compiler). /* ... */ for many lines, // for one line.",
                "/* Program to find area of circle */",
              ],
              [
                "Link section",
                "#include statements that link header files (library functions).",
                "#include <stdio.h>",
              ],
              [
                "Definition section",
                "Symbolic constants and macros defined with #define.",
                "#define PI 3.14159",
              ],
              [
                "Global declaration",
                "Variables and function prototypes visible to the whole program.",
                "float area(float r);",
              ],
              [
                "main() function",
                "Execution of every C program starts from main(). It has declaration and executable parts enclosed in { }.",
                "int main(void) { ... }",
              ],
              [
                "Sub-programs",
                "User-defined functions written after (or before) main().",
                "float area(float r) { ... }",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 1 — The first C program",
            code: String.raw`#include <stdio.h>

int main(void)
{
    printf("Hello, BCA!\n");
    return 0;
}`,
            output: "Hello, BCA!",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 2 — A complete program showing all sections",
            code: String.raw`/* Program to find the area of a circle */          /* Documentation */
#include <stdio.h>                                   /* Link section  */
#define PI 3.14159                                   /* Definition    */

float area(float r);                                 /* Global declaration (prototype) */

int main(void)                                       /* main() function */
{
    float r = 5.0;
    printf("Area = %.2f\n", area(r));
    return 0;
}

float area(float r)                                  /* Sub-program */
{
    return PI * r * r;
}`,
            output: "Area = 78.54",
          },
          {
            kind: "bullets",
            items: [
              "Rules: every statement ends with a semicolon (;), the program starts at main(), braces { } mark the start and end of a block, and C is case-sensitive.",
              "#include <stdio.h> tells the preprocessor to include the standard input/output header that contains printf() and scanf(). return 0; tells the operating system that the program ended successfully.",
              "Turbo C users: old textbooks use void main(), clrscr() and getch() from <conio.h>; these are not part of standard C — use int main(void) in exams that ask for ANSI C.",
            ],
          },
        ],
      },
      {
        id: "compilation",
        title: "2. Compiling and Executing a C Program",
        icon: "Play",
        blocks: [
          { kind: "diagram", diagramId: "c-compilation-process", caption: "Fig 1.2 — From source code to execution" },
          {
            kind: "table",
            headers: ["Stage", "Work done", "Output"],
            rows: [
              [
                "Editing",
                "Program is typed in an editor / IDE and saved with the .c extension.",
                "Source file (prog.c)",
              ],
              [
                "Preprocessing",
                "Handles # directives: includes header files, expands macros, removes comments.",
                "Expanded source",
              ],
              [
                "Compilation",
                "Checks syntax, reports errors and converts the code to machine code.",
                "Object file (prog.obj / prog.o)",
              ],
              [
                "Linking",
                "Links the object file with library code (e.g., printf).",
                "Executable file (prog.exe / a.out)",
              ],
              ["Execution", "The loader loads the .exe into memory and the CPU runs it.", "Program output"],
            ],
          },
          {
            kind: "table",
            headers: ["Type of error", "Meaning", "Example"],
            rows: [
              [
                "Syntax error",
                "Violation of language rules; detected at compile time.",
                "Missing semicolon, misspelt keyword",
              ],
              [
                "Logical error",
                "Program runs but gives wrong result; hardest to find.",
                "Using + instead of * to find the area",
              ],
              [
                "Runtime error",
                "Occurs while the program is running and stops it.",
                "Division by zero, invalid file name",
              ],
              [
                "Linker error",
                "Function used but its code cannot be found.",
                "Calling an undefined function",
              ],
            ],
          },
        ],
      },
      {
        id: "char-set-tokens",
        title: "3. Character Set, Tokens, Identifiers and Keywords",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "C character set: the set of valid characters a C program may contain — Letters (A–Z, a–z), Digits (0–9), Special characters (+ − * / % = < > ( ) { } [ ] ; : , . ' \" & | ^ ~ ! # ? _ \\) and White spaces (blank, tab, new line). The compiler groups characters into meaningful units called TOKENS. The six types of tokens are: Keywords, Identifiers, Constants, Strings, Operators and Special symbols.",
          },
          {
            kind: "paragraph",
            text: "Identifiers are the names given by the programmer to variables, functions, arrays, etc. Rules: (1) may contain letters, digits and underscore only; (2) must begin with a letter or underscore, never a digit; (3) no spaces or special characters; (4) a keyword cannot be used as an identifier; (5) case-sensitive; (6) should be meaningful (e.g., total_marks).",
          },
          {
            kind: "table",
            headers: ["Valid identifiers", "Invalid identifiers", "Reason"],
            rows: [
              ["marks, _count, total2, Sum_Of_Two", "2total", "Starts with a digit"],
              ["rollNo", "roll no", "Contains a space"],
              ["student_name", "student-name", "Hyphen (−) is not allowed"],
              ["price", "int", "'int' is a keyword"],
              ["amount1", "amount$", "$ is a special character"],
            ],
          },
          {
            kind: "paragraph",
            text: "Keywords are reserved words that have a fixed meaning for the compiler and cannot be used as names. ANSI C has 32 keywords:",
          },
          {
            kind: "table",
            headers: ["Category", "Keywords"],
            rows: [
              ["Data types", "int, char, float, double, void, short, long, signed, unsigned"],
              [
                "Control statements",
                "if, else, switch, case, default, for, while, do, break, continue, goto, return",
              ],
              ["Storage classes / qualifiers", "auto, register, static, extern, const, volatile"],
              ["User-defined types", "struct, union, enum, typedef"],
              ["Operator", "sizeof"],
            ],
          },
        ],
      },
      {
        id: "data-types",
        title: "4. Data Types",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A data type tells the compiler what kind of value a variable will hold, how much memory to reserve for it and which operations are allowed. C data types are of three kinds: Primary (fundamental) — int, char, float, double, void; Derived — array, pointer, function; User-defined — structure, union, enumeration, typedef.",
          },
          {
            kind: "table",
            headers: ["Data type", "Size (typical 32/64-bit compiler)", "Range", "Format specifier"],
            rows: [
              ["char", "1 byte", "−128 to 127", "%c"],
              ["unsigned char", "1 byte", "0 to 255", "%c / %u"],
              ["short", "2 bytes", "−32,768 to 32,767", "%hd"],
              ["int", "4 bytes (2 bytes in old Turbo C)", "−2,147,483,648 to 2,147,483,647", "%d or %i"],
              ["unsigned int", "4 bytes", "0 to 4,294,967,295", "%u"],
              ["long", "4 or 8 bytes", "at least −2,147,483,648 to 2,147,483,647", "%ld"],
              ["long long", "8 bytes", "about ±9.2 × 10¹⁸", "%lld"],
              ["float", "4 bytes", "about 3.4E−38 to 3.4E+38 (6 decimal digits precision)", "%f"],
              ["double", "8 bytes", "about 1.7E−308 to 1.7E+308 (15 digits precision)", "%lf"],
              ["long double", "12/16 bytes", "even larger range and precision", "%Lf"],
              ["void", "0", "no value (used for functions returning nothing)", "—"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 3 — Size of data types with sizeof",
            code: String.raw`#include <stdio.h>

int main(void)
{
    printf("char      : %zu byte\n",  sizeof(char));
    printf("short     : %zu bytes\n", sizeof(short));
    printf("int       : %zu bytes\n", sizeof(int));
    printf("long long : %zu bytes\n", sizeof(long long));
    printf("float     : %zu bytes\n", sizeof(float));
    printf("double    : %zu bytes\n", sizeof(double));
    return 0;
}`,
            output: String.raw`char      : 1 byte
short     : 2 bytes
int       : 4 bytes
long long : 8 bytes
float     : 4 bytes
double    : 8 bytes`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "Sizes are machine/compiler dependent. In exams written for Turbo C, int = 2 bytes (range −32768 to 32767). Always mention which compiler you are assuming. sizeof is an operator, not a function, and it gives the size in bytes.",
          },
        ],
      },
      {
        id: "constants-variables",
        title: "5. Constants, Variables, Declarations and Symbolic Constants",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "A constant is a fixed value that does not change during the execution of a program. A variable is a named memory location whose value can change during execution. Every variable must be DECLARED before it is used — the declaration tells the compiler its name and data type.",
          },
          {
            kind: "table",
            headers: ["Type of constant", "Description", "Examples"],
            rows: [
              [
                "Integer constant",
                "Whole numbers without a decimal point. Decimal (base 10), octal (starts with 0) and hexadecimal (starts with 0x).",
                "25, −7, 0x1F (=31), 017 (=15)",
              ],
              [
                "Real (floating) constant",
                "Numbers with a decimal point or in exponent form.",
                "3.14, −0.5, 2.5e3 (=2500)",
              ],
              [
                "Character constant",
                "A single character in single quotes; stored as its ASCII value.",
                "'A' (65), 'a' (97), '5', '\\n'",
              ],
              [
                "String constant",
                "A sequence of characters in double quotes, automatically ended by the null character '\\0'.",
                "\"BCA\", \"Hello World\"",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Escape sequence", "Meaning"],
            rows: [
              ["\\n", "New line"],
              ["\\t", "Horizontal tab"],
              ["\\b", "Backspace"],
              ["\\r", "Carriage return"],
              ["\\a", "Alert (beep)"],
              ["\\\\  \\'  \\\"", "Prints a backslash, single quote, double quote"],
              ["\\0", "Null character (end of string)"],
            ],
          },
          {
            kind: "bullets",
            items: [
              "Variable declaration syntax: data_type variable_name; — e.g., int age; float price; char grade;  Several variables of the same type: int a, b, c;",
              "Initialisation gives a value at the time of declaration: int age = 20; float pi = 3.14; char ch = 'A';  An uninitialised local variable contains a garbage value.",
              "Rules for naming variables are the same as for identifiers. Declaration reserves memory; assignment (=) stores a value.",
              "Arrays (introduced here, full details in Unit II): a group of variables of the same type stored under one name, e.g., int marks[5]; stores 5 integers marks[0] to marks[4].",
            ],
          },
          {
            kind: "paragraph",
            text: "Symbolic constants are names given to constant values so that the program is more readable and easier to modify (change the value at one place only). They are created in two ways: with the #define preprocessor directive, or with the const keyword.",
          },
          {
            kind: "table",
            headers: ["#define", "const"],
            rows: [
              [
                "#define PI 3.14159 (no semicolon, no = sign)",
                "const float PI = 3.14159; (ends with a semicolon)",
              ],
              [
                "Handled by the preprocessor — simple text replacement",
                "Handled by the compiler — a real variable that cannot be modified",
              ],
              ["No data type, no memory allocated", "Has a data type and occupies memory"],
              ["Written by convention in CAPITAL letters", "Follows normal scope rules"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 4 — Variables, constants and format specifiers",
            code: String.raw`#include <stdio.h>
#define PI 3.14159

int main(void)
{
    const int MAX = 100;
    int    age    = 20;
    float  height = 5.9f;
    double pi_val = PI;
    char   grade  = 'A';

    printf("Age    = %d\n", age);
    printf("Height = %.1f\n", height);
    printf("PI     = %f\n", pi_val);
    printf("Grade  = %c\n", grade);
    printf("MAX    = %d\n", MAX);
    return 0;
}`,
            output: String.raw`Age    = 20
Height = 5.9
PI     = 3.141590
Grade  = A
MAX    = 100`,
          },
        ],
      },
      {
        id: "io-basics",
        title: "6. Input and Output (printf and scanf)",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "printf() prints formatted output on the screen and scanf() reads formatted input from the keyboard; both are declared in <stdio.h>. The FORMAT STRING contains text and format specifiers (starting with %) that say what type of value is to be printed/read. In scanf() the address operator & must be put before the variable name (except for strings).",
          },
          {
            kind: "table",
            headers: ["Specifier", "Data type", "Specifier", "Data type"],
            rows: [
              ["%d or %i", "int (decimal)", "%f", "float"],
              ["%u", "unsigned int", "%lf", "double"],
              ["%ld / %lld", "long / long long", "%e", "exponential (scientific) form"],
              ["%c", "single character", "%s", "string"],
              ["%o", "octal", "%x / %X", "hexadecimal"],
              ["%%", "prints the % sign itself", "%.2f", "float with 2 digits after the decimal point"],
            ],
          },
          {
            kind: "paragraph",
            text: "Field width: %5d prints an integer in a field 5 characters wide (right aligned); %-5d left aligns; %8.2f prints a real number in width 8 with 2 decimals. Other I/O functions: getchar() reads one character, putchar() writes one character, gets()/puts() and fgets() for strings (gets() is unsafe and removed from C11 — prefer fgets()).",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 5 — Reading two numbers and printing their sum",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a, b, sum;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum = %d\n", sum);
    return 0;
}`,
            output: String.raw`Enter two numbers: 12 30
Sum = 42`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 6 — Escape sequences and field width",
            code: String.raw`#include <stdio.h>

int main(void)
{
    printf("Name\tMarks\n");
    printf("Amit\t%d\n", 85);
    printf("She said \"Hello\"\n");
    printf("Path: C:\\TC\\BIN\n");
    printf("[%5d] [%-5d] [%8.2f]\n", 42, 42, 3.14159);
    return 0;
}`,
            output: String.raw`Name	Marks
Amit	85
She said "Hello"
Path: C:\TC\BIN
[   42] [42   ] [    3.14]`,
          },
        ],
      },
      {
        id: "expressions-statements",
        title: "7. Expressions and Statements",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "An expression is a combination of operands (variables, constants) and operators that evaluates to a single value — e.g., a + b * 2, x > y, (a + b) / 2.",
          },
          {
            kind: "table",
            headers: ["Statement", "Meaning", "Example"],
            rows: [
              ["Declaration statement", "Declares variables.", "int a, b;"],
              [
                "Expression statement",
                "An expression followed by a semicolon; evaluates it or stores its value.",
                "sum = a + b;   i++;   printf(\"Hi\");",
              ],
              [
                "Compound statement (block)",
                "Group of statements enclosed in { }; treated as a single statement. Used with if, loops, functions.",
                "{ a = 5; b = 10; c = a + b; }",
              ],
              ["Null statement", "A lone semicolon that does nothing.", ";"],
              [
                "Control statement",
                "Alters the flow: if, switch, loops, break, continue, goto, return.",
                "if (a > b) ...",
              ],
            ],
          },
        ],
      },
      {
        id: "operators",
        title: "8. Operators",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "An operator is a symbol that tells the compiler to perform a specific operation on operands. By the number of operands, operators are Unary (1 operand), Binary (2 operands) and Ternary (3 operands, the conditional operator ?:).",
          },
          {
            kind: "paragraph",
            text: "(a) Arithmetic operators: + (addition), − (subtraction), * (multiplication), / (division), % (modulus — remainder; works only with integers). When both operands of / are integers, the result is an integer (fractional part truncated): 17 / 5 = 3, while 17.0 / 5 = 3.4.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 7 — Arithmetic operators",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 17, b = 5;

    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);        /* integer division */
    printf("a %% b = %d\n", a % b);       /* remainder */
    printf("17.0 / 5 = %.2f\n", 17.0 / b);
    return 0;
}`,
            output: String.raw`a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2
17.0 / 5 = 3.40`,
          },
          {
            kind: "paragraph",
            text: "(b) Unary operators: unary minus (−a), logical NOT (!), address-of (&), dereference (*), sizeof, and the increment (++) and decrement (−−) operators. Prefix (++a): first change the value, then use it. Postfix (a++): first use the value, then change it.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 8 — Pre and post increment",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 5, b;

    b = a++;                       /* use a (5), then increment */
    printf("b = %d, a = %d\n", b, a);

    b = ++a;                       /* increment a (7), then use */
    printf("b = %d, a = %d\n", b, a);

    printf("-a = %d\n", -a);
    printf("!a = %d\n", !a);       /* non-zero value -> 0 */
    return 0;
}`,
            output: String.raw`b = 5, a = 6
b = 7, a = 7
-a = -7
!a = 0`,
          },
          {
            kind: "paragraph",
            text: "(c) Relational operators compare two values and give 1 (true) or 0 (false): < , > , <= , >= , == (equal to), != (not equal to). (d) Logical operators combine conditions: && (AND — true only if both are true), || (OR — true if at least one is true), ! (NOT — reverses). C uses SHORT-CIRCUIT evaluation: in A && B, if A is false B is not evaluated; in A || B, if A is true B is not evaluated.",
          },
          {
            kind: "table",
            headers: ["A", "B", "A && B", "A || B", "!A"],
            rows: [
              ["0 (false)", "0", "0", "0", "1"],
              ["0", "1 (true)", "0", "1", "1"],
              ["1", "0", "0", "1", "0"],
              ["1", "1", "1", "1", "0"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 9 — Relational and logical operators",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int x = 10, y = 20;

    printf("x <  y : %d\n", x < y);
    printf("x == y : %d\n", x == y);
    printf("x != y : %d\n", x != y);
    printf("(x < y) && (y > 15) : %d\n", (x < y) && (y > 15));
    printf("(x > y) || (y > 15) : %d\n", (x > y) || (y > 15));
    printf("!(x < y)            : %d\n", !(x < y));
    return 0;
}`,
            output: String.raw`x <  y : 1
x == y : 0
x != y : 1
(x < y) && (y > 15) : 1
(x > y) || (y > 15) : 1
!(x < y)            : 0`,
          },
          {
            kind: "paragraph",
            text: "(e) Assignment operators: = stores the value of the right side in the left variable. Compound (short-hand) forms: += , −= , *= , /= , %= , &= , |= , ^= , <<= , >>=. For example a += 5 means a = a + 5.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 10 — Assignment operators",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 10;

    a += 5;  printf("a += 5  -> %d\n", a);
    a -= 3;  printf("a -= 3  -> %d\n", a);
    a *= 2;  printf("a *= 2  -> %d\n", a);
    a /= 4;  printf("a /= 4  -> %d\n", a);
    a %= 4;  printf("a %%= 4  -> %d\n", a);
    return 0;
}`,
            output: String.raw`a += 5  -> 15
a -= 3  -> 12
a *= 2  -> 24
a /= 4  -> 6
a %= 4  -> 2`,
          },
          {
            kind: "paragraph",
            text: "(f) Conditional (ternary) operator ?: — the only operator with three operands. Syntax: condition ? expression1 : expression2; if the condition is true expression1 is evaluated, otherwise expression2. It is a compact form of if–else.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 11 — Conditional operator",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 25, b = 40, max;

    max = (a > b) ? a : b;
    printf("Maximum = %d\n", max);
    printf("%d is %s\n", a, (a % 2 == 0) ? "even" : "odd");
    return 0;
}`,
            output: String.raw`Maximum = 40
25 is odd`,
          },
          {
            kind: "paragraph",
            text: "(g) Bitwise operators work on the individual bits of integers: & (AND), | (OR), ^ (XOR — 1 if the bits differ), ~ (1's complement — flips all bits), << (left shift — multiplies by 2 for each shift) and >> (right shift — divides by 2 for each shift). For a = 12 (1100) and b = 10 (1010): a & b = 1000 = 8; a | b = 1110 = 14; a ^ b = 0110 = 6.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 12 — Bitwise operators",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 12, b = 10;          /* 1100 and 1010 in binary */

    printf("a & b  = %d\n", a & b);
    printf("a | b  = %d\n", a | b);
    printf("a ^ b  = %d\n", a ^ b);
    printf("~a     = %d\n", ~a);
    printf("a << 2 = %d\n", a << 2);
    printf("a >> 2 = %d\n", a >> 2);
    return 0;
}`,
            output: String.raw`a & b  = 8
a | b  = 14
a ^ b  = 6
~a     = -13
a << 2 = 48
a >> 2 = 3`,
          },
          {
            kind: "table",
            headers: ["Priority (high → low)", "Operators", "Associativity"],
            rows: [
              ["1", "( )  [ ]  .  ->  postfix ++ −−", "Left to right"],
              [
                "2",
                "Unary + −  ! ~  prefix ++ −−  * (deref)  & (address)  sizeof  (type cast)",
                "Right to left",
              ],
              ["3", "*  /  %", "Left to right"],
              ["4", "+  −", "Left to right"],
              ["5", "<<  >>", "Left to right"],
              ["6", "<  <=  >  >=", "Left to right"],
              ["7", "==  !=", "Left to right"],
              ["8", "&  then  ^  then  |  (bitwise)", "Left to right"],
              ["9", "&&  then  ||", "Left to right"],
              ["10", "?:  (conditional)", "Right to left"],
              ["11", "=  +=  −=  *=  /=  %=  etc.", "Right to left"],
              ["12", ",  (comma)", "Left to right"],
            ],
          },
          {
            kind: "paragraph",
            text: "Type conversion: when operands of different types are mixed, C automatically converts (implicit conversion / promotion) the smaller type to the larger one (char → int → float → double). The programmer can force a conversion with a TYPE CAST: (type) expression. A very common exam trap: float r = a / b; with int a, b performs INTEGER division first.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 13 — Type casting",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 7, b = 2;
    float r1 = a / b;              /* integer division happens first */
    float r2 = (float)a / b;       /* cast first, then divide        */

    printf("Without cast : %.2f\n", r1);
    printf("With cast    : %.2f\n", r2);
    return 0;
}`,
            output: String.raw`Without cast : 3.00
With cast    : 3.50`,
          },
          {
            kind: "callout",
            tone: "example",
            title: "Evaluate by precedence",
            text: "int x = 10 + 4 * 3 − 8 / 2 % 3;  → * , / and % have equal priority and go left to right: 4*3 = 12; 8/2 = 4; 4 % 3 = 1. Then + and −: 10 + 12 − 1 = 21.  Answer: x = 21.",
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "Token",
        definition: "The smallest meaningful unit of a C program: keyword, identifier, constant, string, operator or special symbol.",
      },
      { term: "Identifier", definition: "A programmer-chosen name for a variable, function or array." },
      { term: "Keyword", definition: "A reserved word with a fixed meaning (e.g., int, if, while); ANSI C has 32." },
      { term: "Variable", definition: "A named memory location whose value can change during execution." },
      { term: "Symbolic constant", definition: "A named constant created with #define or const." },
      { term: "Format specifier", definition: "A % code in printf/scanf that says the type of the value, e.g., %d, %f, %c, %s." },
      { term: "Modulus operator (%)", definition: "Gives the remainder of an integer division." },
      { term: "Ternary operator", definition: "The conditional operator ?: that takes three operands." },
      { term: "Type casting", definition: "Explicit conversion of a value to another data type using (type)." },
    ],
    examQuestions: [
      "Explain the structure of a C program with an example. (Long)",
      "What are the features of C language? (Medium)",
      "Explain the compilation and execution process of a C program. (Medium)",
      "What are tokens? Explain keywords, identifiers and constants. (Long)",
      "What are the rules for naming an identifier? Give valid and invalid examples. (Short)",
      "Explain the data types available in C with their size and range. (Long)",
      "Differentiate between a constant and a variable. What are symbolic constants? (Medium)",
      "Differentiate between #define and const. (Short)",
      "Explain printf() and scanf() with format specifiers. (Medium)",
      "Explain all types of operators in C with examples. (Long)",
      "Differentiate between pre-increment and post-increment with an example. (Medium)",
      "What is the conditional operator? Write a program to find the larger of two numbers using it. (Medium)",
      "Explain bitwise operators with examples. (Medium)",
      "What is type casting? Explain with an example. (Short)",
      "Write the precedence and associativity of operators. Evaluate: 10 + 4 * 3 − 8 / 2 % 3. (Medium)",
    ],
  },
  {
    unitNumber: 2,
    title: "Decision Control Structures, Loops, Storage Classes and Arrays",
    hours: 12,
    headings: [
      {
        id: "decision-if",
        title: "1. Decision Control Statements: if, if-else, Nested if, if-else-if Ladder",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "Normally C executes statements one after another (sequence). Decision (selection) statements let the program choose between different paths depending on a condition. A condition is any expression: a non-zero value means TRUE and zero means FALSE. C has if, if–else, nested if, the if–else–if ladder and switch.",
          },
          { kind: "diagram", diagramId: "if-else-flow", caption: "Fig 2.1 — Flowcharts of if, if-else and the else-if ladder" },
          {
            kind: "table",
            headers: ["Statement", "Syntax", "Working"],
            rows: [
              [
                "Simple if",
                "if (condition) { statements; }",
                "Executes the block only when the condition is true; otherwise it is skipped.",
              ],
              [
                "if–else",
                "if (condition) { block1; } else { block2; }",
                "Executes block1 if the condition is true, otherwise block2. Exactly one block runs.",
              ],
              [
                "Nested if",
                "if (c1) { if (c2) { ... } else { ... } }",
                "An if placed inside another if/else; the inner condition is checked only if the outer is true.",
              ],
              [
                "else–if ladder",
                "if (c1) ... else if (c2) ... else if (c3) ... else ...",
                "Conditions are tested from top to bottom; the first true one executes and the rest of the ladder is skipped. The final else is the default.",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 14 — Simple if: voting eligibility",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    if (age >= 18)
        printf("You are eligible to vote.\n");
    return 0;
}`,
            output: String.raw`Enter your age: 20
You are eligible to vote.`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 15 — if–else: even or odd",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n % 2 == 0)
        printf("%d is even\n", n);
    else
        printf("%d is odd\n", n);
    return 0;
}`,
            output: String.raw`Enter a number: 7
7 is odd`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 16 — Nested if: largest of three numbers",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a, b, c;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a > b) {
        if (a > c)
            printf("Largest = %d\n", a);
        else
            printf("Largest = %d\n", c);
    } else {
        if (b > c)
            printf("Largest = %d\n", b);
        else
            printf("Largest = %d\n", c);
    }
    return 0;
}`,
            output: String.raw`Enter three numbers: 45 78 62
Largest = 78`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 17 — else–if ladder: grade of a student",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int marks;

    printf("Enter marks (0-100): ");
    scanf("%d", &marks);

    if (marks >= 90)
        printf("Grade: A+\n");
    else if (marks >= 75)
        printf("Grade: A\n");
    else if (marks >= 60)
        printf("Grade: B\n");
    else if (marks >= 40)
        printf("Grade: C\n");
    else
        printf("Grade: Fail\n");
    return 0;
}`,
            output: String.raw`Enter marks (0-100): 82
Grade: A`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 18 — Leap year using logical operators",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int year;

    printf("Enter a year: ");
    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("%d is a leap year\n", year);
    else
        printf("%d is not a leap year\n", year);
    return 0;
}`,
            output: String.raw`Enter a year: 2024
2024 is a leap year`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Common mistakes (asked as 'find the error')",
            text: "(1) Writing if (a = 5) instead of if (a == 5) — '=' assigns, '==' compares. (2) Putting a semicolon right after the condition: if (a > b); makes the if control an empty statement. (3) Forgetting braces { } when more than one statement belongs to the if/else — only the first statement is controlled. (4) The 'dangling else' always belongs to the nearest unmatched if.",
          },
        ],
      },
      {
        id: "switch-case",
        title: "2. The switch–case Statement",
        icon: "Compass",
        blocks: [
          {
            kind: "paragraph",
            text: "switch is a multi-way decision statement. The value of an expression (integer or character) is compared with the constants of the case labels; the matching case executes. Syntax: switch (expression) { case value1: statements; break; case value2: statements; break; ... default: statements; }",
          },
          {
            kind: "bullets",
            items: [
              "The switch expression must evaluate to an integer or character (not float or string). Case labels must be unique constants.",
              "break ends the switch. Without break, execution 'falls through' into the next case — useful when several cases share the same action (e.g., vowels).",
              "default is optional; it runs when no case matches, and may be placed anywhere (usually last).",
              "Cases can only test equality; ranges and conditions (marks > 60) cannot be used — use if–else for those.",
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 19 — Simple calculator using switch",
            code: String.raw`#include <stdio.h>

int main(void)
{
    float a, b;
    char op;

    printf("Enter expression (e.g. 12 * 4): ");
    scanf("%f %c %f", &a, &op, &b);

    switch (op) {
        case '+': printf("Result = %.2f\n", a + b); break;
        case '-': printf("Result = %.2f\n", a - b); break;
        case '*': printf("Result = %.2f\n", a * b); break;
        case '/':
            if (b != 0)
                printf("Result = %.2f\n", a / b);
            else
                printf("Division by zero!\n");
            break;
        default:  printf("Invalid operator\n");
    }
    return 0;
}`,
            output: String.raw`Enter expression (e.g. 12 * 4): 12 * 4
Result = 48.00`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 20 — Fall-through: vowel or consonant",
            code: String.raw`#include <stdio.h>

int main(void)
{
    char ch;

    printf("Enter a letter: ");
    scanf(" %c", &ch);

    switch (ch) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("%c is a vowel\n", ch);
            break;
        default:
            printf("%c is a consonant\n", ch);
    }
    return 0;
}`,
            output: String.raw`Enter a letter: e
e is a vowel`,
          },
          {
            kind: "table",
            headers: ["switch", "if–else–if ladder"],
            rows: [
              [
                "Tests only equality against constants (int/char)",
                "Can test any condition, ranges and floating-point values",
              ],
              [
                "Faster and more readable for many fixed choices (menus)",
                "More flexible but longer for many choices",
              ],
              ["Uses break to stop fall-through", "Automatically skips the rest once one condition is true"],
              ["default handles all other cases", "Final else handles all other cases"],
            ],
          },
        ],
      },
      {
        id: "loops",
        title: "3. Iterative Statements: for, while and do-while Loops",
        icon: "Repeat",
        blocks: [
          {
            kind: "paragraph",
            text: "A loop repeats a block of statements as long as a condition is true. Every loop has four parts: initialisation, condition (test), body and update (increment/decrement). C provides three loops: for, while and do–while. The while and for loops are ENTRY-controlled (the condition is tested before the body, so the body may never run); the do–while loop is EXIT-controlled (the body runs at least once).",
          },
          {
            kind: "diagram",
            diagramId: "loops-flow",
            caption: "Fig 2.2 — Flowcharts of while (entry-controlled) and do-while (exit-controlled) loops",
          },
          {
            kind: "table",
            headers: ["Loop", "Syntax", "Condition tested"],
            rows: [
              [
                "for",
                "for (initialisation; condition; update) { body; }",
                "Before every iteration (entry-controlled). Best when the number of repetitions is known.",
              ],
              [
                "while",
                "initialisation; while (condition) { body; update; }",
                "Before every iteration (entry-controlled). Best when the number of repetitions is not known in advance.",
              ],
              [
                "do–while",
                "initialisation; do { body; update; } while (condition);",
                "After every iteration (exit-controlled). Note the semicolon after while(...).",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 21 — for loop: print numbers 1 to 5 and their sum",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int i, sum = 0;

    for (i = 1; i <= 5; i++) {
        printf("%d ", i);
        sum += i;
    }
    printf("\nSum = %d\n", sum);
    return 0;
}`,
            output: String.raw`1 2 3 4 5
Sum = 15`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 22 — while loop: sum of digits of a number",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n, digit, sum = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    while (n > 0) {
        digit = n % 10;      /* extract last digit */
        sum  += digit;
        n     = n / 10;      /* remove last digit  */
    }
    printf("Sum of digits = %d\n", sum);
    return 0;
}`,
            output: String.raw`Enter a number: 4321
Sum of digits = 10`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 23 — do–while loop: validate input (runs at least once)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n;

    do {
        printf("Enter a number between 1 and 10: ");
        scanf("%d", &n);
    } while (n < 1 || n > 10);

    printf("You entered %d\n", n);
    return 0;
}`,
            output: String.raw`Enter a number between 1 and 10: 15
Enter a number between 1 and 10: 0
Enter a number between 1 and 10: 7
You entered 7`,
          },
          {
            kind: "table",
            headers: ["Basis", "for", "while", "do–while"],
            rows: [
              ["Type", "Entry-controlled", "Entry-controlled", "Exit-controlled"],
              ["Minimum executions of body", "0", "0", "1"],
              [
                "Initialisation / update",
                "Written in one line in the header",
                "Written separately",
                "Written separately",
              ],
              ["Semicolon after loop", "No", "No", "Yes — after while(condition)"],
              [
                "Use when",
                "Number of iterations is known",
                "Iterations depend on a condition",
                "Body must run at least once (menus, validation)",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Nested loops: a loop inside another loop. For every single iteration of the outer loop the inner loop runs completely. They are used for patterns, tables and 2-D arrays. An infinite loop never ends, e.g., for(;;) or while(1) — normally stopped with break.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 24 — Factorial of a number",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n, i;
    long fact = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
        fact = fact * i;

    printf("Factorial of %d = %ld\n", n, fact);
    return 0;
}`,
            output: String.raw`Enter a number: 5
Factorial of 5 = 120`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 25 — Reverse a number and check palindrome",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n, temp, rev = 0;

    printf("Enter a number: ");
    scanf("%d", &n);
    temp = n;

    while (temp > 0) {
        rev = rev * 10 + temp % 10;
        temp /= 10;
    }
    printf("Reverse = %d\n", rev);

    if (rev == n)
        printf("%d is a palindrome\n", n);
    else
        printf("%d is not a palindrome\n", n);
    return 0;
}`,
            output: String.raw`Enter a number: 1221
Reverse = 1221
1221 is a palindrome`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 26 — Fibonacci series (first 10 terms)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 0, b = 1, next, i;

    printf("Fibonacci series: ");
    for (i = 1; i <= 10; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    printf("\n");
    return 0;
}`,
            output: "Fibonacci series: 0 1 1 2 3 5 8 13 21 34",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 27 — Prime number check",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n, i, flag = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n < 2)
        flag = 0;
    for (i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag)
        printf("%d is prime\n", n);
    else
        printf("%d is not prime\n", n);
    return 0;
}`,
            output: String.raw`Enter a number: 29
29 is prime`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 28 — Multiplication table",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int n, i;

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= 10; i++)
        printf("%d x %2d = %3d\n", n, i, n * i);
    return 0;
}`,
            output: String.raw`Enter a number: 7
7 x  1 =   7
7 x  2 =  14
7 x  3 =  21
7 x  4 =  28
7 x  5 =  35
7 x  6 =  42
7 x  7 =  49
7 x  8 =  56
7 x  9 =  63
7 x 10 =  70`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 29 — Star pattern using nested for loops",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int i, j;

    for (i = 1; i <= 4; i++) {          /* outer loop: rows    */
        for (j = 1; j <= i; j++)        /* inner loop: columns */
            printf("*");
        printf("\n");
    }
    return 0;
}`,
            output: String.raw`*
**
***
****`,
          },
        ],
      },
      {
        id: "jump-statements",
        title: "4. Conditional (Jump) Statements: break, continue and goto",
        icon: "MoveHorizontal",
        blocks: [
          {
            kind: "table",
            headers: ["Statement", "Effect", "Used in"],
            rows: [
              [
                "break",
                "Immediately terminates the nearest enclosing loop or switch; control goes to the statement after it.",
                "Loops, switch",
              ],
              [
                "continue",
                "Skips the remaining statements of the current iteration and goes to the next iteration (in for loop the update is executed first).",
                "Loops only",
              ],
              [
                "goto label",
                "Transfers control unconditionally to a labelled statement (label:). Makes programs hard to read — avoid.",
                "Anywhere in a function",
              ],
              ["return", "Ends the function and optionally sends back a value.", "Functions"],
              ["exit(n)", "Terminates the whole program (declared in <stdlib.h>).", "Anywhere"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 30 — break and continue",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int i;

    printf("Using continue (odd numbers up to 10): ");
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0)
            continue;               /* skip even numbers */
        printf("%d ", i);
    }

    printf("\nUsing break (stop at first multiple of 7 above 50): ");
    for (i = 51; i <= 100; i++) {
        if (i % 7 == 0) {
            printf("%d", i);
            break;                  /* leave the loop */
        }
    }
    printf("\n");
    return 0;
}`,
            output: String.raw`Using continue (odd numbers up to 10): 1 3 5 7 9
Using break (stop at first multiple of 7 above 50): 56`,
          },
        ],
      },
      {
        id: "storage-classes",
        title: "5. Storage Classes",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "A storage class defines four properties of a variable: (1) where it is stored (memory or CPU register), (2) its default initial value, (3) its SCOPE — the part of the program where it can be used, and (4) its LIFETIME — how long it exists. C has four storage classes: auto, register, static and extern.",
          },
          {
            kind: "table",
            headers: ["Storage class", "Stored in", "Default value", "Scope", "Lifetime"],
            rows: [
              ["auto", "RAM (stack)", "Garbage", "Local to the block where declared", "Until the block ends"],
              [
                "register",
                "CPU register (if available, else RAM)",
                "Garbage",
                "Local to the block",
                "Until the block ends",
              ],
              [
                "static",
                "RAM (data area)",
                "0",
                "Local to the block (or to the file if declared outside functions)",
                "Entire program — value is retained between function calls",
              ],
              [
                "extern",
                "RAM (data area)",
                "0",
                "Global — whole program (can be shared between files)",
                "Entire program",
              ],
            ],
          },
          {
            kind: "bullets",
            items: [
              "auto: the default class of every local variable. auto int x; is the same as int x;",
              "register: a request to the compiler to keep a frequently used variable (like a loop counter) in a CPU register for speed. The address operator & cannot be applied to it.",
              "static: a static local variable is initialised only once and keeps its value between function calls. A static global variable is visible only inside its own file.",
              "extern: declares (does not create) a variable that is defined elsewhere — another place in the file or another file. It tells the compiler 'this variable exists, do not allocate memory again'.",
              "Scope: local (inside a function/block), global (outside all functions), function and file scope. Local variables hide global variables of the same name inside their block.",
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 31 — static vs auto variable",
            code: String.raw`#include <stdio.h>

void counter(void)
{
    static int s = 0;      /* initialised once, value retained */
    int a = 0;             /* re-created on every call         */

    s++;
    a++;
    printf("static = %d, auto = %d\n", s, a);
}

int main(void)
{
    counter();
    counter();
    counter();
    return 0;
}`,
            output: String.raw`static = 1, auto = 1
static = 2, auto = 1
static = 3, auto = 1`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 32 — Global, local and block scope",
            code: String.raw`#include <stdio.h>

int x = 10;                        /* global variable */

void show(void)
{
    printf("show(): global x = %d\n", x);
}

int main(void)
{
    int x = 20;                    /* local x hides the global x */
    printf("main(): local x = %d\n", x);
    show();
    {
        int x = 30;                /* block scope */
        printf("inner block: x = %d\n", x);
    }
    printf("after block: x = %d\n", x);
    return 0;
}`,
            output: String.raw`main(): local x = 20
show(): global x = 10
inner block: x = 30
after block: x = 20`,
          },
        ],
      },
      {
        id: "arrays-1d",
        title: "6. Arrays: Declaration, Initialisation and One-Dimensional Arrays",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "An array is a collection of a fixed number of elements of the SAME data type stored in CONTIGUOUS (adjacent) memory locations and referred to by a common name. Each element is accessed by an index (subscript). Array indexing starts at 0, so an array of size n has valid indices 0 to n − 1. C does not check array bounds — accessing a[n] is an error that gives garbage or crashes the program.",
          },
          { kind: "diagram", diagramId: "array-memory-1d", caption: "Fig 2.3 — One-dimensional array in memory (int a[5], 4 bytes per element)" },
          {
            kind: "table",
            headers: ["Topic", "Syntax / Example"],
            rows: [
              [
                "Declaration",
                "data_type array_name[size];   →   int marks[5];   float price[10];   char name[20];",
              ],
              ["Initialisation at declaration", "int a[5] = {10, 20, 30, 40, 50};"],
              ["Partial initialisation", "int a[5] = {10, 20};  → remaining elements become 0"],
              ["Size omitted", "int a[] = {5, 6, 7};  → compiler makes the size 3"],
              ["Accessing an element", "a[0] = 10;   x = a[2];   (a[i] with i from 0 to size−1)"],
              [
                "Types of arrays",
                "One-dimensional (single dimension): a[5];  Two-dimensional: a[3][4];  Multi-dimensional: a[2][3][4]",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Address calculation of a 1-D array: if the base address (address of a[0]) is B and each element takes w bytes, then Address of a[i] = B + i × w. Example: for int a[5] with B = 1000 and w = 4, the address of a[3] = 1000 + 3 × 4 = 1012.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 33 — Sum and average of array elements",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int marks[5] = {70, 85, 90, 65, 80};
    int i, sum = 0;

    for (i = 0; i < 5; i++)
        sum += marks[i];

    printf("Sum     = %d\n", sum);
    printf("Average = %.2f\n", sum / 5.0);
    return 0;
}`,
            output: String.raw`Sum     = 390
Average = 78.00`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 34 — Largest and smallest element (input from user)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[5], i, max, min;

    printf("Enter 5 numbers: ");
    for (i = 0; i < 5; i++)
        scanf("%d", &a[i]);

    max = min = a[0];
    for (i = 1; i < 5; i++) {
        if (a[i] > max) max = a[i];
        if (a[i] < min) min = a[i];
    }
    printf("Largest = %d, Smallest = %d\n", max, min);
    return 0;
}`,
            output: String.raw`Enter 5 numbers: 34 78 12 90 56
Largest = 90, Smallest = 12`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 35 — Linear search",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[5] = {10, 25, 40, 55, 70};
    int i, key, found = 0;

    printf("Enter the number to search: ");
    scanf("%d", &key);

    for (i = 0; i < 5; i++) {
        if (a[i] == key) {
            printf("%d found at position %d\n", key, i + 1);
            found = 1;
            break;
        }
    }
    if (!found)
        printf("%d not found\n", key);
    return 0;
}`,
            output: String.raw`Enter the number to search: 55
55 found at position 4`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 36 — Bubble sort (ascending order)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[5] = {64, 25, 12, 22, 11};
    int i, j, temp;

    for (i = 0; i < 4; i++) {              /* number of passes */
        for (j = 0; j < 4 - i; j++) {      /* compare neighbours */
            if (a[j] > a[j + 1]) {
                temp     = a[j];
                a[j]     = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    printf("Sorted array: ");
    for (i = 0; i < 5; i++)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}`,
            output: "Sorted array: 11 12 22 25 64",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 37 — Print an array in reverse order",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[5] = {1, 2, 3, 4, 5};
    int i;

    printf("Reverse: ");
    for (i = 4; i >= 0; i--)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}`,
            output: "Reverse: 5 4 3 2 1",
          },
        ],
      },
      {
        id: "arrays-2d",
        title: "7. Two-Dimensional Arrays and Address Calculation",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A two-dimensional array is an array of arrays — a table (matrix) with rows and columns. Declaration: data_type name[rows][cols]; e.g., int m[3][4]; has 3 rows and 4 columns (12 elements). Elements are accessed as m[i][j] (row i, column j) with both indices starting at 0. Initialisation: int m[2][3] = { {1, 2, 3}, {4, 5, 6} };",
          },
          { kind: "diagram", diagramId: "array-memory-2d", caption: "Fig 2.4 — A 2-D array and its row-major storage in memory" },
          {
            kind: "paragraph",
            text: "Memory is linear, so a 2-D array is stored either Row-major (row by row — used by C) or Column-major (column by column — used by FORTRAN). For an array with m rows and n columns, base address B, element size w, and lower bounds 0:",
          },
          {
            kind: "table",
            headers: ["Method", "Address of a[i][j]"],
            rows: [
              ["Row-major order", "B + w × (i × n + j)"],
              ["Column-major order", "B + w × (j × m + i)"],
              [
                "Row-major with lower bounds LB1 (rows), LB2 (columns)",
                "B + w × [ n × (i − LB1) + (j − LB2) ]",
              ],
              ["Column-major with lower bounds", "B + w × [ m × (j − LB2) + (i − LB1) ]"],
            ],
          },
          {
            kind: "callout",
            tone: "example",
            title: "Solved example — Address calculation",
            text: "An integer array a[4][5] (m = 4 rows, n = 5 columns) is stored with base address 1000 and each integer takes 2 bytes (w = 2). Find the address of a[2][3].  Row-major: 1000 + 2 × (2 × 5 + 3) = 1000 + 2 × 13 = 1026.  Column-major: 1000 + 2 × (3 × 4 + 2) = 1000 + 2 × 14 = 1028.   If the array had been declared with lower bounds 1 (a[1..4][1..5]) the element a[3][4] (the same physical element) gives row-major: 1000 + 2 × [5 × (3−1) + (4−1)] = 1000 + 2 × 13 = 1026.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 38 — Addition of two matrices",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int c[2][2], i, j;

    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            c[i][j] = a[i][j] + b[i][j];

    printf("Sum of matrices:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++)
            printf("%4d", c[i][j]);
        printf("\n");
    }
    return 0;
}`,
            output: String.raw`Sum of matrices:
   6   8
  10  12`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 39 — Multiplication of two matrices",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int c[2][2], i, j, k;

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            c[i][j] = 0;
            for (k = 0; k < 2; k++)
                c[i][j] += a[i][k] * b[k][j];
        }
    }
    printf("Product of matrices:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++)
            printf("%4d", c[i][j]);
        printf("\n");
    }
    return 0;
}`,
            output: String.raw`Product of matrices:
  19  22
  43  50`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 40 — Transpose of a 2 x 3 matrix",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int t[3][2], i, j;

    for (i = 0; i < 2; i++)
        for (j = 0; j < 3; j++)
            t[j][i] = a[i][j];

    printf("Transpose:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++)
            printf("%3d", t[i][j]);
        printf("\n");
    }
    return 0;
}`,
            output: String.raw`Transpose:
  1  4
  2  5
  3  6`,
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Selection statement", definition: "A statement (if, if-else, switch) that chooses which block to execute based on a condition." },
      { term: "Entry-controlled loop", definition: "A loop that tests its condition before executing the body (for, while)." },
      { term: "Exit-controlled loop", definition: "A loop that tests its condition after executing the body, so it runs at least once (do-while)." },
      { term: "break / continue", definition: "break leaves the loop or switch; continue skips to the next iteration." },
      {
        term: "Storage class",
        definition: "Determines the storage location, default value, scope and lifetime of a variable: auto, register, static, extern.",
      },
      { term: "Array", definition: "A fixed-size collection of same-type elements stored in contiguous memory and accessed by index." },
      { term: "Row-major order", definition: "Storing a 2-D array row by row in memory (used by C)." },
      { term: "Base address", definition: "The address of the first element of an array." },
    ],
    examQuestions: [
      "Explain the decision-making statements of C with syntax, flowchart and examples. (Long)",
      "Write a program to find the largest of three numbers using nested if. (Medium)",
      "Explain the switch statement with an example. Differentiate between switch and if-else. (Long)",
      "Explain the three loops of C with syntax and examples. (Long)",
      "Differentiate between while and do-while loops. (Medium)",
      "Write programs for: factorial, Fibonacci series, prime number, palindrome, sum of digits. (Long)",
      "Write a program to print the pattern * / ** / *** using nested loops. (Medium)",
      "Explain break and continue with examples. (Medium)",
      "What are storage classes? Explain auto, register, static and extern. (Long)",
      "Differentiate between static and auto variables with an example. (Medium)",
      "What is an array? Explain declaration and initialisation of one-dimensional arrays. (Medium)",
      "Write a program to sort an array using bubble sort / search an element using linear search. (Long)",
      "What is a two-dimensional array? Write programs for matrix addition and multiplication. (Long)",
      "Derive the address calculation of an element in a 2-D array (row-major and column-major) with an example. (Long)",
      "Find the address of a[2][3] in a[4][5] with base 1000 and element size 2 (row-major). (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Functions",
    hours: 8,
    headings: [
      {
        id: "function-concept",
        title: "1. Concept of Functions and Library Functions",
        icon: "Cpu",
        blocks: [
          {
            kind: "paragraph",
            text: "A function is a self-contained block of statements that performs a specific task and is identified by a name. A large program is divided into small functions (modular programming) — the program is easier to write, test, debug and maintain. main() is itself a function, the entry point of every C program.",
          },
          {
            kind: "table",
            headers: ["Advantages of functions", "Explanation"],
            rows: [
              ["Reusability", "Write once, call any number of times — avoids repeating code."],
              ["Modularity", "A big problem is broken into small manageable parts."],
              ["Easy debugging and testing", "Each function can be tested separately."],
              ["Reduced program size", "Common code is kept at one place."],
              ["Teamwork", "Different programmers can write different functions."],
            ],
          },
          {
            kind: "paragraph",
            text: "Types of functions: (1) Library (built-in / predefined) functions — already written and stored in header files, e.g., printf(), scanf(), sqrt(), strlen(). (2) User-defined functions — written by the programmer for a specific job, e.g., add(), factorial().",
          },
          {
            kind: "table",
            headers: ["Header file", "Common library functions"],
            rows: [
              [
                "stdio.h",
                "printf, scanf, getchar, putchar, gets, puts, fgets, fopen, fclose, fprintf, fscanf",
              ],
              ["math.h", "sqrt, pow, ceil, floor, fabs, sin, cos, tan, log, log10, exp"],
              ["string.h", "strlen, strcpy, strcat, strcmp, strchr, strstr"],
              ["ctype.h", "isalpha, isdigit, isupper, islower, toupper, tolower"],
              ["stdlib.h", "malloc, calloc, realloc, free, exit, abs, atoi, rand"],
            ],
          },
        ],
      },
      {
        id: "function-elements",
        title: "2. Declaration, Definition, Call, Arguments and Return",
        icon: "Play",
        blocks: [
          {
            kind: "paragraph",
            text: "Every user-defined function involves three things: the function DECLARATION (prototype), the function DEFINITION and the function CALL.",
          },
          { kind: "diagram", diagramId: "function-call-flow", caption: "Fig 3.1 — Control flow of a function call and return" },
          {
            kind: "table",
            headers: ["Element", "Syntax", "Meaning"],
            rows: [
              [
                "Function declaration (prototype)",
                "return_type function_name(type arg1, type arg2);",
                "Tells the compiler the name, return type and parameter types before the function is used. Ends with a semicolon.",
              ],
              [
                "Function definition",
                "return_type function_name(parameter list) { body; return value; }",
                "The actual code of the function. Header + body in braces. No semicolon after the header.",
              ],
              [
                "Function call",
                "function_name(arguments);   or   x = function_name(arguments);",
                "Transfers control to the function; when it finishes, control comes back to the statement after the call.",
              ],
              [
                "return statement",
                "return expression;",
                "Ends the function and sends a value back to the caller. A void function uses plain return; or none.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["Actual arguments (parameters)", "Formal arguments (parameters)"],
            rows: [
              [
                "Values/variables written in the function CALL",
                "Variables written in the function DEFINITION header",
              ],
              [
                "Supply the real data — may be constants or expressions",
                "Receive the data — always variables with data types",
              ],
              ["Belong to the calling function", "Belong to the called function (local to it)"],
              ["Example: add(a, b)  or  add(5, 7)", "Example: int add(int x, int y)"],
            ],
          },
          {
            kind: "paragraph",
            text: "Categories of functions (by arguments and return value): (1) no arguments, no return value; (2) arguments, no return value; (3) no arguments, with a return value; (4) arguments with a return value. The number, order and types of actual arguments must match the formal arguments.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 41 — A function with arguments and a return value",
            code: String.raw`#include <stdio.h>

int add(int x, int y);               /* function declaration */

int main(void)
{
    int a = 15, b = 27, s;

    s = add(a, b);                   /* function call: a, b are actual arguments */
    printf("Sum = %d\n", s);
    return 0;
}

int add(int x, int y)                /* function definition: x, y are formal arguments */
{
    return x + y;
}`,
            output: "Sum = 42",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 42 — The four categories of functions",
            code: String.raw`#include <stdio.h>

void greet(void)                     /* 1. no arguments, no return value */
{
    printf("Hello from greet()\n");
}

void square_print(int n)             /* 2. arguments, no return value */
{
    printf("Square of %d = %d\n", n, n * n);
}

int read_number(void)                /* 3. no arguments, returns a value */
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    return n;
}

int cube(int n)                      /* 4. arguments and return value */
{
    return n * n * n;
}

int main(void)
{
    int x;

    greet();
    x = read_number();
    square_print(x);
    printf("Cube of %d = %d\n", x, cube(x));
    return 0;
}`,
            output: String.raw`Hello from greet()
Enter a number: 4
Square of 4 = 16
Cube of 4 = 64`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 43 — Calling one function many times: nCr",
            code: String.raw`#include <stdio.h>

long fact(int n)
{
    long f = 1;
    int i;
    for (i = 2; i <= n; i++)
        f *= i;
    return f;
}

int main(void)
{
    int n = 5, r = 2;
    long ncr = fact(n) / (fact(r) * fact(n - r));

    printf("%dC%d = %ld\n", n, r, ncr);
    return 0;
}`,
            output: "5C2 = 10",
          },
          {
            kind: "paragraph",
            text: "Recursion: when a function calls ITSELF it is called a recursive function. Every recursive function needs (1) a base case that stops the recursion and (2) a recursive case that moves towards the base case. Without a base case the function would call itself endlessly and the stack overflows.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 44 — Recursion: factorial and Fibonacci",
            code: String.raw`#include <stdio.h>

long fact(int n)
{
    if (n <= 1)                      /* base case */
        return 1;
    return n * fact(n - 1);          /* recursive case */
}

int fib(int n)
{
    if (n == 0) return 0;            /* base cases */
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main(void)
{
    int i;

    printf("Factorial of 5 = %ld\n", fact(5));
    printf("Fibonacci: ");
    for (i = 0; i < 8; i++)
        printf("%d ", fib(i));
    printf("\n");
    return 0;
}`,
            output: String.raw`Factorial of 5 = 120
Fibonacci: 0 1 1 2 3 5 8 13`,
          },
          {
            kind: "callout",
            tone: "example",
            title: "How fact(3) works (trace)",
            text: "fact(3) = 3 × fact(2);  fact(2) = 2 × fact(1);  fact(1) returns 1 (base case).  Now the calls return one by one: fact(2) = 2 × 1 = 2, then fact(3) = 3 × 2 = 6.  Each pending call waits on the stack until the one below it returns.",
          },
        ],
      },
      {
        id: "arrays-to-functions",
        title: "3. Passing Arrays to Functions",
        icon: "Table",
        blocks: [
          {
            kind: "paragraph",
            text: "When an array is passed to a function, only the ADDRESS of its first element (the array name) is passed — the array is not copied. So the function works on the original array and any change it makes is visible in the caller. The size is normally passed as a separate argument because the function cannot find it. For a 1-D array the formal parameter is written int a[] (or int *a). For a 2-D array, the number of columns must be given: int m[][3].",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 45 — Passing a 1-D array (find largest, modify elements)",
            code: String.raw`#include <stdio.h>

int find_max(int a[], int n)
{
    int i, max = a[0];
    for (i = 1; i < n; i++)
        if (a[i] > max)
            max = a[i];
    return max;
}

void double_all(int a[], int n)      /* changes the ORIGINAL array */
{
    int i;
    for (i = 0; i < n; i++)
        a[i] = a[i] * 2;
}

int main(void)
{
    int marks[5] = {34, 78, 12, 90, 56};
    int i;

    printf("Largest = %d\n", find_max(marks, 5));
    double_all(marks, 5);
    printf("After doubling: ");
    for (i = 0; i < 5; i++)
        printf("%d ", marks[i]);
    printf("\n");
    return 0;
}`,
            output: String.raw`Largest = 90
After doubling: 68 156 24 180 112`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 46 — Passing a 2-D array",
            code: String.raw`#include <stdio.h>

int sum_matrix(int m[][3], int rows)         /* column size is compulsory */
{
    int i, j, sum = 0;
    for (i = 0; i < rows; i++)
        for (j = 0; j < 3; j++)
            sum += m[i][j];
    return sum;
}

int main(void)
{
    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};

    printf("Sum of all elements = %d\n", sum_matrix(m, 2));
    return 0;
}`,
            output: "Sum of all elements = 21",
          },
        ],
      },
      {
        id: "call-by-value-reference",
        title: "4. Call by Value and Call by Reference",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "There are two ways of passing arguments to a function. In CALL BY VALUE a COPY of the actual argument is given to the formal argument, so changes made inside the function do not affect the caller's variable. In CALL BY REFERENCE the ADDRESS of the variable is passed (using the & operator) and the function receives it in a pointer (*), so the function can change the original variable. (C really passes addresses by value, but this is what is called 'call by reference' in C.)",
          },
          { kind: "diagram", diagramId: "call-by-value-reference", caption: "Fig 3.2 — Call by value (copies) vs call by reference (addresses)" },
          {
            kind: "table",
            headers: ["Call by value", "Call by reference"],
            rows: [
              ["A copy of the value is passed", "The address of the variable is passed"],
              ["Formal arguments are ordinary variables", "Formal arguments are pointer variables"],
              ["Original variables are NOT changed", "Original variables CAN be changed"],
              ["Uses more memory for copies of big data", "No copying — saves memory and time"],
              [
                "Call: swap(a, b);   Header: void swap(int x, int y)",
                "Call: swap(&a, &b);   Header: void swap(int *x, int *y)",
              ],
              ["Safer — data is protected", "Less safe — the function can modify the caller's data"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 47 — Call by value: swap does NOT work",
            code: String.raw`#include <stdio.h>

void swap_val(int a, int b)
{
    int t = a;
    a = b;
    b = t;
    printf("Inside swap_val : a = %d, b = %d\n", a, b);
}

int main(void)
{
    int x = 10, y = 20;

    printf("Before swap     : x = %d, y = %d\n", x, y);
    swap_val(x, y);
    printf("After swap      : x = %d, y = %d\n", x, y);
    return 0;
}`,
            output: String.raw`Before swap     : x = 10, y = 20
Inside swap_val : a = 20, b = 10
After swap      : x = 10, y = 20`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 48 — Call by reference: swap works",
            code: String.raw`#include <stdio.h>

void swap_ref(int *a, int *b)
{
    int t = *a;          /* *a is the value stored at address a */
    *a = *b;
    *b = t;
}

int main(void)
{
    int x = 10, y = 20;

    printf("Before swap : x = %d, y = %d\n", x, y);
    swap_ref(&x, &y);    /* pass addresses */
    printf("After swap  : x = %d, y = %d\n", x, y);
    return 0;
}`,
            output: String.raw`Before swap : x = 10, y = 20
After swap  : x = 20, y = 10`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Exam Tip",
            text: "The swap program is the classic answer to 'differentiate call by value and call by reference' — write both programs, show their outputs (unchanged vs swapped) and draw the memory diagram. A function can return only ONE value with return; to send back several values use pointers (Unit IV).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Function", definition: "A named block of statements that performs a specific task and can be called from other places." },
      { term: "Function prototype", definition: "A declaration that gives the return type, name and parameter types of a function before its use." },
      { term: "Actual argument", definition: "The value or variable supplied in the function call." },
      { term: "Formal argument", definition: "The variable in the function definition that receives the actual argument." },
      { term: "Recursion", definition: "A function calling itself; needs a base case to stop." },
      { term: "Call by value", definition: "Passing a copy of the argument; the original is unchanged." },
      { term: "Call by reference", definition: "Passing the address of the argument so that the function can change the original." },
      { term: "Library function", definition: "A ready-made function declared in a standard header file, e.g., printf(), sqrt()." },
    ],
    examQuestions: [
      "What is a function? Explain the advantages of using functions. (Medium)",
      "Differentiate between library functions and user-defined functions. (Medium)",
      "Explain function declaration, definition and call with an example. (Long)",
      "Explain the categories of functions with examples. (Long)",
      "Differentiate between actual and formal arguments. (Short)",
      "What is recursion? Write a recursive program for factorial. (Medium)",
      "How are arrays passed to functions? Write a program to pass a 1-D array to a function. (Medium)",
      "Differentiate between call by value and call by reference with a swap program. (Long)",
      "What is the role of the return statement? (Short)",
      "Write a function to check whether a number is prime and call it from main(). (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Strings, Mathematical Functions, Pointers and Dynamic Memory",
    hours: 10,
    headings: [
      {
        id: "strings",
        title: "1. Strings: Declaration, Initialisation, Input and Output",
        icon: "AlignLeft",
        blocks: [
          {
            kind: "paragraph",
            text: "C has no separate string data type. A string is a one-dimensional array of characters that is terminated by the NULL character '\\0' (ASCII value 0). The null character marks where the string ends, so a string of n characters needs an array of at least n + 1 elements. For example, \"BCA\" occupies 4 bytes: 'B', 'C', 'A', '\\0'.",
          },
          { kind: "diagram", diagramId: "string-memory", caption: "Fig 4.1 — The string \"HELLO\" stored in a char array (6 bytes including '\\0')" },
          {
            kind: "table",
            headers: ["Topic", "Syntax / Example"],
            rows: [
              ["Declaration", "char name[20];   — can hold a string of up to 19 characters plus '\\0'"],
              ["Initialisation with a string literal", "char s1[] = \"Hello\";   → size is automatically 6"],
              ["Initialisation character by character", "char s2[10] = {'B', 'C', 'A', '\\0'};"],
              [
                "Reading a word",
                "scanf(\"%s\", name);   — no & needed; stops at the first white space (space, tab, newline)",
              ],
              [
                "Reading a full line",
                "fgets(name, sizeof(name), stdin);   — reads up to the end of the line including spaces (it also stores the newline character). gets(name) does the same but is unsafe (no size limit) and was removed in C11.",
              ],
              ["Printing", "printf(\"%s\", name);   or   puts(name);  (puts adds a new line)"],
              ["Character input/output", "getchar() reads one character; putchar(ch) writes one character."],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 49 — Declaring and reading strings with fgets",
            code: String.raw`#include <stdio.h>

int main(void)
{
    char s1[] = "Hello";
    char s2[10] = {'B', 'C', 'A', '\0'};
    char name[30];

    printf("s1 = %s (size %zu bytes)\n", s1, sizeof(s1));
    printf("s2 = %s\n", s2);

    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin);
    printf("Hello, %s", name);
    return 0;
}`,
            output: String.raw`s1 = Hello (size 6 bytes)
s2 = BCA
Enter your full name: Amit Kumar
Hello, Amit Kumar`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 50 — scanf(\"%s\") stops at the first space",
            code: String.raw`#include <stdio.h>

int main(void)
{
    char first[20];

    printf("Enter your name: ");
    scanf("%s", first);
    printf("You typed: %s\n", first);
    return 0;
}`,
            output: String.raw`Enter your name: Amit Kumar
You typed: Amit`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 51 — String operations without library functions",
            code: String.raw`#include <stdio.h>

int main(void)
{
    char str[50], rev[50];
    int i, len = 0, vowels = 0, is_pal = 1;

    printf("Enter a word: ");
    scanf("%s", str);

    while (str[len] != '\0')                 /* length */
        len++;

    for (i = 0; i < len; i++) {              /* count vowels, build reverse */
        char c = str[i];
        if (c=='a' || c=='e' || c=='i' || c=='o' || c=='u' ||
            c=='A' || c=='E' || c=='I' || c=='O' || c=='U')
            vowels++;
        rev[i] = str[len - 1 - i];
    }
    rev[len] = '\0';                         /* never forget the terminator */

    for (i = 0; i < len; i++)
        if (str[i] != rev[i])
            is_pal = 0;

    printf("Length   = %d\n", len);
    printf("Vowels   = %d\n", vowels);
    printf("Reverse  = %s\n", rev);
    printf("%s\n", is_pal ? "It is a palindrome" : "It is not a palindrome");
    return 0;
}`,
            output: String.raw`Enter a word: madam
Length   = 5
Vowels   = 2
Reverse  = madam
It is a palindrome`,
          },
        ],
      },
      {
        id: "string-functions",
        title: "2. String Handling Functions (string.h)",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "The header file <string.h> provides ready-made functions to work on strings. Because a string is an array, the operators = , + and == cannot be used on strings — these functions must be used instead.",
          },
          {
            kind: "table",
            headers: ["Function", "Purpose", "Example → Result"],
            rows: [
              [
                "strlen(s)",
                "Returns the length of s (number of characters before '\\0').",
                "strlen(\"Hello\") → 5",
              ],
              [
                "strcpy(dest, src)",
                "Copies string src (with '\\0') into dest. dest must be big enough.",
                "strcpy(c, \"Hello\") → c = \"Hello\"",
              ],
              [
                "strncpy(dest, src, n)",
                "Copies at most n characters.",
                "strncpy(c, \"Hello\", 3) → \"Hel\" (add '\\0' yourself)",
              ],
              [
                "strcat(s1, s2)",
                "Appends s2 at the end of s1 (concatenation).",
                "s1 = \"Hello\", s2 = \"World\" → s1 = \"HelloWorld\"",
              ],
              [
                "strcmp(s1, s2)",
                "Compares two strings alphabetically: returns 0 if equal, a negative value if s1 < s2, a positive value if s1 > s2.",
                "strcmp(\"apple\", \"banana\") → negative",
              ],
              [
                "strncmp(s1, s2, n)",
                "Compares only the first n characters.",
                "strncmp(\"Hello\", \"Help\", 3) → 0",
              ],
              [
                "strchr(s, ch)",
                "Returns a pointer to the first occurrence of ch in s (NULL if absent).",
                "strchr(\"HelloWorld\", 'W') → \"World\"",
              ],
              [
                "strstr(s1, s2)",
                "Returns a pointer to the first occurrence of substring s2 in s1.",
                "strstr(\"HelloWorld\", \"oW\") → \"oWorld\"",
              ],
              [
                "strrev(s), strupr(s), strlwr(s)",
                "Reverse / convert to upper case / lower case. NOT part of standard C (available only in Turbo C / old compilers).",
                "Use toupper()/tolower() from <ctype.h> in a loop instead",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 52 — Using string.h and ctype.h",
            code: String.raw`#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    char a[30] = "Hello", b[30] = "World", c[30];
    int i;

    printf("strlen(a)          = %zu\n", strlen(a));
    strcpy(c, a);
    printf("strcpy -> c        = %s\n", c);
    strcat(a, b);
    printf("strcat -> a        = %s\n", a);
    printf("strcmp equal?      = %d\n", strcmp("apple", "apple"));
    printf("apple < banana?    = %d\n", strcmp("apple", "banana") < 0);
    printf("strchr(a, 'W')     = %s\n", strchr(a, 'W'));
    printf("strstr(a, \"oW\")    = %s\n", strstr(a, "oW"));

    for (i = 0; a[i] != '\0'; i++)
        a[i] = toupper(a[i]);
    printf("Upper case         = %s\n", a);
    return 0;
}`,
            output: String.raw`strlen(a)          = 5
strcpy -> c        = Hello
strcat -> a        = HelloWorld
strcmp equal?      = 0
apple < banana?    = 1
strchr(a, 'W')     = World
strstr(a, "oW")    = oWorld
Upper case         = HELLOWORLD`,
          },
        ],
      },
      {
        id: "math-functions",
        title: "3. Predefined Mathematical Functions (math.h)",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The header file <math.h> contains functions for mathematical calculations. Most of them take and return double values. On Linux/GCC the maths library must be linked with the option -lm (gcc prog.c -lm); in Turbo C/Dev-C++ it is linked automatically.",
          },
          {
            kind: "table",
            headers: ["Function", "Purpose", "Example → Result"],
            rows: [
              ["sqrt(x)", "Square root of x (x ≥ 0)", "sqrt(144) → 12"],
              ["pow(x, y)", "x raised to the power y", "pow(2, 10) → 1024"],
              ["ceil(x)", "Smallest integer not less than x (rounds up)", "ceil(4.2) → 5"],
              ["floor(x)", "Largest integer not greater than x (rounds down)", "floor(4.8) → 4"],
              [
                "fabs(x) / abs(n)",
                "Absolute value of a real number / an integer (abs is in <stdlib.h>)",
                "fabs(−7.5) → 7.5",
              ],
              [
                "sin(x), cos(x), tan(x)",
                "Trigonometric functions; x is in RADIANS (radians = degrees × π / 180)",
                "sin(π/2) → 1",
              ],
              [
                "log(x) / log10(x)",
                "Natural logarithm (base e) / common logarithm (base 10)",
                "log10(1000) → 3",
              ],
              ["exp(x)", "e raised to the power x", "exp(0) → 1"],
              [
                "fmod(x, y)",
                "Remainder of x / y for real numbers (the % operator works only on integers)",
                "fmod(10, 3) → 1",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 53 — Mathematical functions",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
    double pi = 3.14159265358979;

    printf("sqrt(144)      = %.0f\n", sqrt(144));
    printf("pow(2, 10)     = %.0f\n", pow(2, 10));
    printf("ceil(4.2)      = %.0f\n", ceil(4.2));
    printf("floor(4.8)     = %.0f\n", floor(4.8));
    printf("fabs(-7.5)     = %.1f\n", fabs(-7.5));
    printf("abs(-9)        = %d\n", abs(-9));
    printf("sin(90 deg)    = %.2f\n", sin(90 * pi / 180));
    printf("log10(1000)    = %.0f\n", log10(1000.0));
    printf("exp(0)         = %.0f\n", exp(0));
    printf("fmod(10, 3)    = %.0f\n", fmod(10, 3));
    return 0;
}`,
            output: String.raw`sqrt(144)      = 12
pow(2, 10)     = 1024
ceil(4.2)      = 5
floor(4.8)     = 4
fabs(-7.5)     = 7.5
abs(-9)        = 9
sin(90 deg)    = 1.00
log10(1000)    = 3
exp(0)         = 1
fmod(10, 3)    = 1`,
          },
        ],
      },
      {
        id: "pointers",
        title: "4. Pointers: Declaration and Use",
        icon: "Crosshair",
        blocks: [
          {
            kind: "paragraph",
            text: "Every variable lives at a unique memory address. A pointer is a variable that stores the ADDRESS of another variable. Pointers give C its power: they allow call by reference, dynamic memory, efficient array/string handling and data structures such as linked lists.",
          },
          { kind: "diagram", diagramId: "pointer-diagram", caption: "Fig 4.2 — A pointer p storing the address of variable a" },
          {
            kind: "table",
            headers: ["Concept", "Syntax", "Meaning"],
            rows: [
              [
                "Pointer declaration",
                "data_type *ptr;   e.g., int *p;",
                "p can hold the address of an int variable. The * here means 'pointer to'.",
              ],
              ["Address-of operator", "&variable   e.g., p = &a;", "Gives the memory address of a variable."],
              [
                "Indirection (dereference) operator",
                "*ptr   e.g., x = *p;   *p = 25;",
                "Accesses the value stored at the address held in the pointer.",
              ],
              [
                "NULL pointer",
                "int *p = NULL;",
                "Points to nothing; always initialise a pointer that has no valid address yet.",
              ],
              [
                "Pointer to pointer",
                "int **pp = &p;",
                "Stores the address of another pointer; **pp gives the final value.",
              ],
              [
                "Size of a pointer",
                "sizeof(p)",
                "Same for all pointer types on a machine (8 bytes on 64-bit, 4 bytes on 32-bit, 2 bytes in Turbo C).",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 54 — Pointer basics: & and *",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 10;
    int *p = &a;             /* p stores the address of a */
    int **pp = &p;           /* pp stores the address of p */

    printf("Value of a           = %d\n", a);
    printf("Value using *p       = %d\n", *p);
    *p = 25;                 /* changes a through the pointer */
    printf("a after *p = 25      = %d\n", a);
    printf("Value using **pp     = %d\n", **pp);
    printf("p holds address of a : %s\n", (p == &a) ? "yes" : "no");
    return 0;
}`,
            output: String.raw`Value of a           = 10
Value using *p       = 10
a after *p = 25      = 25
Value using **pp     = 25
p holds address of a : yes`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 55 — Printing addresses (sample output; addresses differ on every run)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a = 10;
    int *p = &a;

    printf("Address of a  (&a) = %p\n", (void *)&a);
    printf("Value of p         = %p\n", (void *)p);
    printf("Address of p  (&p) = %p\n", (void *)&p);
    printf("Value of *p        = %d\n", *p);
    return 0;
}`,
            output: String.raw`Address of a  (&a) = 0x7ffee3b4a9ac
Value of p         = 0x7ffee3b4a9ac
Address of p  (&p) = 0x7ffee3b4a9a0
Value of *p        = 10`,
          },
          {
            kind: "bullets",
            items: [
              "Advantages: call by reference, returning several values from a function, fast array/string processing, dynamic memory allocation, building linked lists and trees.",
              "Dangers: an uninitialised (wild) pointer points to a random address; a dangling pointer points to memory that has been freed; dereferencing NULL crashes the program. Always initialise pointers and check for NULL.",
              "The pointer's type matters: an int * pointer reads 4 bytes at the address, a char * pointer reads 1 byte.",
            ],
          },
        ],
      },
      {
        id: "pointer-arithmetic",
        title: "5. Pointer Arithmetic, Pointers and Arrays",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "Only a few operations are allowed on pointers. When a number is added to a pointer, C automatically multiplies it by the size of the type it points to. So if p is an int pointer (4 bytes) holding address 1000, then p + 1 is 1004 (not 1001), p + 2 is 1008 and p++ moves it to the next integer.",
          },
          {
            kind: "table",
            headers: ["Operation", "Allowed?", "Explanation"],
            rows: [
              [
                "p + n, p − n",
                "Yes",
                "Moves the pointer n elements forward/backward: new address = p ± n × sizeof(type).",
              ],
              ["p++, p−−", "Yes", "Moves to the next / previous element."],
              ["p − q (two pointers of the same array)", "Yes", "Gives the NUMBER OF ELEMENTS between them."],
              ["p == q, p < q, p > q", "Yes", "Comparison of addresses."],
              ["p + q, p * q, p / q", "No", "Adding, multiplying or dividing two pointers has no meaning."],
              ["p * 2, p / 2", "No", "Multiplication or division of a pointer by a number is not allowed."],
            ],
          },
          {
            kind: "paragraph",
            text: "Pointers and arrays: the name of an array is a constant pointer to its first element, so a == &a[0]. Therefore a[i] is exactly the same as *(a + i), and &a[i] is the same as (a + i). Unlike a pointer variable, an array name cannot be changed (a++ is illegal, p++ is legal).",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 56 — Traversing an array with a pointer",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[5] = {10, 20, 30, 40, 50};
    int *p = a;                       /* same as p = &a[0] */
    int i, sum = 0;

    for (i = 0; i < 5; i++)
        printf("*(p + %d) = %d,  a[%d] = %d\n", i, *(p + i), i, a[i]);

    for (i = 0; i < 5; i++) {         /* moving the pointer itself */
        sum += *p;
        p++;
    }
    printf("Sum = %d\n", sum);

    p = &a[4];
    printf("p - a = %ld elements\n", (long)(p - a));
    return 0;
}`,
            output: String.raw`*(p + 0) = 10,  a[0] = 10
*(p + 1) = 20,  a[1] = 20
*(p + 2) = 30,  a[2] = 30
*(p + 3) = 40,  a[3] = 40
*(p + 4) = 50,  a[4] = 50
Sum = 150
p - a = 4 elements`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 57 — Pointer to a string: length by pointer",
            code: String.raw`#include <stdio.h>

int main(void)
{
    char *msg = "BCA Semester 1";
    char *p = msg;
    int count = 0;

    printf("Characters: ");
    while (*p != '\0') {
        putchar(*p);
        putchar(' ');
        count++;
        p++;
    }
    printf("\nLength = %d\n", count);
    return 0;
}`,
            output: String.raw`Characters: B C A   S e m e s t e r   1
Length = 14`,
          },
        ],
      },
      {
        id: "multiple-values",
        title: "6. Returning Multiple Values from a Function",
        icon: "ArrowLeftRight",
        blocks: [
          {
            kind: "paragraph",
            text: "A function can return only ONE value through return. To send several results back to the caller, pass the ADDRESSES of variables (pointers) to the function; the function stores its results at those addresses using the * operator. Other ways are returning a structure or returning a pointer to an array.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 58 — Returning multiple values through pointers",
            code: String.raw`#include <stdio.h>

void calc(int a, int b, int *sum, int *diff, int *prod)
{
    *sum  = a + b;
    *diff = a - b;
    *prod = a * b;
}

void min_max(int arr[], int n, int *min, int *max)
{
    int i;
    *min = *max = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main(void)
{
    int s, d, p, lo, hi;
    int data[6] = {42, 7, 88, 19, 63, 25};

    calc(12, 5, &s, &d, &p);
    printf("Sum = %d, Difference = %d, Product = %d\n", s, d, p);

    min_max(data, 6, &lo, &hi);
    printf("Minimum = %d, Maximum = %d\n", lo, hi);
    return 0;
}`,
            output: String.raw`Sum = 17, Difference = 7, Product = 60
Minimum = 7, Maximum = 88`,
          },
        ],
      },
      {
        id: "dynamic-memory",
        title: "7. Dynamic Memory Allocation",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "In STATIC allocation (ordinary arrays and variables) the memory size is fixed at compile time — an array declared as int a[100] wastes memory if only 10 elements are used and fails if 200 are needed. In DYNAMIC memory allocation the program requests memory from the operating system at RUN time, uses exactly what is needed and returns it when finished. Dynamic memory comes from a region called the heap.",
          },
          { kind: "diagram", diagramId: "memory-segments", caption: "Fig 4.3 — Memory layout of a running C program" },
          {
            kind: "table",
            headers: ["Function (stdlib.h)", "Syntax", "What it does"],
            rows: [
              [
                "malloc()",
                "ptr = (type *)malloc(size_in_bytes);",
                "Allocates one block of the given size; the memory is NOT initialised (garbage). Returns NULL if memory is not available.",
              ],
              [
                "calloc()",
                "ptr = (type *)calloc(n, size_of_each);",
                "Allocates memory for n elements and sets all bytes to ZERO.",
              ],
              [
                "realloc()",
                "ptr = (type *)realloc(ptr, new_size);",
                "Changes the size of a previously allocated block (grow or shrink), keeping the old contents.",
              ],
              [
                "free()",
                "free(ptr);",
                "Releases the memory back to the system. Must be called for every successful malloc/calloc.",
              ],
            ],
          },
          {
            kind: "table",
            headers: ["malloc()", "calloc()"],
            rows: [
              ["malloc(n * sizeof(int)) — one argument", "calloc(n, sizeof(int)) — two arguments"],
              ["Memory contains garbage values", "Memory is initialised to zero"],
              ["Slightly faster", "Slightly slower (has to clear the memory)"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 59 — malloc(): array whose size is decided at run time",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *p, n, i, sum = 0;

    printf("How many numbers? ");
    scanf("%d", &n);

    p = (int *)malloc(n * sizeof(int));
    if (p == NULL) {
        printf("Memory not available\n");
        return 1;
    }

    printf("Enter %d numbers: ", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &p[i]);
        sum += p[i];
    }
    printf("Sum = %d\n", sum);

    free(p);                 /* give the memory back */
    return 0;
}`,
            output: String.raw`How many numbers? 4
Enter 4 numbers: 10 20 30 40
Sum = 100`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 60 — calloc() and realloc()",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int i;
    int *p = (int *)calloc(3, sizeof(int));
    int *tmp;

    printf("calloc gives zeros: %d %d %d\n", p[0], p[1], p[2]);
    for (i = 0; i < 3; i++)
        p[i] = (i + 1) * 10;

    tmp = (int *)realloc(p, 5 * sizeof(int));    /* grow to 5 elements */
    if (tmp == NULL) {
        free(p);
        return 1;
    }
    p = tmp;
    p[3] = 40;
    p[4] = 50;

    printf("After realloc     : ");
    for (i = 0; i < 5; i++)
        printf("%d ", p[i]);
    printf("\n");

    free(p);
    return 0;
}`,
            output: String.raw`calloc gives zeros: 0 0 0
After realloc     : 10 20 30 40 50`,
          },
          {
            kind: "bullets",
            items: [
              "Always check the returned pointer for NULL before using it.",
              "Memory leak: forgetting free() — the program keeps using more and more memory. Dangling pointer: using a pointer after free(); set it to NULL after freeing. Double free: calling free() twice on the same pointer is an error.",
              "Static arrays live on the stack or in the data area and are freed automatically; heap memory is freed only when the programmer calls free() (or the program ends).",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      {
        term: "String",
        definition: "An array of characters terminated by the null character '\\0'.",
      },
      { term: "Null character", definition: "'\\0' (ASCII 0) — marks the end of a string." },
      { term: "strcmp()", definition: "Compares two strings; returns 0 if they are equal." },
      { term: "Pointer", definition: "A variable that stores the address of another variable." },
      { term: "Indirection operator (*)", definition: "Gives the value stored at the address held by a pointer." },
      { term: "Pointer arithmetic", definition: "Adding/subtracting integers to a pointer; the result is scaled by the size of the pointed type." },
      { term: "NULL pointer", definition: "A pointer that points to nothing." },
      { term: "Dynamic memory allocation", definition: "Allocating memory from the heap at run time using malloc, calloc and realloc." },
      { term: "Memory leak", definition: "Heap memory that was allocated but never freed." },
    ],
    examQuestions: [
      "What is a string? How is it declared and initialised? How is it stored in memory? (Medium)",
      "Differentiate between scanf(\"%s\") and gets()/fgets(). (Short)",
      "Explain any six string handling functions with examples. (Long)",
      "Write a program to reverse a string / check whether a string is a palindrome / count vowels. (Long)",
      "Explain any eight mathematical functions of math.h. (Medium)",
      "What is a pointer? How is it declared and initialised? Explain & and * operators. (Long)",
      "Explain pointer arithmetic with examples. (Medium)",
      "Explain the relationship between arrays and pointers. (Medium)",
      "How can a function return more than one value? Explain with a program. (Medium)",
      "What is dynamic memory allocation? Explain malloc(), calloc(), realloc() and free(). (Long)",
      "Differentiate between malloc() and calloc(). (Short)",
      "Differentiate between static and dynamic memory allocation. (Medium)",
      "What is a NULL pointer, a dangling pointer and a memory leak? (Short)",
    ],
  },
  {
    unitNumber: 5,
    title: "Structures, Unions, Enumerations, File Handling and Preprocessor",
    hours: 10,
    headings: [
      {
        id: "structures",
        title: "1. Structures",
        icon: "Package",
        blocks: [
          {
            kind: "paragraph",
            text: "An array can store only elements of the same type. A structure is a USER-DEFINED data type that groups variables of DIFFERENT data types under a single name — for example, a student has an integer roll number, a string name and a float percentage. The individual variables inside a structure are called its members (fields). The keyword is struct.",
          },
          {
            kind: "table",
            headers: ["Topic", "Syntax / Example"],
            rows: [
              [
                "Declaration (template)",
                "struct student { int roll; char name[20]; float marks; };   — declaring a template does not allocate memory",
              ],
              ["Creating variables", "struct student s1, s2;   (memory is allocated now)"],
              ["Initialisation", "struct student s1 = {101, \"Amit\", 85.5};"],
              [
                "Accessing members",
                "Dot operator with a structure variable: s1.roll, s1.name, s1.marks   —  Arrow operator with a pointer: ptr->roll  (same as (*ptr).roll)",
              ],
              [
                "typedef",
                "typedef struct { int day, month, year; } Date;   →   Date d;   (no need to write struct every time)",
              ],
              ["Nested structure", "A member that is itself a structure: p.dob.day"],
              ["Array of structures", "struct student s[50];   →   s[i].marks"],
              [
                "Size",
                "sizeof(struct student) is at least the sum of the members; the compiler may add padding bytes for alignment.",
              ],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 61 — Structure: declaration, dot (.) and arrow (->) operators",
            code: String.raw`#include <stdio.h>
#include <string.h>

struct student {
    int   roll;
    char  name[20];
    float marks;
};

int main(void)
{
    struct student s1 = {101, "Amit", 85.5f};
    struct student s2;
    struct student *ptr = &s2;

    s2.roll = 102;                    /* dot operator */
    strcpy(s2.name, "Neha");          /* strings cannot be assigned with = */
    s2.marks = 91.0f;

    printf("s1 -> Roll: %d, Name: %s, Marks: %.1f\n", s1.roll, s1.name, s1.marks);
    printf("s2 -> Roll: %d, Name: %s, Marks: %.1f\n", ptr->roll, ptr->name, ptr->marks);
    return 0;
}`,
            output: String.raw`s1 -> Roll: 101, Name: Amit, Marks: 85.5
s2 -> Roll: 102, Name: Neha, Marks: 91.0`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 62 — Nested structure with typedef",
            code: String.raw`#include <stdio.h>

typedef struct {
    int day, month, year;
} Date;

typedef struct {
    char name[20];
    Date dob;                         /* structure inside a structure */
} Person;

int main(void)
{
    Person p = {"Ravi", {15, 8, 2005}};

    printf("%s was born on %02d-%02d-%d\n",
           p.name, p.dob.day, p.dob.month, p.dob.year);
    return 0;
}`,
            output: "Ravi was born on 15-08-2005",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 63 — Array of structures: student records and topper",
            code: String.raw`#include <stdio.h>

struct student {
    int   roll;
    char  name[20];
    float marks;
};

int main(void)
{
    struct student s[3];
    int i, top = 0;
    float total = 0;

    printf("Enter roll, name and marks of 3 students:\n");
    for (i = 0; i < 3; i++)
        scanf("%d %s %f", &s[i].roll, s[i].name, &s[i].marks);

    printf("\nRoll  Name        Marks\n");
    for (i = 0; i < 3; i++) {
        printf("%-5d %-10s %6.1f\n", s[i].roll, s[i].name, s[i].marks);
        total += s[i].marks;
        if (s[i].marks > s[top].marks)
            top = i;
    }
    printf("\nAverage = %.2f\n", total / 3);
    printf("Topper  = %s (%.1f)\n", s[top].name, s[top].marks);
    return 0;
}`,
            output: String.raw`Enter roll, name and marks of 3 students:
101 Amit 78.5
102 Neha 91
103 Ravi 64.5

Roll  Name        Marks
101   Amit         78.5
102   Neha         91.0
103   Ravi         64.5

Average = 78.00
Topper  = Neha (91.0)`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 64 — Passing a structure to a function (by value and by pointer)",
            code: String.raw`#include <stdio.h>

struct rectangle {
    float length, width;
};

float area(struct rectangle r)                    /* copy of the structure */
{
    return r.length * r.width;
}

void scale(struct rectangle *r, float f)          /* address: changes the original */
{
    r->length *= f;
    r->width  *= f;
}

int main(void)
{
    struct rectangle r = {5.0f, 3.0f};

    printf("Area           = %.2f\n", area(r));
    scale(&r, 2.0f);
    printf("Area after 2x  = %.2f\n", area(r));
    return 0;
}`,
            output: String.raw`Area           = 15.00
Area after 2x  = 60.00`,
          },
        ],
      },
      {
        id: "unions",
        title: "2. Unions",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "A union is like a structure, but all its members SHARE the same memory location. The size of a union is the size of its LARGEST member, and only one member can hold a valid value at a time — storing a value in one member overwrites the others. Unions are used to save memory (for example in embedded systems and when a value can be of several types).",
          },
          { kind: "diagram", diagramId: "struct-vs-union", caption: "Fig 5.1 — Memory of a structure (separate members) vs a union (shared memory)" },
          {
            kind: "table",
            headers: ["Structure", "Union"],
            rows: [
              ["Keyword struct", "Keyword union"],
              ["Every member has its own memory location", "All members share one memory location"],
              ["Size = sum of sizes of all members (plus padding)", "Size = size of the largest member"],
              [
                "All members can hold values at the same time",
                "Only one member holds a valid value at a time",
              ],
              ["Changing one member does not affect the others", "Changing one member overwrites the others"],
              ["Used to group related data", "Used to save memory when only one member is needed at a time"],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 65 — Union: shared memory",
            code: String.raw`#include <stdio.h>

union data {
    int   i;
    float f;
    char  c;
};

struct sdata {
    int   i;
    float f;
    char  c;
};

int main(void)
{
    union data u;

    printf("sizeof(union)     = %zu bytes\n", sizeof(union data));
    printf("sizeof(structure) = %zu bytes\n", sizeof(struct sdata));

    u.i = 10;
    u.f = 5.5f;                          /* overwrites the memory used by u.i */
    printf("u.f = %.1f (u.i is now meaningless)\n", u.f);
    printf("Same address for i and f? %s\n",
           ((void *)&u.i == (void *)&u.f) ? "yes" : "no");
    return 0;
}`,
            output: String.raw`sizeof(union)     = 4 bytes
sizeof(structure) = 12 bytes
u.f = 5.5 (u.i is now meaningless)
Same address for i and f? yes`,
          },
        ],
      },
      {
        id: "enumerations",
        title: "3. Enumerations",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "An enumeration (enum) is a user-defined data type whose variables can take only a fixed set of named integer constants. It makes programs more readable — writing WEDNESDAY is clearer than the number 3. Syntax: enum tag_name { NAME1, NAME2, NAME3 };  By default the first name has the value 0 and each following name is one more than the previous. Any name can be given an explicit value; the next names continue from it.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 66 — enum with default and custom values",
            code: String.raw`#include <stdio.h>

enum color { RED, GREEN, BLUE };                        /* 0, 1, 2 */
enum day   { MON = 1, TUE, WED, THU, FRI, SAT, SUN };   /* 1 to 7  */

int main(void)
{
    enum color c = BLUE;
    enum day today = WED;

    printf("RED = %d, GREEN = %d, BLUE = %d\n", RED, GREEN, BLUE);
    printf("c = %d, today = %d\n", c, today);

    switch (today) {
        case SAT:
        case SUN:
            printf("Weekend\n");
            break;
        default:
            printf("Working day\n");
    }
    return 0;
}`,
            output: String.raw`RED = 0, GREEN = 1, BLUE = 2
c = 2, today = 3
Working day`,
          },
          {
            kind: "bullets",
            items: [
              "Enum constants are integers internally, are fixed at compile time and cannot be changed while the program runs.",
              "Enumerations are commonly used with switch statements, for menu options, days, months, error codes and states.",
              "typedef enum { ... } Name; lets you declare variables as Name x; without the word enum.",
            ],
          },
        ],
      },
      {
        id: "file-handling",
        title: "4. File Handling",
        icon: "FileText",
        blocks: [
          {
            kind: "paragraph",
            text: "Variables and arrays live in RAM, so their data is lost when the program ends. A FILE is a named area on the disk (secondary storage) where data is stored permanently. File handling lets a C program create files, write data to them and read data back later. In C every file is accessed through a FILE pointer (FILE *fp), a structure declared in <stdio.h> that keeps track of the file. Files are of two kinds: text files (readable characters, lines end with a newline) and binary files (raw bytes, faster and more compact).",
          },
          { kind: "diagram", diagramId: "file-handling-flow", caption: "Fig 5.2 — Steps in processing a file" },
          {
            kind: "table",
            headers: ["Mode", "Meaning", "If the file does not exist / exists"],
            rows: [
              ["\"r\"", "Open for reading only", "Returns NULL if the file does not exist"],
              ["\"w\"", "Open for writing", "Creates the file; if it exists its old contents are ERASED"],
              [
                "\"a\"",
                "Open for appending (write at the end)",
                "Creates the file if it does not exist; old data is kept",
              ],
              ["\"r+\"", "Reading and writing", "File must exist"],
              ["\"w+\"", "Writing and reading", "Creates / erases the file"],
              ["\"a+\"", "Reading and appending", "Creates the file if it does not exist"],
              ["\"rb\", \"wb\", \"ab\"", "Same as above but for BINARY files", "—"],
            ],
          },
          {
            kind: "table",
            headers: ["Function", "Purpose"],
            rows: [
              ["fopen(\"name\", \"mode\")", "Opens a file and returns a FILE pointer (NULL on failure)."],
              [
                "fclose(fp)",
                "Closes the file and saves the buffered data. Every opened file must be closed.",
              ],
              [
                "fprintf(fp, ...) / fscanf(fp, ...)",
                "Formatted write / read (like printf/scanf but on a file).",
              ],
              [
                "fputc(ch, fp) / fgetc(fp)",
                "Write / read ONE character (putc/getc are similar). fgetc returns EOF at the end of the file.",
              ],
              ["fputs(str, fp) / fgets(str, n, fp)", "Write / read a string (line)."],
              [
                "fwrite(ptr, size, count, fp) / fread(ptr, size, count, fp)",
                "Write / read blocks of data (arrays, structures) in binary form.",
              ],
              ["feof(fp)", "Tests whether the end of the file has been reached."],
              [
                "fseek(fp, offset, origin) / ftell(fp) / rewind(fp)",
                "Move to a position (origin = SEEK_SET, SEEK_CUR, SEEK_END) / tell the current position / go back to the beginning.",
              ],
              ["remove(\"name\") / rename(\"old\", \"new\")", "Delete / rename a file."],
            ],
          },
          {
            kind: "code",
            language: "c",
            title: "Program 67 — Writing to and reading from a text file",
            code: String.raw`#include <stdio.h>

int main(void)
{
    FILE *fp;
    int roll;
    char name[20];
    float marks;

    fp = fopen("students.txt", "w");          /* create / overwrite */
    if (fp == NULL) {
        printf("Cannot open file\n");
        return 1;
    }
    fprintf(fp, "101 Amit 78.5\n");
    fprintf(fp, "102 Neha 91.0\n");
    fclose(fp);
    printf("Data written to students.txt\n");

    fp = fopen("students.txt", "r");          /* read it back */
    if (fp == NULL) {
        printf("Cannot open file\n");
        return 1;
    }
    while (fscanf(fp, "%d %s %f", &roll, name, &marks) == 3)
        printf("Roll: %d, Name: %s, Marks: %.1f\n", roll, name, marks);
    fclose(fp);
    return 0;
}`,
            output: String.raw`Data written to students.txt
Roll: 101, Name: Amit, Marks: 78.5
Roll: 102, Name: Neha, Marks: 91.0`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 68 — Copy one file into another (character by character)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    FILE *src, *dest;
    int ch;                                   /* int, because EOF is -1 */

    src = fopen("source.txt", "r");
    if (src == NULL) {
        printf("Source file not found\n");
        return 1;
    }
    dest = fopen("copy.txt", "w");

    while ((ch = fgetc(src)) != EOF)
        fputc(ch, dest);

    fclose(src);
    fclose(dest);
    printf("File copied successfully.\n");

    dest = fopen("copy.txt", "r");            /* show the copy */
    printf("Contents of copy.txt:\n");
    while ((ch = fgetc(dest)) != EOF)
        putchar(ch);
    fclose(dest);
    return 0;
}`,
            output: String.raw`File copied successfully.
Contents of copy.txt:
BCA Semester 1
C Programming`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 69 — Count characters, words and lines in a file",
            code: String.raw`#include <stdio.h>
#include <ctype.h>

int main(void)
{
    FILE *fp = fopen("data.txt", "r");
    int ch, chars = 0, words = 0, lines = 0, in_word = 0;

    if (fp == NULL) {
        printf("File not found\n");
        return 1;
    }
    while ((ch = fgetc(fp)) != EOF) {
        chars++;
        if (ch == '\n')
            lines++;
        if (isspace(ch))
            in_word = 0;
        else if (!in_word) {
            in_word = 1;
            words++;
        }
    }
    fclose(fp);
    printf("Characters = %d\nWords      = %d\nLines      = %d\n", chars, words, lines);
    return 0;
}`,
            output: String.raw`Characters = 26
Words      = 6
Lines      = 2`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 70 — Append mode and reading line by line",
            code: String.raw`#include <stdio.h>

int main(void)
{
    FILE *fp;
    char line[80];

    fp = fopen("log.txt", "a");               /* old data is kept */
    fputs("Line 2: appended\n", fp);
    fclose(fp);

    fp = fopen("log.txt", "r");
    while (fgets(line, sizeof(line), fp) != NULL)
        printf("%s", line);
    fclose(fp);
    return 0;
}`,
            output: String.raw`Line 1: created
Line 2: appended`,
          },
          {
            kind: "code",
            language: "c",
            title: "Program 71 — Binary file with fwrite, fread and fseek (random access)",
            code: String.raw`#include <stdio.h>

int main(void)
{
    int a[3] = {10, 20, 30}, x;
    FILE *fp;

    fp = fopen("num.dat", "wb");
    fwrite(a, sizeof(int), 3, fp);            /* write 3 integers */
    fclose(fp);

    fp = fopen("num.dat", "rb");
    fseek(fp, 1 * sizeof(int), SEEK_SET);     /* skip the first integer */
    fread(&x, sizeof(int), 1, fp);
    printf("Second number = %d\n", x);

    fseek(fp, 0, SEEK_END);                   /* go to the end */
    printf("File size = %ld bytes\n", ftell(fp));
    fclose(fp);
    return 0;
}`,
            output: String.raw`Second number = 20
File size = 12 bytes`,
          },
        ],
      },
      {
        id: "command-line",
        title: "5. Command Line Arguments",
        icon: "Code",
        blocks: [
          {
            kind: "paragraph",
            text: "Values can be given to a program at the moment it is run, from the command line, e.g., prog 10 20 30. To receive them main() is written with two parameters: int main(int argc, char *argv[]). argc (argument count) is the number of words typed on the command line INCLUDING the program name; argv (argument vector) is an array of strings holding those words. argv[0] is the program name, argv[1] the first argument, and argv[argc − 1] the last one. All arguments arrive as strings, so numbers must be converted with atoi() (integer) or atof() (real) from <stdlib.h>.",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 72 — Command line arguments: sum of the numbers passed (run as: prog 10 20 30)",
            code: String.raw`#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int i, sum = 0;

    printf("Number of arguments = %d\n", argc);
    for (i = 1; i < argc; i++) {
        printf("argv[%d] = %s\n", i, argv[i]);
        sum += atoi(argv[i]);                 /* string -> int */
    }
    printf("Sum = %d\n", sum);
    return 0;
}`,
            output: String.raw`Number of arguments = 4
argv[1] = 10
argv[2] = 20
argv[3] = 30
Sum = 60`,
          },
          {
            kind: "callout",
            tone: "info",
            title: "Remember",
            text: "For the command  prog 10 20 30  →  argc = 4, argv[0] = \"prog\", argv[1] = \"10\", argv[2] = \"20\", argv[3] = \"30\". The names argc and argv are only conventions — any names can be used, but the types must be int and char *[] (or char **).",
          },
        ],
      },
      {
        id: "preprocessor",
        title: "6. Preprocessor Directives",
        icon: "Settings",
        blocks: [
          {
            kind: "paragraph",
            text: "The C preprocessor is a program that processes the source code BEFORE it goes to the compiler. Preprocessor directives begin with the # symbol, are written on a line of their own and do not end with a semicolon. The preprocessor removes comments, includes files, replaces macros and selects which parts of the code are compiled.",
          },
          {
            kind: "table",
            headers: ["Category", "Directive", "Purpose"],
            rows: [
              [
                "File inclusion",
                "#include <stdio.h>",
                "Includes a system header file; the compiler searches the standard include directories.",
              ],
              [
                "File inclusion",
                "#include \"myfile.h\"",
                "Includes a user-defined header file; searched first in the current folder.",
              ],
              [
                "Macro substitution",
                "#define NAME value",
                "Replaces every occurrence of NAME by value (object-like macro / symbolic constant).",
              ],
              [
                "Macro with arguments",
                "#define SQUARE(x) ((x) * (x))",
                "Function-like macro: expanded in place, no function-call overhead.",
              ],
              ["Undefine", "#undef NAME", "Removes a previously defined macro."],
              [
                "Conditional compilation",
                "#if, #elif, #else, #endif, #ifdef, #ifndef",
                "Compile a part of the code only if a condition holds or a macro is (not) defined. Also used as include guards in header files.",
              ],
              [
                "Other",
                "#pragma, #error, #line",
                "Compiler-specific instructions, force an error message, change the line number.",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Predefined macros: __DATE__ (compilation date), __TIME__ (compilation time), __FILE__ (source file name), __LINE__ (current line number), __STDC__ (1 if the compiler follows standard C).",
          },
          {
            kind: "code",
            language: "c",
            title: "Program 73 — Macros and conditional compilation",
            code: String.raw`#include <stdio.h>

#define PI 3.14159
#define SQUARE(x)     ((x) * (x))       /* correct: brackets round x and the whole */
#define BAD_SQUARE(x) x * x             /* wrong: no brackets */
#define MAX(a, b)     ((a) > (b) ? (a) : (b))
#define DEBUG 1

int main(void)
{
    printf("Area of circle (r = 3) : %.2f\n", PI * SQUARE(3));
    printf("SQUARE(2 + 3)          = %d\n", SQUARE(2 + 3));
    printf("BAD_SQUARE(2 + 3)      = %d\n", BAD_SQUARE(2 + 3));
    printf("MAX(10, 20)            = %d\n", MAX(10, 20));

#if DEBUG
    printf("Debug mode is ON\n");
#else
    printf("Debug mode is OFF\n");
#endif

#ifdef PI
    printf("PI is defined\n");
#endif

#undef DEBUG
#ifndef DEBUG
    printf("DEBUG has been undefined\n");
#endif
    return 0;
}`,
            output: String.raw`Area of circle (r = 3) : 28.27
SQUARE(2 + 3)          = 25
BAD_SQUARE(2 + 3)      = 11
MAX(10, 20)            = 20
Debug mode is ON
PI is defined
DEBUG has been undefined`,
          },
          {
            kind: "callout",
            tone: "example",
            title: "Why the brackets in a macro matter",
            text: "The preprocessor only replaces text. BAD_SQUARE(2 + 3) becomes 2 + 3 * 2 + 3 = 2 + 6 + 3 = 11 (wrong), while SQUARE(2 + 3) becomes ((2 + 3) * (2 + 3)) = 25 (correct). Also, a macro has no type checking and evaluates its arguments each time they appear, so avoid arguments like i++ in macros.",
          },
          {
            kind: "table",
            headers: ["Macro", "Function"],
            rows: [
              [
                "Expanded by the preprocessor (text replacement)",
                "Called at run time; control jumps to it and returns",
              ],
              [
                "No type checking; no data types for arguments",
                "Arguments and return value have types that are checked",
              ],
              [
                "Faster (no call overhead) but increases code size",
                "Slower per call but the code exists only once",
              ],
              ["Cannot be recursive; hard to debug", "Can be recursive; easy to debug"],
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Structure", definition: "A user-defined data type that groups variables of different types under one name." },
      { term: "Arrow operator (->)", definition: "Accesses a member of a structure through a pointer to the structure." },
      { term: "Union", definition: "A user-defined type whose members share the same memory; its size equals its largest member." },
      { term: "Enumeration", definition: "A user-defined type consisting of a set of named integer constants." },
      { term: "FILE pointer", definition: "A pointer of type FILE * used to access an opened file." },
      { term: "EOF", definition: "End Of File marker (−1) returned by fgetc() when no more data is available." },
      { term: "argc / argv", definition: "Parameters of main(): the count and the array of command line arguments." },
      { term: "Preprocessor", definition: "A program that processes # directives before the compiler runs." },
      { term: "Macro", definition: "A name defined with #define that the preprocessor replaces with its text." },
    ],
    examQuestions: [
      "What is a structure? How is it declared and how are its members accessed? (Medium)",
      "Write a program using an array of structures to store and display student records. (Long)",
      "Explain nested structures and typedef with an example. (Medium)",
      "What is a union? Differentiate between a structure and a union. (Long)",
      "What is an enumeration? Explain with an example. (Medium)",
      "What is file handling? Explain the different file opening modes. (Long)",
      "Explain fopen(), fclose(), fprintf(), fscanf(), fgetc(), fputc(), fread() and fwrite(). (Long)",
      "Write a program to copy the contents of one file to another. (Medium)",
      "Write a program to count characters, words and lines of a file. (Medium)",
      "What are command line arguments? Explain argc and argv with a program. (Long)",
      "What are preprocessor directives? Explain #include, #define and conditional compilation. (Long)",
      "Differentiate between a macro and a function. (Medium)",
      "What is the use of fseek(), ftell() and rewind()? (Short)",
    ],
  },
];
