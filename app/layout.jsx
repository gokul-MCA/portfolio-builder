import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextAuthProvider from "./Provider";

export const metadata = {
  title: "Portfolio Builder",
  description: "",
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
