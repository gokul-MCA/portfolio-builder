import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for inquiries and support.",
  keywords: "contact, support, inquiries, customer service",
  image: "/contact.jpg",
  url: "https://portfolio-builder-nextjs.netlify.app/contact",
  og: {
    title: "Contact Us - Portfolio Builder",
    description: "Reach out to us for any questions or support you need.",
    image: "/contact.jpg", // Add a relevant image URL
    url: "https://portfolio-builder-nextjs.netlify.app/contact", //need to add
  },
};

const Contact = () => {
  return (
      <ContactForm/>
  );
};

export default Contact;
