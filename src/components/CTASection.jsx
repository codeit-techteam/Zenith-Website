import React from 'react';
import { Download, Rocket } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="bg-gradient-to-r from-primary to-accent-purple rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Ready to upgrade your career?
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Join the next cohort and start your journey towards a high-paying tech career. Applications close in 2 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary hover:bg-blue-50 rounded-xl font-bold shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Apply Now
                            <Rocket size={20} />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                            Download Brochure
                            <Download size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
