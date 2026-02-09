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

/**
 * Section loading skeleton
 */
export const SectionLoader = ({ height = 400 }) => (
    <div className="section-loader" style={{ height }}>
        <Spinner size="md" />
    </div>
);

/**
 * Card skeleton loader
 */
export const CardSkeleton = ({ count = 1 }) => (
    <div className="skeleton-grid">
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="card-skeleton">
                <div className="skeleton skeleton-image" />
                <div className="skeleton-content">
                    <div className="skeleton skeleton-title" />
                    <div className="skeleton skeleton-text" />
                    <div className="skeleton skeleton-text skeleton-text-short" />
                </div>
            </div>
        ))}
    </div>
);

/**
 * Text skeleton loader
 */
export const TextSkeleton = ({ lines = 3, className = '' }) => (
    <div className={`text-skeleton ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
            <div
                key={i}
                className={`skeleton skeleton-line ${i === lines - 1 ? 'skeleton-line-short' : ''}`}
            />
        ))}
    </div>
);

const Loading = {
    Spinner,
    PageLoader,
    SectionLoader,
    CardSkeleton,
    TextSkeleton,
};

export default Loading;
