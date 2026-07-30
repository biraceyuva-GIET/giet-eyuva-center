// ─────────────────────────────────────────────────────
//  Programs Data — Centralized event data for all programs
//  Replace placeholder entries with your real Excel data
// ─────────────────────────────────────────────────────

export interface EventItem {
  id: string;
  title: string;
  date: string | null;
  description?: string;
  image?: string | null;
  type: string | null;
  tags: string[];
  venue?: string;
  participants?: number;
  organizedBy?: string;
  coOrganizedBy?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
  sponsoredBy?: string | null;
  hostedBy?: string | null;
  convenorName?: string | null;
  coSponsoredBy?: string | null;
  numberOfParticipants?: number | null;
  theme?: string | null;
  links?: {
    poster?: string | null;
    eventPhotoCollage1?: string | null;
    eventPhotoCollage2?: string | null;
    posterPdf?: string | null;
    posterJpeg?: string | null;
    photoCollage1?: string | null;
    photoCollage2?: string | null;
    photoCollage3?: string | null;
    souvenir?: string | null;
    souvenirPdf?: string | null;
    souvenirJpeg?: string | null;
    abstractBookPdf?: string | null;
    abstractBookJpeg?: string | null;
    flyerPdf?: string | null;
    flyerJpeg1?: string | null;
    flyerJpeg2?: string | null;
    bannerPdf?: string | null;
    bannerJpeg?: string | null;
    photoCollages?: string[] | null;
  } | null;
}

// ── Translational Research & Academic Entrepreneurship ──

