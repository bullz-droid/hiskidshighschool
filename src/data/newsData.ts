export interface Article {
  id: string;
  title: string;
  category: "Academics" | "Sports" | "Vocational" | "Boarding" | "Events";
  date: string;
  readTime: string;
  summary: string;
  author: string;
  featured?: boolean;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

export const schoolArticles: Article[] = [
  {
    id: "uneb-2025-results",
    title: "His Kids High School Shines in UCE & UACE Exams with 96% First-Grade Distinction",
    category: "Academics",
    date: "February 14, 2026",
    readTime: "4 min read",
    summary: "The Ministry of Education released the national examination results, celebrating our students' exemplary performance across both Sciences and Arts streams.",
    author: "Academic Registrar Office",
    featured: true
  },
  {
    id: "sports-gala-victory",
    title: "Green House Clinches 2026 Inter-House Athletics & Football Championship",
    category: "Sports",
    date: "February 22, 2026",
    readTime: "3 min read",
    summary: "A thrilling two-day sporting spectacle on the main pitch saw record-breaking sprints, a nail-biting football final, and historic netball scores.",
    author: "Department of Physical Education",
    featured: true
  },
  {
    id: "vocational-expo-success",
    title: "Annual Skills & Innovation Expo Displays Over 300 Student-Made Products",
    category: "Vocational",
    date: "January 30, 2026",
    readTime: "5 min read",
    summary: "Parents and community leaders flocked to campus to purchase student-crafted timber furniture, designer dresses, and organic farm produce.",
    author: "Vocational Directorate",
    featured: false
  },
  {
    id: "solar-labs-upgrade",
    title: "Commissioning of State-of-the-Art Solar Powered Digital Science & ICT Lab",
    category: "Academics",
    date: "January 12, 2026",
    readTime: "3 min read",
    summary: "Thanks to our sustainable energy initiative, 40 new computers and digital science sensors now run 24/7 on clean solar power.",
    author: "Head of ICT",
    featured: false
  },
  {
    id: "boarding-house-refurbishment",
    title: "New Modern Dormitory Blocks and Dining Hall Completed Ahead of Term One",
    category: "Boarding",
    date: "December 20, 2025",
    readTime: "3 min read",
    summary: "Expanded hot water systems, enlarged study areas, and modern self-contained living wings ready for both boys and girls.",
    author: "Welfare & Boarding Committee",
    featured: false
  }
];

export const upcomingEvents: SchoolEvent[] = [
  {
    id: "evt-1",
    title: "Senior One & Senior Five Orientation Day",
    date: "March 02, 2026",
    time: "8:30 AM - 3:00 PM",
    location: "Main Assembly Pavilion",
    category: "Admissions",
    description: "Welcoming all new learners and parents with guided campus tours, uniform distribution, and mentor introductions."
  },
  {
    id: "evt-2",
    title: "Annual Inter-School Science & Innovation Fair",
    date: "March 20, 2026",
    time: "9:00 AM - 4:30 PM",
    location: "Science Complex & Grounds",
    category: "Academics",
    description: "Hosting 12 regional high schools in Kayunga & Mukono for robotics, agricultural chemistry, and renewable energy exhibitions."
  },
  {
    id: "evt-3",
    title: "Parents, Teachers & Board of Governors AGM",
    date: "April 05, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "School Chapel & Hall",
    category: "Community",
    description: "Annual general meeting to review academic milestones, farm infrastructure expansion, and student welfare reports."
  },
  {
    id: "evt-4",
    title: "Kayunga District Football & Netball Derby",
    date: "April 18, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "His Kids Main Sports Arena",
    category: "Sports",
    description: "His Kids High School Lions host rival district champions in an epic clash of youth athletics."
  }
];
