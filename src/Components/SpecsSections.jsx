import { Eye, Activity, ScanLine, Zap, Camera, Clock } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const SpecsSections = () => {

    const CmosRef = useRef();
    const RightImageRef = useRef();
    const textRef = useRef()
    const ParaRef = useRef();


    const leftImgRef = useRef();
    const rightImgRef = useRef();
    const headingRef = useRef();
    const paraReftwo = useRef();
    const listRef = useRef();


    const blackoutHeadingRef = useRef();
    const blackoutParaRef = useRef();
    const blackoutListRef = useRef();


    useGSAP(() => {
        gsap.fromTo(
            CmosRef.current,
            {
                x: -80,
                opacity: 0,
                scale: 0.95,
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: CmosRef.current,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse", // on scroll up = reverse
                },
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            {
                y: 60,
                opacity: 0,
                skewY: 5,
                clipPath: "inset(0 100% 0 0)",
            },
            {
                y: 0,
                opacity: 1,
                skewY: 0,
                clipPath: "inset(0 0% 0 0)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            ParaRef.current,
            {
                y: 40,       // 👇 starts lower
                opacity: 0,
            },
            {
                y: 0,        // ⬆️ moves into place
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ParaRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            RightImageRef.current,
            {
                x: 80,         // 👉 comes from right
                opacity: 0,
                scale: 0.95,
            },
            {
                x: 0,          // ⬅️ ends at original
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: RightImageRef.current,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    useGSAP(() => {
        // Left Image Animation
        gsap.fromTo(
            leftImgRef.current,
            {
                x: -120,
                opacity: 0,
                rotateY: -15,
                scale: 0.95,
            },
            {
                x: 0,
                opacity: 1,
                rotateY: 0,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: leftImgRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Right Image Animation
        gsap.fromTo(
            rightImgRef.current,
            {
                x: 120,
                opacity: 0,
                rotateY: 15,
                scale: 0.95,
            },
            {
                x: 0,
                opacity: 1,
                rotateY: 0,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: rightImgRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            headingRef.current,
            {
                y: 80,
                opacity: 0,
                clipPath: "inset(0 0 100% 0)",
            },
            {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            paraReftwo.current,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: paraReftwo.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            listRef.current.querySelectorAll("li"),
            {
                x: -30,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    useGSAP(() => {
        // 🔥 Heading Animation
        gsap.fromTo(
            blackoutHeadingRef.current,
            {
                y: 80,
                opacity: 0,
                clipPath: "inset(0 0 100% 0)",
            },
            {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: blackoutHeadingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // ✨ Paragraph Animation
        gsap.fromTo(
            blackoutParaRef.current,
            {
                y: 30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: blackoutParaRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // ✅ List Animation (Stagger)
        gsap.fromTo(
            blackoutListRef.current.querySelectorAll("li"),
            {
                x: 40,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blackoutListRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section className="w-full min-h-screen snap-y snap-mandatory flex flex-col bg-black text-white scroll-smooth">

            <div className="snap-center w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">

                    <div className="grid grid-rows-[auto_1fr] gap-15">

                        <div className="rounded-xl overflow-hidden">
                            <img
                                ref={CmosRef}
                                src="/CMOS.png"
                                alt="Sony Vision"
                                className="w-full max-h-[60vh] object-contain"
                            />
                        </div>

                        <div className="text text-white px-2 text-center md:text-left flex flex-col justify-center">
                            <h2 ref={textRef} className="text-[2.4rem] font-extrabold tracking-normal mb-4 leading-10">
                                Stacked CMOS. Blazing Precision.
                            </h2>
                            <p ref={ParaRef} className="text-lg text-gray-300 leading-5 tracking-tight">
                                Unlock the power of Stacked CMOS sensor technology — delivering ultra-fast readout speeds,
                                reduced rolling shutter, and exceptional low-light performance. With Sony, every frame becomes
                                a masterpiece powered by innovation, style, and next-gen imaging.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center ml-5">
                        <img
                            ref={RightImageRef}
                            src="/sony-alpha-a9.jpg"
                            alt="Sony Camera"
                            className="w-full max-w-xl md:max-w-none md:w-[100%] object-contain rounded-xl"
                        />
                    </div>
                </div>
            </div>


            <div className=" text snap-center w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black px-4 md:px-10">
                <div className="grid grid-rows-2 gap-1 w-full max-w-7xl h-full py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="overflow-hidden flex items-center justify-center">
                            <img
                                ref={leftImgRef}
                                src="/spec-2.png"
                                alt="Sony A9 Camera"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                                ref={rightImgRef}
                                src="/a9-autofocus.jpg"
                                alt="Real-time autofocus example"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="text-white text-center px-4 flex flex-col justify-center h-full">
                        <h2 ref={headingRef} className="text-[3.6rem] font-extrabold tracking-normal leading-18 mb-3">
                            Smart Autofocus, Zero Misses
                        </h2>
                        <p ref={paraReftwo} className="text-md text-gray-300 leading-snug">
                            Track eyes in real-time. Lock on fast. Shoot sharp every time — even during wild motion.
                        </p>
                        <ul ref={listRef} className="mt-6 flex flex-col items-center space-y-1 text-sm sm:text-base text-gray-200">
                            <li className="flex items-center gap-2">
                                <Eye className="w-5 h-5 text-cyan-400" />
                                Real-time Eye Tracking
                            </li>
                            <li className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-amber-400" />
                                AI Motion Prediction
                            </li>
                            <li className="flex items-center gap-2">
                                <ScanLine className="w-5 h-5 text-purple-400" />
                                93% Frame Autofocus Coverage
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="snap-center w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-800 px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl h-full py-10">
                    <div className="overflow-hidden flex items-center justify-center h-full">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="/burstmode.png"
                                alt="Sony Burst Mode"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="text text-white px-2 flex flex-col justify-center text-center md:text-left">
                        <h2 ref={blackoutHeadingRef} className="text-[4.8rem] font-bold tracking-normal mb-3 leading-18">
                            Zero Blackout. All Action.
                        </h2>
                        <p ref={blackoutParaRef} className="text-lg text-gray-300 leading-relaxed mb-3">
                            Capture every frame with ultra-fast shutter speed and seamless burst mode.
                        </p>
                        <ul ref={blackoutListRef} className="mt-2 space-y-1 text-lg text-gray-200 text-left sm:text-center">
                            <li className="flex items-center gap-2 justify-center sm:justify-start">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                120fps Viewfinder Refresh Rate
                            </li>
                            <li className="flex items-center gap-2 justify-center sm:justify-start">
                                <Camera className="w-5 h-5 text-rose-400" />
                                30fps Continuous Shooting
                            </li>
                            <li className="flex items-center gap-2 justify-center sm:justify-start">
                                <Clock className="w-5 h-5 text-blue-400" />
                                Blackout-Free EVF Shooting
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SpecsSections;