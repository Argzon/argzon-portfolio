export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Cryptico - Argzon's Portfolio",
  description:
    "A sleek and secure crypto trading platform designed for seamless web and mobile experiences. This case study showcases my role in UX research, UI design, and frontend development to enhance usability and engagement.",
  url: "https://argzonhaziraj.com/work/cryptico",
  openGraph: {
    title: "Cryptico - Argzon's Portfolio",
    description:
      "A sleek and secure crypto trading platform designed for seamless web and mobile experiences. This case study showcases my role in UX research, UI design, and frontend development to enhance usability and engagement.",
    url: "https://argzonhaziraj.com/work/cryptico",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/cryptico-og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Argzon Haziraj - Interface Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptico - Argzon's Portfolio",
    description:
      "A sleek and secure crypto trading platform designed for seamless web and mobile experiences. This case study showcases my role in UX research, UI design, and frontend development to enhance usability and engagement.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/cryptico-og-image.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function CrypticoLayout({ children }) {
  return children;
}
