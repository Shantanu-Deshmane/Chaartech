import { useState } from 'react';
import './HowItWorks.css';

// Client steps data
const clientSteps = [
    {
        icon: DiscoveryIcon,
        title: "Share Your Vision",
        description: "Tell us about your project through our website, a quick call, or even WhatsApp. We'll listen, understand, and scope it out.",
    },
    {
        icon: DesignIcon,
        title: "Review & Approve",
        description: "We present wireframes, tech stacks, and a clear roadmap. Compare options, finalize scope, and sign off — all with full transparency.",
    },
    {
        icon: DevelopIcon,
        title: "We Build & Ship",
        description: "Our engineers bring your product to life with weekly demos. Track progress in real-time as features roll out.",
    },
    {
        icon: SupportIcon,
        title: "Ongoing Support",
        description: "Post-launch, we've got your back. Bug fixes, updates, scaling — our support team is here for you 24/7.",
    },
];

// Partner steps data
const partnerSteps = [
    {
        icon: RegisterIcon,
        title: "Register with Us",
        description: "Click 'Become a Partner', fill in your details, and tell us about your expertise. Onboarding is free and takes minutes.",
    },
    {
        icon: ReachIcon,
        title: "Expand Your Reach",
        description: "We'll showcase your skills across ChaarTech's network — website, email database, social media, and our client pipeline.",
    },
    {
        icon: ConnectIcon,
        title: "Connect with Clients",
        description: "ChaarTech delivers high-quality project leads directly to you. We match your expertise with the right opportunities.",
    },
    {
        icon: GrowIcon,
        title: "Grow Together",
        description: "With ChaarTech's ecosystem, you'll optimize profitability, tap into new markets, and reduce your overhead costs.",
    },
];

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('client');

    const currentSteps = activeTab === 'client' ? clientSteps : partnerSteps;
    const subtitle = activeTab === 'client'
        ? "We don't just build, we serve till the very end"
        : "Have skills to offer? Let's grow together.";

    return (
        <section className="hiw-section">
            <div className="container">
                {/* Header */}
                <div className="hiw-header">
                    <h2 className="hiw-title">How It Works</h2>
                    <p className="hiw-description">
                        We don&apos;t just build, we serve till the very end
                    </p>

                    {/* Toggle Buttons */}
                    <div className="hiw-toggle">
                        <button
                            onClick={() => setActiveTab('client')}
                            className={`hiw-toggle-btn ${activeTab === 'client' ? 'active' : ''}`}
                        >
                            I am a Client
                        </button>
                        <button
                            onClick={() => setActiveTab('partner')}
                            className={`hiw-toggle-btn ${activeTab === 'partner' ? 'active' : ''}`}
                        >
                            I am a Partner
                        </button>
                    </div>
                </div>

                {/* Subtitle based on selection */}
                <h3 className="hiw-subtitle">{subtitle}</h3>

                {/* Steps */}
                <div className="hiw-steps-grid">
                    {currentSteps.map((step, index) => (
                        <div key={index} className="hiw-step">
                            {/* Connector line */}
                            {index < currentSteps.length - 1 && (
                                <div className="hiw-connector" />
                            )}

                            <div className="hiw-step-inner">
                                {/* Icon Circle */}
                                <div className="hiw-icon-outer">
                                    <div className="hiw-icon-inner">
                                        <step.icon />
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="hiw-step-title">{step.title}</h4>

                                {/* Description */}
                                <p className="hiw-step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ==================== SVG Icon Components — Client ==================== */

function DiscoveryIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <circle cx="22" cy="22" r="10" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <path d="M30 30l8 8" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="22" cy="22" r="4" fill="var(--color-primary)" opacity="0.3" />
        </svg>
    );
}

function DesignIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <rect x="8" y="8" width="32" height="32" rx="4" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <path d="M8 18h32" stroke="var(--color-primary)" strokeWidth="2" />
            <rect x="14" y="24" width="10" height="8" rx="1" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
            <path d="M30 24h6M30 28h6M30 32h4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="13" r="1.5" fill="var(--color-primary)" />
            <circle cx="17" cy="13" r="1.5" fill="var(--color-primary)" />
        </svg>
    );
}

function DevelopIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <path d="M16 14l-8 10 8 10" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 14l8 10-8 10" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 8L20 40" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function SupportIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <circle cx="24" cy="24" r="12" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <path d="M12 24a12 12 0 0 1 24 0" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
            <circle cx="24" cy="24" r="5" fill="var(--color-primary)" opacity="0.25" />
            <circle cx="24" cy="24" r="2" fill="var(--color-primary)" />
            <path d="M12 18v-4a2 2 0 0 1 2-2h2M36 18v-4a2 2 0 0 0-2-2h-2" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 22v4a3 3 0 0 0 3 3M38 22v4a3 3 0 0 1-3 3" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

/* ==================== SVG Icon Components — Partner ==================== */

function RegisterIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <rect x="12" y="8" width="24" height="32" rx="2" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <path d="M18 18h12M18 24h8M18 30h10" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="36" cy="36" r="6" fill="var(--color-primary)" />
            <path d="M34 36h4M36 34v4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function ReachIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <circle cx="24" cy="24" r="14" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <ellipse cx="24" cy="24" rx="6" ry="14" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
            <path d="M10 24h28" stroke="var(--color-primary)" strokeWidth="2" />
            <path d="M24 10v28" stroke="var(--color-primary)" strokeWidth="2" />
            <circle cx="38" cy="12" r="4" fill="var(--color-primary)" />
            <path d="M36 10l4 4M40 10l-4 4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function ConnectIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <circle cx="24" cy="14" r="6" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <circle cx="12" cy="32" r="5" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <circle cx="36" cy="32" r="5" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
            <path d="M24 20v6M18 26l-4 3M30 26l4 3" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="28" r="3" fill="var(--color-primary)" />
        </svg>
    );
}

function GrowIcon() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="hiw-svg-icon">
            <path d="M8 38l10-10 8 6 14-18" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 16h8v8" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="8" y="30" width="6" height="8" fill="var(--color-primary)" opacity="0.2" rx="1" />
            <rect x="18" y="26" width="6" height="12" fill="var(--color-primary)" opacity="0.35" rx="1" />
            <rect x="28" y="20" width="6" height="18" fill="var(--color-primary)" opacity="0.5" rx="1" />
        </svg>
    );
}

export default HowItWorks;
