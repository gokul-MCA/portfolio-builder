import ContactForm from "@/components/ContactForm";
import PageLayout from "../page-layout";

export const metadata = {
  title: "Contact Us - Portfolio Builder | Web Development & Design Support",
  description: "Get in touch for portfolio website development, design inquiries, or tech support for building your portfolio.",
  images: [
    {
      url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
      width: 800,
      height: 600,
      alt: "Contact Us - Portfolio Builder",
    },
  ],
  openGraph: {
    title: "Contact Us - Portfolio Builder | Web Development & Design Support",
    description: "Reach out for professional portfolio website development, custom designs, and tech support.",
    url: "https://portfolio-builder-nextjs.netlify.app/contact",
    images: [
      {
        url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us - Portfolio Builder",
      },
      {
        url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
        width: 600,
        height: 315,
        alt: "Contact Us - Portfolio Builder (Small)",
      },
      {
        url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
        width: 800,
        height: 800,
        alt: "Contact Us - Portfolio Builder (Square)",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Portfolio Builder | Web Development & Design Support",
  },
};


const Contact = () => {
  return (
    <PageLayout>
      <ContactForm/>
    </PageLayout>
  );
};

export default Contact;
