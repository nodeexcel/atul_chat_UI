"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
