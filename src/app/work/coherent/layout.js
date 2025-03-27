export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Coherent - Argzon's Portfolio",
  description:
    "Transforming Coherent's website into an intuitive, engaging platform that bridges the gap between developers and business teams. Through strategic UX/UI design, clear information architecture, and a user-centric approach, the new site effectively tells Coherent's story while enhancing usability and engagement.",
  url: "https://argzonhaziraj.com/work/coherent",
  openGraph: {
    title: "Coherent - Argzon's Portfolio",
    description:
      "Transforming Coherent's website into an intuitive, engaging platform that bridges the gap between developers and business teams. Through strategic UX/UI design, clear information architecture, and a user-centric approach, the new site effectively tells Coherent's story while enhancing usability and engagement.",
    url: "https://argzonhaziraj.com/work/coherent",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/coherent-og-image.jpg",
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
    title: "Coherent - Argzon's Portfolio",
    description:
      "Transforming Coherent's website into an intuitive, engaging platform that bridges the gap between developers and business teams. Through strategic UX/UI design, clear information architecture, and a user-centric approach, the new site effectively tells Coherent's story while enhancing usability and engagement.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/coherent-og-image.jpg",
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
export default function CoherentLayout({ children }) {
  return children;
}
