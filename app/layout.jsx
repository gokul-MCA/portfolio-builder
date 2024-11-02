import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "./Provider";

export const metadata = {
  title: "Portfolio Builder",
  description: "Create stunning portfolios to showcase your work and talents online. Ideal for artists, designers, developers, and freelancers.",
  keywords: "portfolio builder, create portfolio online, digital portfolio, personal portfolio, online portfolio maker, showcase work, graphic design portfolio, photography portfolio, freelance portfolio, artist portfolio, web developer portfolio",
  author: "Gokul B",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
