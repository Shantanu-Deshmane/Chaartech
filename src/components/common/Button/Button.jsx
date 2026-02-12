import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../utils/helpers';
import './Button.css';

// Pre-define motion version of Link to avoid creating it during render
const MotionLink = motion(Link);

/**
 * Reusable Button component with variants and loading state
 * Supports `as` prop to render as a different element (e.g., Link)
 */
const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    onClick,
    type = 'button',
    as: ComponentProp,
    ...props
}, ref) => {
    const buttonClasses = cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        { 'btn-full': fullWidth },
        { 'btn-loading': isLoading },
        className
    );

    // Common props for both button and link variants
    const motionProps = {
        ref,
        className: buttonClasses,
        onClick,
        whileHover: { scale: disabled || isLoading ? 1 : 1.02 },
        whileTap: { scale: disabled || isLoading ? 1 : 0.98 },
        ...props,
    };

    const content = (
        <>
            {isLoading ? (
                <Loader2 className="btn-spinner" />
            ) : (
                <>
                    {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
                    <span className="btn-text">{children}</span>
                    {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
                </>
            )}
        </>
    );

    // If it's a Link
    if (ComponentProp === Link) {
        return (
            <MotionLink {...motionProps}>
                {content}
            </MotionLink>
        );
    }

    // Default to motion.button
    return (
        <motion.button
            type={type}
            disabled={disabled || isLoading}
            {...motionProps}
        >
            {content}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
