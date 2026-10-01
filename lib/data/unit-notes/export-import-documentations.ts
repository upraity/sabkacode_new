import { UnitNote } from "@/types";

// Detailed, exam-oriented notes for Export-Import Documentations (BMB IB 02).
// Based on the supplied syllabus; explanations are expanded for university examination preparation.

export const exportimportdocumentationsUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Indian EXIM Framework and Registration",
    hours: 8,
    headings: [
      {
        id: "ft-policy", title: "1. Foreign Trade Policy and the EXIM Framework", icon: "Landmark",
        blocks: [
          { kind: "paragraph", text: "The export-import framework in India is a combination of trade policy, customs procedures, foreign-exchange rules, product regulations, logistics systems and institutional processes. The Directorate General of Foreign Trade (DGFT) is a central institution for administering India's foreign trade policy and related authorisations, while customs authorities administer border clearance and assessment under customs law." },
          { kind: "paragraph", text: "An exporter therefore needs to think of EXIM compliance as a chain rather than a single form. Product classification, buyer and seller details, commercial terms, transport arrangements, payment method, documentation, customs requirements and foreign-exchange realisation must fit together." },
          { kind: "diagram", diagramId: "ib02-exim-framework", caption: "High-level Indian export-import framework connecting policy, registration, documentation, logistics, customs and payment." },
        ],
      },
      {
        id: "registration", title: "2. Registration and Core Exporter Requirements", icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "Registration and compliance requirements depend on the nature of the transaction and goods. The syllabus highlights the role of DGFT and the Importer Exporter Code (IEC). The IEC is a key identification requirement for carrying out import or export activity, subject to the applicable rules and exemptions." },
          { kind: "table", headers: ["Element", "Purpose in the EXIM process", "Exam point"], rows: [["DGFT", "Administers foreign trade policy and related authorisations", "Policy and trade administration"], ["IEC", "Identifies an importer/exporter for applicable transactions", "Core EXIM identification"], ["Customs registration/process", "Enables border clearance procedures", "Assessment and clearance"], ["Banking channel", "Supports export/import payment and foreign-exchange processing", "Payment compliance"]] },
          { kind: "callout", tone: "info", title: "Do not confuse", text: "An IEC is an identification/registration requirement; it is not itself a guarantee that a product is freely exportable or importable. Product-specific restrictions and other laws can still apply." },
        ],
      },
      {
        id: "epc-sez", title: "3. EPCs, SEZs and Institutional Ecosystem", icon: "Network",
        blocks: [
          { kind: "paragraph", text: "Export Promotion Councils (EPCs) are sector- or product-oriented bodies that support exporters through market information, trade promotion and industry representation. Special Economic Zones (SEZs) are designated areas operating under a specific legal and policy framework intended to facilitate economic activity, investment and exports." },
          { kind: "bullets", items: ["EPCs can provide sector knowledge, trade-promotion support and exporter networking.", "SEZs provide a distinct operating framework for eligible units and activities.", "Customs authorities handle border assessment and clearance functions.", "Banks support trade payments, foreign exchange and documentation requirements.", "DGFT and related authorities administer policy-linked permissions and procedures."] },
        ],
      },
      {
        id: "startup-msme", title: "4. Start-ups, MSMEs and Export Readiness", icon: "Factory",
        blocks: [
          { kind: "paragraph", text: "For start-ups and MSMEs, export readiness involves more than finding a foreign buyer. The enterprise must assess product quality, capacity, pricing, packaging, compliance, documentation, logistics, payment risk and after-sales support. Smaller firms may use intermediaries or aggregators where direct export capability is limited." },
          { kind: "table", headers: ["Readiness area", "Questions to ask"], rows: [["Product", "Does the product meet destination-market standards?"], ["Capacity", "Can the firm supply consistent quantity and quality?"], ["Price", "Does the export price cover production and cross-border costs?"], ["Documentation", "Can the firm prepare and verify required documents?"], ["Payment", "What payment method and credit risk are acceptable?"], ["Logistics", "Can the shipment reach the buyer reliably?"]] },
        ],
      },
      {
        id: "make-in-india", title: "5. Make in India and Export Competitiveness", icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Make in India is relevant to EXIM because export performance depends partly on domestic manufacturing capability, productivity, supplier ecosystems and integration with global value chains. Export competitiveness also requires quality consistency, delivery reliability, cost control and compliance with destination-country standards." },
          { kind: "callout", tone: "example", title: "Export-readiness sequence", text: "A small manufacturer can move from domestic production to export by validating product standards, identifying a target market, arranging documentation and logistics, agreeing payment terms, completing customs procedures and monitoring foreign-exchange realisation." },
        ],
      },
    ],
    keyTerms: [{"term": "EXIM", "definition": "Export-import activity involving cross-border movement of goods or services."}, {"term": "DGFT", "definition": "Directorate General of Foreign Trade, a central institution administering foreign trade policy and related processes."}, {"term": "IEC", "definition": "Importer Exporter Code, a key identification requirement for applicable import/export activity."}, {"term": "EPC", "definition": "Export Promotion Council supporting exporters within a sector or product area."}, {"term": "SEZ", "definition": "Special Economic Zone operating under a specific legal and policy framework."}, {"term": "Foreign Trade Policy", "definition": "Government framework governing and facilitating international trade activity."}, {"term": "MSME", "definition": "Micro, Small and Medium Enterprise."}, {"term": "Trade Facilitation", "definition": "Measures that simplify and speed legitimate cross-border trade."}],
    examQuestions: ["Explain the Indian EXIM framework and the role of DGFT. (Long)", "What is IEC? Explain its importance in export-import transactions. (Medium)", "Explain the role of Export Promotion Councils. (Medium)", "Discuss the role of SEZs in export activity. (Medium)", "Explain export readiness requirements for MSMEs. (Long)", "Discuss the relationship between Make in India and export competitiveness. (Medium)", "Why should EXIM compliance be treated as a process chain? (Long)", "Define DGFT. (Short)", "What is an EPC? (Short)", "What is an IEC? (Short)"],
  },
  {
    unitNumber: 2,
    title: "Commercial and Regulatory Documentation",
    hours: 8,
    headings: [
      {
        id: "commercial-docs", title: "1. Commercial Documents in Export Transactions", icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Commercial documents communicate the commercial terms of a shipment and provide evidence for customs, banking, logistics and the buyer. The commercial invoice describes the transaction and value; the packing list describes package contents; and the certificate of origin establishes the origin of goods for purposes where origin matters." },
          { kind: "table", headers: ["Document", "Main purpose", "Typical information"], rows: [["Commercial invoice", "Evidence of sale and value", "Buyer, seller, goods, price, terms"], ["Packing list", "Physical description of shipment", "Packages, marks, weights, dimensions"], ["Certificate of origin", "Evidence of origin", "Origin details and certification"], ["Transport document", "Evidence/contract of carriage", "Shipment, carrier, destination and terms"]] },
          { kind: "diagram", diagramId: "ib02-document-flow", caption: "Export documentation flow from commercial agreement to shipment, customs, banking and record verification." },
        ],
      },
      {
        id: "dgft-customs", title: "2. DGFT, Customs and Regulatory Documents", icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "Documentation is closely connected with the legal status of the goods. DGFT-related requirements can arise from foreign trade policy; customs documents support assessment and clearance; and product-specific regulators may require additional certificates or licences." },
          { kind: "paragraph", text: "Students should distinguish commercial documents from regulatory documents. A commercial invoice records the transaction, whereas a regulatory certificate or authorisation demonstrates compliance with a rule. The exact documents depend on product, destination, mode of transport, buyer requirements and applicable law." },
          { kind: "callout", tone: "info", title: "Exam writing", text: "Always state that documentation is transaction-specific. Do not claim that every export requires every certificate; the applicable document set depends on the goods and legal requirements." },
        ],
      },
      {
        id: "quality", title: "3. Quality and Food-Safety Documentation", icon: "Award",
        blocks: [
          { kind: "paragraph", text: "Quality documentation supports the buyer's confidence and may be required by the destination market or product sector. The syllabus specifically names the Food Safety and Standards Authority of India (FSSAI) in relation to food products. Depending on the product, additional inspection, testing or conformity evidence may be relevant." },
          { kind: "bullets", items: ["Product specifications and quality records establish what was supplied.", "Inspection or test reports may demonstrate conformity with stated requirements.", "Food products may be subject to food-safety requirements and documentation.", "Destination-country standards can be stricter or different from domestic requirements.", "Document control helps ensure that the shipment is supported by consistent evidence."] },
        ],
      },
      {
        id: "regulatory-docs", title: "4. Regulatory and Trade-Development Documents", icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Regulatory documentation may include licences, declarations, certificates and approvals. The syllabus also refers to APEDA and the development of export sectors. Exporters should identify whether the product falls under a specialised authority or product regime before shipment." },
          { kind: "table", headers: ["Question", "Why it matters"], rows: [["What is the product classification?", "Determines applicable policy, duty and regulatory requirements"], ["Is the product restricted?", "May require authorisation or special conditions"], ["Is a certificate needed?", "Destination or buyer may require proof of compliance"], ["Who verifies it?", "Different authorities handle different functions"], ["What must be retained?", "Records support audit and dispute resolution"]] },
        ],
      },
      {
        id: "document-control", title: "5. Documentation Control and Verification", icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Document verification means checking consistency across commercial, transport, customs and banking records. Names, quantities, weights, values, dates, marks, product descriptions and shipment references should not conflict without a legitimate explanation. Errors can create clearance delays, payment problems or disputes." },
          { kind: "bullets", items: ["Use a document checklist for each shipment.", "Verify the same product description and quantity across relevant documents.", "Check signatures, dates, references and required certifications.", "Retain records according to applicable legal and internal requirements.", "Resolve discrepancies before submission rather than relying on post-clearance correction."] },
        ],
      },
    ],
    keyTerms: [{"term": "Commercial Invoice", "definition": "Primary commercial document describing the sale, goods and value."}, {"term": "Packing List", "definition": "Document describing packages, contents, marks, weights and dimensions."}, {"term": "Certificate of Origin", "definition": "Document establishing the origin of goods for applicable purposes."}, {"term": "FSSAI", "definition": "Food Safety and Standards Authority of India."}, {"term": "APEDA", "definition": "Agricultural and Processed Food Products Export Development Authority."}, {"term": "Regulatory Document", "definition": "Document demonstrating compliance with a legal, technical or administrative requirement."}, {"term": "Document Control", "definition": "Process of preparing, checking, approving and retaining accurate records."}, {"term": "Conformity", "definition": "Condition in which a product or process meets specified requirements."}],
    examQuestions: ["Explain the importance of commercial documents in export transactions. (Long)", "Differentiate commercial invoice and packing list. (Medium)", "Explain the purpose of a certificate of origin. (Medium)", "Discuss the role of regulatory documentation in exports. (Long)", "Explain the relevance of FSSAI in export documentation for food products. (Medium)", "Write a note on APEDA. (Short)", "Why is document consistency important in customs and banking? (Long)", "What is a commercial invoice? (Short)", "What is a packing list? (Short)", "What is document control? (Short)"],
  },
  {
    unitNumber: 3,
    title: "Shipping, Logistics & Insurance Documentation",
    hours: 7,
    headings: [
      {
        id: "container-infrastructure", title: "1. Indian Container Logistics Infrastructure", icon: "Truck",
        blocks: [
          { kind: "paragraph", text: "Containerised trade depends on inland transport, container terminals, ports, customs systems and shipping lines. The syllabus highlights Inland Container Depots (ICDs), Container Freight Stations (CFS) and Special Economic Zones (SEZs). These nodes connect inland cargo with maritime or other transport networks." },
          { kind: "table", headers: ["Node", "Role"], rows: [["ICD", "Inland location supporting containerised cargo handling and customs-related processes"], ["CFS", "Facility for handling, consolidation/deconsolidation and related cargo activities"], ["Port/terminal", "Interface for loading, unloading and maritime movement"], ["SEZ logistics interface", "Supports movement and processing associated with eligible zone activities"]] },
          { kind: "diagram", diagramId: "ib02-shipping-logistics", caption: "Container export logistics chain from factory to inland facility, port, vessel and overseas destination." },
        ],
      },
      {
        id: "fcl-lcl", title: "2. FCL and LCL Shipments", icon: "Scale",
        blocks: [
          { kind: "paragraph", text: "Full Container Load (FCL) means the shipment uses a container dedicated to the shipper's cargo, while Less than Container Load (LCL) involves consolidation of cargo from different shippers. The choice depends on volume, frequency, cost, handling risk and delivery requirements." },
          { kind: "table", headers: ["Basis", "FCL", "LCL"], rows: [["Cargo", "Uses a container for the shipment", "Shares container space"], ["Handling", "Fewer consolidation stages", "More consolidation/deconsolidation"], ["Suitability", "Larger or regular shipments", "Smaller consignments"], ["Key concern", "Container utilisation", "Consolidation schedule and handling"]] },
        ],
      },
      {
        id: "transport-docs", title: "3. Transport Documents", icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Transport documents provide evidence of carriage arrangements and identify the cargo, carrier and destination. The bill of lading is associated with maritime transport; an airway bill is used for air cargo; multimodal transport documents cover movement involving more than one mode under a multimodal arrangement." },
          { kind: "table", headers: ["Document", "Mode/context", "Core function"], rows: [["Bill of Lading", "Sea", "Evidence associated with carriage and shipment details"], ["Air Waybill", "Air", "Air-cargo transport document"], ["Multimodal transport document", "Multiple modes", "Documents carriage across a multimodal movement"]] },
          { kind: "callout", tone: "info", title: "Exam distinction", text: "A transport document is not the same as a commercial invoice. The invoice describes the sale; the transport document relates to carriage of the shipment." },
        ],
      },
      {
        id: "marine-insurance", title: "4. Marine Insurance in International Trade", icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Marine cargo insurance protects against specified risks to goods during transit, subject to the policy's terms, conditions and exclusions. The appropriate cover depends on the nature of goods, route, packaging, transport mode and contractual allocation of risk." },
          { kind: "bullets", items: ["Identify what risks are covered and excluded.", "Check insured value and the policy period or transit basis.", "Confirm who arranges insurance under the commercial contract.", "Maintain evidence needed for a claim, such as transport and damage records.", "Do not assume that all transit losses are automatically covered."] },
        ],
      },
      {
        id: "shipping-workflow", title: "5. Shipping Documentation Workflow", icon: "RefreshCw",
        blocks: [
          { kind: "paragraph", text: "Shipping documentation works best as a controlled workflow. The exporter prepares cargo and documents, the carrier receives shipment instructions, customs processes the cargo, transport documents are issued, and banks or buyers use relevant documents according to the agreed payment terms." },
          { kind: "callout", tone: "example", title: "Workflow logic", text: "Sales contract → cargo preparation → packing list/invoice → transport booking → customs documentation → cargo handover → transport document → banking/buyer document flow → record retention." },
        ],
      },
    ],
    keyTerms: [{"term": "ICD", "definition": "Inland Container Depot supporting inland containerised cargo operations."}, {"term": "CFS", "definition": "Container Freight Station used for cargo handling, consolidation or deconsolidation."}, {"term": "FCL", "definition": "Full Container Load shipment using a dedicated container."}, {"term": "LCL", "definition": "Less than Container Load shipment sharing container space."}, {"term": "Bill of Lading", "definition": "Maritime transport document containing shipment and carriage information."}, {"term": "Air Waybill", "definition": "Air-cargo transport document."}, {"term": "Multimodal Transport", "definition": "Movement involving two or more transport modes under a multimodal arrangement."}, {"term": "Marine Cargo Insurance", "definition": "Insurance covering specified transit risks to cargo subject to policy terms."}],
    examQuestions: ["Explain the role of ICDs and CFSs in export logistics. (Medium)", "Differentiate FCL and LCL. (Medium)", "Explain the purpose of a bill of lading. (Medium)", "Differentiate bill of lading and air waybill. (Short)", "Explain multimodal transport documentation. (Medium)", "Discuss the role of marine insurance in international trade. (Long)", "Explain the shipping documentation workflow. (Long)", "What is an ICD? (Short)", "What is an LCL shipment? (Short)", "Why is transport documentation important? (Short)"],
  },
  {
    unitNumber: 4,
    title: "Banking, Payment & Foreign Exchange Documents",
    hours: 9,
    headings: [
      {
        id: "payment-modes", title: "1. Payment Modes in Indian Trade", icon: "Wallet",
        blocks: [
          { kind: "paragraph", text: "Payment terms allocate commercial and credit risk between exporter and importer. Common methods include advance payment, documentary collection and documentary credit. The appropriate method depends on trust, bargaining power, country risk, transaction size, banking arrangements and the need for payment security." },
          { kind: "table", headers: ["Method", "Basic idea", "Risk emphasis"], rows: [["Advance payment", "Buyer pays before shipment", "Higher exporter security; buyer bears more pre-shipment risk"], ["Documentary collection", "Banks handle documents against payment/acceptance", "Banks facilitate documents but do not provide the same payment undertaking as a letter of credit"], ["Letter of Credit", "Bank issues a documentary undertaking subject to conditions", "Document compliance becomes central"], ["Open account", "Seller ships before payment", "Greater exporter credit exposure"]] },
          { kind: "diagram", diagramId: "ib02-payment-methods", caption: "International trade payment methods arranged by the timing of payment and relative credit exposure." },
        ],
      },
      {
        id: "lc", title: "2. Letter of Credit and UCPDC", icon: "FileCheck",
        blocks: [
          { kind: "paragraph", text: "A documentary letter of credit (LC) is a bank undertaking to pay against presentation of documents that comply with the credit's terms. The syllabus refers to UCPDC norms, which provide internationally recognised rules for documentary credits. The key principle is documentary compliance: banks deal with documents rather than physically inspecting the goods in the ordinary documentary-credit process." },
          { kind: "paragraph", text: "An LC can reduce certain payment risks, but it does not remove commercial or performance risk. Exporters must read the credit carefully, identify required documents, comply with presentation conditions and coordinate with banks and logistics providers." },
          { kind: "callout", tone: "info", title: "Exam point", text: "For an LC answer, explain parties, documentary nature, compliance with credit terms and the role of UCPDC. Avoid saying that an LC guarantees payment regardless of documents; documentary compliance is fundamental." },
        ],
      },
      {
        id: "rbi-forex", title: "3. RBI, Foreign Exchange Management and Authorised Dealers", icon: "IndianRupee",
        blocks: [
          { kind: "paragraph", text: "Foreign-exchange transactions in India are governed by the Foreign Exchange Management Act (FEMA) framework and related rules, regulations and directions. The Reserve Bank of India (RBI) has a central role in the foreign-exchange regulatory framework, while authorised dealer banks handle permitted foreign-exchange transactions and documentation." },
          { kind: "bullets", items: ["Exporters and importers must follow applicable foreign-exchange procedures.", "Banks verify and process trade-related payment documentation according to applicable requirements.", "Exchange-rate movement creates transaction exposure when receivables or payables are in foreign currency.", "The exact procedural requirement can vary with the transaction and current regulations."] },
        ],
      },
      {
        id: "banking-docs", title: "4. Banking Documents: e-BRC, Foreign Inward Remittance and GR/SDF", icon: "FileText",
        blocks: [
          { kind: "paragraph", text: "Banking documentation connects the commercial shipment with receipt or remittance of foreign exchange and regulatory reporting. The syllabus names electronic Bank Realisation Certificate (e-BRC), foreign inward remittance records and historical/related export declaration concepts such as GR/SDF. Students should explain the purpose of such records rather than memorising isolated abbreviations." },
          { kind: "table", headers: ["Document/record", "Broad purpose"], rows: [["e-BRC", "Electronic evidence associated with realisation of export proceeds"], ["Foreign inward remittance record", "Evidence of foreign-currency receipt through banking channels"], ["Export declaration/reporting record", "Provides transaction details for applicable export reporting"]] },
        ],
      },
      {
        id: "forex-risk", title: "5. Foreign-Exchange Risk in Export Transactions", icon: "TrendingUp",
        blocks: [
          { kind: "paragraph", text: "Foreign-exchange risk arises when the value of a foreign-currency receivable or payable changes in domestic-currency terms before settlement. Exporters receiving foreign currency may benefit or lose from currency movement depending on the direction of the exchange-rate change." },
          { kind: "callout", tone: "example", title: "Simple exposure example", text: "If an exporter expects a USD receivable, the domestic-currency value of that receivable depends on the exchange rate at settlement. A fall in the domestic-currency value of the USD reduces the rupee value of the same dollar receipt. Firms may use appropriate hedging instruments subject to their treasury policy and applicable rules." },
        ],
      },
    ],
    keyTerms: [{"term": "Advance Payment", "definition": "Payment received before shipment."}, {"term": "Documentary Collection", "definition": "Bank-mediated collection in which documents are handled according to collection instructions."}, {"term": "Letter of Credit", "definition": "Bank undertaking to pay against a complying presentation under the credit."}, {"term": "UCPDC", "definition": "Uniform Customs and Practice for Documentary Credits, internationally used rules for documentary credits."}, {"term": "FEMA", "definition": "Foreign Exchange Management Act framework governing foreign-exchange transactions in India."}, {"term": "RBI", "definition": "Reserve Bank of India."}, {"term": "Authorised Dealer", "definition": "Bank or entity authorised under the foreign-exchange framework to conduct specified transactions."}, {"term": "e-BRC", "definition": "Electronic Bank Realisation Certificate associated with export-proceeds realisation."}],
    examQuestions: ["Explain major payment modes in international trade. (Long)", "Differentiate advance payment, documentary collection and letter of credit. (Long)", "Explain the working of a documentary letter of credit. (Long)", "What is UCPDC and why is it important? (Medium)", "Explain the role of RBI and authorised dealers in foreign exchange. (Medium)", "Discuss FEMA in the context of EXIM transactions. (Medium)", "Explain the purpose of e-BRC. (Short)", "What is foreign-exchange risk? (Short)", "Explain the role of documentary compliance in an LC. (Medium)", "What is an authorised dealer? (Short)"],
  },
  {
    unitNumber: 5,
    title: "Customs Procedures and Digital Trade Platforms",
    hours: 8,
    headings: [
      {
        id: "customs-act", title: "1. Indian Customs Act and Customs Administration", icon: "Landmark",
        blocks: [
          { kind: "paragraph", text: "Customs administration controls the movement of goods across India's borders and supports assessment, collection and enforcement functions. The syllabus requires an overview of the Indian Customs Act and the customs clearance process for exports and imports." },
          { kind: "paragraph", text: "Customs compliance involves accurate classification, valuation, documentation, declarations, examination where applicable and payment or accounting of applicable duties and charges. Import and export procedures differ in detail, but both depend on accurate data and supporting documents." },
          { kind: "diagram", diagramId: "ib02-customs-digital", caption: "Digital customs workflow linking declaration, risk management, assessment, examination/verification where applicable and clearance." },
        ],
      },
      {
        id: "cha", title: "2. Customs House Agents and Customs Brokers", icon: "Handshake",
        blocks: [
          { kind: "paragraph", text: "The syllabus uses the term Customs House Agent (CHA) and refers to the Customs Broker role. Customs brokers assist clients with customs documentation and procedural compliance. The broker does not replace the importer's or exporter's responsibility for the accuracy and legality of the transaction." },
          { kind: "bullets", items: ["Prepare and submit documentation through prescribed systems.", "Coordinate with customs and other logistics participants.", "Help resolve documentation or procedural issues.", "Maintain records and follow applicable broker regulations.", "Advise clients on documentation but not substitute for the client's legal responsibility."] },
        ],
      },
      {
        id: "ices", title: "3. ICEGATE and Electronic Customs Processes", icon: "MonitorPlay",
        blocks: [
          { kind: "paragraph", text: "ICEGATE is the electronic interface associated with Indian Customs' digital services. Digital customs reduces dependence on paper workflows and supports electronic filing, status tracking and data exchange. The exact screens and services can change as systems are updated." },
          { kind: "table", headers: ["Digital function", "Business value"], rows: [["Electronic filing", "Reduces manual paperwork and data-entry repetition"], ["Status tracking", "Improves visibility of transaction progress"], ["Electronic communication", "Creates faster exchange of declarations and messages"], ["Data validation", "Can identify inconsistencies earlier in the process"]] },
        ],
      },
      {
        id: "e-sanchit", title: "4. e-Sanchit and Electronic Document Submission", icon: "FileSpreadsheet",
        blocks: [
          { kind: "paragraph", text: "e-Sanchit supports electronic submission of supporting documents in customs processes. The broader principle is document digitisation: supporting records can be linked electronically to declarations, reducing physical handling and improving traceability." },
          { kind: "callout", tone: "info", title: "Exam distinction", text: "ICEGATE refers broadly to the digital customs interface/ecosystem, while e-Sanchit is associated with electronic submission of supporting documents. Explain the relationship without treating them as identical systems." },
        ],
      },
      {
        id: "trade-compliance", title: "5. Digital Trade Compliance and Record Management", icon: "AlertTriangle",
        blocks: [
          { kind: "paragraph", text: "Digital trade compliance combines accurate master data, document control, access management, audit trails and timely monitoring. Exporters and importers should maintain reliable product descriptions, classification data, supplier and buyer records, shipment references and supporting documents." },
          { kind: "bullets", items: ["Use standardised product and customer master data.", "Reconcile declaration data with commercial and transport documents.", "Control access to trade systems and sensitive records.", "Retain records according to applicable law and company policy.", "Monitor regulatory changes that affect product, destination or documentation requirements."] },
          { kind: "callout", tone: "info", title: "Long-answer conclusion", text: "Digitalisation does not eliminate compliance responsibility. It changes the method of filing and improves traceability, but the underlying requirement remains accurate, lawful and auditable trade information." },
        ],
      },
    ],
    keyTerms: [{"term": "Customs Clearance", "definition": "Process through which goods are processed for lawful movement across the border."}, {"term": "Customs Broker", "definition": "Professional intermediary assisting clients with customs procedures and documentation under applicable rules."}, {"term": "ICEGATE", "definition": "Indian Customs' electronic interface and digital service ecosystem."}, {"term": "e-Sanchit", "definition": "Electronic document-submission facility associated with customs processes."}, {"term": "Customs Valuation", "definition": "Determination of customs value according to applicable rules."}, {"term": "Classification", "definition": "Assignment of goods to the applicable tariff/classification category."}, {"term": "Risk Management", "definition": "Use of data and risk parameters to focus customs controls and examination."}, {"term": "Trade Compliance", "definition": "Systematic adherence to customs, trade-policy and related regulatory requirements."}],
    examQuestions: ["Explain the customs clearance process for exports and imports. (Long)", "Write a note on the Indian Customs Act in EXIM operations. (Medium)", "Explain the role of customs brokers. (Medium)", "What is ICEGATE? Explain its significance. (Medium)", "Explain e-Sanchit and electronic document submission. (Medium)", "Differentiate ICEGATE and e-Sanchit. (Short)", "Discuss digital trade compliance. (Long)", "Why are classification and valuation important in customs? (Medium)", "What is customs clearance? (Short)", "Why should digital trade records be retained? (Short)"],
  },
];
