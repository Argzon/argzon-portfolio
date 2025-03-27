import HomepageOG from "../../../public/assets/opengraph-images/homepage-og-image.jpg";

export const metadata = {
  title: "Interface Designer - Argzon Haziraj",
  description: "Building websites & apps for immersive digital experiences.",
  url: "https://argzonhaziraj.com",
  image: { HomepageOG },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://argzonhaziraj.com",
    title: "Interface Designer - Argzon Haziraj",
    description: "Building websites & apps for immersive digital experiences.",
    images: [
      {
        url: { HomepageOG },
        width: 1200,
        height: 675,
        alt: "Argzon Haziraj - Interface Designer",
      },
    ],
  },
  twitter: {
    handle: "@Argzon6",
    site: "@Argzon6",
    cardType: "summary_large_image",
  },
};

export default function HomeLayout({ children }) {
  return children;
}
