import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student & Parent Portal — His Kids High School, Kayunga",
  description: "Access continuous assessment grades, term fee ledger, weekly timetable, and official school circulars."
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
