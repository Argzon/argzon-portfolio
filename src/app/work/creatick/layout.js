export const metadata = {
  metadataBase: new URL("https://argzonhaziraj.com"),
  title: "Creatick - Argzon's Portfolio",
  description:
    "A complete case study on Creatick, a social media management platform, showcasing my end-to-end design and development process, from research to execution. This project highlights UX/UI design, front-end development, and agile methodologies to create an intuitive and engaging user experience.",
  url: "https://argzonhaziraj.com/work/creatick",
  openGraph: {
    title: "Creatick - Argzon's Portfolio",
    description:
      "A complete case study on Creatick, a social media management platform, showcasing my end-to-end design and development process, from research to execution. This project highlights UX/UI design, front-end development, and agile methodologies to create an intuitive and engaging user experience.",
    url: "https://argzonhaziraj.com/work/creatick",
    siteName: "Argzon Haziraj",
    images: [
      {
        url: "https://argzonhaziraj.com/assets/opengraph-images/creatick-og-image.jpg",
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
    title: "Creatick - Argzon's Portfolio",
    description:
      "A complete case study on Creatick, a social media management platform, showcasing my end-to-end design and development process, from research to execution. This project highlights UX/UI design, front-end development, and agile methodologies to create an intuitive and engaging user experience.",
    creator: "@Argzon6",
    images: [
      "https://argzonhaziraj.com/assets/opengraph-images/creatick-og-image.jpg",
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
export default function CreatickLayout({ children }) {
  return children;
}
