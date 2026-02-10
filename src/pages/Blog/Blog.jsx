import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { ANIMATIONS } from '../../utils/constants';
import { formatDate } from '../../utils/helpers';
import { Reveal } from '../../components/common';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Insights & Updates - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Exploring the intersection of technology and design. Dive into our latest thoughts on building the digital future."
                />
            </Helmet>

            {/* Hero */}
            <Reveal once={false}>
                <header className="blog-hero">
                    <div className="container">
                        <motion.div
                            className="blog-hero-inner"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <h1 className="blog-hero-title">Insights & Updates</h1>
                            <p className="blog-hero-subtitle">
                                Exploring the intersection of technology and design. Dive into
                                our latest thoughts on building the digital future.
                            </p>
                        </motion.div>
                    </div>
                </header>
            </Reveal>

            {/* Main Content */}
            <Reveal once={false}>
                <section className="blog-main">
                    <div className="container">
                        {/* Blog Grid */}
                        <motion.div
                            className="blog-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.staggerContainer}
                        >
                            {blogPosts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    className="blog-card"
                                    variants={ANIMATIONS.staggerItem}
                                >
                                    <Link to={`/blog/${post.slug}`} className="blog-card-link">
                                        <div className="blog-card-image">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className="blog-card-body">
                                            <div className="blog-card-meta">
                                                <span className="blog-card-read-time">
                                                    <Clock size={12} />
                                                    {post.readTime} min read
                                                </span>
                                            </div>
                                            <h2 className="blog-card-title">{post.title}</h2>
                                            <p className="blog-card-excerpt">{post.excerpt}</p>
                                            <div className="blog-card-footer">
                                                <span className="blog-card-date">{formatDate(post.date)}</span>
                                                <span className="blog-card-more">
                                                    Read More <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>

                        {/* Load More */}
                        <motion.div
                            className="blog-load-more"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <button className="blog-load-btn">Load More Articles</button>
                        </motion.div>
                    </div>
                </section>
            </Reveal>
        </>
    );
};

export default Blog;
