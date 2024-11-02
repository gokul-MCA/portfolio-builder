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
  // og: {
  //   title: "Build Your Perfect Portfolio Online",
  //   description: "Easily create and customize your online portfolio to impress clients and employers. Start showcasing your work today!",
  //   image: "/portfolio-preview.jpg", // Replace with your relevant image URL
  //   url: "https://portfolio-builder-nextjs.netlify.app/", // Your website URL
  // },
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
