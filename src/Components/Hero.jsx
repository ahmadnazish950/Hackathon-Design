import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="text relative w-full min-h-screen overflow-hidden text-white ">

      <div className="relative overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/menu-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex flex-col justify-center items-center text-center min-h-screen px-4 gap-6">

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30">
            <svg
              className="w-5 h-5 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>


        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20 px-4">
        {/* Left Text */}
        <div className=" text text-6xl -tracking-normal font-lg max-w-2xl text-white">
          Discover the art of imaging and innovation.
        </div>

        {/* Right Buttons */}
        <div className="flex gap-4">
          <button className="relative rounded-xl px-6 py-2 backdrop-blur-md text-white font-semibold hover:before:absolute hover:before:inset-0 hover:before:bg-white/20 hover:before:blur-md hover:before:rounded-xl transition-all overflow-hidden group">
            <span className="relative z-10 flex text-sm items-center">
              Explore Cameras
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-all duration-300"></span>
            <span className="absolute -left-full top-0 w-full h-full bg-white opacity-10 transform rotate-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          </button>
          <button className="rounded-xl px-6 py-2 text-white backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all font-semibold text-sm">
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;
