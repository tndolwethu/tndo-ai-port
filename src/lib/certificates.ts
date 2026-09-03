import googleImg from "@/assets/certificates/google-ai-essentials.jpg.asset.json";
import googlePdf from "@/assets/certificates/google-ai-essentials.pdf.asset.json";
import introImg from "@/assets/certificates/introduction-to-ai.jpg.asset.json";
import introPdf from "@/assets/certificates/introduction-to-ai.pdf.asset.json";
import promptImg from "@/assets/certificates/discover-the-art-of-prompting.jpg.asset.json";
import promptPdf from "@/assets/certificates/discover-the-art-of-prompting.pdf.asset.json";
import curveImg from "@/assets/certificates/stay-ahead-of-the-ai-curve.jpg.asset.json";
import curvePdf from "@/assets/certificates/stay-ahead-of-the-ai-curve.pdf.asset.json";
import productivityImg from "@/assets/certificates/maximize-productivity-with-ai-tools.jpg.asset.json";
import productivityPdf from "@/assets/certificates/maximize-productivity-with-ai-tools.pdf.asset.json";
import responsiblyImg from "@/assets/certificates/use-ai-responsibly.jpg.asset.json";
import responsiblyPdf from "@/assets/certificates/use-ai-responsibly.pdf.asset.json";

export type Certificate = {
  slug: string;
  title: string;
  kind: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  image: string;
  file: string;
};

/** Completed certificates, in the order they should be displayed. */
export const certificates: Certificate[] = [
  {
    slug: "google-ai-essentials",
    title: "Google AI Essentials",
    kind: "Specialization Certificate",
    issuer: "Google · offered through Coursera",
    date: "01 Sep 2026",
    verifyUrl: "https://coursera.org/verify/specialization/C2LZL2P713ME",
    image: googleImg.url,
    file: googlePdf.url,
  },
  {
    slug: "introduction-to-ai",
    title: "Introduction to AI",
    kind: "Course Certificate",
    issuer: "Google · offered through Coursera",
    date: "31 Aug 2026",
    verifyUrl: "https://coursera.org/verify/65PGTPV2QH7H",
    image: introImg.url,
    file: introPdf.url,
  },
  {
    slug: "discover-the-art-of-prompting",
    title: "Discover the Art of Prompting",
    kind: "Course Certificate",
    issuer: "Google · offered through Coursera",
    date: "01 Sep 2026",
    verifyUrl: "https://coursera.org/verify/L5B6790F12DD",
    image: promptImg.url,
    file: promptPdf.url,
  },
  {
    slug: "stay-ahead-of-the-ai-curve",
    title: "Stay Ahead of the AI Curve",
    kind: "Course Certificate",
    issuer: "Google · offered through Coursera",
    date: "01 Sep 2026",
    verifyUrl: "https://coursera.org/verify/0RWLC5OMFZ08",
    image: curveImg.url,
    file: curvePdf.url,
  },
  {
    slug: "maximize-productivity-with-ai-tools",
    title: "Maximize Productivity With AI Tools",
    kind: "Course Certificate",
    issuer: "Google · offered through Coursera",
    date: "31 Aug 2026",
    verifyUrl: "https://coursera.org/verify/JVOFEAHGJWZW",
    image: productivityImg.url,
    file: productivityPdf.url,
  },
  {
    slug: "use-ai-responsibly",
    title: "Use AI Responsibly",
    kind: "Course Certificate",
    issuer: "Google · offered through Coursera",
    date: "01 Sep 2026",
    verifyUrl: "https://coursera.org/verify/SHLR8Q9YMSSD",
    image: responsiblyImg.url,
    file: responsiblyPdf.url,
  },
];
