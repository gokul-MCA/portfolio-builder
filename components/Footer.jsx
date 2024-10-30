import React from "react";
import GetStarted from "./GetStarted";
import {
  ArrowBottomRightIcon,
  ArrowRightIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

const navigation = {
  "About Us": [
    { name: "About", href: "/about" },
    { name: "Company History", href: "/companyhistory" },
    { name: "Meet the Team", href: "/meetteam" },
  ],
  "Company": [
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Products", href: "/products" },
  ],
  "Our Services": [
    { name: "Web Development", href: "/webdevelopment" },
    { name: "Web Design", href: "/webdesign" },
    { name: "SEO Optimization", href: "/seo" },
  ],
  "Helpful Links": [
    { name: "FAQs", href: "/faqs" },
    { name: "Support", href: "/support" },
    { name: "Documents", href: "/documents" },
  ],
  "Social": [
    { name: "GitHub", href: "/faqs" },
    { name: "Instagram", href: "/instagram" },
    { name: "Twitter", href: "/twitter" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8  py-10 lg:py-16 ">
        {/* box */}
        <div className="flex flex-col items-center gap-4 rounded-lg bg-dominant p-6 sm:flex-row sm:justify-between">
          <strong className="text-black   text-sm md:text-lg lg:text-xl ">
            Make Your Next Career Move!
          </strong>
          <GetStarted>
            <a
              className="inline-flex items-center gap-2 rounded-full cursor-pointer transition
              border-2  font-medium md:font-semibold  text-xs md:text-sm   px-6 lg:px-8  py-2 lg:py-3
              border-dominant         bg-white           text-black
              hover:border-secondary    hover:bg-primary     hover:text-secondary
              focus:outline-none        focus:ring           active:border-dominant"
            >
              Let&apos;s Get Started
              <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </GetStarted>
        </div>
        {/* site map */}
        <div className="mt-8 lg:mt-16 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5  px-4 md:p-0  md:justify-items-center">
          {Object.entries(navigation).map(([category, links]) => (
            <div className="text-left" key={category}>
              <p className="text-sm md:text-base text-black font-bold md:font-semibold lg:font-extrabold inline-block group transition hover:text-secondary">
                {category}
              </p>
              <ul className="mt-2 md:mt-4 lg:mt-6 space-y-2 md:space-y-3 text-sm font-base lg:font-medium">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      className="text-black transition hover:text-secondary text-xs lg:text-sm"
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* social media   */}
          <div className="mt-2 md:mt-3 lg:mt-6 justify-between flex flex-col items-center gap-4 p-6 sm:flex-row">
          <a className="" href="/">
              <span className="sr-only">Home</span>
              <div
                className="bg-dominant rounded w-10 h-10"
                style={{
                  backgroundImage: "url(/favicon.ico)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  loading: "lazy",
                }}
              />
            </a>
            <p className="text-black text-center  mt-2 md:mt-3  text-xs ">
              Copyright &copy; 2024. 
              All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
