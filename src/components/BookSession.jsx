import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const BookSession = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Encode the booking details into the 'program' field since we reuse the leads table
            const bookingDetails = `Booking: ${formData.date} at ${formData.time}`;

            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        program: bookingDetails, // Saving booking info in program column
                        phone: 'Not Provided' // Default to satisfy requirements if any, or leave null if allowed. Assuming table allows nulls or we provide dummy.
                    }
                ]);

            if (error) throw error;

            setSubmitStatus('success');
            setFormData({ name: '', email: '', date: '', time: '' });
            setTimeout(() => setSubmitStatus(null), 6000);
        } catch (error) {
            console.error('Error booking session:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div className="space-y-8">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent-teal/20 text-accent-teal text-sm font-bold tracking-wide uppercase border border-accent-teal/20">
                                1:1 Counseling
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Book a Free <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-primary">Online Session</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Confused about which domain to choose? Schedule a free 15-minute video consultation with our senior mentorship team.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-accent-teal" size={20} />
                                    <span>Profile analysis & career roadmap</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-accent-teal" size={20} />
                                    <span>Detailed program walkthrough</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <CheckCircle2 className="text-accent-teal" size={20} />
                                    <span>Scholarship eligibility check</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Video className="text-primary" size={24} />
                                Reserve Your Spot
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                required
                                                className="w-full px-4 py-2 pl-10 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                            <Calendar className="absolute left-3 top-2.5 text-slate-400" size={18} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
                                        <div className="relative">
                                            <input
                                                type="time"
                                                required
                                                className="w-full px-4 py-2 pl-10 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                            <Clock className="absolute left-3 top-2.5 text-slate-400" size={18} />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 mt-2 bg-gradient-to-r from-primary to-primary-hover text-white rounded-xl font-bold shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Confirming...
                                        </>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center font-medium animate-fadeIn">
                                        Booking Confirmed! Check your email.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center font-medium animate-fadeIn">
                                        Booking Failed. Try again.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSession;
