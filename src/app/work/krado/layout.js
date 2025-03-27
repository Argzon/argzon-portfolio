export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Krado - Argzon's Portfolio",
  description:
    "A complete redesign of Krado's website to enhance user experience, modernize visuals, and improve engagement. This project focused on intuitive navigation, interactive animations, and a seamless mobile experience.",
  url: "https://argzonhaziraj.com/work/krado",
  openGraph: {
    title: "Krado - Argzon's Portfolio",
    description:
      "A complete redesign of Krado's website to enhance user experience, modernize visuals, and improve engagement. This project focused on intuitive navigation, interactive animations, and a seamless mobile experience.",
    url: "https://argzonhaziraj.com/work/krado",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/krado-og-image.jpg",
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
    title: "Krado - Argzon's Portfolio",
    description:
      "A complete redesign of Krado's website to enhance user experience, modernize visuals, and improve engagement. This project focused on intuitive navigation, interactive animations, and a seamless mobile experience.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/krado-og-image.jpg",
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
export default function KradoLayout({ children }) {
  return children;
}
