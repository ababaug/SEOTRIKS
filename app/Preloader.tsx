"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse">
            <span className="material-symbols-outlined text-on-primary text-[32px]">insights</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-space-md font-headline-md text-jet-black tracking-tight"
          >
            SEOtriks
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
