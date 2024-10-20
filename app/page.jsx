import GetStarted from "@/components/GetStarted";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <section className="mt-8">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 lg:px-10 ">
        {/* Welcome to Home */}
        <h1 className="head1 m-3 mt-2 lg:mt-6 ">
          Showcase Your Talent with Tailored Elegance
        </h1>
        <h2 className="head2 m-2 mt-3 md:mt-4 lg:mt-6">UI & UX</h2>

        <div className="w-full max-w-4xl text-center px-4 py-4 md:py-8 md:px-20">
          {/* 1 */}
          <span className="sr-only">Quotes</span>
          <p className="text-xs md:text-sm lg:text-lg  mb-4 md:mb-6">
            <em className="">
              “Your work is going to fill a large part of your life...the only
              way to do great work is to love what you do.” <br />
            </em>
            <em className="flex justify-end">– Steve Jobs</em>
          </p>
          {/* 2 */} 
          <p className="text-xs md:text-sm lg:text-lg  mt-6 md:mt-8 lg:mt-6 text-justify">
            Create a stunning portfolio that reflects your passion and skills.
            Our platform provides intuitive tools to help you design and build a
            personalized showcase of your work. Whether you’re a designer,
            developer, artist, or entrepreneur, you can highlight your best
            projects and tell your unique story.
          </p>
        </div>

        <GetStarted>
          <a
            className="inline-flex items-center gap-2 rounded-full 
            drop-shadow-xl cursor-pointer border-2 relative
            font-medium md:font-semibold  text-xs md:text-sm   px-6 lg:px-8  py-2 lg:py-3
            border-dominant        bg-white         text-black
            hover:border-secondary   hover:bg-primary   hover:text-secondary
            focus:outline-none       focus:ring         active:border-dominant "
          >
            Let&apos;s Get Started
          </a>
        </GetStarted>

        <span className="pt-10">
          <ArrowDownIcon
            className="animate-bounce cursor-pointer rounded-full p-1 border-2 
            h-7 w-7 md:h-8 md:w-8
          bg-white           border-dominant         text-black
          hover:bg-primary   hover:border-secondary    hover:text-secondary "
          />
        </span>
      </div>
    </section>
  );
}
