import { motion } from 'framer-motion';
import './Loading.css';

/**
 * Loading spinner component
 */
export const Spinner = ({ size = 'md', color = 'primary', className = '' }) => (
    <div className={`spinner spinner-${size} spinner-${color} ${className}`}>
        <div className="spinner-circle" />
    </div>
);

/**
 * Full page loading overlay
 */
export const PageLoader = ({ message = 'Loading...' }) => (
    <motion.div
        className="page-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="page-loader-content">
            <Spinner size="lg" />
            <p className="page-loader-message">{message}</p>
        </div>
    </motion.div>
);



const Loading = {
    Spinner,
    PageLoader,
};

export default Loading;
