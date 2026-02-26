import React, { useEffect, useRef, useState } from 'react';
import { Award, Clock, UserCheck, Star } from 'lucide-react';
import aboutImage from '../assets/about-zenith.png';

const highlights = [
    {
        icon: Award,
        title: 'IIT / NIT Qualified Mentors',
    },
    {
        icon: Clock,
        title: '5+ Years of Teaching Excellence',
    },
    {
        icon: UserCheck,
        title: 'Personalised 1-on-1 Guidance',
    },
    {
        icon: Star,
        title: 'Proven Results & Parent Satisfaction',
    },
];

/* -------- tiny scroll-reveal hook -------- */
function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return [ref, visible];
}

const AboutZenith = () => {
    const [sectionRef, sectionVisible] = useReveal();
    const [quoteRef, quoteVisible] = useReveal();

    const fade = (visible, delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(1rem)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
    });

    return (
        <section id="about-zenith" className="py-20 lg:py-28 bg-[#111111]">
            <div
                ref={sectionRef}
                className="max-w-6xl mx-auto px-6"
            >
                {/* ── Two-column layout ── */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* LEFT — text */}
                    <div style={fade(sectionVisible)}>
                        {/* Badge */}
                        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
                            Since 2020
                        </span>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="text-gradient">Who We Are</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Zenith Edutech was founded in{' '}
                            <span className="text-accent font-semibold">2020 during the lockdown</span>{' '}
                            with a simple mission — to make India's best education accessible to every student, anywhere.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We are a team of passionate educators from{' '}
                            <span className="text-accent font-semibold">IITs, NITs, and Tier-1 colleges</span>{' '}
                            across India who bring real academic expertise, competitive exam experience, and deep student understanding.
                        </p>
                    </div>

                    {/* RIGHT — image */}
                    <div
                        className="relative rounded-2xl overflow-hidden"
                        style={fade(sectionVisible, 150)}
                    >
                        <img
                            src={aboutImage}
                            alt="Zenith online teaching session"
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                        {/* subtle yellow overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl pointer-events-none" />
                    </div>
                </div>

                {/* ── Highlight cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
                    {highlights.map((h, i) => {
                        const Icon = h.icon;
                        return (
                            <div
                                key={h.title}
                                style={fade(sectionVisible, 200 + i * 100)}
                                className="flex items-start gap-4 bg-black/50 border-l-4 border-accent rounded-xl p-5 hover:shadow-[0_0_20px_rgba(255,214,0,0.15)] transition-shadow duration-300"
                            >
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon className="text-accent" size={22} />
                                </div>
                                <p className="text-white font-semibold text-sm leading-snug">
                                    {h.title}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* ── Quote box ── */}
                <div
                    ref={quoteRef}
                    style={fade(quoteVisible, 100)}
                    className="mt-16 border-2 border-accent/40 bg-black/60 rounded-2xl p-8 md:p-10 text-center"
                >
                    <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed font-medium">
                        <span className="text-accent text-3xl align-text-top mr-1">"</span>
                        At Zenith, students don&rsquo;t just study — they grow, evolve, and gain confidence.
                        <span className="text-accent text-3xl align-text-top ml-1">"</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutZenith;
