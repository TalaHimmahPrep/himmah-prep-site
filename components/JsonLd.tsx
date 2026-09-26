type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.himmahprep.com/#organization",
  name: "Himmah Prep",
  alternateName: ["himmahPREP", "Himmah"],
  url: "https://www.himmahprep.com",
  logo: "https://www.himmahprep.com/logo.webp",
  description:
    "Premium college admissions consulting, standardized test prep, leadership coaching, and summer planning for Gulf students. Founded in 2020 by Harvard and UPenn graduates.",
  foundingDate: "2020",
  founders: [
    { "@type": "Person", name: "Harvard graduate, Himmah Prep co-founder" },
    { "@type": "Person", name: "University of Pennsylvania graduate, Himmah Prep co-founder" },
  ],
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Oman" },
  ],
  sameAs: [
    "https://www.instagram.com/himmahprep",
    "https://www.linkedin.com/company/himmah-prep",
    "https://www.facebook.com/profile.php?id=61574378304650",
  ],
  knowsAbout: [
    "US college admissions",
    "Ivy League admissions",
    "Digital SAT preparation",
    "ACT preparation",
    "Common App essays",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
    url: "https://www.himmahprep.com/apply",
    availableLanguage: ["English", "Arabic"],
  },
};
