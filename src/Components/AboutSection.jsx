import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-10 bg-gradient-to-br from-[#0d021e] via-[#1c0a33] to-[#120521]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-[200%] h-[200%] blur-3xl animate-pulse -rotate-12 origin-top-left"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="p-6">
            <h2 className=" text text-[3rem] font-bold tracking-tight leading-10 text-white">What you know about Sony camera.</h2>
          </div>

          <div className="p-2 aspect-video">
            <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop>
              <source src="/model-A9video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="p-6">
            <p className="text text-lg tracking-tight md:text-xl text-gray-200">
              Elevate your vision. With Sony, every frame becomes a masterpiece powered by innovation, style, and next-gen imaging.
            </p>
          </div>
        </div>

        <div className="w-full h-full px-1 flex items-center justify-center">
          <img
            src="/model-A9-1.png"
            alt="Sony Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>

  );
};

export default AboutSection;
