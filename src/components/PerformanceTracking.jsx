import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BarChart3, FileText, Target, ClipboardCheck, BrainCircuit, LineChart, Award } from 'lucide-react';

const PerformanceTracking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: ClipboardCheck,
            title: 'Weekly Assessments',
            description: 'Carefully designed weekly tests covering recent topics to measure understanding and retention continuously.'
        },
        {
            icon: BarChart3,
            title: 'Detailed Progress Reports',
            description: 'Comprehensive reports shared with parents highlighting strengths, weak areas, and improvement trends over time.'
        },
        {
            icon: Target,
            title: 'Goal-Based Tracking',
            description: 'Set academic targets and track progress towards them — whether it\'s board exams, Olympiads, NTSE, or JEE/NEET Foundation.'
        },
        {
            icon: BrainCircuit,
            title: 'Weakness Identification',
            description: 'AI-assisted analysis pinpoints exact topics and concepts where the student needs more practice and attention.'
        },
        {
            icon: LineChart,
            title: 'Performance Analytics',
            description: 'Visual dashboards showing score trends, accuracy rates, time management, and comparative performance.'
        },
        {
            icon: Award,
            title: 'Milestone Rewards',
            description: 'Students earn recognition and rewards for hitting milestones — keeping them motivated throughout their journey.'
        }
    ];

    const trackingMetrics = [
        { metric: 'Test Scores', desc: 'Track improvement in weekly test scores across all subjects' },
        { metric: 'Concept Mastery', desc: 'Monitor how well each topic and concept has been understood' },
        { metric: 'Time Management', desc: 'Analyze time spent per question to build exam-ready speed' },
        { metric: 'Attendance & Engagement', desc: 'Track class attendance, homework completion, and participation' },
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
                                <TrendingUp size={16} className="text-accent" />
                                <span className="text-accent text-sm font-semibold">DATA-DRIVEN GROWTH</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Performance <span className="text-gradient">Tracking</span>
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                Know exactly where your child stands. Our structured performance tracking system
                                provides weekly assessments, detailed progress reports, and actionable insights
                                to ensure continuous academic improvement.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">Weekly</span>
                                    <span className="text-gray-400 text-sm">Assessments</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">100%</span>
                                    <span className="text-gray-400 text-sm">Transparent</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                                    <span className="text-accent font-bold text-xl">Real-time</span>
                                    <span className="text-gray-400 text-sm">Reports</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Performance%20Tracking"
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

                        {/* Stats Visual */}
                        <div className="relative">
                            <div className="relative z-10 bg-white/[0.03] border-2 border-accent/30 rounded-2xl p-8 shadow-2xl shadow-accent/10">
                                <h3 className="text-xl font-bold text-white mb-6">Sample Progress Dashboard</h3>
                                <div className="space-y-5">
                                    {[
                                        { subject: 'Mathematics', score: 92, color: 'bg-accent' },
                                        { subject: 'Physics', score: 85, color: 'bg-blue-500' },
                                        { subject: 'Chemistry', score: 78, color: 'bg-green-500' },
                                    ].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-300 font-medium">{item.subject}</span>
                                                <span className="text-accent font-bold">{item.score}%</span>
                                            </div>
                                            <div className="w-full bg-white/10 rounded-full h-3">
                                                <div
                                                    className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                                                    style={{ width: `${item.score}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    <div className="bg-white/5 rounded-lg p-3 text-center">
                                        <p className="text-accent font-bold text-xl">86%</p>
                                        <p className="text-gray-400 text-xs">Overall Score</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 text-center">
                                        <p className="text-green-400 font-bold text-xl">+12%</p>
                                        <p className="text-gray-400 text-xs">Improvement</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 text-center">
                                        <p className="text-blue-400 font-bold text-xl">Top 10</p>
                                        <p className="text-gray-400 text-xs">Batch Rank</p>
                                    </div>
                                </div>
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
                            How We Track <span className="text-gradient">Your Growth</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A comprehensive system to monitor, analyze, and accelerate academic progress
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

            {/* What We Track */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                            What We <span className="text-gradient">Measure</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Key metrics we track to ensure your child is on the path to success
                        </p>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {trackingMetrics.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all"
                            >
                                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <FileText className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.metric}</h3>
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
                            The Tracking <span className="text-gradient">Process</span>
                        </h2>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Baseline Test', desc: 'We assess your child\'s current academic standing across all subjects.' },
                            { step: '02', title: 'Weekly Tests', desc: 'Regular chapter-wise and cumulative tests to track learning progress.' },
                            { step: '03', title: 'Detailed Reports', desc: 'Parents receive comprehensive reports with scores, analysis & recommendations.' },
                            { step: '04', title: 'Action Plan', desc: 'Mentors adjust the study plan based on performance data for optimal growth.' },
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
                        Track Your Child's Growth Today
                    </h2>
                    <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
                        Don't let your child fall behind. Get structured weekly assessments,
                        transparent progress reports, and a clear path to academic excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919123092443?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Performance%20Tracking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-black hover:bg-gray-900 text-accent rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 text-lg"
                        >
                            Get Started →
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

export default PerformanceTracking;
