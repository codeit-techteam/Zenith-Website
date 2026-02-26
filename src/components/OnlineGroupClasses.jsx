import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, Clock, Target, Award, CheckCircle, Play } from 'lucide-react';

const OnlineGroupClasses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Maximum 8 students per batch ensuring personalized attention and active participation for every child.'
        },
        {
            icon: BookOpen,
            title: 'NCERT Focused',
            description: 'Complete NCERT curriculum coverage with in-depth concept clarity, solved examples, and practice exercises.'
        },
        {
            icon: Clock,
            title: 'Structured Schedule',
            description: 'Regular class timings with a well-planned curriculum that covers every chapter systematically.'
        },
        {
            icon: Target,
            title: 'Exam Preparation',
            description: 'Focused preparation for CBSE board exams, NTSE, Olympiads, and competitive entrance tests.'
        },
        {
            icon: Award,
            title: 'Expert IIT/NIT Mentors',
            description: 'Learn from mentors who have cracked the toughest exams and bring real exam strategies to every class.'
        },
        {
            icon: CheckCircle,
            title: 'Weekly Assessments',
            description: 'Regular tests and quizzes to track progress, identify weak areas, and ensure continuous improvement.'
        }
    ];

    const curriculum = [
        { subject: 'Mathematics', topics: 'Algebra, Geometry, Trigonometry, Calculus Basics, Statistics' },
        { subject: 'Physics', topics: 'Mechanics, Optics, Electricity, Magnetism, Modern Physics' },
        { subject: 'Chemistry', topics: 'Organic, Inorganic, Physical Chemistry, Chemical Reactions' },
        { subject: 'Biology', topics: 'Cell Biology, Genetics, Human Physiology, Ecology' },
    ];

    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 opacity-15">
                    <div className="w-[500px] h-[500px] bg-accent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                </div>
                <div className="absolute bottom-0 left-0 -z-10 opacity-10">
                    <div className="w-[400px] h-[400px] bg-accent rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
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
                                <Users size={16} className="text-accent" />
                                <span className="text-accent text-sm font-semibold">MOST POPULAR PROGRAM</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Online <span className="text-gradient">Group Classes</span>
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                Small batch interactive classes with maximum 8 students, led by IIT/NIT mentors.
                                Our structured approach ensures every student gets individual attention while
                                benefiting from collaborative group learning.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">8</span>
                                    <span className="text-gray-400 text-sm">Max Students</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">95%</span>
                                    <span className="text-gray-400 text-sm">Success Rate</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">3100+</span>
                                    <span className="text-gray-400 text-sm">Students Trained</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Online%20Group%20Classes"
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
                                    <source src="/assets/zenith 2.mp4" type="video/mp4" />
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
                            Why Choose <span className="text-gradient">Group Classes?</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A perfect blend of individual attention and collaborative learning
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

            {/* Curriculum Overview */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            Subjects We <span className="text-gradient">Cover</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive coverage across all major subjects for classes 6-12
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {curriculum.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                                    <h3 className="text-xl font-bold text-white">{item.subject}</h3>
                                </div>
                                <p className="text-gray-400 pl-7">{item.topics}</p>
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
                            How It <span className="text-gradient">Works</span>
                        </h2>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Book a Demo', desc: 'Schedule a free demo class to experience our teaching methodology.' },
                            { step: '02', title: 'Get Matched', desc: 'We assign you to a batch based on your class, subject needs & timing.' },
                            { step: '03', title: 'Start Learning', desc: 'Join interactive live sessions with your IIT/NIT mentor and peers.' },
                            { step: '04', title: 'Track Progress', desc: 'Receive weekly reports, test scores & personalized improvement tips.' },
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
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                        Join 3100+ students who are already excelling with Zenith's Online Group Classes.
                        Book a free demo today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20for%20Online%20Group%20Classes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-black hover:bg-gray-900 text-accent rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 text-lg"
                        >
                            Book Free Demo →
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

export default OnlineGroupClasses;
