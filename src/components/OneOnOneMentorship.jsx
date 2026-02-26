import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserCheck, Brain, Clock, MessageCircle, Zap, Shield, Star, Target } from 'lucide-react';

const OneOnOneMentorship = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: UserCheck,
            title: 'Dedicated Personal Mentor',
            description: 'Get a dedicated IIT/NIT mentor who understands your strengths, weaknesses, and learning style for tailored guidance.'
        },
        {
            icon: Clock,
            title: 'Flexible Timings',
            description: 'Schedule sessions at your convenience. Morning, evening, or weekends — we adapt to your routine.'
        },
        {
            icon: MessageCircle,
            title: 'Unlimited Doubt Solving',
            description: 'Never stay stuck. Get instant doubt resolution during and outside class hours via dedicated chat support.'
        },
        {
            icon: Brain,
            title: 'Customized Study Plan',
            description: 'Receive a personalized study roadmap based on your goals — whether it\'s boards, NTSE, Olympiads, or JEE/NEET Foundation.'
        },
        {
            icon: Zap,
            title: 'Accelerated Learning',
            description: 'Move at your own pace. Fast-track topics you\'re strong in and spend extra time on challenging ones.'
        },
        {
            icon: Shield,
            title: 'Parent Progress Updates',
            description: 'Regular detailed reports shared with parents on performance, areas of improvement, and milestones achieved.'
        }
    ];

    const benefits = [
        { label: '100% Personalized', desc: 'Every session is tailored to the student\'s needs' },
        { label: 'Flexible Scheduling', desc: 'Choose your own timings and reschedule easily' },
        { label: 'Faster Results', desc: 'Students show 2x improvement compared to group classes' },
        { label: 'Complete Privacy', desc: 'One-on-one environment without any distractions' },
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                <div className="absolute top-0 left-0 -z-10 opacity-15">
                    <div className="w-[500px] h-[500px] bg-accent rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
                </div>
                <div className="absolute bottom-0 right-0 -z-10 opacity-10">
                    <div className="w-[400px] h-[400px] bg-accent rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-10 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                                <Star size={16} className="text-accent" />
                                <span className="text-accent text-sm font-semibold">PREMIUM PROGRAM</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                1-on-1 <span className="text-gradient">Mentorship</span>
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                The ultimate personalized learning experience. Your child gets a dedicated IIT/NIT
                                mentor who crafts a customized study plan, provides real-time doubt solving, and
                                ensures consistent academic growth — all at flexible timings.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">1:1</span>
                                    <span className="text-gray-400 text-sm">Personal Attention</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">2x</span>
                                    <span className="text-gray-400 text-sm">Faster Results</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">24/7</span>
                                    <span className="text-gray-400 text-sm">Doubt Support</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20know%20more%20about%201-on-1%20Mentorship"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-accent hover:bg-accent-hover text-black rounded-xl font-bold shadow-lg shadow-accent/30 transition-all transform hover:-translate-y-1 text-center"
                                >
                                    Book Demo →
                                </a>
                                <a
                                    href="tel:9123092443"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-accent rounded-xl font-semibold transition-all text-center"
                                >
                                    📞 Call Us Now
                                </a>
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
                                <video
                                    controls
                                    poster=""
                                    className="w-full aspect-video bg-gray-900 object-cover"
                                    preload="metadata"
                                >
                                    <source src="/assets/zenith one.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl blur-xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            What Makes Our <span className="text-gradient">Mentorship Special?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A truly personalized learning experience that adapts to your child
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                                    <feature.icon className="text-accent" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Comparison */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            Why <span className="text-gradient">1-on-1?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            The advantages of individual mentorship over traditional coaching
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all"
                            >
                                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Target className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            Your Journey to <span className="text-gradient">Excellence</span>
                        </h2>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Free Consultation', desc: 'We assess your child\'s current level, goals, and learning preferences.' },
                            { step: '02', title: 'Mentor Matching', desc: 'We pair your child with the best-fit IIT/NIT mentor for their needs.' },
                            { step: '03', title: 'Custom Plan', desc: 'A personalized study roadmap is crafted based on the student\'s goals.' },
                            { step: '04', title: 'Start Growing', desc: 'Begin 1-on-1 sessions with regular progress tracking and parent updates.' },
                        ].map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl font-black text-accent">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-10 -right-4 w-8 text-accent text-xl">
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                        Give Your Child the Best Mentorship
                    </h2>
                    <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                        Every topper had a great mentor behind them. Give your child the advantage
                        of personalized 1-on-1 guidance from IIT/NIT mentors. Book a free consultation today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%201-on-1%20Mentorship"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-black hover:bg-gray-900 text-accent rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 text-lg"
                        >
                            Book Free Consultation →
                        </a>
                        <Link
                            to="/"
                            className="px-10 py-4 bg-black/10 hover:bg-black/20 text-black border-2 border-black/30 rounded-xl font-semibold transition-all"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OneOnOneMentorship;
