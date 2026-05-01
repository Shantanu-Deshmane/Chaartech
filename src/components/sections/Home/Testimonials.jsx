import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../../data/testimonials';
import './Testimonials.css';

// Positions for absolute-positioned overlapping cards
const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">
                        What Our Clients Say
                    </h2>
                    <p className="testimonials-subtitle">
                        Trusted by industry leaders for quality and innovation
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="card-top">
                                <div className="card-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
                                            fill={i < testimonial.rating ? 'currentColor' : 'none'}
                                        />
                                    ))}
                                </div>
                                <Quote className="card-quote-icon" size={20} />
                            </div>

                            <p className="card-review">
                                &ldquo;{testimonial.message}&rdquo;
                            </p>

                            <div className="card-reviewer">
                                <div className="reviewer-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div className="reviewer-info">
                                    <p className="reviewer-name">{testimonial.name}</p>
                                    <p className="reviewer-role">{testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
