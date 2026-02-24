import React from 'react';
import { GraduationCap, Users, Target } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        About <span className="text-gradient">Zenith Edutech</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Zenith Edutech was founded in <span className="text-accent font-semibold">2020 during the lockdown</span> with a simple mission — to make India's best education accessible to every student.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We are a team of passionate educators from <span className="text-accent font-semibold">IITs, NITs and Tier-1 colleges</span> across India.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            At Zenith, students don't just study — they <span className="text-accent font-semibold">grow, evolve, and gain confidence</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-black border-2 border-accent/30 rounded-xl p-6 hover:border-accent yellow-glow-hover transition-all">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                <GraduationCap className="text-accent" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Founded 2020</h3>
                            <p className="text-gray-400">During lockdown with a vision</p>
                        </div>

                        <div className="bg-black border-2 border-accent/30 rounded-xl p-6 hover:border-accent yellow-glow-hover transition-all">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                <Users className="text-accent" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Hundreds+</h3>
                            <p className="text-gray-400">Students from Class 7-12</p>
                        </div>

                        <div className="bg-black border-2 border-accent/30 rounded-xl p-6 hover:border-accent yellow-glow-hover transition-all sm:col-span-2">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                                <Target className="text-accent" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                            <p className="text-gray-400">Strong foundation & exam clarity for every student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
