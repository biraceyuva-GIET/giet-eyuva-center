"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

// 1. Startup Success Stories dataset (6 real startups)
const STARTUPS_DATA = [
  {
    startupName: "Biomat Innovations Private Limited",
    founders: ["Dr. Avishek Pahari", "Dr. Sudipta Maity"],
    yearOfInception: "2023",
    registrationNumber: "043407",
    cin: "U72100OD2023PTC043407",
    dpiitCertificateNumber: "DIPP143282",
    startupOdishaCertificateNumber: "OSP/SP/01962",
    incubationDetails: "ACIC GIET University Foundation, IIT KGP, Pusa Krishi",
    registeredAddress: "GIETU CENTER, GUNUPUR RAYAGADA, 765022, Odisha",
    contactNumber: "72052 32542",
    productDetails: "Biomat Innovations is an agri-biotechnology startup focused on developing sustainable and innovative solutions for agriculture and healthcare. The company’s primary project involves the development of an advanced seed coating technology designed to enhance the shelf life of seeds and fertilisers while improving crop productivity. The coating formulation enables the incorporation of beneficial microorganisms, biofertilizers, and plant growth-promoting microbes directly onto the seed surface. This technology protects seeds from environmental stress, improves germination rates, enhances nutrient utilisation, and supports sustainable farming practices. The project has received a grant of ₹5 lakh under the ICAR PUSA KRISHI program, recognising its potential to address key challenges in modern agriculture. In addition to agricultural innovations, Biomat Innovations is actively working on a healthcare project aimed at the early detection of oral cancer. The startup is developing a novel fluorescent diagnostic gum that can serve as a simple, non-invasive, and cost-effective screening tool. The gum contains specially designed fluorescent compounds that interact with abnormal oral tissues, enabling rapid visualisation of potential cancerous lesions at an early stage. This innovative approach has the potential to improve early diagnosis, increase treatment success rates, and reduce healthcare costs, particularly in resource-limited settings. The project has been supported with a grant of ₹15 lakh from the MSME Hackathon 2.0 scheme. Through these projects, Biomat Innovations aims to create impactful technologies that contribute to agricultural sustainability, public health improvement, and socio-economic development while addressing real-world challenges through science-driven innovation.",
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/1hFqmQ_Qw3S8uIK-MaKEErfAw7b72nH3p/view?usp=drive_link",
      dpiitCertificatePdf: "https://drive.google.com/file/d/1hFqmQ_Qw3S8uIK-MaKEErfAw7b72nH3p/view?usp=drive_link",
      dpiitCertificateJpeg: null,
      startupOdishaCertificatePdf: "https://drive.google.com/file/d/1XUjFTOZupSWXh6J4_qEg_BSP70oO3EI8/view?usp=drive_link",
      startupOdishaCertificateJpeg: "https://drive.google.com/file/d/1wbFbJmksKSulbApww01FjjUOOFLWZGze/view?usp=drive_link",
      incubationProof: "https://drive.google.com/file/d/1J939Gul9JEeEeJVSHX6Q476FDj-vIgFk/view?usp=drive_link",
      externalFundProof1: "https://drive.google.com/file/d/1XXDiLQtSkLRrWDNtxZKJb-e4Gni1BFQU/view?usp=drive_link",
      externalFundProof2: "https://drive.google.com/file/d/1GMqenJ7OdGqlSY27n_voP7DX3JUc-7YK/view?usp=drive_link"
    }
  },
  {
    startupName: "Biomom Organics Private limited",
    founders: ["Dr. Priti Krishna Majhi"],
    yearOfInception: "2024",
    registrationNumber: "045706",
    cin: "U10790OD2024PTC045706",
    dpiitCertificateNumber: null,
    startupOdishaCertificateNumber: null,
    incubationDetails: null,
    registeredAddress: "GIETU CENTER, GUNUPUR RAYAGADA, 765022, Odisha",
    contactNumber: "82600 67617",
    productDetails: "Biomom Organics Private Limited is a nutrition-focused company dedicated to developing scientifically designed health supplements. The company primarily works on innovative nutritional solutions formulated to support vulnerable and special-needs populations. Our flagship product is a nutrient-dense health supplement developed using carefully selected microalgae such as Spirulina and Ulva, blended with nutritious millets. This unique formulation is designed for elderly individuals and ICU patients who experience difficulty in consuming solid food due to medical or age-related conditions. The supplement is easy to consume, highly digestible, and rich in essential nutrients, including proteins, vitamins, minerals, and bioactive compounds. It helps in improving energy levels, supporting metabolic functions, and promoting faster recovery during periods of illness or physical weakness. By combining natural, sustainable microalgae with traditional millets, Biomom Organics aims to deliver a safe, effective, and accessible nutritional solution that supports overall health, recovery, and quality of life. Our mission is to bridge nutritional gaps through innovation while maintaining high standards of quality, safety, and scientific integrity.",
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/10AGbVpwh2yNFftrLDYxWuhg-KoSVIgWy/view?usp=drive_link",
      dpiitCertificatePdf: null,
      dpiitCertificateJpeg: null,
      startupOdishaCertificatePdf: null,
      startupOdishaCertificateJpeg: null,
      incubationProof: null,
      externalFundProof1: null,
      externalFundProof2: null
    }
  },
  {
    startupName: "Echra Innovations Private Limited",
    founders: ["Mr. Mahendra Kalyan Senapati", "Mr. Palla Hemanth Kumar"],
    yearOfInception: "2024",
    registrationNumber: "046267",
    cin: "U13996OD2024PTC046267",
    dpiitCertificateNumber: "DIPP177658",
    startupOdishaCertificateNumber: "OSP/SP/02025",
    incubationDetails: null,
    registeredAddress: "Mausi Maa Sahi, N. Patna, Narayanpatna, Koraput, 764014, Odisha",
    contactNumber: "7656 960 907",
    productDetails: "Echra Innovation is a purpose-driven enterprise dedicated to advancing women’s health and menstrual hygiene through sustainable and environmentally responsible solutions. The company develops and provides eco-friendly sanitary napkins designed to be safe, effective, and comfortable while significantly reducing environmental impact. Echra Innovation’s sanitary pads are fully plant-based and feature a three-layer absorption system that ensures reliable protection and hygiene during use. A key innovation lies in the use of water hyacinth, an invasive aquatic plant that severely pollutes ponds and water bodies. By repurposing this problematic plant into a valuable raw material, Echra Innovation addresses both environmental pollution and menstrual health challenges simultaneously. The product, from the inner absorbent layers to the outer packaging, is 100% biodegradable, ensuring minimal waste and promoting a circular, green economy. To support safe and discreet disposal, each pack includes a biodegradable disposal cover for used pads, enhancing hygiene and convenience for users. Through its sustainable materials, thoughtful design, and commitment to women’s well-being, Echra Innovation aims to provide accessible, safe, and environmentally conscious menstrual hygiene products, empowering women while contributing positively to environmental conservation and public health.",
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/1MrNRDnc0sIgjF8VLBsRnQblgjx6NRCtP/view?usp=drive_link",
      dpiitCertificatePdf: null,
      dpiitCertificateJpeg: "https://drive.google.com/file/d/1-b1OKd-2zZG-UH_PG9g9vpKVtvW7CfyQ/view?usp=drive_link",
      startupOdishaCertificatePdf: null,
      startupOdishaCertificateJpeg: "https://drive.google.com/file/d/1_hC8CO57mcs35bGsjTZ7po8j5JuL1AXi/view?usp=drive_link",
      incubationProof: null,
      externalFundProof1: null,
      externalFundProof2: null
    }
  },
  {
    startupName: "Navgyan Innovations Private Limited",
    founders: ["PADMINI MISHRA", "Dr. TUSARAKANTA PANDA"],
    yearOfInception: "2025",
    registrationNumber: "048485",
    cin: "U62091OD2025PTC048485",
    dpiitCertificateNumber: "DIPP197777",
    startupOdishaCertificateNumber: "OSP/SP/02229",
    incubationDetails: null,
    registeredAddress: "NILACHAKRA NAGAR, GUNUPUR, Gunupur, Rayagada- 765022, Orissa",
    contactNumber: "90406 93050",
    productDetails: null,
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/1HPYUd54y0Ou2jtN9mc7s3qwaOoxsOOya/view?usp=drive_link",
      dpiitCertificatePdf: null,
      dpiitCertificateJpeg: "https://drive.google.com/file/d/1rb_O9NfOgR0lLPDGMbWdncx9I1MksVeJ/view?usp=drive_link",
      startupOdishaCertificatePdf: "https://drive.google.com/file/d/1eDYTMorQfj5hutp7cuEVKZ60Wb56NnpO/view?usp=drive_link",
      startupOdishaCertificateJpeg: null,
      incubationProof: null,
      externalFundProof1: "https://drive.google.com/file/d/1mzJKFDFhYthcoHXmXdAVFewIPaud-ObR/view?usp=drive_link",
      externalFundProof2: null
    }
  },
  {
    startupName: "MOSQUITS SOLUTIONS Pvt. Ltd.",
    founders: ["ANKISHA PRADHAN", "ESETY ANSIP KUMAR", "BISWAJIT ACHARYA"],
    yearOfInception: "2025",
    registrationNumber: "049151",
    cin: "U32900OD2025PTC049151",
    dpiitCertificateNumber: "DIPP208578",
    startupOdishaCertificateNumber: null,
    incubationDetails: null,
    registeredAddress: "Flat No: A/302, 3rd Floor Kokila Paradise, Khandagiri, Bhubaneswar, Khorda, 751030, Odisha",
    contactNumber: "97761 21819",
    productDetails: "Our mosquito control solutions are designed to provide safe, sustainable, and effective protection against mosquito-borne diseases. We focus on eco-friendly approaches that reduce mosquito populations without relying on harmful chemical insecticides. Our system works by targeting mosquitoes at different stages of their life cycle. It helps control adult mosquito density while also supporting efforts to prevent breeding in stagnant water sources. The products are developed using environmentally safe components, ensuring they are suitable for households, public spaces, schools, and community environments. Designed to be cost-effective, easy to use, and scalable, our solutions aim to provide long-term mosquito management while minimizing environmental impact. Through innovation and scientific research, we strive to offer practical alternatives that promote healthier and safer communities.",
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/13aQp902Al0EdJGs2Fb0b2eAK8qqtuaCR/view?usp=drive_link",
      dpiitCertificatePdf: null,
      dpiitCertificateJpeg: "https://drive.google.com/file/d/1xoqTIMTg_qaKyp1DzXtaZ72iczh6HT2T/view?usp=drive_link",
      startupOdishaCertificatePdf: null,
      startupOdishaCertificateJpeg: null,
      incubationProof: null,
      externalFundProof1: null,
      externalFundProof2: null
    }
  },
  {
    startupName: "Meili Innovations Private Limited",
    founders: ["Dr. Golmei Langangmeilu", "Anjali Panigrahi"],
    yearOfInception: "2025",
    registrationNumber: "015430",
    cin: "U20231MN2025PTC015430",
    dpiitCertificateNumber: null,
    startupOdishaCertificateNumber: null,
    incubationDetails: null,
    registeredAddress: "Sangaiprou Kabui Village, Sangaiprou Mamang, Sangaiprou, imphal west- 795140, Manipur",
    contactNumber: "7788907742",
    productDetails: "Meili Innovations is dedicated to developing high-quality, sustainable solutions for agriculture and aquaculture through innovative waste valorization approaches. The company is currently producing three types of biochar derived from rice husk, coconut shell, and cotton stem, abundant agricultural residues available in the Gunupur region. These biochars are utilized to develop a biochar-zeolite composite that functions as a highly efficient super adsorbent for ammonia removal in aquaculture systems. This innovation addresses a major challenge faced by large scale aquaculture operations, namely the frequent need for water replacement in culture tanks and ponds. By effectively reducing ammonia levels, the composite enhances water quality and improves overall productivity. Importantly, the spent composite can be repurposed as a soil amendment, serving as a rich nitrogen source that enhances soil fertility and supports sustainable agricultural practices. The prototype is currently undergoing rigorous testing, with commercialization planned in the near future. In addition, Meili Innovations has developed a biochar-based biopesticide formulated with fungal spore suspension for targeted pest management. This product utilizes Beauveria bassiana spores to effectively control pests such as mites, whiteflies, and caterpillars and also enhances the water holding capacity and fertility of the soil. Field trials are ongoing, and commercialization will follow successful validation.",
    links: {
      incorporationCertificate: "https://drive.google.com/file/d/1P75eCVnE6dcUBTTUV20nalFC2PAjNNus/view?usp=drive_link",
      dpiitCertificatePdf: null,
      dpiitCertificateJpeg: null,
      startupOdishaCertificatePdf: null,
      startupOdishaCertificateJpeg: null,
      incubationProof: null,
      externalFundProof1: null,
      externalFundProof2: null
    }
  }
];

