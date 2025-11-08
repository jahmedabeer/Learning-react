import BackgroundPattern from './BackgroundPattern';
import Benefits from './Benefits';
import Cta from './Cta';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Pricing from './Pricing';
import Testimonial from './Testimonial';

export default function Container() {
    return (
        <div
            className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] z-10"
        >
            <div
                className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0"
                data-component="hero-section"
            >
                <Hero />
                <Cta />
                <BackgroundPattern />
                <Benefits />
                <Testimonial />
                <Features />
                <Pricing />
                <Footer />
            </div>
        </div>
    );
}