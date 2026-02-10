import { Helmet } from 'react-helmet-async';
import {
    Hero,
    WhyChooseUs,
    Methodology,
    FoundingPrinciple,
    Innovation,
    Testimonials,
    HomeCTA,
    TechStackMarquee,
    HowItWorks
} from '../../components/sections/Home';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page-container">
            <Helmet>
                <title>ChaarTech - Engineering the Next Epoch of Technology</title>
                <meta
                    name="description"
                    content="Human-crafted software solutions built for pragmatism and scale. We don't just build software, we engineer architectural legacies."
                />
            </Helmet>

            <Hero />
            <TechStackMarquee />
            <WhyChooseUs />

            <Methodology />

            <FoundingPrinciple />

            <Innovation />

            <Testimonials />

            <HowItWorks />
            <HomeCTA />
        </div>
    );
};

export default Home;
