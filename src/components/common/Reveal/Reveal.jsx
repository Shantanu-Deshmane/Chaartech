import { motion } from 'framer-motion';

/**
 * Reveal Component
 * A wrapper component that adds a scroll-reveal animation to its children.
 * 
 * @param {React.ReactNode} children - The content to be animated
 * @param {string} className - Optional CSS class for the wrapper
 * @param {number} threshold - How much of the section should be visible to trigger (0-1)
 * @param {boolean} once - If true, the animation only plays the first time
 */
const Reveal = ({
    children,
    className = "",
    threshold = 0.2,
    once = false
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: threshold }}
            transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
