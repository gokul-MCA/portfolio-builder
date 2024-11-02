import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Portfolio Builder",
  description: "Get in touch with us for inquiries and support.",
  images: [
    {
      url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
      width: 800,
      height: 600,
      alt: "Contact Us",
    },
  ],
  openGraph: {
    title: "Contact Us - Portfolio Builder",
    description: "Reach out to us for any questions or support you need.",
    url: "https://portfolio-builder-nextjs.netlify.app/contact",
    images: [
      {
        url: "https://portfolio-builder-nextjs.netlify.app/contact.jpg",
        width: 800,
        height: 600,
        alt: "Contact Us",
      },
    ],
    type: "website",
  },
};


const Contact = () => {
  return (
      <ContactForm/>
  );
};

export default Contact;