// 2. Intellectual Property & Patents dataset (13 real items)
const IP_DATA = [
  {
    title: "Passively Actuated Self-Flowing Beehive System",
    applicationNumber: "202531129093",
    filingDate: "19/12/2025",
    publicationDate: "09/01/2026",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Waiting for Examination Request",
    applicant: "Biomat Innovations Private Limited",
    innovators: [
      "Mr. Ankit Meher",
      "Ms. Trushna Rani Nahak",
      "Ms. Priyambada Pr. Behera",
      "Ms. Ipsita Ratha",
      "Dr. Sudipta Maity",
      "Dr. Swastik Behera"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1vTtgbL8ud1tgs3p9kYshA4NqYH5lHdhX/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1vTtgbL8ud1tgs3p9kYshA4NqYH5lHdhX/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "Bridgework: A Web-Based System for Skill Credit Tracking And Industry-Academia Collaborative Project Management",
    applicationNumber: "202531079823",
    filingDate: "22/08/2025",
    publicationDate: "29/08/2025",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Navgyan Innovations Private Limited",
    innovators: [
      "Dr. Tusarakanta Panda",
      "Dr. Sudipta Maity",
      "Bhawani Sahu",
      "Shibaprasad Swain",
      "Padmini Mishra"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1KKQTEDg06ZbZPEPajNdYBSUVJd-skQ8O/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1E8appA2ue2yqTSvc4cDZPZaVx5_rUTbG/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "A Method for Producing A Food Supplement from Microalgae for Elderly And ICU Patients",
    applicationNumber: "202431049820",
    filingDate: "28/06/2024",
    publicationDate: "05/07/2024",
    grantNumber: "582085",
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Dr. Pritikrishna Majhi, Dr. Subhendu Chakroborty, Dr. Sudipta Maity, Er. Suraj Kumar Samal, Dr. Shashi Pandey, Prof. (Dr) Ajay Kumar Yadav, Dr. Arundhati Barik, Dr. Siba Soren",
    innovators: [
      "Dr. Pritikrishna Majhi",
      "Dr. Subhendu Chakroborty",
      "Dr. Sudipta Maity",
      "Er. Suraj Kumar Samal",
      "Dr. Shashi Pandey",
      "Prof. (Dr) Ajay Kumar Yadav",
      "Dr. Arundhati Barik",
      "Dr. Siba Soren"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1PuZKMYDatvWnfOVx6rT9ARDTyqBFykKO/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1tttY_FvYvEoT9aTdK_rDtIu7qjV9blE1/view?usp=share_link",
      certificate: "https://drive.google.com/file/d/15gr-JFpV7xeyVTdOD3x_7PTjoRS0WBik/view?usp=drive_link"
    }
  },
  {
    title: "Multilayer Soap with Encapsulated Layered Fragrance and Enhanced Lathering Properties",
    applicationNumber: "202531040178",
    filingDate: "25/04/2025",
    publicationDate: "02/05/2025",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Waiting for Examination Request",
    applicant: "Gandhi Institute Of Engineering and Technology University",
    innovators: [
      "Anwesa Jena",
      "Anjali Panigrahi",
      "Dr. Sudipta Maity"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1g2xfNPBv3PDTe1oi3yKeNpi-0DWnwlTL/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1xzjGeTPhX_1sQQA1XftndgyQy0xfiD1G/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "A Synthetic Antiviral Formulation for Lumpy Skin Disease Virus",
    applicationNumber: "202331062736",
    filingDate: "19/09/2023",
    publicationDate: "27/09/2024",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Samarpita Dash",
    innovators: [
      "SUDIPTA MAITY",
      "MANOJ DASH",
      "Samarpita Dash",
      "SOMA CHATTOPADHAYAY"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1LxwlKC-p6zUTBuAE-sGeZv8bjERnX9Bl/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1WkKQhQ_a4GQifCFdaUemO1tgmn75nB2g/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "A Multi-Function Concrete Hatchery for Fish Egg Incubation",
    applicationNumber: "472831-001",
    filingDate: "09/09/2025",
    publicationDate: null,
    grantNumber: null,
    ipType: "Design",
    status: "Published & Under Examination",
    applicant: "Biomat Innovations Private Limited",
    innovators: [],
    links: {
      pdf: null,
      jpeg: null,
      certificate: null
    }
  },
  {
    title: "Conceptual framework of Centralization of Electronic Health Record System",
    applicationNumber: "1703/2024-CO/L",
    filingDate: "15/01/2024",
    publicationDate: "21/03/2024",
    grantNumber: null,
    ipType: "Copyright",
    status: "Published & Under Examination",
    applicant: "Anaiska Ray",
    innovators: [
      "TOOBA KHAN",
      "ANAISKA RAY",
      "AADITI BANSOD",
      "DR. SONALI CHOUDHARI",
      "SATWIK MOHANTY",
      "DR. PUNIT FULZELE",
      "DR. ABHAY GAIDHANE",
      "SUDIPTA MAITY"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/17b2_Q_DVgAqorHwEJIkVk5n7DwnOAY_l/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1gF6p1KXU11wWMM8azCOPLcUWE-AHhAhh/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "Nature Bloom Biopesticide",
    applicationNumber: "202431014420",
    filingDate: "27/02/2024",
    publicationDate: "31/05/2024",
    grantNumber: "569136",
    ipType: "Utility",
    status: "Granted",
    applicant: "Rinny Swain, Dr. Mamata Behera, Suvam Roy, Yugesh Kumar Negi, Subhankar Panda, Farin Bano, Tasmia Nausad",
    innovators: [
      "Suvam Roy",
      "Yugesh Kumar Negi",
      "Subhankar Panda",
      "Farin Bano",
      "Tasmia Nausad"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1ECrIS8InA4xtVGs4uv29jYM9YfVDF4C3/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1sfTDmsctEs1jGSvzEMss-DDOCi2vws4p/view?usp=share_link",
      certificate: "https://drive.google.com/file/d/12yXp8-jLC02W8Re7JDeaTssDX1WX2Vu5/view?usp=drive_link"
    }
  },
  {
    title: "Production of biodegradable polymer film with metal-metal oxide nanocomposite as additive",
    applicationNumber: "202431014683",
    filingDate: "28/02/2024",
    publicationDate: null,
    grantNumber: "550981",
    ipType: "Utility",
    status: "Granted",
    applicant: "Mr. Subham Sekhar Panda, Mr. Pankaj Lochan Sarangi, Mr. Avnish Sharma, Mr. Suvam Sekhar Rout, Mr. Ankush Amrit Sahu, Dr. Shyama Prasad Mohanty, Dr. (Mrs) Aswathy N R",
    innovators: [
      "Mr. Subham Sekhar Panda",
      "Mr. Pankaj Lochan Sarangi",
      "Mr. Avnish Sharma",
      "Mr. Suvam Sekhar Rout",
      "Mr. Ankush Amrit Sahu",
      "Dr. Shyama Prasad Mohanty",
      "Dr. (Mrs) Aswathy N R"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/12tQDM2ktZ60mLHDkEiiDgtvYKTYPfA5v/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1ACf6PRAnHIwAqF2r94tRwBdhuRVNE58l/view?usp=sharing",
      certificate: "https://drive.google.com/file/d/1Ge1_THXkQjl7wCZVjugbimo-sBQ1fEn4/view?usp=drive_link"
    }
  },
  {
    title: "Green Sanitary Napkin",
    applicationNumber: "202431001803",
    filingDate: "10/01/2024",
    publicationDate: "26/01/2024",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Dr. Mamata Behera",
    innovators: [
      "Mahendra Kalyan Senapati",
      "Nazreen Begum",
      "Lisha Chandra",
      "D. Gangadhar",
      "Palla Hemant Kumar"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1CLMveQIN0rgxG6pmJeuDnFKh0X_3YmwF/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1yNq2n5AfGqDeiBzHBMjBJTiXmFiRGAl5/view?usp=share_link",
      certificate: null
    }
  },
  {
    title: "An Improved Insect Trapping Device",
    applicationNumber: "202531061999",
    filingDate: "29/06/2025",
    publicationDate: null,
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Mosquits Solutions Private Limited",
    innovators: [
      "Ankisha Pradhan",
      "Esety Ansip Kumar",
      "Biswajit acharya"
    ],
    links: {
      pdf: null,
      jpeg: null,
      certificate: null
    }
  },
  {
    title: "Non-Invasive Blood Glucose Monitoring using CO3O4 Nanoparticle-Coated Optical Fiber Sensor",
    applicationNumber: "202531050732",
    filingDate: "26/06/2025",
    publicationDate: "20/06/2025",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Gandhi Institute Of Engineering and Technology University",
    innovators: [
      "Bhawani Sahu",
      "Ramkrushna Sahu",
      "Priyanshu Kumar Patro",
      "Kumar Prasannajit Sahu",
      "Anurag Das"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/1ZjVsrjC7g62zqc-9RxP9g70ZaHTNMZwb/view?usp=drive_link",
      jpeg: "https://drive.google.com/file/d/1PNpXzrDqDoDrsn5VkULBELe-pwKruTq1/view?usp=shari",
      certificate: null
    }
  },
  {
    title: "BRAINVIZ: A SYSTEM AND METHOD FOR AI- BASED 3D RECONSTRUCTION FROM 2D MRI BRAIN SLICES",
    applicationNumber: "202531085616",
    filingDate: "09/09/2025",
    publicationDate: "12/09/2025",
    grantNumber: null,
    ipType: "Utility",
    status: "Published & Under Examination",
    applicant: "Navgyan Innovations Private Limited",
    innovators: [
      "Dr. Tusarakanta Panda",
      "Dr. Sudipta Maity",
      "Bhawani Sahu",
      "Shibaprasad Swain",
      "Padmini Mishra"
    ],
    links: {
      pdf: "https://drive.google.com/file/d/15JOdinvvnhQ4h35toXYu3ZTEps7n2zx/view?usp=sharing",
      jpeg: null,
      certificate: null
    }
  }
];

// 4. Memorandums of Understanding (MoUs) dataset (9 real items)
const MOU_DATA = [
  {
    instituteName: "Prante Health Solution",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: "01/01/2025",
    expiryDate: "31/12/2027",
    links: {
      mouPdf: "https://drive.google.com/file/d/1JXONNprc9Y5k4MYeJofED25IcLS5U1ml/view?usp=drive_link",
      mouJpeg: "https://drive.google.com/file/d/1qY5TkCDLqtDZ7nYsdLl-jluO_DzHlE9F/view?usp=sharing"
    }
  },
  {
    instituteName: "FABA",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: null,
      mouJpeg: "https://drive.google.com/file/d/114HIp6Xcv7dTg34LbFJiCGTIlqoUdhGk/view?usp=sharing"
    }
  },
  {
    instituteName: "CSIR-IICT Hydrabad",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1fctfRDEP8UFaV4e7cGNH8aqlGhROGQEQ/view?usp=drive_link",
      mouJpeg: null
    }
  },
  {
    instituteName: "Vikram Dev (A) University",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1pQgQJ3JQjJIRFqSmty8NVzNfoLXddN8M/view?usp=drive_link",
      mouJpeg: null
    }
  },
  {
    instituteName: "ACIC",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1YGhmdfRcS877eQDycOUCLurcv0V2Rjcv/view?usp=drive_link",
      mouJpeg: null
    }
  },
  {
    instituteName: "AMTZ",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1Rfp65xGd4T4tRJ1IKk_868seyZNp9bOb/view?usp=drive_link",
      mouJpeg: null
    }
  },
  {
    instituteName: "Institute of Life science, Bhubaneswar",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1uUF0In3KAd5a9KkuCjShzZhuiuwDqWC7/view?usp=drive_link",
      mouJpeg: null
    }
  },
  {
    instituteName: "INDQ",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: null,
    expiryDate: null,
    links: {
      mouPdf: "https://drive.google.com/file/d/1-DVU7H54Vp1F6F2RJ3MCzlmZu0Dmuubs/view?usp=drive_link",
      mouJpeg: "https://drive.google.com/file/d/1TkxGKojG2Qauo0xs3e411nQSdthCmdLT/view?usp=drive_link"
    }
  },
  {
    instituteName: "Sichern Healthcare Private Limited",
    departmentOrCenter: "BIRAC E-YUVA Centre, Department of Biotechnology, GIET Univesity",
    dateOfSigningMou: "01/01/2025",
    expiryDate: "31/12/2027",
    links: {
      mouPdf: "https://drive.google.com/file/d/1pm-yXMo8HAoT5EiuG-zKWK0LA_zeN6Pw/view?usp=drive_link",
      mouJpeg: "https://drive.google.com/file/d/1cBLPEgnakag-lXd6k01_re-yTC6aG7X7/view?usp=drive_link"
    }
  }
];

