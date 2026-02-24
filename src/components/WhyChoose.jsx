import React from 'react';
import { Target, Users, Clock, Briefcase } from 'lucide-react';

const WhyChoose = () => {
    const features = [
        {
            icon: <Target size={32} className="text-primary" />,
            title: 'Project-Based Learning',
            desc: 'Build 10+ industry-standard projects. Don\'t just learn syntax, learn how to build products.',
        },
        {
            icon: <Users size={32} className="text-accent-teal" />,
            title: '1:1 Mentorship',
            desc: 'Get personalized guidance from mentors working at Google, Microsoft, and Amazon.',
        },
        {
            icon: <Clock size={32} className="text-accent-purple" />,
            title: '24/7 Support',
            desc: 'Stuck on a bug? Our teaching assistants are available round the clock to unblock you.',
        },
        {
            icon: <Briefcase size={32} className="text-amber-500" />,
            title: 'Career Support',
            desc: 'Resume reviews, mock interviews, and direct referrals to our 500+ hiring partners.',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Why Choose <span className="text-primary">Zenith</span>?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We focus on outcomes. Our curriculum is backward-engineered from job descriptions of top tech companies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
