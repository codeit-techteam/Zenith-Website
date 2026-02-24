import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import heroImg from '../assets/kid2.png';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-black">
            {/* Background yellow glow effects */}
            <div className="absolute top-0 right-0 -z-10 opacity-20">
                <div className="w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-20">
                <div className="w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left space-y-8">
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                            Get an IITian Mentor for{' '}
                            <span className="text-gradient">Your Child</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            Founded in 2020, Zenith provides <span className="text-accent font-semibold">IIT/NIT mentorship</span> for CBSE, NTSE, Olympiads, IIT-JEE & NEET Foundation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-black rounded-xl font-bold shadow-lg shadow-accent/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Book Free Demo
                                <ArrowRight size={20} />
                            </button>
                            <a href="tel:6291813121" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-accent rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group">
                                <Phone size={20} className="group-hover:text-accent transition-colors" />
                                Call Us Now
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-accent bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Student" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-300">
                                Trusted by <span className="font-bold text-accent">500+</span> students
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 bg-white/5 p-2 rounded-2xl border-2 border-accent/30 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={heroImg}
                                alt="Student learning with Zenith"
                                className="rounded-xl w-full object-contain h-[400px] lg:h-[500px]"
                            />

                            {/* Floating cards */}
                            <div className="absolute -bottom-6 -left-6 bg-black border-2 border-accent p-4 rounded-xl shadow-xl yellow-glow animate-bounce duration-[3000ms]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Success Rate</p>
                                        <p className="font-bold text-accent">95%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent/20 rounded-full -z-10 animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/10 rounded-full -z-20 animate-[spin_80s_linear_infinite_reverse]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
