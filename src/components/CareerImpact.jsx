import React from 'react';

const CareerImpact = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Career Impact
                        </h2>
                        <p className="text-slate-600 text-lg">
                            We don't just teach code; we launch careers. Our alumni work at the world's most innovative companies.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-4xl font-bold text-primary mb-1">58%</h3>
                                <p className="text-sm text-slate-500">Average Salary Hike</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-4xl font-bold text-primary mb-1">1200+</h3>
                                <p className="text-sm text-slate-500">Careers Launched</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-4xl font-bold text-primary mb-1">450+</h3>
                                <p className="text-sm text-slate-500">Hiring Partners</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-4xl font-bold text-primary mb-1">₹8.5L</h3>
                                <p className="text-sm text-slate-500">Average CTC</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Our Alumni Work At</p>
                        <div className="grid grid-cols-3 gap-8 text-center items-center opacity-70">
                            <span className="font-bold text-xl text-slate-600">Google</span>
                            <span className="font-bold text-xl text-slate-600">Microsoft</span>
                            <span className="font-bold text-xl text-slate-600">Amazon</span>
                            <span className="font-bold text-xl text-slate-600">Tesla</span>
                            <span className="font-bold text-xl text-slate-600">Uber</span>
                            <span className="font-bold text-xl text-slate-600">Netflix</span>
                            <span className="font-bold text-xl text-slate-600">Adobe</span>
                            <span className="font-bold text-xl text-slate-600">Spotify</span>
                            <span className="font-bold text-xl text-slate-600">Meta</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareerImpact;
