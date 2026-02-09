import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { ANIMATIONS } from '../../utils/constants';
import { formatDate } from '../../utils/helpers';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog & Insights - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Read the latest tech insights, tips, and industry news from ChaarTech Technologies. Stay updated with web development, SEO, and digital marketing trends."
                />
            </Helmet>

            {/* Hero Section - Magazine Style */}
            <section className="blog-hero-unique">
                <div className="container">
                    <motion.div
                        className="blog-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <div className="blog-hero-left">
                            <span className="hero-badge">Blog & Insights</span>
                            <h1>Ideas That <span className="text-gradient">Inspire</span></h1>
                            <p>
                                Tips, insights, and industry news to help your business grow.
                                Stay updated with the latest in tech.
                            </p>
                        </div>

                        <motion.div
                            className="blog-hero-categories"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.staggerContainer}
                        >
                            <motion.div className="category-card" variants={ANIMATIONS.staggerItem}>
                                <BookOpen size={24} />
                                <span>Tutorials</span>
                            </motion.div>
                            <motion.div className="category-card" variants={ANIMATIONS.staggerItem}>
                                <TrendingUp size={24} />
                                <span>Industry News</span>
                            </motion.div>
                            <motion.div className="category-card" variants={ANIMATIONS.staggerItem}>
                                <Lightbulb size={24} />
                                <span>Tips & Tricks</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="blog-hero-gradient" />
            </section>

            {/* Blog Section */}
            <section className="section blog-section">
                <div className="container">
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
                                    <div className="blog-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-category">{post.category}</span>
                                            <span className="blog-date">{formatDate(post.date)}</span>
                                        </div>
                                        <h2>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <div className="blog-footer">
                                            <div className="blog-read-time">
                                                <Clock size={14} />
                                                <span>{post.readTime} min read</span>
                                            </div>
                                            <span className="blog-read-more">
                                                Read More <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>

                    <motion.div
                        className="blog-coming-soon"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <Lightbulb size={32} />
                        <h3>More Content Coming Soon!</h3>
                        <p>
                            We're just getting started. Check back regularly for more helpful
                            articles about web development, digital marketing, and business growth.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Blog;
