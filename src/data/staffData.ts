export interface StaffMember {
  name: string;
  role: string;
  qualification: string;
  department: string;
  bio: string;
}

export const schoolLeaders: StaffMember[] = [
  {
    name: "Dr. Ronald K. Mukasa",
    role: "Headteacher & Principal",
    qualification: "PhD in Educational Leadership (Makerere), M.Ed, B.Sc. Ed",
    department: "Executive Administration",
    bio: "Over 22 years of transformative secondary school leadership in Uganda, pioneering the integration of vocational trade certificates with UNEB academic excellence."
  },
  {
    name: "Mrs. Sarah Nalubega Batte",
    role: "Deputy Headteacher (Academics & CBC)",
    qualification: "M.Ed Curriculum Studies, B.A. Ed (Hons)",
    department: "Academic Affairs",
    bio: "Certified national trainer for Uganda's Lower Secondary Competency-Based Curriculum, championing student-centered research and STEM innovations."
  },
  {
    name: "Mr. Patrick Ochieng",
    role: "Deputy Headteacher (Student Welfare & Boarding)",
    qualification: "P.G.D.E, B.Sc. Sports Science & Counseling",
    department: "Student Life & Pastoral Care",
    bio: "Dedicated to holistic student character formation, disciplined community living, and championship athletics development."
  },
  {
    name: "Eng. Samuel Kisakye",
    role: "Director of Vocational Trades & Enterprise",
    qualification: "B.Eng. Mechanical Engineering, Dip. Technical Education",
    department: "Vocational Skills Center",
    bio: "Oversees the tailoring atelier, timber joinery shops, and agricultural mechanization programs across our 14-acre campus."
  },
  {
    name: "Sr. Agnes Namutebi",
    role: "Senior Matron & Health Services Coordinator",
    qualification: "Registered Nurse (KRCHN), Dip. Guidance & Counseling",
    department: "Health & Dormitory Care",
    bio: "Ensures round-the-clock medical care, dietary wellness, and motherly mentorship for all female boarders."
  },
  {
    name: "Mr. Geoffrey Byaruhanga",
    role: "Director of Studies (D.O.S)",
    qualification: "M.Sc. Mathematics, B.Sc. Ed",
    department: "Academic Examination Bureau",
    bio: "Coordinates continuous assessments, mock examinations, UNEB registrations, and academic remedial clinics."
  }
];
