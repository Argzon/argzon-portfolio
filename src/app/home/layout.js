export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Interface Designer - Argzon Haziraj",
  description: "Building websites & apps for immersive digital experiences.",
  openGraph: {
    title: "Interface Designer - Argzon Haziraj",
    description: "Building websites & apps for immersive digital experiences.",
    url: "/",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "/assets/opengraph-images/homepage-og-image.jpg",
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
    title: "Interface Designer - Argzon Haziraj",
    description: "Building websites & apps for immersive digital experiences.",
    creator: "@Argzon6",
    images: ["/assets/opengraph-images/homepage-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomeLayout({ children }) {
  return children;
}
