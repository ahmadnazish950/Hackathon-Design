import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 1000); // delay before removing
          return 100;
        }
        if (prev < 70) return prev + 1.5;
        else if (prev < 90) return prev + 0.7;
        else return prev + 0.3;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #000000, #1a1a1a)" }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }} //
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <img
              src="/sony.png"
              alt="Sony Logo"
              className="w-40 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            />
          </motion.div>

          <motion.div
            className="text absolute bottom-5 right-10 text-gray-200/50 text-[8rem] font-extrabold tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {Math.floor(progress)}%
          </motion.div>

          <div className="absolute bottom-10 right-10 w-[400px] h-[3px] bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
