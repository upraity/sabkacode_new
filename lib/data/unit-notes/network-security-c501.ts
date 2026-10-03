import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Network Security (C-501)
// — B.C.A. Fifth Semester, Dr. Bhimrao Ambedkar University, Agra.
export const networkSecurityC501UnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Network Security Fundamentals and Classical Cryptography",
    hours: 8,
    headings: [
      {
        id: "security-introduction",
        title: "1. Introduction to Network Security",
        icon: "Shield",
        blocks: [
          {
            kind: "paragraph",
            text: "Network security is the protection of networked systems, communication channels, devices and information against unauthorized access, disclosure, modification, disruption and destruction. A complete security approach combines security objectives, cryptographic mechanisms, authentication, access control, secure protocols, monitoring and operational controls."
          },
          {
            kind: "table",
            headers: ["Security objective", "Meaning", "Typical mechanism"],
            rows: [
              ["Confidentiality", "Only authorized parties can read information.", "Encryption and access control."],
              ["Integrity", "Information is not altered without authorization.", "Hash functions, MACs and digital signatures."],
              ["Availability", "Authorized users can access services when required.", "Redundancy, monitoring and resilient design."],
              ["Authentication", "Verifies the identity of a communicating entity.", "Passwords, certificates, authentication protocols."],
              ["Non-repudiation", "Provides evidence supporting the origin/approval of an action or message.", "Digital signatures and audit mechanisms."]
            ]
          }
        ]
      },
      {
        id: "osi-security-architecture",
        title: "2. OSI Security Architecture",
        icon: "Layers",
        blocks: [
          {
            kind: "paragraph",
            text: "The OSI security architecture provides a framework for describing security attacks, security services and security mechanisms. Security attacks are actions that compromise security. Security services improve the security of systems and communications. Security mechanisms are technical means used to provide those services."
          },
          {
            kind: "diagram",
            diagramId: "c501-osi-security-architecture",
            caption: "Conceptual relationship among attacks, security services and mechanisms."
          },
          {
            kind: "table",
            headers: ["Category", "Examples"],
            rows: [
              ["Attacks", "Passive observation, modification, interruption, fabrication."],
              ["Services", "Authentication, access control, confidentiality, integrity, non-repudiation."],
              ["Mechanisms", "Encryption, digital signatures, access controls, authentication exchange, traffic padding, routing control and notarization."]
            ]
          }
        ]
      },
      {
        id: "classical-cipher-techniques",
        title: "3. Classical Encryption Techniques",
        icon: "KeyRound",
        blocks: [
          {
            kind: "paragraph",
            text: "Classical ciphers transform plaintext into ciphertext using a relatively simple substitution or transposition rule. Substitution replaces symbols with other symbols; transposition rearranges the positions of symbols. These techniques are historically important because they introduce core cryptographic ideas such as keys, ciphertext and cryptanalysis."
          },
          {
            kind: "table",
            headers: ["Technique", "Basic principle", "Example idea"],
            rows: [
              ["Caesar cipher", "Shift each alphabetic symbol by a fixed amount.", "A shifted by 3 becomes D."],
              ["Monoalphabetic substitution", "Use a fixed substitution alphabet.", "Each plaintext letter maps to one ciphertext letter."],
              ["Playfair", "Encrypt pairs of letters using a 5×5 key square.", "Digraph substitution."],
              ["Hill cipher", "Uses matrix multiplication over modular arithmetic.", "Blocks of letters are represented as vectors."],
              ["Transposition", "Rearranges character positions without replacing the symbols.", "Columnar rearrangement."]
            ]
          }
        ]
      },
      {
        id: "cipher-principles",
        title: "4. Cipher Principles, Data Encryption Standard and Block Cipher Concepts",
        icon: "LockKeyhole",
        blocks: [
          {
            kind: "paragraph",
            text: "A cryptographic cipher uses an algorithm together with a key. In a symmetric system the same secret key, or a closely related secret key, is used for encryption and decryption. Block ciphers process fixed-size blocks of data and apply a sequence of transformations controlled by a key."
          },
          {
            kind: "paragraph",
            text: "DES (Data Encryption Standard) is a historical symmetric block cipher based on a 64-bit block and a 56-bit effective key. It uses a Feistel structure with 16 rounds. DES is important academically for understanding block-cipher design, although its original key size is no longer considered adequate for modern security."
          },
          {
            kind: "diagram",
            diagramId: "c501-des-feistel",
            caption: "Simplified Feistel-style structure used to explain the round concept in DES."
          }
        ]
      },
      {
        id: "security-attacks",
        title: "5. Security Attacks and Passive Attacks",
        icon: "TriangleAlert",
        blocks: [
          {
            kind: "paragraph",
            text: "A security attack is any action that attempts to compromise one or more security objectives. Passive attacks observe information without directly modifying system resources. Examples include release of message contents and traffic analysis. Because passive attacks do not necessarily alter data, prevention relies heavily on confidentiality mechanisms and traffic-protection measures."
          },
          {
            kind: "table",
            headers: ["Attack type", "Core idea", "Primary concern"],
            rows: [
              ["Release of message contents", "Attacker observes the actual communication.", "Confidentiality."],
              ["Traffic analysis", "Attacker studies communication patterns, timing, volume or endpoints.", "Metadata/privacy even when content is protected."],
              ["Modification", "Information is changed without authorization.", "Integrity."],
              ["Interruption", "A resource or service is made unavailable.", "Availability."],
              ["Fabrication", "False data or transactions are introduced.", "Authenticity/integrity."]
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Plaintext", definition: "Original readable or meaningful data before encryption." },
      { term: "Ciphertext", definition: "Transformed data produced by encryption." },
      { term: "Encryption", definition: "Transformation of plaintext into ciphertext using an algorithm and key." },
      { term: "Decryption", definition: "Transformation of ciphertext back into plaintext using the appropriate key and algorithm." },
      { term: "Symmetric Encryption", definition: "Encryption system using a shared secret key for encryption/decryption." },
      { term: "Block Cipher", definition: "Cipher that processes data in fixed-size blocks." },
      { term: "Passive Attack", definition: "Attack involving observation of information or communication patterns without direct alteration." },
      { term: "Security Service", definition: "Service designed to protect a communication or system against security threats." }
    ],
    examQuestions: [
      "Define network security and explain its major security objectives. (Long)",
      "Explain OSI security architecture with a suitable diagram. (Long)",
      "Differentiate security attacks, services and mechanisms. (Medium)",
      "Explain classical encryption techniques and distinguish substitution from transposition. (Long)",
      "Explain the Caesar, Playfair and Hill cipher concepts. (Long)",
      "Explain the basic principles of block ciphers and the DES structure. (Long)",
      "What are passive attacks? Explain release of message contents and traffic analysis. (Medium)"
    ]
  },

  {
    unitNumber: 2,
    title: "Number Theory, Symmetric and Public-Key Cryptography",
    hours: 8,
    headings: [
      {
        id: "modular-arithmetic",
        title: "1. Modular Arithmetic",
        icon: "Calculator",
        blocks: [
          {
            kind: "paragraph",
            text: "Modular arithmetic works with remainders. For integers a, b and positive modulus n, a ≡ b (mod n) means n divides (a − b). Addition, subtraction and multiplication can be performed modulo n. Modular arithmetic is fundamental to many cryptographic algorithms."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Simple Example",
            text: "17 mod 5 = 2. Also, 17 ≡ 2 (mod 5). For modular addition, (14 + 11) mod 7 = 25 mod 7 = 4."
          }
        ]
      },
      {
        id: "euclidean-algorithm",
        title: "2. Euclidean Algorithm",
        icon: "Divide",
        blocks: [
          {
            kind: "paragraph",
            text: "The Euclidean algorithm computes the greatest common divisor (gcd) of two integers. It repeatedly replaces the larger number by the remainder obtained when it is divided by the smaller number. The process stops when the remainder becomes zero; the last non-zero remainder is the gcd."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Worked Example",
            text: "For gcd(252, 105): 252 = 2×105 + 42; 105 = 2×42 + 21; 42 = 2×21 + 0. Therefore gcd(252,105) = 21."
          }
        ]
      },
      {
        id: "extended-euclidean",
        title: "3. Extended Euclidean Algorithm",
        icon: "Sigma",
        blocks: [
          {
            kind: "paragraph",
            text: "The extended Euclidean algorithm finds integers x and y satisfying ax + by = gcd(a,b). When gcd(a,n)=1, the coefficient x obtained for a gives the modular multiplicative inverse of a modulo n. This inverse is widely used in public-key cryptography."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Inverse Example",
            text: "To find the inverse of 3 modulo 7, observe that 3×5 = 15 ≡ 1 (mod 7). Therefore 5 is the multiplicative inverse of 3 modulo 7."
          }
        ]
      },
      {
        id: "fermat-euler",
        title: "4. Fermat's Little Theorem and Euler's Theorem",
        icon: "FunctionSquare",
        blocks: [
          {
            kind: "paragraph",
            text: "Fermat's Little Theorem states that if p is prime and p does not divide a, then a^(p−1) ≡ 1 (mod p). Euler's theorem generalizes this: if gcd(a,n)=1, then a^φ(n) ≡ 1 (mod n), where φ(n) is Euler's totient function. These results support exponentiation-based public-key cryptographic constructions."
          }
        ]
      },
      {
        id: "primality-chinese-remainder",
        title: "5. Primality Testing and Chinese Remainder Theorem",
        icon: "Binary",
        blocks: [
          {
            kind: "paragraph",
            text: "Primality testing determines whether an integer is prime. Cryptographic systems often require large primes, so practical algorithms use efficient probabilistic or deterministic tests depending on the required assurance. The Chinese Remainder Theorem (CRT) states that a system of congruences with pairwise coprime moduli has a unique solution modulo the product of those moduli."
          },
          {
            kind: "callout",
            tone: "example",
            title: "CRT Example",
            text: "Solve x ≡ 2 (mod 3) and x ≡ 3 (mod 5). Values satisfying the first condition are 2,5,8,11,14,...; 8 satisfies the second because 8 ≡ 3 (mod 5). Thus x ≡ 8 (mod 15)."
          }
        ]
      },
      {
        id: "discrete-logarithm",
        title: "6. Discrete Logarithm Problem",
        icon: "KeyRound",
        blocks: [
          {
            kind: "paragraph",
            text: "In a cyclic group, the discrete logarithm problem asks for the exponent x when a generator g and a value y = g^x are known. Computing x can be difficult for suitable groups even when modular exponentiation is efficient. This computational asymmetry is used in cryptographic systems such as Diffie–Hellman and related public-key constructions."
          }
        ]
      },
      {
        id: "symmetric-encryption",
        title: "7. Symmetric Encryption: Key Management",
        icon: "Key",
        blocks: [
          {
            kind: "paragraph",
            text: "Symmetric encryption uses a shared secret key. Its major practical challenge is secure key distribution and lifecycle management: generating strong keys, distributing them to authorized parties, storing them securely, rotating or replacing them and revoking compromised keys. Modern systems generally use authenticated encryption or combine encryption with integrity protection."
          }
        ]
      },
      {
        id: "public-key-cryptography",
        title: "8. Public-Key Cryptography and RSA",
        icon: "UnlockKeyhole",
        blocks: [
          {
            kind: "paragraph",
            text: "Public-key cryptography uses a key pair: a public key that may be distributed and a private key that must be protected. RSA is a classic public-key algorithm based on arithmetic involving large integers and modular exponentiation. In textbook form, RSA selects two large primes p and q, computes n = pq and φ(n) = (p−1)(q−1), chooses a suitable public exponent e relatively prime to φ(n), and computes d as the modular inverse of e modulo φ(n)."
          },
          {
            kind: "diagram",
            diagramId: "c501-rsa-key-flow",
            caption: "High-level RSA key-generation and encryption/decryption flow."
          },
          {
            kind: "callout",
            tone: "example",
            title: "Small Educational RSA Example",
            text: "For illustration only, take p=3 and q=11. Then n=33 and φ(n)=20. Choose e=3, since gcd(3,20)=1. The inverse of 3 modulo 20 is d=7 because 3×7=21≡1 (mod 20). Real RSA uses very large parameters and secure padding schemes; small textbook numbers are not secure."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Congruence", definition: "Relation a ≡ b (mod n) meaning n divides a−b." },
      { term: "GCD", definition: "Greatest common divisor of two integers." },
      { term: "Multiplicative Inverse", definition: "Value x such that ax ≡ 1 (mod n), when such an x exists." },
      { term: "Euler Totient φ(n)", definition: "Number of positive integers up to n that are relatively prime to n." },
      { term: "CRT", definition: "Chinese Remainder Theorem for solving compatible systems of congruences with coprime moduli." },
      { term: "Discrete Logarithm", definition: "Problem of recovering an exponent from a group exponentiation relation." },
      { term: "Public Key", definition: "Key intended for distribution in a public-key cryptosystem." },
      { term: "Private Key", definition: "Secret key associated with a public key and protected from unauthorized disclosure." },
      { term: "RSA", definition: "Public-key cryptosystem based on modular arithmetic and large integer factorization assumptions." }
    ],
    examQuestions: [
      "Explain modular arithmetic with examples. (Medium)",
      "Explain the Euclidean and Extended Euclidean algorithms with a solved example. (Long)",
      "State and explain Fermat's Little Theorem and Euler's theorem. (Long)",
      "Explain primality testing and its importance in cryptography. (Medium)",
      "Explain the Chinese Remainder Theorem with a numerical example. (Long)",
      "Explain the discrete logarithm problem. (Medium)",
      "Explain symmetric encryption and key management. (Long)",
      "Explain public-key cryptography and RSA key generation. (Long)",
      "Solve a small RSA numerical problem. (Long)"
    ]
  },

  {
    unitNumber: 3,
    title: "Authentication, Hash Functions and Digital Signatures",
    hours: 8,
    headings: [
      {
        id: "authentication-requirements",
        title: "1. Authentication Requirements and Functions",
        icon: "UserCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Authentication verifies the identity or origin of an entity or message. An authentication mechanism should resist impersonation, replay and message modification as required by the protocol. Authentication functions may be based on passwords, cryptographic keys, message authentication codes, digital signatures and certificates."
          },
          {
            kind: "table",
            headers: ["Function", "Purpose"],
            rows: [
              ["Entity authentication", "Confirms the identity of a communicating entity."],
              ["Data-origin authentication", "Provides assurance about the source of a message."],
              ["Integrity protection", "Detects unauthorized modification of protected data."],
              ["Replay protection", "Prevents reuse of an old valid message in a new context."]
            ]
          }
        ]
      },
      {
        id: "hash-functions",
        title: "2. Hash Functions",
        icon: "Fingerprint",
        blocks: [
          {
            kind: "paragraph",
            text: "A cryptographic hash function maps an arbitrary-length input to a fixed-length digest. Important security properties include preimage resistance, second-preimage resistance and collision resistance. A secure hash is designed so that finding a different input with a specified digest or finding two different inputs with the same digest is computationally difficult."
          },
          {
            kind: "diagram",
            diagramId: "c501-hash-function",
            caption: "Message-to-fixed-length-digest concept of a cryptographic hash function."
          }
        ]
      },
      {
        id: "md5-sha1-sha2",
        title: "3. MD5, SHA-1 and SHA Family",
        icon: "Hash",
        blocks: [
          {
            kind: "paragraph",
            text: "MD5 and SHA-1 are historically important hash algorithms but are not suitable choices for new security designs because practical collision attacks have been demonstrated against them. The SHA family includes SHA-2 and SHA-3 standards; modern applications should follow current security guidance and protocol requirements rather than selecting obsolete algorithms for new deployments."
          },
          {
            kind: "table",
            headers: ["Algorithm family", "Exam point"],
            rows: [
              ["MD5", "128-bit digest; historically important but collision-broken and unsuitable for modern security."],
              ["SHA-1", "160-bit digest; practical collision attacks exist, so it is obsolete for new security uses."],
              ["SHA-2", "Modern family including SHA-224, SHA-256, SHA-384 and SHA-512."],
              ["SHA-3", "Hash standard based on the Keccak sponge construction and available in several digest sizes."]
            ]
          }
        ]
      },
      {
        id: "secure-hash-algorithm",
        title: "4. Secure Hash Algorithm",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "The Secure Hash Algorithm family provides standardized cryptographic hash functions. SHA-2 members process input through repeated compression operations and produce fixed-size message digests. In exam answers, explain the purpose of padding, block processing, internal state transformation and final digest generation at the level required by the syllabus."
          }
        ]
      },
      {
        id: "ripemd",
        title: "5. RIPEMD",
        icon: "GitBranch",
        blocks: [
          {
            kind: "paragraph",
            text: "RIPEMD is a family of cryptographic hash functions developed as an alternative hash design. RIPEMD-160 produces a 160-bit digest and is historically significant in cryptographic literature. As with all cryptographic algorithms, suitability depends on current security requirements and the exact protocol."
          }
        ]
      },
      {
        id: "hmac",
        title: "6. HMAC",
        icon: "BadgeCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "HMAC (Hash-based Message Authentication Code) combines a secret key with a cryptographic hash function to provide message authentication and integrity. Conceptually, HMAC uses nested keyed hashing rather than simply hashing key || message. The receiver verifies the HMAC using the shared secret key."
          },
          {
            kind: "diagram",
            diagramId: "c501-hmac-flow",
            caption: "Conceptual HMAC generation and verification flow."
          }
        ]
      },
      {
        id: "digital-signatures",
        title: "7. Digital Signatures",
        icon: "PenLine",
        blocks: [
          {
            kind: "paragraph",
            text: "A digital signature is a cryptographic mechanism that binds a signer to a message or document and enables verification using a public key. A common approach hashes the message and signs the digest with the signer's private key using a suitable signature algorithm. Verification uses the corresponding public key and appropriate signature verification rules."
          },
          {
            kind: "diagram",
            diagramId: "c501-digital-signature",
            caption: "Message hashing, signature generation with a private key and verification with the public key."
          },
          {
            kind: "table",
            headers: ["Property", "Digital signature role"],
            rows: [
              ["Integrity", "A valid signature helps detect unauthorized message alteration."],
              ["Authentication", "Verification associates the signature with the holder of the signing private key, subject to key protection and trust."],
              ["Non-repudiation", "Can provide evidence supporting origin in suitable legal/technical contexts, but exact legal effect depends on system and jurisdiction."]
            ]
          }
        ]
      },
      {
        id: "authentication-protocols",
        title: "8. Authentication Protocols and Digital Signature Standard",
        icon: "Workflow",
        blocks: [
          {
            kind: "paragraph",
            text: "Authentication protocols define message exchanges used to establish identity and/or prove possession of a secret or private key. A secure protocol must consider freshness, replay, key confirmation, confidentiality where required and correct handling of failures. The Digital Signature Standard (DSS) specifies approved digital-signature mechanisms; DSA is historically associated with DSS."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Hash Function", definition: "Function mapping arbitrary-length input to a fixed-length digest." },
      { term: "Digest", definition: "Fixed-length output produced by a cryptographic hash function." },
      { term: "Collision Resistance", definition: "Property making it computationally difficult to find two distinct inputs with the same hash." },
      { term: "HMAC", definition: "Keyed message authentication mechanism based on a cryptographic hash function." },
      { term: "Digital Signature", definition: "Cryptographic value generated with a private key and verified using the corresponding public key." },
      { term: "Replay Attack", definition: "Attack in which a valid old message or transaction is reused in a later context." },
      { term: "DSS", definition: "Digital Signature Standard specifying approved digital-signature mechanisms." }
    ],
    examQuestions: [
      "Explain authentication requirements and authentication functions. (Long)",
      "Define cryptographic hash functions and explain their security properties. (Long)",
      "Compare MD5, SHA-1 and modern SHA families. (Medium)",
      "Explain the Secure Hash Algorithm concept. (Medium)",
      "Write a note on RIPEMD. (Short)",
      "Explain HMAC with a neat diagram. (Long)",
      "Explain digital signatures and their security properties. (Long)",
      "Explain authentication protocols and important design requirements. (Medium)",
      "Write a note on the Digital Signature Standard. (Medium)"
    ]
  },

  {
    unitNumber: 4,
    title: "Network Security Applications",
    hours: 8,
    headings: [
      {
        id: "kerberos",
        title: "1. Kerberos",
        icon: "KeyRound",
        blocks: [
          {
            kind: "paragraph",
            text: "Kerberos is a network authentication system based on symmetric cryptography and trusted third-party services. Its design uses tickets and time-limited credentials so that users can authenticate to network services without repeatedly sending passwords to every service. A simplified Kerberos environment includes a client, Authentication Server (AS), Ticket Granting Server (TGS) and application server."
          },
          {
            kind: "diagram",
            diagramId: "c501-kerberos",
            caption: "Simplified Kerberos authentication flow involving client, AS, TGS and application server."
          },
          {
            kind: "table",
            headers: ["Component", "Role"],
            rows: [
              ["Client", "Requests authentication and access to services."],
              ["Authentication Server", "Initial authentication and ticket-granting credentials."],
              ["TGS", "Issues service tickets for requested network services."],
              ["Application server", "Provides the requested service after validating appropriate credentials."]
            ]
          }
        ]
      },
      {
        id: "x509",
        title: "2. X.509 Authentication Service",
        icon: "BadgeCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "X.509 defines a certificate framework used in public-key infrastructures. An X.509 certificate binds an identity or subject to a public key through a digitally signed certificate issued by a Certificate Authority (CA). Certificate fields include subject information, issuer, validity period, public-key information and a CA signature, among other fields."
          },
          {
            kind: "diagram",
            diagramId: "c501-x509-chain",
            caption: "Simplified X.509 trust chain from root CA through certificate validation to a service."
          }
        ]
      },
      {
        id: "electronic-mail-security",
        title: "3. Electronic Mail Security",
        icon: "MailCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Electronic-mail security aims to protect message confidentiality, integrity, authentication and sometimes non-repudiation. Common approaches use encryption for confidentiality, message authentication or signatures for integrity/authentication, and certificates or keys for establishing trust."
          }
        ]
      },
      {
        id: "pgp-smime",
        title: "4. PGP and S/MIME",
        icon: "Mail",
        blocks: [
          {
            kind: "paragraph",
            text: "PGP (Pretty Good Privacy) and S/MIME (Secure/Multipurpose Internet Mail Extensions) provide mechanisms for securing email. PGP commonly uses a combination of symmetric encryption for message data and public-key techniques for protecting session keys, with signatures for authentication/integrity. S/MIME provides secure MIME email using certificate-based public-key infrastructure."
          },
          {
            kind: "table",
            headers: ["Feature", "PGP", "S/MIME"],
            rows: [
              ["Trust model", "Historically associated with decentralized/web-of-trust approaches.", "Certificate/CA-based trust."],
              ["Confidentiality", "Hybrid encryption.", "Hybrid encryption."],
              ["Authentication/integrity", "Digital signatures.", "Digital signatures and certificates."],
              ["Typical integration", "PGP-capable email tools.", "MIME-compatible email clients and enterprise PKI."]
            ]
          }
        ]
      },
      {
        id: "ip-security",
        title: "5. IP Security (IPsec)",
        icon: "GlobeLock",
        blocks: [
          {
            kind: "paragraph",
            text: "IPsec is a suite of protocols and mechanisms for protecting IP communications. It can provide authentication, integrity, anti-replay protection and confidentiality depending on the protocol and configuration. The major IPsec protocols are Authentication Header (AH) and Encapsulating Security Payload (ESP)."
          },
          {
            kind: "table",
            headers: ["Protocol", "Core protection"],
            rows: [
              ["AH", "Authentication/integrity of selected IP packet fields and anti-replay support; does not provide payload confidentiality."],
              ["ESP", "Can provide payload confidentiality plus integrity/authentication and anti-replay, depending on configuration."]
            ]
          }
        ]
      },
      {
        id: "web-security",
        title: "6. Web Security",
        icon: "Globe",
        blocks: [
          {
            kind: "paragraph",
            text: "Web security protects browsers, web applications, APIs and communication channels. Security controls include encrypted transport such as TLS, strong authentication, authorization, secure session management, input validation, output encoding, secure cookie settings and protection against common application-level attacks."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "Kerberos", definition: "Ticket-based network authentication system using a trusted third party and symmetric cryptography." },
      { term: "Ticket", definition: "Credential issued by a trusted Kerberos service for authenticating access to a network service." },
      { term: "X.509 Certificate", definition: "Digitally signed certificate binding a subject identity to a public key." },
      { term: "Certificate Authority", definition: "Trusted entity that issues and signs digital certificates." },
      { term: "PGP", definition: "Email/data security system using cryptographic encryption and digital signatures." },
      { term: "S/MIME", definition: "Secure email standard using MIME plus public-key cryptography and certificates." },
      { term: "IPsec", definition: "IP-layer security suite providing configurable authentication, integrity, confidentiality and anti-replay protections." },
      { term: "AH", definition: "IPsec Authentication Header providing integrity/authentication-related protection without payload encryption." },
      { term: "ESP", definition: "IPsec Encapsulating Security Payload providing configurable confidentiality and integrity/authentication protection." }
    ],
    examQuestions: [
      "Explain Kerberos architecture and authentication flow with a diagram. (Long)",
      "Explain X.509 authentication service and certificate structure. (Long)",
      "Explain the security requirements of electronic mail. (Medium)",
      "Compare PGP and S/MIME. (Long)",
      "Explain IPsec and distinguish AH from ESP. (Long)",
      "Explain web-security requirements and major protection mechanisms. (Medium)"
    ]
  },

  {
    unitNumber: 5,
    title: "System-Level Security",
    hours: 8,
    headings: [
      {
        id: "intrusion-detection",
        title: "1. Intrusion Detection",
        icon: "ScanSearch",
        blocks: [
          {
            kind: "paragraph",
            text: "An Intrusion Detection System (IDS) monitors events or network/system activity for signs of policy violations or malicious behavior. IDS can be classified by monitoring location and detection method. Network-based IDS (NIDS) observes network traffic; host-based IDS (HIDS) observes activity on an individual host."
          },
          {
            kind: "diagram",
            diagramId: "c501-ids",
            caption: "High-level IDS placement and alerting flow."
          },
          {
            kind: "table",
            headers: ["Detection approach", "Basic idea"],
            rows: [
              ["Signature-based", "Looks for known patterns associated with known attacks."],
              ["Anomaly-based", "Detects significant deviations from an established baseline of normal behavior."],
              ["Host-based IDS", "Monitors host logs, files, processes and system activity."],
              ["Network-based IDS", "Monitors network traffic and communication behavior."]
            ]
          }
        ]
      },
      {
        id: "password-management",
        title: "2. Password Management",
        icon: "KeyRound",
        blocks: [
          {
            kind: "paragraph",
            text: "Password management includes secure password creation, storage, authentication, recovery and lifecycle controls. Passwords should not be stored as plaintext. A modern password-storage system should use a password-specific, computationally expensive password hashing scheme with a unique salt per password, together with appropriate rate limiting and account protections."
          },
          {
            kind: "table",
            headers: ["Good practice", "Purpose"],
            rows: [
              ["Unique passwords", "Limits damage when one credential is compromised."],
              ["Salted password hashing", "Reduces effectiveness of precomputed/rainbow-table attacks."],
              ["Slow password KDF", "Raises the computational cost of password guessing."],
              ["Rate limiting", "Reduces rapid online guessing attempts."],
              ["MFA", "Adds another authentication factor beyond the password."]
            ]
          }
        ]
      },
      {
        id: "viruses-threats",
        title: "3. Computer Viruses and Related Threats",
        icon: "Bug",
        blocks: [
          {
            kind: "paragraph",
            text: "A computer virus is malicious code that attaches to a host or file and can replicate when the infected host is executed or otherwise activated. Related threats include worms, Trojan horses, ransomware, spyware and other malware. Their behavior and propagation mechanisms differ, but all require appropriate prevention, detection and response controls."
          },
          {
            kind: "table",
            headers: ["Threat", "Characteristic"],
            rows: [
              ["Virus", "Replicates by attaching to a host/file or requiring a host mechanism."],
              ["Worm", "Self-propagates across systems or networks without requiring the same host-file mechanism as a virus."],
              ["Trojan horse", "Malicious functionality disguised as or delivered through apparently legitimate software/content."],
              ["Ransomware", "Malware that commonly blocks access to data/systems and demands payment, often through encryption."],
              ["Spyware", "Software designed to collect information or monitor activity without proper authorization."]
            ]
          }
        ]
      },
      {
        id: "virus-countermeasures",
        title: "4. Virus Countermeasures",
        icon: "ShieldCheck",
        blocks: [
          {
            kind: "paragraph",
            text: "Virus countermeasures combine prevention, detection, containment, recovery and user awareness. Important controls include timely software updates, least privilege, application control, endpoint protection, safe email/web practices, backups, network segmentation and monitoring. Backups should be protected so that malware cannot easily modify or encrypt every available copy."
          },
          {
            kind: "diagram",
            diagramId: "c501-malware-defense",
            caption: "Layered malware-defense model from prevention through recovery."
          }
        ]
      },
      {
        id: "firewall-design",
        title: "5. Firewall Design Principles",
        icon: "Wall",
        blocks: [
          {
            kind: "paragraph",
            text: "A firewall controls traffic between security domains according to defined rules or policy. Firewall designs can include packet filtering, stateful inspection, application/proxy mechanisms and combinations of these controls. A firewall should implement an explicit security policy, minimize unnecessary exposure and produce useful logs for monitoring and incident response."
          },
          {
            kind: "diagram",
            diagramId: "c501-firewall",
            caption: "Firewall controlling traffic between an untrusted network and a protected internal network."
          },
          {
            kind: "table",
            headers: ["Firewall approach", "Core idea"],
            rows: [
              ["Packet filtering", "Filters traffic using packet/header fields and rules."],
              ["Stateful inspection", "Tracks connection state when making filtering decisions."],
              ["Application/proxy firewall", "Intermediates at a higher application level and can inspect application-specific behavior."],
              ["Policy enforcement", "Allows or blocks traffic according to organizational security requirements."]
            ]
          }
        ]
      },
      {
        id: "trusted-systems",
        title: "6. Trusted Systems",
        icon: "Shield",
        blocks: [
          {
            kind: "paragraph",
            text: "A trusted system is designed so that specified security properties can be relied upon for defined operations. Trust involves security policy, controlled access, identification/authentication, auditing and mechanisms that enforce the intended security rules. A reference monitor is a conceptual security mechanism that mediates access requests, is tamper-resistant and is small enough to be analyzed for correctness."
          }
        ]
      }
    ],
    keyTerms: [
      { term: "IDS", definition: "Intrusion Detection System that monitors activity for signs of attacks or policy violations." },
      { term: "NIDS", definition: "Network-based intrusion detection system monitoring network traffic." },
      { term: "HIDS", definition: "Host-based intrusion detection system monitoring activity on a host." },
      { term: "Signature Detection", definition: "Detection using known attack patterns or signatures." },
      { term: "Anomaly Detection", definition: "Detection based on deviations from a model or baseline of normal behavior." },
      { term: "Salt", definition: "Random value added to password processing so identical passwords do not produce identical stored values." },
      { term: "Firewall", definition: "Security control that regulates network traffic according to policy." },
      { term: "Trusted System", definition: "System designed to enforce and support specified security policies and trust requirements." },
      { term: "Reference Monitor", definition: "Conceptual mechanism that mediates access between subjects and protected objects." }
    ],
    examQuestions: [
      "Explain intrusion detection and distinguish signature-based and anomaly-based detection. (Long)",
      "Differentiate HIDS and NIDS. (Medium)",
      "Explain secure password management practices. (Long)",
      "Explain computer viruses and related malware threats. (Long)",
      "Discuss virus countermeasures using a layered-security approach. (Long)",
      "Explain firewall design principles and common firewall approaches. (Long)",
      "Explain trusted systems and the reference-monitor concept. (Medium)"
    ]
  }
];