// 3. Publications dataset (16 real papers)
const PUBLICATIONS_DATA = [
  {
    title: "Fluorescent pigmented Microbial Polymer Nanoparticles: an Approach for Replacement of Bioimaging Agent in the Drug Delivery System",
    authorship: "Co Author",
    numberOfCoAuthors: 2,
    yearOfPublication: 2023,
    journalOrConferenceOrPublisher: "Applied Biochemistry and Microbiology",
    type: "International",
    volumeIssuePage: "Volume 59, pages 378–383",
    doi: "https://doi.org/10.1134/S0003683823030171",
    isbnOrIssn: "1608-3024",
    isPeerReviewed: true,
    impactFactor: 1.1,
    researchScore: 4.5,
    links: {
      paperPdf: "https://drive.google.com/file/d/1i9sa8vtUcyOk4wxs804h2fMhYlkDhm_c/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Reclamation of chromium contaminated soil by native Cr(VI) reducing and PHA accumulating Bacillus aryabhattai CTSI-07",
    authorship: "Co Author",
    numberOfCoAuthors: 8,
    yearOfPublication: 2024,
    journalOrConferenceOrPublisher: "International Microbiology",
    type: "International",
    volumeIssuePage: "Volume 27, pages 731–742, (2024)",
    doi: "https://doi.org/10.1007/s10123-023-00421-6",
    isbnOrIssn: "1618-1905",
    isPeerReviewed: true,
    impactFactor: 2.76,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1sqARx6vngczY48xtZlTIDMrh69lzRz9W/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "PHAs production by facultative anaerobic bacteria Bacillus cereus FM5 through submerged and solid state fermentation under anoxic condition",
    authorship: "Co Author",
    numberOfCoAuthors: 6,
    yearOfPublication: 2023,
    journalOrConferenceOrPublisher: "Antonie van Leeuwenhoek",
    type: "International",
    volumeIssuePage: "Volume 116, pages 521–529, (2023)",
    doi: "https://doi.org/10.1007/s10482-023-01825-0",
    isbnOrIssn: "1572-9699",
    isPeerReviewed: true,
    impactFactor: 2.36,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1VFhaCiv248PsEgY3G5FZdvAaCWvNZkWh/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Supplementation of nano selenium (SeNPs) improved growth, immunity, antioxidant enzyme activity, and selenium retention in broiler chicken during summer season",
    authorship: "Co Author",
    numberOfCoAuthors: 4,
    yearOfPublication: 2023,
    journalOrConferenceOrPublisher: "Tropical Animal Health and Production",
    type: "International",
    volumeIssuePage: "Volume 55, article number 260, (2023)",
    doi: "https://doi.org/10.1007/s11250-023-03678-1",
    isbnOrIssn: "1573-7438",
    isPeerReviewed: true,
    impactFactor: 1.8,
    researchScore: 4.5,
    links: {
      paperPdf: "https://drive.google.com/file/d/13llt8jdaWmrUFI6bTYQ-eKHpf3AXhTMx/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Evaluation of PHAs production by mixed bacterial culture under submerged fermentation",
    authorship: "Co Author",
    numberOfCoAuthors: 6,
    yearOfPublication: 2023,
    journalOrConferenceOrPublisher: "Biologia",
    type: "International",
    volumeIssuePage: "Volume 78, pages 895–902",
    doi: "https://doi.org/10.1007/s11756-022-01302-5",
    isbnOrIssn: "1336-9563",
    isPeerReviewed: true,
    impactFactor: 1.6,
    researchScore: 4.5,
    links: {
      paperPdf: "https://drive.google.com/file/d/1h65cRixfn9dprlCrdr6KFZ7mTzssxB-G/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Impact of nano Selenium on biochemical, antioxidant, immunological and histological parameters of broiler chickens during rainy season",
    authorship: "Co Author",
    numberOfCoAuthors: 5,
    yearOfPublication: 2026,
    journalOrConferenceOrPublisher: "Indian Journal of Animal Sciences",
    type: "International",
    volumeIssuePage: "Vol. 95 No. 9 (2025)",
    doi: "https://doi.org/10.56093/ijans.v95i9.168921",
    isbnOrIssn: "0367-8318",
    isPeerReviewed: true,
    impactFactor: 0.33,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/16jwMy7LSkjPO0lVLTg2tQFVKfbCFBBcG/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Biodiversity of Ansupa Lake in Odisha & Need for Conservation",
    authorship: "Co Author",
    numberOfCoAuthors: 2,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "International Journal of Innovative Research in Technology",
    type: "International",
    volumeIssuePage: "Volume 11 Issue 12, Page 6630-6637",
    doi: null,
    isbnOrIssn: "2349-6002",
    isPeerReviewed: true,
    impactFactor: 2.4,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1ArScu4R-MchYnRcB1HS_2EDCwj7QSrQA/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Genotypic Profiling and Tailored Therapeutic Strategies for Enhanced Management of Endodontic Infections",
    authorship: "Co Author",
    numberOfCoAuthors: 3,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "The Bioscan",
    type: "International",
    volumeIssuePage: "Vol. 20 No. Supplement 2 (2025)",
    doi: "https://doi.org/10.63001/tbs.2025.v20.i02.S2.pp635641",
    isbnOrIssn: "0973-7049",
    isPeerReviewed: true,
    impactFactor: 2.4,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/18bzm-jZgHk22NqKuZrWQBemwmkEWwvrF/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Identification of Bacterial Communities in Endodontic Infections: A Feature Selection Approach for Omics Data Analysis",
    authorship: "Co Author",
    numberOfCoAuthors: 3,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "Journal of Neonatal Surgery",
    type: "International",
    volumeIssuePage: "Vol 14 Issue 20S (2025)",
    doi: null,
    isbnOrIssn: "2226-0439",
    isPeerReviewed: true,
    impactFactor: 2.4,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1fsXGJCfhcAvfympWrOxoHMQS7cZSKqe8/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Genotypic Identification of Endodontic Bacteria Isolated from Berhampur, Odisha",
    authorship: "Co Author",
    numberOfCoAuthors: 2,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "Journal of the International Clinical Dental Research Organisation",
    type: "International",
    volumeIssuePage: "Volume 16(1):p 76-79, Jan–Jun 2024",
    doi: "http://doi.org/10.4103/jicdro.jicdro_82_23",
    isbnOrIssn: "2231-0754",
    isPeerReviewed: true,
    impactFactor: 0.13,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1L7Rgej723G5oRSTJH3IGLf_bhzbB-98i/view?usp=drive_link",
      paperJpeg: null
    }
  },
  {
    title: "Genotypic Profiling and Tailored Therapeutic Strategies for Enhanced Management of Endodontic Infections",
    authorship: "Co Author",
    numberOfCoAuthors: 2,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "International Journal of Innovative Research and Practices",
    type: "International",
    volumeIssuePage: "Vol.13, Issue 10, Oct 2025",
    doi: null,
    isbnOrIssn: "2321-2926",
    isPeerReviewed: true,
    impactFactor: 2.4,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1XCtdHbXE2khxOFzOgBQV81q3TDMRVIFv/view?usp=sharing",
      paperJpeg: null
    }
  },
  {
    title: "Advanced value-added bioproducts from microalgae",
    authorship: "Author",
    numberOfCoAuthors: 5,
    yearOfPublication: 2024,
    journalOrConferenceOrPublisher: "Algal Systems for Resource Recovery from Waste and Wastewater (Edited by Piet N. L. Lens; Amitap Khandelwal), IWA Publishing, Integrated Environmental Technology Book Series",
    type: "International",
    volumeIssuePage: "Chapter 10: Advanced value-added bioproducts from microalgae",
    doi: "https://doi.org/10.2166/9781789063547_0183",
    isbnOrIssn: "9781789063547",
    isPeerReviewed: true,
    impactFactor: null,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1aaFte2XKbj5swRm-FPjD5yBbD8lc59mH/view?usp=drive_link",
      paperJpeg: null
    }
  },
  {
    title: "Volumetric Reconstruction of the Human Brain: A Deep Learning Approach for Converting 2D Brain MRI Slices to 3D Models",
    authorship: "Author",
    numberOfCoAuthors: null,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity",
    type: "International",
    volumeIssuePage: null,
    doi: "https://10.0.4.85/iSSSC66652.2025.11388532",
    isbnOrIssn: "66652 - 2025 (PRT)",
    isPeerReviewed: true,
    impactFactor: null,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1UWGatagMTUKXedkViSadNHQMWTNnvb4z/view?usp=drive_link",
      paperJpeg: null
    }
  },
  {
    title: "Impact of Cu-TiO2 Nanocomposite on the Physical, Mechanical, and Antimicrobial Properties of Polylactic Acid/Thermoplastic Starch Films",
    authorship: "Author",
    numberOfCoAuthors: 6,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: "Polymer Engineering & Science, Society of Plastics Engineers (Online wiley)",
    type: "International",
    volumeIssuePage: null,
    doi: "https://doi.org/10.1002/pen.7030",
    isbnOrIssn: null,
    isPeerReviewed: true,
    impactFactor: 43.5,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1_ZC22xBv4_Y_X7AnAubeAAKFvSfwaCr9/view?usp=drive_link",
      paperJpeg: null
    }
  },
  {
    title: "Impact of synthesis methodology on the antibacterial efficacy of Ag/TiO₂ nanocomposites",
    authorship: "Author",
    numberOfCoAuthors: 4,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: null,
    type: "International",
    volumeIssuePage: null,
    doi: "https://doi.org/10.1016/j.nexres.2025.100757",
    isbnOrIssn: null,
    isPeerReviewed: true,
    impactFactor: null,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1Hbv8YIrAqv7KXoWSL7pKbrlNbFnYvs8r/view?usp=drive_link",
      paperJpeg: null
    }
  },
  {
    title: "Investigation on the antimicrobial activity of Cu–TiO2 nanocomposites synthesized by a facile approach",
    authorship: "Author",
    numberOfCoAuthors: 6,
    yearOfPublication: 2025,
    journalOrConferenceOrPublisher: null,
    type: "International",
    volumeIssuePage: null,
    doi: "https://doi.org/10.1016/j.nexres.2024.100114",
    isbnOrIssn: null,
    isPeerReviewed: true,
    impactFactor: null,
    researchScore: null,
    links: {
      paperPdf: "https://drive.google.com/file/d/1cRqxnRXobqNOw3SZ-_zt-JIC7ozMIX5B/view?usp=drive_link",
      paperJpeg: null
    }
  }
];

