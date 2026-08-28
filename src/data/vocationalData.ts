export interface VocationalPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  modules: string[];
  equipment: string[];
  careerOutcomes: string[];
  studentProjects: {
    title: string;
    description: string;
    impact: string;
  }[];
}

export const vocationalTrades: VocationalPillar[] = [
  {
    id: "tailoring",
    title: "Tailoring & Garment Design",
    tagline: "From pattern making to professional apparel and runway craftsmanship.",
    description: "Students learn precision cutting, domestic and industrial sewing machine operations, embroidery, textile selection, garment construction, and fashion entrepreneurship. Every learner produces actual wearable items including school uniforms, traditional attire (Gomesi & Kanzu), formal suits, and sportswear.",
    iconName: "Scissors",
    accentColor: "maroon",
    modules: [
      "Pattern Drafting & Freehand Cutting",
      "Industrial & Electric Sewing Machinery",
      "Fabric Science & Textile Care",
      "Garment Construction: Shirts, Trousers, Dresses & Uniforms",
      "African Traditional Wear: Gomesi, Kanzu & Bitenge",
      "Apparel Pricing, Marketing & Boutique Management"
    ],
    equipment: [
      "Heavy-duty Singer & Juki Industrial Sewing Machines",
      "Overlock & Serger Machines",
      "Pattern Cutting Tables & Mannequins",
      "Steam Press Stations & Buttonholers"
    ],
    careerOutcomes: [
      "Fashion Designer & Couturier",
      "Uniform Manufacturing Contractor",
      "Textile Entrepreneur",
      "Costume Designer for Film & Theatre"
    ],
    studentProjects: [
      {
        title: "The All-School Sports Uniform Line",
        description: "Designed and manufactured by Senior Three students for the 4 school sports houses.",
        impact: "Saved the school over 4.5M UGX in external procurement costs while providing real commercial training."
      },
      {
        title: "Eco-Friendly Kitenge School Bags",
        description: "Durable school backpacks crafted using reinforced canvas and traditional East African fabrics.",
        impact: "Sold at the Kayunga District Agri-Trade Exhibition with 100% of profits returned to student creators."
      }
    ]
  },
  {
    id: "carpentry",
    title: "Carpentry & Timber Joinery",
    tagline: "Mastering timber, structural framing, and fine furniture craftsmanship.",
    description: "Anchored in our dedicated timber shop, learners master woodworking safety, measurement accuracy, classic joinery (mortise and tenon, dovetail, tongue & groove), roof truss framing, wood turning, and high-gloss varnishing. Practical projects furnish school classrooms and provide community services across Kayunga.",
    iconName: "Hammer",
    accentColor: "brown",
    modules: [
      "Wood Workshop Safety & Tool Sharpening",
      "Timber Grading & Moisture Seasoning",
      "Traditional & Machine Joinery Techniques",
      "School & Office Furniture Fabrication",
      "Roofing Trusses & Architectural Woodwork",
      "Varnishing, Staining, Sanding & High-End Finishing"
    ],
    equipment: [
      "Radial Arm Saws, Planer Thicknessers & Table Saws",
      "Wood Turning Lathes",
      "Heavy Duty Workbenches with Rapid Clamps",
      "Pneumatic Nailers & Finishing Sanders"
    ],
    careerOutcomes: [
      "Master Carpenter & Joiner",
      "Furniture Designer & Manufacturer",
      "Building Construction Contractor",
      "Interior Woodwork Specialist"
    ],
    studentProjects: [
      {
        title: "Classroom Modern Desk Fleet",
        description: "50 dual-seater hardwood desks built from seasoned mahogany for the new A-Level block.",
        impact: "Stands as durable school infrastructure built by learners with their own hands."
      },
      {
        title: "Community Honeybee Apiary Hives",
        description: "Precision-built Langstroth and Kenya Top-Bar beehives supplied to local farmers in Bbaale Sub-county.",
        impact: "Boosted local honey yields while demonstrating practical structural joinery."
      }
    ]
  },
  {
    id: "agribusiness",
    title: "Agribusiness & Modern Farming",
    tagline: "Commercial horticulture, livestock breeding, and value-added food processing on 14 fertile acres.",
    description: "His Kids High School operates a 14-acre teaching and commercial farm. Learners take charge of high-yield horticulture (tomatoes, cabbage, green peppers), commercial matooke (banana) plantations, poultry brooders, zero-grazing cattle, piggery units, and drip irrigation systems.",
    iconName: "Sprout",
    accentColor: "green",
    modules: [
      "Soil Fertility, Composting & Organic Manure",
      "Commercial Horticulture & Drip Irrigation",
      "Poultry Farming: Layers & Broiler Management",
      "Piggery & Dairy Cattle Husbandry",
      "Post-Harvest Storage & Value Addition",
      "Farm Accounts, Yield Projections & Market Sales"
    ],
    equipment: [
      "Solar-Powered Drip Irrigation Network",
      "Modern Brooder Houses & Feed Mill Units",
      "Bio-Digester for Clean Cooking Gas",
      "Milking Parlour & Milk Chilling Storage"
    ],
    careerOutcomes: [
      "Commercial Farm Enterprise Manager",
      "Agronomist & Livestock Consultant",
      "Food Processing & Value Addition Specialist",
      "Agricultural Produce Exporter"
    ],
    studentProjects: [
      {
        title: "Farm-to-Table School Dining Supply",
        description: "The student-run farm provides fresh vegetables, eggs, and milk directly to the boarding school kitchen daily.",
        impact: "Ensures nutritious, chemical-free food for 600+ learners while slashing boarding grocery overheads."
      },
      {
        title: "Kayunga Passion Fruit Nursery",
        description: "Grafted high-yield disease-resistant purple passion fruit seedlings propagated by Senior Two students.",
        impact: "Over 2,000 seedlings distributed to surrounding farmer cooperatives to boost household incomes."
      }
    ]
  }
];
