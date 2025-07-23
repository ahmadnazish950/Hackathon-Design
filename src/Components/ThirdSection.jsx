import React from "react";

const ThirdSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0c0c24] to-purple-900 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="w-[200%] h-[200%] bg-gradient-to-br from-purple-700/20 to-blue-500/10 blur-3xl animate-pulse -rotate-12 origin-top-left"></div>
            </div>

            <img
                src="/third-img.png"
                alt="Sony Camera"
                className="absolute bottom-[-11.5rem] left-1/2 -translate-x-1/2 opacity-80 
                w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[44vw] xl:w-[44vw] 
                    max-w-5xl object-contain pointer-events-none z-0
                    max-h-[80vh] sm:max-h-[70vh] md:max-h-[60vh]"
            />


            <div className="relative z-10 max-w-6xl text-center px-4">
                <h2 className="text text-[5rem] font-bold tracking-normal leading-21 drop-shadow-lg">
                    Empowering Creators.
                    <br className="hidden sm:block" />
                    Redefining Precision.
                </h2>
                <p className="text mt-6 text-md sm:text-lg md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Sony's purpose is to revolutionize imaging technology — enabling
                    photographers and filmmakers to capture the world with clarity,
                    creativity, and uncompromising excellence.
                </p>
            </div>

        </section>
    );
};

export default ThirdSection;