const KNOWLEDGE_DATA = {
  "startup-success-stories": {
    category: "Startups",
    title: "Startup Success Stories",
    readTime: "5 min read",
    bannerImage: "/impact/startup.webp",
    summary: "E-YUVA incubation support has successfully translated biotechnology research into market-ready ventures, establishing registered companies, securing DPIIT recognitions, and raising seed funds.",
    items: STARTUPS_DATA
  },
  "mou": {
    category: "Collaborations",
    title: "Memorandums of Understanding (MoUs)",
    readTime: "4 min read",
    bannerImage: "/impact/collabs.webp",
    summary: "Strengthening our translational research ecosystem through formal agreements with leading national research institutes, hospitals, and testing laboratories.",
    items: MOU_DATA
  },
  "publications": {
    category: "Research",
    title: "Scientific Publications",
    readTime: "8 min read",
    bannerImage: "/impact/publication.webp",
    summary: "Showcasing peer-reviewed research papers and academic works published by our fellows and investigators in reputed high-impact biotechnology journals.",
    items: PUBLICATIONS_DATA
  },
  "ip": {
    category: "Patents",
    title: "Intellectual Property & Patents",
    readTime: "6 min read",
    bannerImage: "/impact/patent.webp",
    summary: "Protecting novel biotechnology methods, chemical formulations, and software architectures engineered by our innovators.",
    items: IP_DATA
  },
  "awards": {
    category: "Recognition",
    title: "Awards & Accolades",
    readTime: "5 min read",
    bannerImage: "/impact/award.webp",
    summary: "Celebrating the national and regional honors received by our research fellows, coordinators, and student innovators.",
    items: [
      {
        name: "National Bio-Entrepreneurship Competition (NBEC) Award",
        body: "CCAMP & BIRAC, Govt. of India",
        recipient: "Biomom Organics Pvt. Ltd. (Dr. Pritikrishna Majhi)",
        year: "2024",
        details: "Honored with the NBEC Gold Award under the Healthcare category for outstanding social impact and business viability."
      },
      {
        name: "BIRAC Innovation Fellowship Excellence Award",
        body: "Biotechnology Industry Research Assistance Council (BIRAC)",
        recipient: "Dr. Sudipta Maity (Centre Coordinator) & Fellow Team",
        year: "2023",
        details: "Recognized as a Top-Performing E-YUVA Centre for ecosystem facilitation, mentoring infrastructure, and high conversion rate of fellow projects."
      },
      {
        name: "Odisha Youth Innovation Award",
        body: "Department of Science & Technology, Govt. of Odisha",
        recipient: "E-YUVA Student Innovator Group (CIPET Team)",
        year: "2023",
        details: "Awarded to student innovators for their research and prototype development of antibacterial polymeric food packaging materials using sustainable components."
      }
    ]
  }
};

