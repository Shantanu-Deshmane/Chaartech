import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-page">
            <div className="container">
                <motion.div
                    className="notfound-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="notfound-code">404</span>
                    <h1>Page Not Found</h1>
                    <p>
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                    <div className="notfound-actions">
                        <Link to="/" className="notfound-btn notfound-btn-primary">
                            <Home size={18} />
                            Back to Home
                        </Link>
                        <button
                            className="notfound-btn notfound-btn-secondary"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
