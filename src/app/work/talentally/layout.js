export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "TalentAlly - Argzon's Portfolio",
  description:
    "A complete UI/UX redesign of TalentAlly's (formerly: IPDN) website, transforming an outdated platform into a modern, user-friendly experience. This case study showcases my design process, collaboration, and final impactful results.",
  url: "https://argzonhaziraj.com/work/talentally",
  openGraph: {
    title: "TalentAlly - Argzon's Portfolio",
    description:
      "A complete UI/UX redesign of TalentAlly's (formerly: IPDN) website, transforming an outdated platform into a modern, user-friendly experience. This case study showcases my design process, collaboration, and final impactful results.",
    url: "https://argzonhaziraj.com/work/talentally",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/talentally-og-image.jpg",
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
    title: "TalentAlly - Argzon's Portfolio",
    description:
      "A complete UI/UX redesign of TalentAlly's (formerly: IPDN) website, transforming an outdated platform into a modern, user-friendly experience. This case study showcases my design process, collaboration, and final impactful results.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/talentally-og-image.jpg",
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

export default function TalentallyLayout({ children }) {
  return children;
}
