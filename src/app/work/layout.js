export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Work - Argzon's Portfolio",
  description:
    "I design intuitive, visually compelling, and user-friendly digital experiences. From wireframes to high-fidelity prototypes, I focus on usability, accessibility, and aesthetics to create seamless interfaces.",
  url: "https://argzonhaziraj.com/work",
  openGraph: {
    title: "Work - Argzon's Portfolio",
    description:
      "I design intuitive, visually compelling, and user-friendly digital experiences. From wireframes to high-fidelity prototypes, I focus on usability, accessibility, and aesthetics to create seamless interfaces.",
    url: "https://argzonhaziraj.com/work",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/work-og-image.jpg",
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
    title: "Work - Argzon's Portfolio",
    description:
      "I design intuitive, visually compelling, and user-friendly digital experiences. From wireframes to high-fidelity prototypes, I focus on usability, accessibility, and aesthetics to create seamless interfaces.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/work-og-image.jpg",
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

export default function WorkLayout({ children }) {
  return children;
}