type KnowledgeSlug = keyof typeof KNOWLEDGE_DATA;

export default function KnowledgeArticlePage() {
  const { slug } = useParams() as { slug: string };
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [ipTypeFilter, setIpTypeFilter] = useState("All");
  const [startupSearch, setStartupSearch] = useState("");
  const [pubSearch, setPubSearch] = useState("");
  const [pubTypeFilter, setPubTypeFilter] = useState("All"); // Authorship filter: "All", "Author", "Co Author"
  const [pubYearFilter, setPubYearFilter] = useState("All"); // Year filter
  const [mouSearch, setMouSearch] = useState("");

  const article = KNOWLEDGE_DATA[slug as KnowledgeSlug];

  if (!article) notFound();

  // Handle IP type filtering
  const filteredIpItems = slug === "ip"
    ? ipTypeFilter === "All"
      ? article.items
      : article.items.filter((item: any) => item.ipType === ipTypeFilter)
    : [];

  // Handle Startup Search
  const filteredStartupItems = slug === "startup-success-stories"
    ? article.items.filter((item: any) =>
        item.startupName.toLowerCase().includes(startupSearch.toLowerCase()) ||
        item.founders.some((f: string) => f.toLowerCase().includes(startupSearch.toLowerCase())) ||
        (item.productDetails && item.productDetails.toLowerCase().includes(startupSearch.toLowerCase()))
      )
    : [];

  // Handle MoU Search
  const filteredMouItems = slug === "mou"
    ? article.items.filter((item: any) =>
        item.instituteName.toLowerCase().includes(mouSearch.toLowerCase()) ||
        item.departmentOrCenter.toLowerCase().includes(mouSearch.toLowerCase())
      )
    : [];

  // Handle Publications Search & Filters
  const filteredPubItems = slug === "publications"
    ? article.items.filter((item: any) => {
        // Search filter
        const matchQuery =
          item.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
          (item.journalOrConferenceOrPublisher &&
            item.journalOrConferenceOrPublisher.toLowerCase().includes(pubSearch.toLowerCase()));

        // Authorship filter
        const matchAuthorship =
          pubTypeFilter === "All" ? true : item.authorship === pubTypeFilter;

        // Year filter
        const matchYear =
          pubYearFilter === "All"
            ? true
            : item.yearOfPublication.toString() === pubYearFilter;

        return matchQuery && matchAuthorship && matchYear;
      })
    : [];

  // Helper to render details card for an IP item
  const renderIpCard = (item: any, idx: number) => {
    return (
      <div
        key={idx}
        className="rounded-2xl p-6 border transition-all duration-300"
        style={{
          background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
          borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.06)",
          boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(30,58,95,0.04)"
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <span
            className="w-fit text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{
              background: item.status.includes("Granted") ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)",
              color: item.status.includes("Granted") ? "#10b981" : "#f59e0b"
            }}
          >
            {item.status}
          </span>
          <span className="text-[12px] font-bold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
            Filing Date: {item.filingDate}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-extrabold leading-snug mb-3" style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}>
          {item.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4 text-[13px] border-b pb-4"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}
        >
          <div>
            <span className="font-semibold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>App Number:</span>{" "}
            <span className="font-bold" style={{ color: isDark ? "#cbd5e1" : "#334155" }}>{item.applicationNumber}</span>
          </div>
          {item.grantNumber && (
            <div>
              <span className="font-semibold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>Grant Number:</span>{" "}
              <span className="font-bold text-emerald-500">{item.grantNumber}</span>
            </div>
          )}
          <div>
            <span className="font-semibold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>IP Type:</span>{" "}
            <span className="font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[11px]">{item.ipType}</span>
          </div>
          {item.publicationDate && (
            <div>
              <span className="font-semibold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>Published:</span>{" "}
              <span style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.publicationDate}</span>
            </div>
          )}
          <div className="sm:col-span-2 mt-1">
            <span className="font-semibold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>Applicant / Startup:</span>{" "}
            <span className="italic font-bold text-amber-500">{item.applicant}</span>
          </div>
        </div>

        {item.innovators && item.innovators.length > 0 && (
          <div className="mb-4">
            <div className="text-[12px] font-bold uppercase tracking-wider text-amber-500 mb-2">Innovators</div>
            <div className="flex flex-wrap gap-1.5">
              {item.innovators.map((name: string, idx: number) => (
                <span
                  key={idx}
                  className="text-[12px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(30,58,95,0.04)",
                    color: isDark ? "#cbd5e1" : "#4b5563"
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Drive Links */}
        {(item.links.pdf || item.links.jpeg || item.links.certificate) && (
          <div className="flex flex-wrap gap-2.5 pt-2">
            {item.links.pdf && (
              <a
                href={item.links.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-red-500/10 text-red-500 hover:bg-red-500/20"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>PDF Document</span>
              </a>
            )}
            {item.links.jpeg && (
              <a
                href={item.links.jpeg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Image Preview</span>
              </a>
            )}
            {item.links.certificate && (
              <a
                href={item.links.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
                <span>View Certificate</span>
              </a>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <main
      className="min-h-screen pt-[72px] transition-colors duration-300 pb-20"
      style={{ background: isDark ? "#0a1628" : "#f8fafc" }}
    >
      {/* Dynamic ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-16">
        {/* Navigation back */}
        <Link
          href="/#people"
          className="inline-flex items-center gap-2 text-sm font-bold no-underline transition-colors duration-200 mb-8"
          style={{ color: "#f59e0b" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Ecosystem
        </Link>

        {/* Hero Metadata */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span
            className="rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider"
            style={{
              background: isDark ? "rgba(245,158,11,0.12)" : "rgba(245,158,11,0.15)",
              color: "#f59e0b"
            }}
          >
            {article.category}
          </span>
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-bold"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(30,58,95,0.08)",
              color: isDark ? "#cbd5e1" : "#4b5563",
              background: isDark ? "rgba(255,255,255,0.03)" : "rgba(30,58,95,0.03)"
            }}
          >
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6 transition-colors duration-300"
          style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}
        >
          {article.title}
        </h1>

        {/* Summary Description */}
        <p
          className="text-[16px] md:text-[18px] leading-[1.8] mb-12 transition-colors duration-300 font-medium"
          style={{ color: isDark ? "#94a3b8" : "#4b5563" }}
        >
          {article.summary}
        </p>

        {/* Dynamic content rendering based on slug */}
        <div className="flex flex-col gap-6">
          {slug === "startup-success-stories" && (
            <div className="grid grid-cols-1 gap-8">
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search startups by name, founders, or product details..."
                  value={startupSearch}
                  onChange={(e) => setStartupSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(30,58,95,0.1)",
                    color: isDark ? "#ffffff" : "#1e3a5f"
                  }}
                />
                <svg
                  className="absolute left-4 top-3.5 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ color: isDark ? "#64748b" : "#9ca3af" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {filteredStartupItems.map((item: any, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border transition-all duration-300 flex flex-col gap-5"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.06)",
                    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(30,58,95,0.04)"
                  }}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4"
                    style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}>
                        {item.startupName}
                      </h3>
                      <div className="text-[12px] font-semibold text-amber-500 mt-1">
                        Inception: {item.yearOfInception} | Reg No: {item.registrationNumber}
                      </div>
                    </div>
                    {item.dpiitCertificateNumber && (
                      <span
                        className="w-fit text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          background: "rgba(59,130,246,0.12)",
                          color: "#3b82f6"
                        }}
                      >
                        DPIIT: {item.dpiitCertificateNumber}
                      </span>
                    )}
                  </div>

                  {/* Founders & Incubation & Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
                    <div className="flex flex-col gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-amber-500 mb-1">Founders</div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.founders.map((founder: string, idx: number) => (
                            <span
                              key={idx}
                              className="font-bold px-2.5 py-1 rounded-full text-[12px]"
                              style={{
                                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(30,58,95,0.04)",
                                color: isDark ? "#cbd5e1" : "#4b5563"
                              }}
                            >
                              {founder}
                            </span>
                          ))}
                        </div>
                      </div>

                      {item.startupOdishaCertificateNumber && (
                        <div>
                          <span className="font-semibold text-slate-400">Startup Odisha No:</span>{" "}
                          <span className="font-bold" style={{ color: isDark ? "#e2e8f0" : "#334155" }}>{item.startupOdishaCertificateNumber}</span>
                        </div>
                      )}

                      {item.incubationDetails && (
                        <div>
                          <span className="font-semibold text-slate-400">Incubated At:</span>{" "}
                          <span className="font-bold" style={{ color: isDark ? "#e2e8f0" : "#334155" }}>{item.incubationDetails}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5 md:border-l md:pl-6" style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}>
                      <div>
                        <span className="font-semibold text-slate-400">CIN:</span>{" "}
                        <span className="font-mono font-bold" style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.cin}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-400">Address:</span>{" "}
                        <span style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.registeredAddress}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-400">Contact:</span>{" "}
                        <span className="font-semibold text-amber-500">{item.contactNumber}</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Description */}
                  {item.productDetails && (
                    <div
                      className="p-4 rounded-xl text-[13.5px] leading-[1.7]"
                      style={{
                        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(30,58,95,0.02)",
                        color: isDark ? "#cbd5e1" : "#4b5563",
                        borderLeft: "3px solid #f59e0b"
                      }}
                    >
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-500 mb-1.5">Product & Innovation Profile</div>
                      {item.productDetails}
                    </div>
                  )}

                  {/* Document & Proof Verification Links */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}>
                    {item.links.incorporationCertificate && (
                      <a
                        href={item.links.incorporationCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Incorporation Certificate</span>
                      </a>
                    )}

                    {(item.links.dpiitCertificatePdf || item.links.dpiitCertificateJpeg) && (
                      <a
                        href={item.links.dpiitCertificatePdf || item.links.dpiitCertificateJpeg || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                        </svg>
                        <span>DPIIT Certificate</span>
                      </a>
                    )}

                    {(item.links.startupOdishaCertificatePdf || item.links.startupOdishaCertificateJpeg) && (
                      <a
                        href={item.links.startupOdishaCertificatePdf || item.links.startupOdishaCertificateJpeg || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                        </svg>
                        <span>Startup Odisha Cert</span>
                      </a>
                    )}

                    {item.links.incubationProof && (
                      <a
                        href={item.links.incubationProof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Incubation Proof</span>
                      </a>
                    )}

                    {item.links.externalFundProof1 && (
                      <a
                        href={item.links.externalFundProof1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-teal-500/10 text-teal-500 hover:bg-teal-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1M8 11h8" />
                        </svg>
                        <span>Funding Grant 1</span>
                      </a>
                    )}

                    {item.links.externalFundProof2 && (
                      <a
                        href={item.links.externalFundProof2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-teal-500/10 text-teal-500 hover:bg-teal-500/20"
                      >
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1M8 11h8" />
                        </svg>
                        <span>Funding Grant 2</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {filteredStartupItems.length === 0 && (
                <div className="text-center py-8" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
                  No startups matched your search filter.
                </div>
              )}
            </div>
          )}

          {slug === "mou" && (
            <div className="grid grid-cols-1 gap-6">
              {/* Search Bar for MoUs */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search MoUs by institute name or department..."
                  value={mouSearch}
                  onChange={(e) => setMouSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(30,58,95,0.1)",
                    color: isDark ? "#ffffff" : "#1e3a5f"
                  }}
                />
                <svg
                  className="absolute left-4 top-3.5 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ color: isDark ? "#64748b" : "#9ca3af" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {filteredMouItems.map((item: any, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border transition-all duration-300 flex flex-col gap-4"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.06)",
                    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(30,58,95,0.04)"
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-3"
                    style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}
                  >
                    <h3 className="text-lg md:text-xl font-extrabold" style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}>
                      {item.instituteName}
                    </h3>
                    {(item.dateOfSigningMou || item.expiryDate) ? (
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-500 uppercase tracking-wide shrink-0"
                      >
                        {item.dateOfSigningMou ? `Signed: ${item.dateOfSigningMou}` : ""}
                        {item.expiryDate ? ` | Expires: ${item.expiryDate}` : ""}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wide shrink-0">
                        Active Collaboration
                      </span>
                    )}
                  </div>

                  <div className="text-[13px]">
                    <span className="font-semibold text-slate-400">Department/Center:</span>{" "}
                    <span style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.departmentOrCenter}</span>
                  </div>

                  {/* Document & Proof Verification Links */}
                  {(item.links.mouPdf || item.links.mouJpeg) && (
                    <div className="flex flex-wrap gap-2.5 pt-2 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}>
                      {item.links.mouPdf && (
                        <a
                          href={item.links.mouPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-red-500/10 text-red-500 hover:bg-red-500/20"
                        >
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>PDF Document</span>
                        </a>
                      )}
                      {item.links.mouJpeg && (
                        <a
                          href={item.links.mouJpeg}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                        >
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Image Preview</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {filteredMouItems.length === 0 && (
                <div className="text-center py-8" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
                  No MoUs matched your search criteria.
                </div>
              )}
            </div>
          )}

          {slug === "publications" && (
            <div className="grid grid-cols-1 gap-6">
              {/* Publication Search & Filters */}
              <div className="flex flex-col gap-4 mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search publications by title or journal..."
                    value={pubSearch}
                    onChange={(e) => setPubSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
                    style={{
                      background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(30,58,95,0.1)",
                      color: isDark ? "#ffffff" : "#1e3a5f"
                    }}
                  />
                  <svg
                    className="absolute left-4 top-3.5 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ color: isDark ? "#64748b" : "#9ca3af" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  {/* Authorship Filter */}
                  <div className="flex items-center gap-2">
                    <span style={{ color: isDark ? "#64748b" : "#9ca3af" }}>Authorship:</span>
                    <div className="flex gap-1 bg-black/10 p-0.5 rounded-lg">
                      {["All", "Author", "Co Author"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPubTypeFilter(type)}
                          className={`px-3 py-1 rounded-md transition-colors ${pubTypeFilter === type ? "bg-amber-500 text-[#0a1628]" : (isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900")}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Year Filter */}
                  <div className="flex items-center gap-2">
                    <span style={{ color: isDark ? "#64748b" : "#9ca3af" }}>Year:</span>
                    <div className="flex gap-1 bg-black/10 p-0.5 rounded-lg">
                      {["All", "2026", "2025", "2024", "2023"].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setPubYearFilter(yr)}
                          className={`px-3 py-1 rounded-md transition-colors ${pubYearFilter === yr ? "bg-amber-500 text-[#0a1628]" : (isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900")}`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {filteredPubItems.map((item: any, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border transition-all duration-300 flex flex-col gap-4"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.06)",
                    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(30,58,95,0.04)"
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b pb-3"
                    style={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(30,58,95,0.05)" }}
                  >
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {item.journalOrConferenceOrPublisher ? (
                        <span
                          className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                          style={{
                            background: "rgba(59,130,246,0.12)",
                            color: "#3b82f6"
                          }}
                        >
                          {item.journalOrConferenceOrPublisher}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold italic text-slate-500">Not Specified Journal</span>
                      )}
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 uppercase tracking-wide">
                        {item.type}
                      </span>
                      {item.isPeerReviewed && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 uppercase tracking-wide">
                          Peer Reviewed
                        </span>
                      )}
                    </div>
                    <span className="text-[12px] font-bold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
                      Published: {item.yearOfPublication}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold leading-snug" style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}>
                    {item.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-slate-400">
                    <div>
                      <span className="font-semibold">Authorship:</span>{" "}
                      <span className="font-bold text-amber-500">{item.authorship}</span>{" "}
                      {item.numberOfCoAuthors !== null && (
                        <span>({item.numberOfCoAuthors} Co-authors)</span>
                      )}
                    </div>
                    {item.volumeIssuePage && (
                      <div className="sm:col-span-2">
                        <span className="font-semibold">Volume / Issue:</span>{" "}
                        <span style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.volumeIssuePage}</span>
                      </div>
                    )}
                    {item.isbnOrIssn && (
                      <div>
                        <span className="font-semibold">ISSN / ISBN:</span>{" "}
                        <span className="font-mono" style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>{item.isbnOrIssn}</span>
                      </div>
                    )}
                    {item.impactFactor && (
                      <div>
                        <span className="font-semibold">Impact Factor:</span>{" "}
                        <span className="font-bold text-emerald-500">{item.impactFactor}</span>
                      </div>
                    )}
                    {item.researchScore && (
                      <div>
                        <span className="font-semibold">Research Score:</span>{" "}
                        <span className="font-bold text-blue-500">{item.researchScore}</span>
                      </div>
                    )}
                  </div>

                  {item.doi && (
                    <div className="text-[12px]">
                      <span className="font-semibold text-slate-400">DOI:</span>{" "}
                      <a
                        href={item.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-amber-500 hover:text-amber-400 no-underline break-all"
                      >
                        {item.doi}
                      </a>
                    </div>
                  )}

                  {item.links.paperPdf && (
                    <div className="pt-2">
                      <a
                        href={item.links.paperPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold no-underline transition-colors bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>PDF Document</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {filteredPubItems.length === 0 && (
                <div className="text-center py-8" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
                  No publications matched your search criteria.
                </div>
              )}
            </div>
          )}

          {slug === "ip" && (
            <div className="grid grid-cols-1 gap-6">
              {/* Type Filtering Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["All", "Utility", "Design", "Copyright"].map((type) => {
                  const count = type === "All"
                    ? article.items.length
                    : article.items.filter((item: any) => item.ipType === type).length;
                  const isActive = ipTypeFilter === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setIpTypeFilter(type)}
                      className="rounded-full px-4 py-1.5 text-[12px] font-bold transition-all duration-300 border focus:outline-none"
                      style={{
                        background: isActive
                          ? "linear-gradient(135deg, #f59e0b, #d97706)"
                          : isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(30,58,95,0.05)",
                        borderColor: isActive
                          ? "transparent"
                          : isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(30,58,95,0.08)",
                        color: isActive
                          ? "#0a1628"
                          : isDark
                            ? "#cbd5e1"
                            : "#4b5563"
                      }}
                    >
                      {type} ({count})
                    </button>
                  );
                })}
              </div>

              {filteredIpItems.map((item: any, i) => renderIpCard(item, i))}
            </div>
          )}

          {slug === "awards" && (
            <div className="grid grid-cols-1 gap-6">
              {article.items?.map((item: any, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border transition-all duration-300"
                  style={{
                    background: isDark ? "rgba(13,31,60,0.5)" : "#ffffff",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,95,0.06)",
                    boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(30,58,95,0.04)"
                  }}
                >
                  <div className="flex justify-between items-center gap-4 mb-3">
                    <span className="text-[12px] font-extrabold text-amber-500 uppercase tracking-wider">
                      {item.body}
                    </span>
                    <span className="text-[12px] font-bold" style={{ color: isDark ? "#64748b" : "#9ca3af" }}>
                      Received: {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold mb-1" style={{ color: isDark ? "#ffffff" : "#1e3a5f" }}>
                    {item.name}
                  </h3>
                  <div className="text-[13px] font-semibold mb-3" style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}>
                    Recipient: {item.recipient}
                  </div>
                  <p className="text-[14px] leading-[1.75]" style={{ color: isDark ? "#94a3b8" : "#64748b" }}>
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
