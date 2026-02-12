import { Outlet } from 'react-router-dom';
import { useScrollToTop } from '../../../hooks';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { MouseFollower } from '../../common';
import './Layout.css';

/**
 * Main layout wrapper component
 * Provides consistent page structure with Navbar and Footer
 */
const Layout = () => {
    // Scroll to top on route change
    useScrollToTop();

    return (
        <div className="layout">
            <MouseFollower />
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
