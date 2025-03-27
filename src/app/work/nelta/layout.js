export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Nelta - Argzon's Portfolio",
  description:
    "Redesigned and developed a high-performing website for Nelta, enhancing user experience and brand positioning. Leveraged UX research, modern design, and Next.js for a scalable solution.",
  url: "https://argzonhaziraj.com/work/nelta",
  openGraph: {
    title: "Nelta - Argzon's Portfolio",
    description:
      "Redesigned and developed a high-performing website for Nelta, enhancing user experience and brand positioning. Leveraged UX research, modern design, and Next.js for a scalable solution.",
    url: "https://argzonhaziraj.com/work/nelta",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/nelta-og-image.jpg",
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
    title: "Nelta - Argzon's Portfolio",
    description:
      "Redesigned and developed a high-performing website for Nelta, enhancing user experience and brand positioning. Leveraged UX research, modern design, and Next.js for a scalable solution.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/nelta-og-image.jpg",
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

export default function NeltaLayout({ children }) {
  return children;
}
