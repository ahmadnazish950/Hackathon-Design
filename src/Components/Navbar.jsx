import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Freeze background scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    return (
        <div className=" text fixed top-0 left-0 w-full z-50">
            {/* Top Navbar */}
            <div className="flex justify-between items-center px-8 py-4">
                <img src="/sony.png" alt="Sony Logo" className="w-24" />
                <button onClick={() => setIsOpen(!isOpen)} className="z-[9999]">
                    {isOpen ? (
                        <X className="text-white w-6 h-6 transition-all border-2 rounded" />
                    ) : (
                        <Menu className="text-white w-6 h-6 transition-all border-2 rounded" />
                    )}
                </button>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9998] bg-gradient-to-br from-[#202534] to-[#121620] flex items-start justify-start px-10 pt-20 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Overlay Content */}
                        <div className="relative z-10">
                            <div className="text-left space-y-4">
                                <div className="text-[5.7vw] leading-[0.9] font-extrabold uppercase tracking-tighter space-y-2">
                                    {["Home", "About", "Capture", "Camera", "With Sony"].map((item, index) => (
                                        <div
                                            key={index}
                                            className="relative group w-fit cursor-pointer transition-all"
                                        >
                                            <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text transition-colors duration-300">
                                                {item}
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="mt-10 max-w-lg text-gray-400 text-xl leading-relaxed">
                                    Redefine clarity and performance with the latest Sony imaging innovations.
                                </p>

                                {/* Button */}
                                <button className="mt-6 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition">
                                    Visit Now →
                                </button>
                            </div>
                        </div>

                        {/* Bottom Right Logo and Copyright */}
                        <div className="absolute bottom-[0.5px] right-7 flex flex-col items-end z-10">
                            <img src="/sony.png" alt="Sony Logo" className="w-25 opacity-70 " />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
