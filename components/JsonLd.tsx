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
  "@id": "https://himmahprep.com/#organization",
  name: "Himmah Prep",
  alternateName: "himmahPREP",
  url: "https://himmahprep.com",
  logo: "https://himmahprep.com/logo.webp",
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
  ],
};