export const conferenceEvents: EventItem[] = [
  {
    id: "conf-1",
    title: "1st International Conference on Biomedical Innovation, Ownership, Translational Research & Intellectual Property (BIOTRIP-2026)",
    date: "2026-02-23",
    fromDate: "23/02/2026",
    toDate: "25/02/2026",
    type: "International",
    convenorName: "Dr. Mayadhar Barik",
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "DRDO, Ministry of Defence, Govt. of India",
    coSponsoredBy: "AMRIT KRISHI",
    numberOfParticipants: 200,
    tags: ["BIOTRIP-2026", "Biomedical Innovation", "Intellectual Property"],
    links: {
      souvenirPdf: "https://drive.google.com/file/d/1YbYJV8p3Ig4xCsyNjQivui-tDURCW6ty/view?usp=drive_link",
      souvenirJpeg: "https://drive.google.com/file/d/1EgS8EU895mRQ_O3XQZEvDd_DI3UIbV55/view?usp=drive_link",
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: "https://drive.google.com/file/d/1JxcMN6Vj8pSbuN8vl1fq5QtZ89MyyRMc/view?usp=drive_link",
      flyerJpeg1: "https://drive.google.com/file/d/1MTCEtqlydh-4cNuLvBIRowBeAVy3SeWb/view?usp=drive_link",
      flyerJpeg2: "https://drive.google.com/file/d/1-DQuUi_J3Y7jNpoHXsxnU1xmJYsN6kpO/view?usp=drive_link",
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: []
    }
  },
  {
    id: "conf-2",
    title: "1st International Conference on Translational Research, Innovation & Bio-Entrepreneurship 2026 (TRIBE-2026)",
    date: "2026-01-30",
    fromDate: "30/01/2026",
    toDate: "31/01/2026",
    type: "International",
    convenorName: "Dr. Manoja Das",
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["TRIBE-2026", "Translational Research", "Bio-Entrepreneurship"],
    links: {
      souvenirPdf: "https://drive.google.com/file/d/1aI9qGF1YsG8vqZxVRuDnmAEm5njN4Jhb/view?usp=sharing",
      souvenirJpeg: "https://drive.google.com/file/d/116YMPpvJzZH_JFZ1F_9amX24b3t86eDT/view?usp=sharing",
      abstractBookPdf: "https://drive.google.com/file/d/1HFEGO6L-ZFKjU_0bz0UP1ZzOIHCs4HFE/view?usp=sharing",
      abstractBookJpeg: "https://drive.google.com/file/d/1MIcIUcIfGQOGLrUO5u2TYhk-0rOV6Bpj/view?usp=sharing",
      flyerPdf: "https://drive.google.com/file/d/1LOZuC16YSe0EeAII_iNLgUvrMMssStAu/view?usp=sharing",
      flyerJpeg1: "https://drive.google.com/file/d/19Dd2qOrh8WrXv0543FtGZFNnswnb-7Ry/view?usp=sharing",
      flyerJpeg2: "https://drive.google.com/file/d/150VjQhdLDr1R8u9eMjS-5ooTLCz_9RfL/view?usp=sharing",
      bannerPdf: "https://drive.google.com/file/d/1ij0ZFv1SQ_wsMiiPl4LGZ1wa0VtzjdL0/view?usp=drive_link",
      bannerJpeg: "https://drive.google.com/file/d/1BJ5IYQug78ucdTggHcC9h57QPwkmwvcz/view?usp=drive_link",
      photoCollages: []
    }
  },
  {
    id: "conf-3",
    title: "Expert Talk on \"IPR in the Age of AI: Ownership, Ethics, and Innovation\"",
    date: "2025-04-26",
    fromDate: "26/04/2025",
    toDate: "26/04/2025",
    type: "National",
    convenorName: null,
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "GIET University, Odisha, Gunupur",
    coSponsoredBy: null,
    numberOfParticipants: 200,
    tags: ["IPR", "AI", "Ethics & Innovation"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1CnNwLwaaDvJ5B41Np4Y45ACtiCW5Bv9P/view?usp=drive_link"
      ]
    }
  },
  {
    id: "conf-4",
    title: "Utkal Divas Celebration on Importance of Deep Tech Innovations in Fostering Women’s Health and Hygiene",
    date: "2025-04-01",
    fromDate: "01/04/2025",
    toDate: "01/04/2025",
    type: "National",
    convenorName: "Dr. Manoja Das",
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["Utkal Divas", "Deep Tech", "Women's Health & Hygiene"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1w5JGq7oeuN5da1dgDeui3z_aPFa_FqkJ/view?usp=sharing",
        "https://drive.google.com/file/d/1dm9ufP3KUgZOtH9A6MoBRgOaBDzQqFhw/view?usp=sharing",
        "https://drive.google.com/file/d/1_qwecUy2pllnjx2P6AJdPOFXzN5MHydN/view?usp=sharing",
        "https://drive.google.com/file/d/1d_uSC6Hv4u_Pm2Dwq0nMPmpbyOgCalHH/view?usp=drive_link"
      ]
    }
  },
  {
    id: "conf-5",
    title: "Global Bio-India 2024 Roadshow",
    date: "2024-08-23",
    fromDate: "23/08/2024",
    toDate: "23/08/2024",
    type: "National",
    convenorName: "Dr. Manoja Das",
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["Global Bio-India", "Roadshow", "Biotech Hub"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1-BU0taLFOULaZs3TQ5T6XlQfxWFt63D8/view?usp=sharing",
        "https://drive.google.com/file/d/1mn2L42n0Ehb4IP3tKAdIvY44Wj3JGCvu/view?usp=sharing",
        "https://drive.google.com/file/d/1MA_8QpyrlVBreVlVYVp-CmC9eXUfTtqn/view?usp=drive_link"
      ]
    }
  },
  {
    id: "conf-6",
    title: "Industry-Academic Meet (MSME CONCLAVE)",
    date: null,
    fromDate: null,
    toDate: null,
    type: null,
    convenorName: null,
    organizedBy: "MSME Development and Facilitation Office-Cuttack (MSME-DFO-CUTTAK), District Industries Centre (DIC-RAYAGADA)",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["MSME Conclave", "Industry-Academia", "Rayagada"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1NmUc-nxlrbdPh2P_S4CtRvbrogx6mJ08/view?usp=drive_link"
      ]
    }
  },
  {
    id: "conf-7",
    title: "Celebrated World Intellectual Property Day on IPs and SDGs: Building common future with innovations and creativity and role of HEIs",
    date: null,
    fromDate: null,
    toDate: null,
    type: null,
    convenorName: null,
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["Intellectual Property Day", "IPs & SDGs", "HEIs Role"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1bgpJVBhhpnwBt3zuTjRbWX2aalTvE6Xr/view?usp=sharing",
        "https://drive.google.com/file/d/1YjFn1dqgeN2J4AxaZRTXd2-aYvf39u_i/view?usp=sharing"
      ]
    }
  },
  {
    id: "conf-8",
    title: "New Ideas and Opportunities for Food Processing Sector in Odisha",
    date: null,
    fromDate: null,
    toDate: null,
    type: null,
    convenorName: null,
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: 200,
    tags: ["Food Processing", "Odisha Opportunities", "Food Tech"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1pEAzJ1-KqXHe4Wtq_zDHKO3j0Yz2U5z1/view?usp=sharing"
      ]
    }
  },
  {
    id: "conf-9",
    title: "Recent Advances in Biosciences and Biotechnology (RABB-2022)",
    date: null,
    fromDate: null,
    toDate: null,
    type: null,
    convenorName: null,
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    coSponsoredBy: "GIET University, Odisha, Gunupur",
    numberOfParticipants: null,
    tags: ["Biosciences", "Biotechnology", "RABB-2022"],
    links: {
      souvenirPdf: null,
      souvenirJpeg: null,
      abstractBookPdf: null,
      abstractBookJpeg: null,
      flyerPdf: null,
      flyerJpeg1: null,
      flyerJpeg2: null,
      bannerPdf: null,
      bannerJpeg: null,
      photoCollages: [
        "https://drive.google.com/file/d/1eave-Ew5kXy1AU6zuh2x5ue9mpMPV7ej/view?usp=sharing"
      ]
    }
  }
];

