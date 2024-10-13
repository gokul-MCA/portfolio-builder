import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Welcome to Home */}
      <GetStarted
        className="inline-flex items-center gap-2 rounded-full
       border border-white bg-white px-8 py-3 text-black hover:bg-transparent
        hover:text-white focus:outline-none focus:ring active:bg-white/90"
      >
        Get Started
      </GetStarted>
    </div>
  );
}
