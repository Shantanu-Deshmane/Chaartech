import { motion } from 'framer-motion';
import {
    Cpu,
    Code2,
    Globe,
    Database,
    Layers,
    Smartphone,
    ShieldCheck,
    Zap
} from 'lucide-react';
import './TechStackMarquee.css';

const TECH_STACK = [
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Globe },
    { name: 'Architecture', icon: Layers },
    { name: 'Full Stack', icon: Cpu },
    { name: 'Database', icon: Database },
    { name: 'Mobile', icon: Smartphone },
    { name: 'Security', icon: ShieldCheck },
    { name: 'Performance', icon: Zap },
];

const TechStackMarquee = () => {
    // Duplicate stack for seamless loop
    const doubledStack = [...TECH_STACK, ...TECH_STACK];

    return (
        <div className="tech-marquee-container">
            <div className="marquee-label">OUR CORE TECHNOLOGIES</div>
            <div className="marquee-wrapper">
                <motion.div
                    className="marquee-content"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear'
                        }
                    }}
                >
                    {doubledStack.map((tech, index) => (
                        <div key={index} className="marquee-item">
                            <tech.icon size={20} className="tech-icon" />
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="marquee-fade fade-left"></div>
            <div className="marquee-fade fade-right"></div>
        </div>
    );
};

export default TechStackMarquee;