export const workshopEvents: EventItem[] = [
  {
    id: "ws-1",
    title: "Hands-on Workshop on 3D Bioprinting",
    date: "2024-02-10",
    description: "Intensive hands-on workshop covering 3D bioprinting techniques, bioink preparation, and tissue engineering applications.",
    image: "/event/6.webp",
    type: "organized",
    tags: ["3D Printing", "Bioprinting", "Tissue Engineering"],
    venue: "GIET Bio-Innovation Lab",
    participants: 45,
  },
  {
    id: "ws-2",
    title: "Research Methodology & Scientific Writing Workshop",
    date: "2024-05-18",
    description: "A comprehensive workshop on research methodology, data analysis, and scientific manuscript writing for students and early-career researchers.",
    image: "/event/7.webp",
    type: "organized",
    tags: ["Research Methodology", "Scientific Writing"],
    venue: "GIET University",
    participants: 80,
  },
  {
    id: "ws-3",
    title: "Product Development & Prototyping Workshop",
    date: "2024-08-25",
    description: "Workshop on transforming research ideas into viable products — from concept validation to MVP development and market testing.",
    image: "/event/8.webp",
    type: "organized",
    tags: ["Product Development", "Prototyping", "MVP"],
    venue: "E-YUVA Innovation Hub",
    participants: 60,
  },
];

export const hackathonEvents: EventItem[] = [
  {
    id: "hack-1",
    title: "Food For Life",
    date: "2025-09-19",
    fromDate: "19/09/2025",
    toDate: "20/09/2025",
    type: "organized",
    theme: "Food Innovation",
    numberOfParticipants: 180,
    tags: ["Hackathon", "Food Innovation", "Food For Life"],
    links: {
      posterPdf: "https://drive.google.com/file/d/1QB2mymGme3JSxqQu3tmB8nsbi01pt39C/view?usp=sharing",
      posterJpeg: "https://drive.google.com/file/d/1bAlMoiljiZzkeLczqZ4F0B6tLTppbSEk/view?usp=share_link",
      photoCollage1: "https://drive.google.com/file/d/1nOlzanb7igMPew0PdCYmJbah6vTcRBun/view?usp=share_link",
      photoCollage2: "https://drive.google.com/file/d/1K3rDq8qk9j1K39RjWAL9C8RclnqTDtfM/view?usp=sharing",
      photoCollage3: "https://drive.google.com/file/d/1GO43pRrXLLkbyqTe1Vh8TLe3jlD-mDfX/view?usp=sharing",
      souvenir: null
    }
  }
];

