import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, User } from 'lucide-react';
import { Button } from '../../components/common';
import { getBlogBySlug, blogPosts } from '../../data/blog';
import { ANIMATIONS } from '../../utils/constants';
import { formatDate } from '../../utils/helpers';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getBlogBySlug(slug);

    // Redirect to blog list if post not found
    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    return (
        <>
            <Helmet>
                <title>{post.title} - ChaarTech Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            {/* Hero Section */}
            <section className="blog-post-hero">
                <div className="blog-post-hero-bg" />
                <div className="container">
                    <motion.div
                        className="blog-post-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <Link to="/blog" className="back-link">
                            <ArrowLeft size={18} />
                            <span>Back to Blog</span>
                        </Link>
                        <span className="blog-post-category">{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className="blog-post-meta">
                            <span className="meta-item">
                                <User size={16} />
                                {post.author}
                            </span>
                            <span className="meta-item">
                                <Calendar size={16} />
                                {formatDate(post.date)}
                            </span>
                            <span className="meta-item">
                                <Clock size={16} />
                                {post.readTime} min read
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section blog-post-section">
                <div className="container">
                    <motion.div
                        className="blog-post-layout"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <article className="blog-post-content">
                            <div
                                className="blog-content-body"
                                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
                            />

                            <div className="blog-post-tags">
                                <Tag size={16} />
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag-badge">{tag}</span>
                                ))}
                            </div>
                        </article>

                        <aside className="blog-post-sidebar">
                            <div className="sidebar-cta">
                                <h3>Need Help With Your Project?</h3>
                                <p>Our team is ready to help you build your digital presence.</p>
                                <Button as={Link} to="/contact" fullWidth>
                                    <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Get in Touch
                                    </Link>
                                </Button>
                            </div>

                            {relatedPosts.length > 0 && (
                                <div className="sidebar-related">
                                    <h4>Related Articles</h4>
                                    {relatedPosts.map((relPost) => (
                                        <Link
                                            key={relPost.id}
                                            to={`/blog/${relPost.slug}`}
                                            className="related-post"
                                        >
                                            <h5>{relPost.title}</h5>
                                            <span>{relPost.readTime} min read</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </aside>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

// Simple markdown to HTML converter
const formatMarkdown = (content) => {
    if (!content) return '';

    return content
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Line breaks
        .replace(/\n/g, '<br>')
        // Wrap in paragraph
        .replace(/^(.+)$/gim, '<p>$1</p>')
        // Clean up
        .replace(/<p><h/g, '<h')
        .replace(/<\/h(\d)><\/p>/g, '</h$1>')
        .replace(/<p><li>/g, '<ul><li>')
        .replace(/<\/li><\/p>/g, '</li></ul>')
        .replace(/<\/ul><ul>/g, '');
};

export default BlogPost;
