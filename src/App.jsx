import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { PageLoader } from './components/common/Loading';
import { ChatWidget } from './components/sections';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<PageLoader />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPost />
              </Suspense>
            }
          />
          <Route
            path="privacy"
            element={
              <Suspense fallback={<PageLoader />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="terms"
            element={
              <Suspense fallback={<PageLoader />}>
                <Terms />
              </Suspense>
            }
          />
          {/* 404 - Redirect to Home */}
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>

      {/* Global Chat Widget */}
      <ChatWidget />
    </>
  );
};

export default App;
