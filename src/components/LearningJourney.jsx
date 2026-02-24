import React from 'react';

const LearningJourney = () => {
    const steps = [
        {
            title: 'Learn Core Concepts',
            desc: 'Start with the fundamentals via live classes and interactive content designed for deep understanding.',
        },
        {
            title: 'Practice & Build',
            desc: 'Apply what you learn by building mini-projects and solving coding challenges on our platform.',
        },
        {
            title: 'Capstone Project',
            desc: 'Work on an industry-level major project, simulating real work environment.',
        },
        {
            title: 'Get Hired',
            desc: 'Sit for placements drives, crack the interviews, and sign your offer letter.',
        },
    ];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Your Learning <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A structured path from beginner to industry-ready professional.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent-purple to-accent-teal hidden md:block rounded-full"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">

                                {/* Left Side (Text for even, spacer for odd) */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right pr-8' : 'order-1 md:order-last pl-8'}`}>
                                    {index % 2 === 0 && (
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                                            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                            <p className="text-slate-600 text-sm">{step.desc}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary z-10 hidden md:flex items-center justify-center shadow-lg">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>

                                {/* Right Side (Text for odd, spacer for even) */}
                                <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'pr-8' : 'pl-8'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
                                            <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                            <p className="text-slate-600 text-sm">{step.desc}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile View: Simple Stack */}
                                <div className="md:hidden w-full pl-8 border-l-4 border-primary/20 relative ml-4">
                                    <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mb-8">
                                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningJourney;
