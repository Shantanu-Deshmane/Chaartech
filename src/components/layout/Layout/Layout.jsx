import { Outlet } from 'react-router-dom';
import { useScrollToTop } from '../../../hooks';
import Navbar from '../Navbar';
import Footer from '../Footer';
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
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
