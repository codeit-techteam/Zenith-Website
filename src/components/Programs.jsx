import React from 'react';
import { Users, UserCheck, TrendingUp } from 'lucide-react';
import ProgramCard from './ProgramCard';

const Programs = () => {
    const programs = [
        {
            title: 'Online Group Classes',
            description: 'Small batch (Max 8 students) focused on NCERT clarity & exam preparation.',
            icon: Users,
            badge: 'POPULAR',
            link: '/programs/online-group-classes'
        },
        {
            title: '1-on-1 Mentorship',
            description: 'Personalized learning, flexible timings & doubt solving.',
            icon: UserCheck,
            badge: 'POPULAR',
            link: '/programs/one-on-one-mentorship'
        },
        {
            title: 'Performance Tracking',
            description: 'Weekly tests, progress reports & structured improvement.',
            icon: TrendingUp,
            link: '/programs/performance-tracking'
        }
    ];

    return (
        <section id="programs" className="py-20 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Elite <span className="text-gradient">Programs</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Choose from our carefully designed programs to excel in academics
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={index}
                            icon={program.icon}
                            title={program.title}
                            description={program.description}
                            badge={program.badge}
                            buttonText="View Details"
                            link={program.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
