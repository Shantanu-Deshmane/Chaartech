import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * CountUp Component
 * Animates a number from a start value to an end value when it enters the viewport.
 * 
 * @param {number} end - Target value to count up to
 * @param {number} start - Initial value (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 2)
 * @param {string} prefix - Text to show before the number
 * @param {string} suffix - Text to show after the number
 * @param {number} decimals - Number of decimal places (default: 0)
 * @param {string} className - Optional CSS class
 */
const CountUp = ({
    end,
    start = 0,
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
    className = ""
}) => {
    const [displayValue, setDisplayValue] = useState(start);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(start, end, {
                duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    setDisplayValue(latest);
                }
            });
            return controls.stop;
        }
    }, [inView, start, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    );
};

export default CountUp;
