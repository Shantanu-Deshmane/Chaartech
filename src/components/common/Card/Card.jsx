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



export default Card;
