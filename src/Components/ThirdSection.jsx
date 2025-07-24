import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ThirdSection = () => {

    const headingRef = useRef();
    const imgRef = useRef();


    useGSAP(() => {
        gsap.fromTo(
            headingRef.current.querySelectorAll("[data-letter]"),
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power4.out",
                stagger: 0.035,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                },
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            imgRef.current,
            {
                y: 80,
                opacity: 0,
                scale: 0.95,
            },
            {
                y: 0,
                opacity: 0.8,
                scale: 1,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                    
                },
            }
        );
    }, []);

    const heading = "Empowering Creators.\nRedefining Precision.";

    const splitText = heading.split("").map((char, index) => {
        if (char === "\n") return <br key={index} className="hidden sm:block" />;
        return (
            <span key={index} className="inline-block overflow-hidden">
                <span className="inline-block" data-letter>
                    {char}
                </span>
            </span>
        );
    });


    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0c0c24] to-purple-900 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="w-[200%] h-[200%] bg-gradient-to-br from-purple-700/20 to-blue-500/10 blur-3xl animate-pulse -rotate-12 origin-top-left"></div>
            </div>

            <img
                ref={imgRef}
                src="/third-img.png"
                alt="Sony Camera"
                className="absolute bottom-[-11.5rem] left-1/2 -translate-x-1/2 opacity-80 
                w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[44vw] xl:w-[44vw] 
                    max-w-5xl object-contain pointer-events-none z-0
                    max-h-[80vh] sm:max-h-[70vh] md:max-h-[60vh]"
            />


            <div className="relative z-10 max-w-6xl text-center px-4">
                <h2
                    ref={headingRef}
                    className="text text-[5rem] font-bold tracking-normal leading-[1.1] drop-shadow-lg text-white text-center"
                >
                    {splitText}
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
