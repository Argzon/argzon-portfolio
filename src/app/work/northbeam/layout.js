export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Northbeam - Argzon's Portfolio",
  description:
    "A complete UX/UI transformation for Northbeam's website, enhancing its brand identity, user experience, and conversion rates through strategic research, design, and implementation.",
  url: "https://argzonhaziraj.com/work/northbeam",
  openGraph: {
    title: "Northbeam - Argzon's Portfolio",
    description:
      "A complete UX/UI transformation for Northbeam's website, enhancing its brand identity, user experience, and conversion rates through strategic research, design, and implementation.",
    url: "https://argzonhaziraj.com/work/northbeam",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/northbeam-og-image.jpg",
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
    title: "Northbeam - Argzon's Portfolio",
    description:
      "A complete UX/UI transformation for Northbeam's website, enhancing its brand identity, user experience, and conversion rates through strategic research, design, and implementation.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/northbeam-og-image.jpg",
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

export default function NorthbeamLayout({ children }) {
  return children;
}
