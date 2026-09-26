export type City = {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  demonym: string;
  schools: string[];
  localUnis: string[];
  intro: string;
  metaTitle: string;
  metaDescription: string;
};

export const CITIES: City[] = [
  {
    slug: "jeddah",
    name: "Jeddah",
    country: "Saudi Arabia",
    countrySlug: "saudi-arabia",
    demonym: "Jeddah",
    schools: [
      "American International School of Jeddah (AISJ)",
      "British International School of Jeddah (BISJ)",
      "Jeddah Prep and Grammar School",
      "Jeddah Knowledge International School",
      "Dar Al-Fikr",
    ],
    localUnis: ["KAUST", "Effat University", "Dar Al-Hekma", "King Abdulaziz University"],
    intro:
      "Jeddah families tend to come to us in 10th or 11th grade with a strong GPA from an American or IB school, a first SAT in the 1200s, and a school list built from what cousins and classmates did. The score, not the GPA, is usually what holds the list back.",
    metaTitle: "SAT Prep in Jeddah — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Jeddah — AISJ, BISJ, Jeddah Prep and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Most students reach 1500+. Free consultation.",
  },
  {
    slug: "riyadh",
    name: "Riyadh",
    country: "Saudi Arabia",
    countrySlug: "saudi-arabia",
    demonym: "Riyadh",
    schools: [
      "American International School Riyadh (AIS-R)",
      "British International School Riyadh",
      "Multinational School Riyadh",
      "King Faisal School",
      "Riyadh Schools",
    ],
    localUnis: ["Alfaisal University", "KSU", "Prince Sultan University", "Princess Nourah University"],
    intro:
      "Riyadh is where most of our Saudi students live, and the pattern is consistent: excellent grades, a heavy course load, and an SAT that lags the GPA by 200 points because nobody has taught the test itself. That gap is the most fixable part of the whole application.",
    metaTitle: "SAT Prep in Riyadh — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Riyadh — AIS-R, BISR, Multinational School and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Most students reach 1500+. Free consultation.",
  },
  {
    slug: "dammam",
    name: "Dammam & Khobar",
    country: "Saudi Arabia",
    countrySlug: "saudi-arabia",
    demonym: "Eastern Province",
    schools: [
      "International Schools Group (ISG) Dammam and Dhahran",
      "Dhahran High School",
      "British International School Al Khobar",
      "Al Hussan International School",
    ],
    localUnis: ["KFUPM", "Imam Abdulrahman Bin Faisal University", "Prince Mohammad Bin Fahd University"],
    intro:
      "Students in Dammam, Dhahran, and Khobar — many of them in Aramco-community or ISG schools — arrive with strong math foundations and a Reading & Writing section that drags the total down. The plan is usually front-loaded on grammar mechanics and reading pace.",
    metaTitle: "SAT Prep in Dammam & Khobar — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Dammam, Dhahran and Al Khobar — ISG, Dhahran High School and other Eastern Province schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Free consultation.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "the UAE",
    countrySlug: "uae",
    demonym: "Dubai",
    schools: [
      "American School of Dubai (ASD)",
      "Dubai American Academy (DAA)",
      "GEMS World Academy",
      "Dubai College",
      "Jumeirah English Speaking School (JESS)",
      "Dubai International Academy",
    ],
    localUnis: ["NYU Abu Dhabi", "American University in Dubai", "University of Wollongong Dubai"],
    intro:
      "Dubai students are the most test-aware families we work with — many have already tried a group SAT class and plateaued. Our job is the opposite of a classroom: one tutor, one student, one plan built from the diagnostic.",
    metaTitle: "SAT Prep in Dubai — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Dubai — ASD, DAA, GEMS, Dubai College, JESS and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Most students reach 1500+. Free consultation.",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    country: "the UAE",
    countrySlug: "uae",
    demonym: "Abu Dhabi",
    schools: [
      "American Community School of Abu Dhabi (ACS)",
      "Cranleigh Abu Dhabi",
      "Brighton College Abu Dhabi",
      "GEMS American Academy",
      "Raha International School",
    ],
    localUnis: ["NYU Abu Dhabi", "Khalifa University", "Zayed University"],
    intro:
      "Abu Dhabi families often have NYU Abu Dhabi and a US top-20 list on the same page — both of which read the SAT seriously. We build one prep plan that serves both, timed around the student's IB or AP calendar.",
    metaTitle: "SAT Prep in Abu Dhabi — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Abu Dhabi — ACS, Cranleigh, Brighton College, GEMS and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Free consultation.",
  },
  {
    slug: "doha",
    name: "Doha",
    country: "Qatar",
    countrySlug: "qatar",
    demonym: "Doha",
    schools: [
      "American School of Doha (ASD)",
      "Qatar Academy",
      "Doha College",
      "ACS Doha",
      "International School of London Qatar",
    ],
    localUnis: ["Carnegie Mellon Qatar", "Georgetown Qatar", "Texas A&M Qatar", "Northwestern Qatar", "Weill Cornell Qatar"],
    intro:
      "Doha is unusual: Education City puts six US universities within driving distance, and every one of them reads the SAT. Many of our Doha students apply to both Education City and the US main campuses, and the score matters for both.",
    metaTitle: "SAT Prep in Doha — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Doha — ASD, Qatar Academy, Doha College, ACS and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Most students reach 1500+. Free consultation.",
  },
  {
    slug: "kuwait-city",
    name: "Kuwait City",
    country: "Kuwait",
    countrySlug: "kuwait",
    demonym: "Kuwait",
    schools: [
      "American School of Kuwait (ASK)",
      "Bayan Bilingual School",
      "American International School Kuwait",
      "British School of Kuwait",
      "Fawzia Sultan International School",
    ],
    localUnis: ["American University of Kuwait", "GUST", "Kuwait University"],
    intro:
      "Kuwait students are often on scholarship tracks that set hard SAT minimums, so the target is not vague. We work backwards from the number the scholarship or the school list requires and build the plan to reach it with margin.",
    metaTitle: "SAT Prep in Kuwait — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Kuwait City — ASK, Bayan, AIS Kuwait, BSK and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Most students reach 1500+. Free consultation.",
  },
  {
    slug: "manama",
    name: "Manama",
    country: "Bahrain",
    countrySlug: "bahrain",
    demonym: "Bahrain",
    schools: [
      "Bahrain School",
      "Riffa Views International School",
      "British School of Bahrain",
      "Ibn Khuldoon National School",
      "St Christopher's School",
    ],
    localUnis: ["American University of Bahrain", "University of Bahrain", "RCSI Bahrain"],
    intro:
      "Bahrain's international schools produce confident readers, so most of our Manama students need targeted Math work — Algebra 2 fluency and the harder problem-solving questions in the second adaptive module.",
    metaTitle: "SAT Prep in Bahrain — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Manama and across Bahrain — Bahrain School, Riffa Views, BSB, Ibn Khuldoon and other international schools. Ivy League-credentialed tutors, diagnostic-first plan. Free consultation.",
  },
  {
    slug: "muscat",
    name: "Muscat",
    country: "Oman",
    countrySlug: "oman",
    demonym: "Oman",
    schools: [
      "The American International School Muscat (TAISM)",
      "American British Academy (ABA)",
      "British School Muscat",
      "Muscat International School",
    ],
    localUnis: ["Sultan Qaboos University", "GUtech", "Muscat University"],
    intro:
      "Muscat has fewer local SAT prep options than the larger Gulf cities, so most of our Oman students have been studying alone from Khan Academy. That is a good base; what is missing is a plan, a tutor, and full-length timed mocks.",
    metaTitle: "SAT Prep in Muscat — 1-on-1 Digital SAT Tutoring | Himmah Prep",
    metaDescription:
      "1-on-1 Digital SAT prep for students in Muscat and across Oman — TAISM, ABA, British School Muscat and other international schools. Ivy League-credentialed tutors, diagnostic-first plan, 15+ full mocks. Free consultation.",
  },
];

export const CITY_BY_SLUG: Record<string, City> = Object.fromEntries(
  CITIES.map((c) => [c.slug, c]),
);
