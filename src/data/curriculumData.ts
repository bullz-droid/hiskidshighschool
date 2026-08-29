export interface Subject {
  id: string;
  name: string;
  category: "sciences" | "humanities" | "languages" | "technical" | "vocational";
  level: "O-Level" | "A-Level" | "Both";
  code?: string;
  description: string;
  highlight: string;
  careerPaths: string[];
}

export interface Combination {
  code: string;
  name: string;
  stream: "Science" | "Arts" | "Technical";
  subjects: string[];
  subsidiaries: string[];
  description: string;
  suitableFor: string[];
}

export const oLevelSubjects: Subject[] = [
  {
    id: "math",
    name: "Mathematics",
    category: "sciences",
    level: "O-Level",
    code: "456",
    description: "Competency-based modern mathematics focusing on problem solving, statistics, financial literacy, algebra, and spatial geometry.",
    highlight: "Equipped with real-world financial literacy and data modeling modules.",
    careerPaths: ["Engineering", "Data Science", "Economics", "Architecture", "Accountancy"]
  },
  {
    id: "physics",
    name: "Physics",
    category: "sciences",
    level: "O-Level",
    code: "535",
    description: "Hands-on exploration of mechanics, electricity, optics, magnetism, renewable energy, and modern instrumentation.",
    highlight: "Extensive laboratory work in our dedicated physical science labs.",
    careerPaths: ["Electrical Engineering", "Civil Engineering", "Renewable Energy", "Aviation", "Telecommunications"]
  },
  {
    id: "chem",
    name: "Chemistry",
    category: "sciences",
    level: "O-Level",
    code: "545",
    description: "Laboratory-intensive chemistry exploring matter, organic synthesis, electrochemistry, environmental safety, and industrial processes.",
    highlight: "Practical soap-making, fertilizer testing, and water purification projects.",
    careerPaths: ["Medicine & Surgery", "Pharmacy", "Chemical Engineering", "Biotechnology"]
  },
  {
    id: "bio",
    name: "Biology & Life Sciences",
    category: "sciences",
    level: "O-Level",
    code: "553",
    description: "Physiology, genetics, ecology, public health, and biodiversity with field research across our 14-acre biological reserve.",
    highlight: "Direct integration with our school farm ecosystem and biodiversity reserve.",
    careerPaths: ["Medicine", "Veterinary Medicine", "Agronomy", "Public Health", "Environmental Science"]
  },
  {
    id: "agric",
    name: "Agriculture (CBC Core)",
    category: "sciences",
    level: "O-Level",
    code: "527",
    description: "Comprehensive crop science, animal husbandry, soil fertility management, agribusiness accounting, and smart farm technology.",
    highlight: "Students manage live commercial plots from sowing to market sale.",
    careerPaths: ["Commercial Farming", "Agribusiness Management", "Soil Science", "Food Processing"]
  },
  {
    id: "ict",
    name: "ICT & Computer Studies",
    category: "technical",
    level: "O-Level",
    code: "840",
    description: "Digital literacy, web fundamentals, software applications, hardware troubleshooting, cybersecurity, and coding principles.",
    highlight: "High-speed modern computer lab with dedicated solar backup.",
    careerPaths: ["Software Engineering", "Network Administration", "Digital Media", "Fintech"]
  },
  {
    id: "food-tech",
    name: "Nutrition & Food Technology",
    category: "technical",
    level: "O-Level",
    code: "662",
    description: "Food science, culinary arts, bakery, dietary preservation, hospitality management, and catering entrepreneurship.",
    highlight: "Professional culinary lab hosting student-run catering exhibitions.",
    careerPaths: ["Culinary Arts", "Dietetics", "Food Safety Inspection", "Hospitality Management"]
  },
  {
    id: "cre",
    name: "Christian Religious Education",
    category: "humanities",
    level: "O-Level",
    code: "223",
    description: "Fostering God-fearing character and spiritual growth based on Pentecostal Christian values, ethics, and biblical teachings.",
    highlight: "Instilling strong moral foundations, community service, and Christian leadership.",
    careerPaths: ["Ministry & Theology", "Social Work", "Education", "Community Leadership"]
  },
  {
    id: "eng",
    name: "English Language & Communication",
    category: "languages",
    level: "O-Level",
    code: "112",
    description: "Mastery of written, oral, analytical, and professional communication with focus on rhetoric and composition.",
    highlight: "Weekly public speaking, debate leagues, and publication in the school gazette.",
    careerPaths: ["Law", "Journalism", "Corporate Communications", "Diplomacy"]
  },
  {
    id: "lit",
    name: "Literature in English",
    category: "humanities",
    level: "O-Level",
    code: "208",
    description: "Critical analysis of African and world literature, prose, poetry, and drama exploring culture and humanity.",
    highlight: "Annual staging of school plays and inter-school drama festivals.",
    careerPaths: ["Creative Writing", "Publishing", "Law", "Media & Film", "Education"]
  },
  {
    id: "hist",
    name: "History & Political Education",
    category: "humanities",
    level: "O-Level",
    code: "241",
    description: "East African, Pan-African, and World histories paired with constitutional literacy, civic responsibility, and peace building.",
    highlight: "Engaging mock parliament sessions and community civic research.",
    careerPaths: ["Public Administration", "International Relations", "Law", "Policy Analysis"]
  },
  {
    id: "geog",
    name: "Geography & Environmental Studies",
    category: "humanities",
    level: "O-Level",
    code: "273",
    description: "Physical geography, map analysis, climate change adaptation, regional development, and GIS mapping.",
    highlight: "Termly geographic expeditions to the River Nile, Mabira Forest, and surrounding districts.",
    careerPaths: ["Urban Planning", "Environmental Consulting", "Cartography", "Disaster Management"]
  },
  {
    id: "ent",
    name: "Entrepreneurship Education",
    category: "humanities",
    level: "O-Level",
    code: "845",
    description: "Business plan creation, financial management, marketing, product design, and micro-venture operations.",
    highlight: "Every learner pitches and operates a real revenue-generating campus micro-enterprise.",
    careerPaths: ["Business Ownership", "Investment Banking", "Marketing", "Project Management"]
  },
  {
    id: "kisw",
    name: "Kiswahili",
    category: "languages",
    level: "O-Level",
    code: "336",
    description: "East African regional lingua franca proficiency covering syntax, commercial trade dialogue, and literature.",
    highlight: "Cultural exchange events celebrating the East African Community (EAC).",
    careerPaths: ["Regional Commerce", "Translation & Interpretation", "Diplomacy", "Cross-Border Trade"]
  },
  {
    id: "art",
    name: "Fine Art & Design",
    category: "technical",
    level: "O-Level",
    code: "612",
    description: "Drawing, painting, textile design, sculpture, ceramics, graphic communication, and indigenous Ugandan craft arts.",
    highlight: "Creative studio with pottery kilns, screen printing, and easel bays.",
    careerPaths: ["Graphic Design", "Architecture", "Fashion Design", "Animation", "Fine Arts"]
  }
];

