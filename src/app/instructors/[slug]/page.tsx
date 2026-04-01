import { notFound } from "next/navigation";
import { instructors, getInstructorBySlug } from "@/data/instructors";
import InstructorPageClient from "./InstructorPageClient";

export function generateStaticParams() {
  return instructors.map((instructor) => ({
    slug: instructor.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Use a sync approach for metadata
  return params.then(({ slug }) => {
    const instructor = getInstructorBySlug(slug);
    if (!instructor) return { title: "Instructor Not Found" };
    return {
      title: `${instructor.name}${instructor.credentials ? `, ${instructor.credentials}` : ""} | Cary Pilates`,
      description: instructor.shortBio,
    };
  });
}

export default async function InstructorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instructor = getInstructorBySlug(slug);

  if (!instructor) {
    notFound();
  }

  return <InstructorPageClient instructor={instructor} />;
}
