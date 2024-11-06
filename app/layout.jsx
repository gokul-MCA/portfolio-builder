import "./globals.css";
import NextAuthProvider from "./Provider";

export const metadata = {
  title: "Portfolio Builder",
  description: "Create stunning portfolios to showcase your work and talents online. Ideal for artists, designers, developers, and freelancers.",
  keywords: "portfolio builder, create portfolio online, digital portfolio, personal portfolio, online portfolio maker, showcase work, graphic design portfolio, photography portfolio, freelance portfolio, artist portfolio, web developer portfolio",
  author: "Gokul B",
  robots: "index, follow",
  openGraph: {
    title: "Portfolio Builder",
    description: "Create stunning portfolios to showcase your work and talents online.",
    url: "/",  
    images: [
      {
        url: "https://portfolio-builder-nextjs.netlify.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Portfolio Builder",
      },
      {
        url: "https://portfolio-builder-nextjs.netlify.app/favicon.ico",
        width: 600,
        height: 315,
        alt: "Portfolio Builder (Small)",
      },
      {
        url: "https://portfolio-builder-nextjs.netlify.app/favicon.ico",
        width: 800,
        height: 800,
        alt: "Portfolio Builder (Square)",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Gokul B",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
