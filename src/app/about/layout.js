export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "About me - Argzon's Portfolio",
  description:
    "Accomplished UI/UX designer with 12+ years of experience crafting intuitive websites, apps, and platforms across diverse industries.",
  url: "https://argzonhaziraj.com/about",
  openGraph: {
    title: "About me - Argzon's Portfolio",
    description:
      "Accomplished UI/UX designer with 12+ years of experience crafting intuitive websites, apps, and platforms across diverse industries.",
    url: "https://argzonhaziraj.com/work",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/about-og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Argzon Haziraj - UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About me - Argzon's Portfolio",
    description:
      "Accomplished UI/UX designer with 12+ years of experience crafting intuitive websites, apps, and platforms across diverse industries.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/about-og-image.jpg",
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

export default function AboutLayout({ children }) {
  return children;
}
