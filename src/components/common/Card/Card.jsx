import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';
import './Card.css';

/**
 * Reusable Card component with hover effects
 */
const Card = ({
    children,
    variant = 'default',
    hover = true,
    padding = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const cardClasses = cn(
        'card',
        `card-${variant}`,
        `card-padding-${padding}`,
        { 'card-clickable': onClick },
        { 'card-hover': hover },
        className
    );

    return (
        <motion.div
            className={cardClasses}
            onClick={onClick}
            whileHover={hover ? { y: -5 } : {}}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/**
 * Card Header component
 */
export const CardHeader = ({ children, className = '' }) => (
    <div className={cn('card-header', className)}>{children}</div>
);

/**
 * Card Body component
 */
export const CardBody = ({ children, className = '' }) => (
    <div className={cn('card-body', className)}>{children}</div>
);

/**
 * Card Footer component
 */
export const CardFooter = ({ children, className = '' }) => (
    <div className={cn('card-footer', className)}>{children}</div>
);

/**
 * Card Image component
 */
export const CardImage = ({ src, alt, className = '' }) => (
    <div className={cn('card-image', className)}>
        <img src={src} alt={alt} loading="lazy" />
    </div>
);

/**
 * Card Icon component
 */
export const CardIcon = ({ children, color, className = '' }) => (
    <div
        className={cn('card-icon', className)}
        style={{ '--icon-color': color }}
    >
        {children}
    </div>
);

export default Card;
