import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './MouseFollower.css';

/**
 * MouseFollower Component
 * A smooth, performant mouse follower effect using framer-motion.
 */
const MouseFollower = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Silky smooth, weighted spring configuration
    const springConfig = { damping: 35, stiffness: 150, mass: 1.2 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Track hover state for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.hasAttribute('data-interactive') ||
                (window.getComputedStyle(target).cursor === 'pointer' && target.tagName !== 'BODY');

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <motion.div
            className={`mouse-follower ${isHovering ? 'hovering' : ''}`}
            style={{
                x: springX,
                y: springY,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="follower-dot" />
        </motion.div>
    );
};

export default MouseFollower;
