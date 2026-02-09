import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../utils/helpers';
import './Button.css';

/**
 * Reusable Button component with variants and loading state
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

    return (
        <motion.button
            ref={ref}
            type={type}
            className={buttonClasses}
            disabled={disabled || isLoading}
            onClick={onClick}
            whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="btn-spinner" />
            ) : (
                <>
                    {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
                    <span className="btn-text">{children}</span>
                    {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
                </>
            )}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
