import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../../data/testimonials';
import './Testimonials.css';

// Positions for absolute-positioned overlapping cards
const cardPositions = [
    { left: '0%', top: '0px', rotate: '-2deg', zBase: 1 },
    { left: '15%', top: '30px', rotate: '1deg', zBase: 2 },
    { left: '30%', top: '-10px', rotate: '-1deg', zBase: 3 },
    { left: '48%', top: '40px', rotate: '2deg', zBase: 4 },
    { left: '65%', top: '5px', rotate: '-1.5deg', zBase: 5 },
    { left: '80%', top: '25px', rotate: '1deg', zBase: 6 },
];

const Testimonials = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">
                        What Our Clients Say
                    </h2>
                    <p className="testimonials-subtitle">
                        Trusted by multiple clients 
                    </p>
                </div>

                <div className="testimonials-cards-container">
                    {testimonialsData.map((testimonial, index) => {
                        const position = cardPositions[index];
                        const isHovered = hoveredCard === testimonial.id;
                        const isEven = index % 2 !== 0;

                        return (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${isEven ? 'card-blue' : 'card-dark'}`}
                                style={{
                                    left: position.left,
                                    top: position.top,
                                    transform: `rotate(${position.rotate}) ${isHovered ? 'scale(1.08) rotate(0deg)' : ''}`,
                                    zIndex: isHovered ? 100 : position.zBase,
                                    boxShadow: isHovered
                                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                        : '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
                                }}
                                onMouseEnter={() => setHoveredCard(testimonial.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Quote className="card-quote-icon" size={24} />

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

                                <p className={`card-review ${isHovered ? 'card-review-expanded' : ''}`}>
                                    &ldquo;{testimonial.message}&rdquo;
                                </p>

                                <div className="card-reviewer">
                                    <div className={`reviewer-avatar ${isEven ? 'avatar-on-blue' : 'avatar-on-dark'}`}>
                                        {testimonial.avatar}
                                    </div>
                                    <div className="reviewer-info">
                                        <p className="reviewer-name">{testimonial.name}</p>
                                        <p className="reviewer-role">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
