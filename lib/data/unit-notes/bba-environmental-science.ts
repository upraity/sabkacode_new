import { UnitNote } from "@/types";

// Detailed, in-app notes for Environmental Science (BBA107) — AKTU BBA
// Sem 1.
export const bbaEnvironmentalScienceUnitNotes: UnitNote[] = [
  {
    unitNumber: 1,
    title: "Introduction to Environmental Science",
    hours: 6,
    headings: [
      {
        id: "ecosystem-concept",
        title: "1. Ecosystem: Concept, Structure and Functions",
        icon: "Leaf",
        blocks: [
          {
            kind: "paragraph",
            text: "Environmental Science studies the interactions between living organisms and their physical environment — its importance for business students lies in understanding resource constraints, regulatory obligations, and the growing role of sustainability in business strategy (recall Green Marketing, Marketing Management Unit 5, and Sustainable Development, Unit 5 of this subject).",
          },
          {
            kind: "paragraph",
            text: "An Ecosystem is a community of living organisms interacting with each other and their non-living environment, functioning as a system. Its structure has two components: biotic (living organisms) and abiotic (non-living factors — sunlight, water, soil, temperature).",
          },
          {
            kind: "table",
            headers: ["Ecosystem Type", "Example"],
            rows: [
              ["Terrestrial", "Forest, grassland, desert"],
              ["Aquatic", "Pond, lake, river (freshwater)"],
              ["Marine", "Ocean, coral reef (saltwater)"],
            ],
          },
        ],
      },
      {
        id: "energy-flow-food-chain",
        title: "2. Energy Flow, Food Chains and Ecological Pyramids",
        icon: "Sun",
        blocks: [
          {
            kind: "paragraph",
            text: "Energy flows through an ecosystem in one direction (unlike nutrients, which cycle) — starting from the sun, captured by producers via photosynthesis, and passed on (with significant loss at each step, roughly 90% lost as heat) through a food chain.",
          },
          { kind: "diagram", diagramId: "food-chain", caption: "Fig 1.1 — A simple food chain" },
          {
            kind: "paragraph",
            text: "A Food Web is a more realistic, interconnected network of multiple overlapping food chains in an ecosystem (since most organisms eat more than one type of food).",
          },
          { kind: "diagram", diagramId: "ecological-pyramid", caption: "Fig 1.2 — An ecological pyramid of numbers/energy" },
          {
            kind: "paragraph",
            text: "Ecological Pyramids visually represent the ecosystem structure — typically showing that the number/energy/biomass of organisms decreases at each higher trophic level, since energy is progressively lost.",
          },
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Overfishing and food web collapse",
            text: "The collapse of the Atlantic cod fishery off Canada in the 1990s is a classic case study of disrupting a food web — overfishing cod (a top predator) caused unexpected cascading effects throughout the marine ecosystem, and cod populations still haven't fully recovered decades later, illustrating how interconnected ecological pyramids are in reality.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Ecosystem", definition: "A community of living organisms interacting with each other and their non-living environment." },
      { term: "Food Web", definition: "An interconnected network of multiple overlapping food chains in an ecosystem." },
      { term: "Ecological Pyramid", definition: "A diagram showing the decreasing number/energy/biomass of organisms at each higher trophic level." },
    ],
    examQuestions: [
      "Explain the concept, structure, and functions of an ecosystem. (Medium)",
      "Differentiate between terrestrial, aquatic, and marine ecosystems. (Short)",
      "Explain energy flow in an ecosystem. (Medium)",
      "Differentiate between a food chain and a food web. (Short)",
      "Explain ecological pyramids with a diagram. (Long)",
    ],
  },
  {
    unitNumber: 2,
    title: "Natural Resources",
    hours: 8,
    headings: [
      {
        id: "land-forest-water",
        title: "1. Land, Forest and Water Resources",
        icon: "Mountain",
        blocks: [
          {
            kind: "table",
            headers: ["Resource", "Key Issues"],
            rows: [
              ["Land Resources", "Land degradation, landslides, soil erosion, desertification"],
              ["Forest Resources", "Deforestation (driven by agriculture, logging, urbanisation); impacts of mining and dam building destroying forest habitats"],
              ["Water Resources", "Over-exploitation of surface and groundwater, floods, droughts, and conflicts over shared water resources between regions/countries"],
            ],
          },
        ],
      },
      {
        id: "energy-resources",
        title: "2. Energy Resources and Global Warming",
        icon: "Zap",
        blocks: [
          {
            kind: "table",
            headers: ["Type", "Examples"],
            rows: [
              ["Renewable Energy", "Solar, wind, hydro, geothermal — naturally replenished"],
              ["Non-Renewable Energy", "Coal, petroleum, natural gas — finite, formed over millions of years"],
            ],
          },
          {
            kind: "paragraph",
            text: "The Greenhouse Effect is the natural warming process where certain gases (CO₂, methane) in the atmosphere trap heat from the sun — necessary for life, but human activity (burning fossil fuels) has intensified it, causing Global Warming, the observed rise in Earth's average temperature over the past century.",
          },
          {
            kind: "paragraph",
            text: "Acid Rain is precipitation with abnormally high acidity, caused by sulphur dioxide and nitrogen oxide emissions (mainly from burning fossil fuels) reacting with atmospheric moisture — it damages forests, water bodies, and even buildings/monuments.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Deforestation", definition: "The large-scale removal of forest cover, driven by agriculture, logging, or urbanisation." },
      { term: "Greenhouse Effect", definition: "The natural process by which atmospheric gases trap heat, intensified by human emissions." },
      { term: "Acid Rain", definition: "Precipitation with abnormally high acidity caused by sulphur/nitrogen oxide emissions." },
    ],
    examQuestions: [
      "Discuss the issues associated with land and forest resources. (Medium)",
      "Explain the causes and impacts of over-exploitation of water resources. (Medium)",
      "Differentiate between renewable and non-renewable energy sources. (Short)",
      "Explain the greenhouse effect and global warming. (Long)",
      "Explain the causes and effects of acid rain. (Medium)",
    ],
  },
  {
    unitNumber: 3,
    title: "Biodiversity and Its Conservation",
    hours: 8,
    headings: [
      {
        id: "biodiversity-values",
        title: "1. Concept, Importance and Values of Biodiversity",
        icon: "Sprout",
        blocks: [
          {
            kind: "paragraph",
            text: "Biodiversity refers to the variety of life at all levels — genetic, species, and ecosystem diversity — and is important because it maintains ecosystem stability, provides resources (food, medicine), and supports the ecological services (like pollination) that underpin human economies.",
          },
          {
            kind: "table",
            headers: ["Value of Biodiversity", "Meaning"],
            rows: [
              ["Consumptive Use Value", "Direct use of biodiversity for personal consumption (e.g., fuelwood, food)"],
              ["Productive Use Value", "Commercial value from biodiversity-derived products sold in the market"],
              ["Social Value", "Cultural and community significance (e.g., sacred groves)"],
              ["Ethical Value", "The intrinsic right of all species to exist, independent of their usefulness to humans"],
              ["Aesthetic Value", "The beauty and recreational/tourism value of nature"],
              ["Option Value", "The potential future value of a species/resource not yet discovered (e.g., an undiscovered medicinal plant)"],
            ],
          },
          {
            kind: "paragraph",
            text: "India as a mega-biodiversity nation: India is one of the world's recognised mega-biodiversity countries, home to a disproportionately large share of the world's species relative to its land area, including numerous endangered and endemic species (species found nowhere else in the world).",
          },
        ],
      },
      {
        id: "threats-conservation",
        title: "2. Threats to Biodiversity and Conservation",
        icon: "ShieldAlert",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Threats: habitat loss (the single biggest threat), poaching of wildlife, and man-wildlife conflicts (as human settlements expand into wildlife habitats).",
              "In-situ Conservation: protecting species within their natural habitat (e.g., National Parks, Wildlife Sanctuaries, Biosphere Reserves).",
              "Ex-situ Conservation: protecting species outside their natural habitat (e.g., zoos, botanical gardens, seed banks/gene banks).",
            ],
          },
          {
            kind: "paragraph",
            text: "The Biological Diversity Act, 2002 is India's legal framework for conserving biological diversity, ensuring sustainable use of its components, and enabling fair and equitable sharing of benefits arising from the use of biological resources and traditional knowledge.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Endemic Species", definition: "A species found naturally in only one specific geographic location and nowhere else." },
      { term: "In-situ Conservation", definition: "Protecting species within their natural habitat, e.g., National Parks." },
      { term: "Ex-situ Conservation", definition: "Protecting species outside their natural habitat, e.g., zoos and seed banks." },
    ],
    examQuestions: [
      "Explain the concept and values of biodiversity. (Long)",
      "Why is India considered a mega-biodiversity nation? (Short)",
      "Discuss the threats to biodiversity. (Medium)",
      "Differentiate between in-situ and ex-situ conservation with examples. (Medium)",
      "Explain the key provisions of the Biological Diversity Act, 2002. (Medium)",
    ],
  },
  {
    unitNumber: 4,
    title: "Pollution",
    hours: 10,
    headings: [
      {
        id: "types-sources",
        title: "1. Types and Sources of Pollution",
        icon: "CloudFog",
        blocks: [
          {
            kind: "table",
            headers: ["Pollution Type", "Common Sources"],
            rows: [
              ["Air Pollution", "Vehicle emissions, industrial smoke, burning fossil fuels"],
              ["Water Pollution", "Industrial effluents, sewage discharge, agricultural runoff (pesticides/fertilisers)"],
              ["Soil Pollution", "Improper waste disposal, excessive pesticide/fertiliser use, industrial dumping"],
              ["Noise Pollution", "Traffic, construction, industrial machinery, loudspeakers"],
            ],
          },
          {
            kind: "paragraph",
            text: "Effects of pollution on human health and the economy: respiratory and cardiovascular diseases (from air pollution), waterborne diseases (from water pollution), reduced agricultural productivity (from soil pollution), and significant healthcare and productivity costs to the economy overall.",
          },
        ],
      },
      {
        id: "climate-change",
        title: "2. Climate Change: Causes, Impacts and Prevention",
        icon: "Thermometer",
        blocks: [
          {
            kind: "paragraph",
            text: "Climate Change refers to long-term shifts in temperature and weather patterns, primarily driven in the modern era by human activities that increase greenhouse gas emissions (recall the Greenhouse Effect, Unit 2).",
          },
          {
            kind: "paragraph",
            text: "Impacts: rising sea levels, more frequent extreme weather events (floods, droughts, heatwaves), disrupted agriculture, and biodiversity loss. Prevention/mitigation measures: transitioning to renewable energy, improving energy efficiency, reforestation, and international cooperation through climate agreements.",
          },
        ],
      },
      {
        id: "environmental-legislation",
        title: "3. Environmental Legislation in India",
        icon: "Gavel",
        blocks: [
          {
            kind: "table",
            headers: ["Legislation", "Purpose"],
            rows: [
              ["Water (Prevention and Control of Pollution) Act, 1974", "Prevents and controls water pollution, and maintains/restores water quality"],
              ["Air (Prevention and Control of Pollution) Act, 1981", "Prevents and controls air pollution"],
              ["Environmental Protection Act, 1986", "An umbrella law empowering the government to take measures for protecting and improving the environment overall"],
            ],
          },
          {
            kind: "paragraph",
            text: "Environmental Impact Assessment (EIA) is a process required before major projects (factories, dams, mining) can be approved — it systematically evaluates the likely environmental consequences of a proposed project, so that decision-makers can weigh those impacts before granting clearance.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — The Bhopal Gas Tragedy (1984)",
            text: "The Bhopal Gas Tragedy, caused by a toxic gas leak from a pesticide plant, remains India's worst industrial disaster and a defining case study in environmental legislation — it directly led to significant strengthening of India's environmental and industrial safety laws, including provisions that shaped the Environmental Protection Act, 1986.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Environmental Impact Assessment (EIA)", definition: "A process evaluating the likely environmental consequences of a proposed project before approval." },
      { term: "Climate Change", definition: "Long-term shifts in temperature and weather patterns, largely driven by human greenhouse gas emissions." },
    ],
    examQuestions: [
      "Discuss the types and sources of pollution. (Long)",
      "Explain the effects of pollution on human health and the economy. (Medium)",
      "Discuss the causes, impacts, and prevention of climate change. (Long)",
      "Explain the key environmental legislation in India: Water Act, Air Act, and EPA. (Long)",
      "What is Environmental Impact Assessment? Why is it important? (Medium)",
    ],
  },
  {
    unitNumber: 5,
    title: "Sustainable Development and Business Practices",
    hours: 8,
    headings: [
      {
        id: "sustainability-principles",
        title: "1. Principles and Dimensions of Sustainable Development",
        icon: "Recycle",
        blocks: [
          {
            kind: "paragraph",
            text: "Sustainable Development means meeting the needs of the present without compromising the ability of future generations to meet their own needs — balanced across three dimensions: economic, social, and environmental.",
          },
        ],
      },
      {
        id: "green-business",
        title: "2. Green Business Practices and Certifications",
        icon: "Leaf",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Reducing waste: minimising material use and reusing/recycling wherever possible.",
              "Energy efficiency: adopting technology and practices that reduce energy consumption per unit of output.",
              "Sustainable sourcing: procuring raw materials and inputs from environmentally and socially responsible suppliers.",
            ],
          },
          {
            kind: "paragraph",
            text: "Environmental Management Systems (EMS) are structured frameworks helping organisations manage their environmental responsibilities systematically; ISO 14001 is the internationally recognised certification standard for an effective EMS, signalling credible environmental commitment to customers and regulators alike.",
          },
        ],
      },
      {
        id: "triple-bottom-line",
        title: "3. The Triple Bottom Line and the Circular Economy",
        icon: "PieChart",
        blocks: [
          {
            kind: "paragraph",
            text: "The Triple Bottom Line (TBL) framework judges business success not just on financial profit, but across three \"P\"s:",
          },
          { kind: "diagram", diagramId: "triple-bottom-line", caption: "Fig 5.1 — The Triple Bottom Line" },
          {
            kind: "paragraph",
            text: "The Circular Economy is an economic model designed to eliminate waste by continuously reusing, repairing, refurbishing, and recycling materials and products — in contrast to the traditional \"take-make-dispose\" linear economy model. This creates real business opportunities (e.g., remanufacturing, product-as-a-service models) for firms that adapt early.",
          },
          {
            kind: "paragraph",
            text: "Green Marketing and consumer engagement: developing and promoting products based on genuine environmental benefits (recall Green Marketing, Marketing Management Unit 5), which is increasingly important as consumer environmental consciousness rises — though firms must avoid \"greenwashing\" (misleadingly presenting a product as more environmentally friendly than it actually is), which damages long-term brand trust when exposed.",
          },
        ],
      },
      {
        id: "case-studies",
        title: "4. Case Study",
        icon: "Scale",
        blocks: [
          {
            kind: "callout",
            tone: "case",
            title: "Case study — Patagonia's sustainability-led business model",
            text: "Outdoor apparel company Patagonia has built its entire brand around environmental responsibility — from its \"Worn Wear\" program encouraging customers to repair rather than replace products, to donating a percentage of sales to environmental causes — demonstrating the Triple Bottom Line and circular economy principles applied as genuine, differentiating business strategy rather than just marketing.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Triple Bottom Line", definition: "A framework judging business success across People, Planet, and Profit." },
      { term: "Circular Economy", definition: "An economic model eliminating waste through continuous reuse, repair, and recycling of materials." },
      { term: "Greenwashing", definition: "Misleadingly presenting a product or company as more environmentally friendly than it actually is." },
    ],
    examQuestions: [
      "Explain the principles and dimensions of sustainable development. (Medium)",
      "Discuss green business practices with examples. (Medium)",
      "Explain ISO 14001 and Environmental Management Systems. (Short)",
      "Explain the Triple Bottom Line framework with a diagram. (Long)",
      "Explain the circular economy and how it differs from the traditional linear economy. (Medium)",
      "What is greenwashing? Why should businesses avoid it? (Short)",
    ],
  },
];