export const aLevelCombinations: Combination[] = [
  {
    code: "PCM/ICT",
    name: "Physics · Chemistry · Mathematics",
    stream: "Science",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    subsidiaries: ["General Paper", "Sub-ICT"],
    description: "The gold-standard STEM combination preparing learners for heavy engineering, industrial technology, and physical sciences.",
    suitableFor: ["Civil, Electrical, Mechanical & Software Engineering", "Applied Physics", "Actuarial Science", "Architecture"]
  },
  {
    code: "PCB/SM",
    name: "Physics · Chemistry · Biology",
    stream: "Science",
    subjects: ["Physics", "Chemistry", "Biology"],
    subsidiaries: ["General Paper", "Sub-Mathematics"],
    description: "The premier biomedical combination tailored for students aspiring to lead in clinical medicine, surgery, and health technology.",
    suitableFor: ["Human Medicine & Surgery", "Pharmacy", "Dentistry", "Biomedical Engineering", "Veterinary Medicine"]
  },
  {
    code: "BCM/ICT",
    name: "Biology · Chemistry · Mathematics",
    stream: "Science",
    subjects: ["Biology", "Chemistry", "Mathematics"],
    subsidiaries: ["General Paper", "Sub-ICT"],
    description: "Ideal for bio-engineering, biotechnology, molecular genetics, pharmacology, and bioinformatics.",
    suitableFor: ["Biotechnology", "Pharmacology", "Food Science & Technology", "Environmental Engineering"]
  },
  {
    code: "PEM/ICT",
    name: "Physics · Economics · Mathematics",
    stream: "Science",
    subjects: ["Physics", "Economics", "Mathematics"],
    subsidiaries: ["General Paper", "Sub-ICT"],
    description: "Combines technical quantitative modeling with modern macroeconomics and infrastructure financing.",
    suitableFor: ["Industrial Economics", "Quantitative Finance", "Systems Engineering", "Data Analytics"]
  },
  {
    code: "HEG/SM",
    name: "History · Economics · Geography",
    stream: "Arts",
    subjects: ["History", "Economics", "Geography"],
    subsidiaries: ["General Paper", "Sub-Mathematics"],
    description: "A versatile humanities and social sciences power combination for leadership, law, economic governance, and regional planning.",
    suitableFor: ["Law (LLB)", "Economics & Development Studies", "Urban & Regional Planning", "Public Policy", "International Trade"]
  },
  {
    code: "HEL/ICT",
    name: "History · Economics · Literature",
    stream: "Arts",
    subjects: ["History", "Economics", "Literature in English"],
    subsidiaries: ["General Paper", "Sub-ICT"],
    description: "Focused on high-level rhetoric, analytical reasoning, international relations, and corporate law.",
    suitableFor: ["Law", "Diplomacy & Foreign Affairs", "Mass Communication", "Publishing", "Corporate Governance"]
  },
  {
    code: "DEG/SM",
    name: "Divinity · Economics · Geography",
    stream: "Arts",
    subjects: ["Divinity", "Economics", "Geography"],
    subsidiaries: ["General Paper", "Sub-Mathematics"],
    description: "Grounded in ethical leadership, resource management, community development, and sustainable commerce.",
    suitableFor: ["Business Administration", "Community Development", "Environmental Law", "Human Resource Management"]
  },
  {
    code: "MEA/ICT",
    name: "Mathematics · Economics · Fine Art",
    stream: "Technical",
    subjects: ["Mathematics", "Economics", "Fine Art"],
    subsidiaries: ["General Paper", "Sub-ICT"],
    description: "A forward-thinking combination blending quantitative calculation with spatial artistry and visual design.",
    suitableFor: ["Architecture & Landscape Design", "Industrial Product Design", "Game Design & VFX", "Real Estate Development"]
  }
];
