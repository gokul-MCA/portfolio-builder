import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Welcome to Home */}
      <h1 className="text-3xl font-extrabold sm:text-5xl text-center m-3 my-10">
        Showcase Your Talent with Tailored Elegance
      </h1>
      <h2 className="text-xl font-bold sm:text-4xl text-center m-3 my-4">
        Design. Build. Shine.
      </h2>

      <div className="w-full max-w-4xl text-center sm:text-lg m-4 px-6 py-10">
        {/* 1 */}
        <span className="sr-only">Quotes</span>
        <p className="pb-10 ">
          <em className="">
            “Your work is going to fill a large part of your life...the only way
            to do great work is to love what you do.” <br />
          </em>
          <em className="flex justify-end pt-4">– Steve Jobs</em>
        </p>
        {/* 2 */}
        <p className="pt-4">
          Create a stunning portfolio that reflects your passion and skills. Our
          platform provides intuitive tools to help you design and build a
          personalized showcase of your work. Whether you’re a designer,
          developer, artist, or entrepreneur, you can highlight your best
          projects and tell your unique story.
        </p>
      </div>

      <GetStarted>
        <a
          className="inline-flex items-center gap-2 rounded-full
      border border-white px-8 py-3 bg-white text-black hover:bg-transparent
      hover:text-white focus:outline-none focus:ring active:border-dominant cursor-pointer text-sm font-medium"
        >
          Let&apos;s Get Started
        </a>
      </GetStarted>

      <span className="pt-10">
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce cursor-pointer border rounded-full p-1 hover:rounded-full hover:border-none hover:bg-dominant hover:text-black"
        >
          <path
            d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
            fill="currentColor"
            fillRule="evenOdd"
            clipRule="evenOdd"
          ></path>
        </svg>
      </span>
    </div>
  );
}
