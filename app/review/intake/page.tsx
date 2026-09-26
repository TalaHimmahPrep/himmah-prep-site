import type { Metadata } from "next";
import { Suspense } from "react";
import { IntakeForm } from "./IntakeForm";

export const metadata: Metadata = {
  title: "Application Review Intake — Himmah Prep",
  description: "Submit your essays and application details for review.",
  robots: { index: false, follow: false },
};

export default function ReviewIntakePage() {
  return (
    <Suspense fallback={null}>
      <IntakeForm />
    </Suspense>
  );
}
