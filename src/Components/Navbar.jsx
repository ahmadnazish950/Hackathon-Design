import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollBehaviour, setScrollBehaviour] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollBehaviour(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="text fixed top-0 left-0 w-full z-50">
            {/* Top Navbar */}
            <div
                className={`flex justify-between items-center px-8 py-4 transition-transform duration-300 ${!isOpen && scrollBehaviour === "down" ? "-translate-y-full" : "translate-y-0"
                    }`}
            >
                <img src="/sony.png" alt="Sony Logo" className="w-24" />

                {!isOpen && (
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="z-[9999] p-2 border-[1px] rounded"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Menu className="text-white w-6 h-6" />
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu"
                        className="fixed inset-0 z-[9998] bg-gradient-to-br from-[#202534] to-[#121620] flex items-start justify-start px-10 pt-20 overflow-hidden"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 z-[9999] p-2 border-[1px] rounded"
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <X className="text-white w-6 h-6" />
                        </motion.button>

                        <div className="relative z-10">
                            <div className="text-left space-y-4">
                                <div className="text-[5.7vw] leading-[0.9] font-extrabold uppercase tracking-tighter space-y-2">
                                    {["Home", "About", "Sony", "Specs", "Alpha 9"].map((item, index) => {
                                        const id = item.toLowerCase().replace(/\s+/g, "-");

                                        return (
                                            <motion.a
                                                key={index}
                                                href={`#${id}`}
                                                onClick={() => setIsOpen(false)} // 👈 Auto-close menu on click
                                                className="relative group w-fit cursor-pointer transition-all block"
                                                initial={{ x: -50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text transition-colors duration-300">
                                                    {item}
                                                </span>
                                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                                            </motion.a>
                                        );
                                    })}

                                </div>

                                <motion.p
                                    className="mt-10 max-w-lg text-gray-400 text-xl leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Redefine clarity and performance with the latest Sony imaging innovations.
                                </motion.p>

                                <motion.button
                                    className="mt-6 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    Visit Now →
                                </motion.button>
                            </div>
                        </div>

                        <motion.div
                            className="absolute bottom-[0.5px] right-7 flex flex-col items-end z-10"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <img src="/sony.png" alt="Sony Logo" className="w-24 opacity-70" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