export const webinarEvents: EventItem[] = [
  {
    id: "web-1",
    title: "Master the Art of Design with SolidWorks! 5-Day Intensive Hands-on Workshop on 3D/2D Modelling, Design & Printing",
    date: "2025-02-22",
    fromDate: "22/02/2025",
    toDate: "26/02/2025",
    type: "organized",
    tags: ["SolidWorks", "3D Modelling", "Design & Printing"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/1a6agtDta-j-THxPbrFZ_nTdagbAeOy-i/view?usp=sharing",
      posterJpeg: "https://drive.google.com/file/d/18nFOx7TkNutY4FTB6C_Odlb7PVEV24lc/view?usp=sharing",
      photoCollage1: "https://drive.google.com/file/d/1y3FnSRt2xkaBovz6xZZXFV6A5p2rElKm/view?usp=drive_link",
      photoCollage2: null
    }
  },
  {
    id: "web-2",
    title: "5-day hands-on training program in liquid fertilizer formulation and production",
    date: "2024-04-25",
    fromDate: "25/04/2024",
    toDate: "29/04/2024",
    type: "organized",
    tags: ["Training", "Liquid Fertilizer", "Formulation & Production"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/10SeHcB03vHhphRj49STwAVTikzNbGyyM/view?usp=sharing",
      posterJpeg: "https://drive.google.com/file/d/138eNhIen2SZG5YX9W27oUVxP_2fOa8nd/view?usp=drive_link",
      photoCollage1: "https://drive.google.com/file/d/1WKxuvjqdRFEVS8OZT27hFVCWwLuKlN_X/view?usp=drive_link",
      photoCollage2: null
    }
  },
  {
    id: "web-3",
    title: "Hnads on Traing Program on Bee Cultivation, Honey Extraction and Procesing",
    date: "2025-06-17",
    fromDate: "17/06/2025",
    toDate: "21/06/2025",
    type: "organized",
    tags: ["Bee Cultivation", "Honey Extraction", "Processing"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: null,
      posterJpeg: null,
      photoCollage1: "https://drive.google.com/file/d/10-qTkVuwxwOuazgyfF-tToqNXyb5AkIu/view?usp=sharing",
      photoCollage2: null
    }
  },
  {
    id: "web-4",
    title: "Hands on traing program on Industrial Fermenter Operation",
    date: "2023-09-01",
    fromDate: "01/09/2023",
    toDate: "05/09/2023",
    type: "organized",
    tags: ["Fermenter Operation", "Industrial Biotech"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/1NZBFQAD789qnFwEJvu754oYL0j0xf0o7/view?usp=sharing",
      posterJpeg: "https://drive.google.com/file/d/1BIxPH_53o49R1mlLCY13ieeSQ1kktosN/view?usp=drive_link",
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-5",
    title: "Hands on traing program on Industrial Fermenter Operation",
    date: "2024-04-26",
    fromDate: "26/04/2024",
    toDate: "28/04/2024",
    type: "organized",
    tags: ["Fermenter Operation", "Industrial Training"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/1itvdrWHyJvxbDNAw-8FBLJoYYJ9Q0A9M/view?usp=sharing",
      posterJpeg: null,
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-6",
    title: "Hands on traing program on Immunological Techniques",
    date: "2023-03-31",
    fromDate: "31/03/2023",
    toDate: "04/04/2023",
    type: "organized",
    tags: ["Immunology", "Techniques", "Wet Lab"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/1jyHlpX-wzrKomHTtIYI7RObTLSnCI1mC/view?usp=sharing",
      posterJpeg: null,
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-7",
    title: "Internet of thing: project based practical training",
    date: "2023-04-17",
    fromDate: "17/04/2023",
    toDate: "16/05/2023",
    type: "organized",
    tags: ["IoT", "Practical Training", "Project Based"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: "https://drive.google.com/file/d/18D8zINdPbNN4PjD3JeoQCGiSVE4KEIDL/view?usp=sharing",
      posterJpeg: "https://drive.google.com/file/d/10H07V-YuMxOPcECWeexYDhvgbxzOZWOn/view?usp=sharing",
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-8",
    title: "“C Programing and IOT”",
    date: "2022-11-07",
    fromDate: "7/11/2022",
    toDate: "06/12/2022",
    type: "organized",
    tags: ["C Programming", "IoT"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "Biotechnology Industry Research Assistance Council, Department of Biotechnology, Govt. of India (DBT-BIRAC)",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: null,
      posterJpeg: null,
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-9",
    title: "“Raising awareness on Urban air quality, climate change, health and e-Resilience”",
    date: "2022-11-17",
    fromDate: "17/11/2022",
    toDate: "17/11/2022",
    type: "organized",
    tags: ["Awareness", "Climate Change", "Urban Health", "e-Resilience"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "DST & Univeristy of Delhi",
    hostedBy: "GIET University, Odisha, Gunupur",
    links: {
      posterPdf: null,
      posterJpeg: null,
      photoCollage1: null,
      photoCollage2: null
    }
  },
  {
    id: "web-10",
    title: "“Entrepreneurship Development Program”",
    date: "2024-09-19",
    fromDate: "19/09/2024",
    toDate: "19/09/2024",
    type: "organized",
    tags: ["EDP", "Entrepreneurship", "Business"],
    organizedBy: "BIRAC E-YUVA Centre, Department of Biotechnology",
    sponsoredBy: "MSME & GIET University, Odisha, Gunupur",
    hostedBy: "Department of MBA, GIET University, Odisha, Gunupur",
    links: {
      posterPdf: null,
      posterJpeg: null,
      photoCollage1: null,
      photoCollage2: null
    }
  }
];

export const fdpEvents: EventItem[] = [
  {
    id: "fdp-1",
    title: "FDP on Bioinformatics & Computational Biology",
    date: "2024-03-01",
    description: "A 5-day Faculty Development Program covering bioinformatics tools, computational approaches to biology, and data-driven research methods.",
    image: "/event/15.webp",
    type: "organized",
    tags: ["FDP", "Bioinformatics", "Computational Biology"],
    venue: "GIET University",
    participants: 40,
  },
  {
    id: "fdp-2",
    title: "FDP on Innovation & Entrepreneurship in Academia",
    date: "2024-07-12",
    description: "Faculty Development Program focused on fostering innovation culture, IP management, and entrepreneurial thinking in academic institutions.",
    image: "/event/16.webp",
    type: "organized",
    tags: ["FDP", "Innovation", "Entrepreneurship"],
    venue: "GIET University",
    participants: 55,
  },
];

export const startupBootcampEvents: EventItem[] = [
  {
    id: "sb-1",
    title: "BioStartup Bootcamp — Cohort 1",
    date: "2024-02-20",
    description: "A 2-week intensive bootcamp for aspiring biotech entrepreneurs covering business model canvas, funding strategies, pitching, and MVP development.",
    image: "/event/17.webp",
    type: "organized",
    tags: ["Startup", "Bootcamp", "Entrepreneurship"],
    venue: "E-YUVA Incubation Center",
    participants: 30,
  },
  {
    id: "sb-2",
    title: "Startup Bootcamp — From Lab to Market",
    date: "2024-09-05",
    description: "An intensive bootcamp guiding researchers through the journey of commercializing their biotech innovations — from lab bench to market launch.",
    image: "/event/18.webp",
    type: "organized",
    tags: ["Commercialization", "Startup", "Market Entry"],
    venue: "GIET Innovation Hub",
    participants: 35,
  },
];

// ── Community Outreach Events (COE) ──

export const coeEndUserEvents: EventItem[] = [
  {
    id: "coe-eu-1",
    title: "Empowering Young Innovators at SCSC, Puri: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Orientation", "Puri", "Biotech Entrepreneurship"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "Orientation program to highlight entrepreneurship opportunities, funding schemes, and mentoring resources available under BIRAC E-YUVA for prospective biotech innovators."
  },
  {
    id: "coe-eu-2",
    title: "Empowering Young Innovators at GIET University, Gunupur: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Orientation", "GIETU", "Outreach"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "On-campus awareness and orientation session at GIET University to guide science and engineering students on translation of project ideas into viable prototypes."
  },
  {
    id: "coe-eu-3",
    title: "Empowering Young Innovators at Midnapore Coolege, West Bengal: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Orientation", "Midnapore", "Outreach"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "Outreach seminar at Midnapore College, West Bengal to foster biotech entrepreneurship and build collaboration channels with regional academic institutions."
  },
  {
    id: "coe-eu-4",
    title: "Empowering Young Innovators at P.K. College, West Bengal: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Orientation", "Contai", "West Bengal"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "Orientation drive at P.K. College, Contai to nurture biotechnology ideas and support fellows through the national E-YUVA scheme framework."
  },
  {
    id: "coe-eu-5",
    title: "Empowering Young Innovators at Bhadrak Autonomas College, Odisha: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Orientation", "Bhadrak", "Outreach"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "State-wide outreach program at Bhadrak Autonomous College to scout and mentor innovative biotech ideas in rural and semi-urban hubs of Odisha.",
    links: {
      poster: "https://drive.google.com/file/d/1fu5N3Wqz1SNIoDzpjaTdVsTez9yj3aal/view?usp=sharing",
      eventPhotoCollage1: "https://drive.google.com/file/d/1cFupYFZTWfbYDj9FnMfGDe9-vNlZiM4d/view?usp=sharing",
      eventPhotoCollage2: "https://drive.google.com/file/d/1G4jxjHXm5rZEEB1NeATEdPH2cX_gxUhI/view?usp=sharing"
    }
  }
];

export const coeSiteVisitEvents: EventItem[] = [
  {
    id: "coe-sv-1",
    title: "Empowering Young Innovators at CHANDIGARH UNIVERSITY,Uttar Pradesh: Orientation on BIRAC E-YUVA Scheme for Future Biotech Entrepreneurs",
    date: null,
    type: "organized",
    tags: ["Outreach", "Chandigarh University", "Uttar Pradesh"],
    organizedBy: "BIRAC E-YUVA Centre, GIET University",
    coOrganizedBy: null,
    description: "National orientation and roadshow program visited Chandigarh University to engage student teams and coordinate incubation pathways."
  }
];

export const coeIndustryEvents: EventItem[] = [
  {
    id: "coe-ind-1",
    title: "Roundtable Discussion on Bridging the Gap Between Industry & Academia",
    date: "2025-12-12",
    type: "organized",
    tags: ["Roundtable", "Industry-Academia", "Synergy"],
    organizedBy: "ACIC GIET University Foundation",
    coOrganizedBy: "BIRAC E-YUVA Centre, GIET University",
    description: "A high-level dialogue aligning curriculum, applied biotechnology research, industrial constraints, and commercial validation mechanisms to accelerate technology transfer.",
    venue: "GIET University Boardroom"
  }
];

export const coeGrassrootEvents: EventItem[] = [
  {
    id: "coe-gr-1",
    title: "Harnessing Indigenous Tribal Knowledge: Identifying Barriers to Mainstreaming and Scale-Up",
    date: null,
    type: "organized",
    tags: ["Grassroot", "Tribal Knowledge", "Intellectual Property"],
    organizedBy: "ACIC GIET University Foundation",
    coOrganizedBy: "BIRAC E-YUVA Centre, GIET University",
    description: "Interactive expert panel identifying systemic, legal, and operational challenges in documenting, validating, protecting, and commercializing tribal medicinal and crop formulations."
  }
];

// ── National Outreach Events Participated ──

export const nationalOutreachEvents: EventItem[] = [
  {
    id: "nat-1",
    title: "BIRAC Innovators Meet — New Delhi",
    date: "2024-02-15",
    description: "Participated in the annual BIRAC Innovators Meet showcasing E-YUVA center achievements, fellowship outcomes, and startup success stories.",
    image: "/event/30.webp",
    type: "participated",
    tags: ["BIRAC", "National Meet", "Innovation"],
    venue: "India Habitat Centre, New Delhi",
    participants: 500,
  },
  {
    id: "nat-2",
    title: "National Bio-Entrepreneurship Competition (NBEC)",
    date: "2024-04-20",
    description: "E-YUVA fellows participated in NBEC presenting biotech startup ideas and competing for national recognition and seed funding.",
    image: "/event/31.webp",
    type: "participated",
    tags: ["NBEC", "Competition", "Entrepreneurship"],
    venue: "C-CAMP, Bangalore",
    participants: 300,
  },
  {
    id: "nat-3",
    title: "India International Science Festival (IISF)",
    date: "2024-08-10",
    description: "Showcased research and innovation projects at India's premier science festival — engaging with scientists, policymakers, and industry leaders.",
    image: "/event/32.webp",
    type: "participated",
    tags: ["IISF", "Science Festival", "National"],
    venue: "Faridabad, Haryana",
    participants: 1000,
  },
  {
    id: "nat-4",
    title: "DST National Workshop on Technology Transfer",
    date: "2024-10-05",
    description: "Participated in DST's national workshop on technology transfer mechanisms, IP commercialization, and academia-industry partnerships.",
    image: "/event/33.webp",
    type: "participated",
    tags: ["DST", "Technology Transfer", "Workshop"],
    venue: "IIT Delhi",
    participants: 200,
  },
];

// ── Lookup maps for dynamic routing ──

export const translationalCategoryMap: Record<string, { title: string; events: EventItem[]; description: string }> = {
  conferences: {
    title: "Conferences",
    description: "National and international conferences on biotechnology, healthcare, agriculture, and bioeconomy.",
    events: conferenceEvents,
  },
  workshops: {
    title: "Workshops",
    description: "Hands-on technical training, research methodology, and product development workshops.",
    events: workshopEvents,
  },
  hackathons: {
    title: "Hackathons",
    description: "Innovation challenges, product design competitions, and problem-solving events.",
    events: hackathonEvents,
  },
  webinars: {
    title: "Webinars",
    description: "Expert-led webinars featuring industry leaders, scientists, and entrepreneurs.",
    events: webinarEvents,
  },
  fdp: {
    title: "FDP Conducted",
    description: "Faculty Development Programs on bioinformatics, innovation, entrepreneurship, and emerging technologies.",
    events: fdpEvents,
  },
  "startup-bootcamps": {
    title: "Startup Bootcamps",
    description: "Intensive bootcamps for aspiring biotech entrepreneurs — from idea validation to market launch.",
    events: startupBootcampEvents,
  },
};

export const coeCategoryMap: Record<string, { title: string; events: EventItem[]; description: string }> = {
  "end-user-interaction": {
    title: "End User Interaction",
    description: "Farmer interactions, community need assessments, and stakeholder consultations.",
    events: coeEndUserEvents,
  },
  "site-visits": {
    title: "Site Visits",
    description: "Visits to rural communities, industry sites, and technology demonstration centres.",
    events: coeSiteVisitEvents,
  },
  "industry-exposure": {
    title: "Industry Exposure",
    description: "Industrial visits, startup ecosystem tours, manufacturing exposure, and product development immersion.",
    events: coeIndustryEvents,
  },
  "grassroot-innovation": {
    title: "Grassroot Innovation",
    description: "Local problem identification, indigenous technology documentation, innovation mapping, and community pilot testing.",
    events: coeGrassrootEvents,
  },
};

export const nationalOutreachMap: Record<string, { title: string; events: EventItem[]; description: string }> = {
  "all": {
    title: "National Outreach Events",
    description: "National-level events, meets, competitions, and festivals participated in by E-YUVA Center.",
    events: nationalOutreachEvents,
  },
};
