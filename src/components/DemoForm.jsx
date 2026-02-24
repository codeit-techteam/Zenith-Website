import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const DemoForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        class: '',
        subject: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const { data, error } = await supabase
                .from('demo_requests')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        class: parseInt(formData.class),
                        subject: formData.subject
                    }
                ]);

            if (error) throw error;

            setStatus({
                type: 'success',
                message: 'Thank you for booking your free demo class! 🎉 Our team will contact you within 24 hours to schedule your session with an expert mentor.'
            });
            setFormData({ name: '', phone: '', class: '', subject: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or call us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Info */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Ready to <span className="text-gradient">Top?</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Join the league of toppers today. Book your free demo class and experience the Zenith difference.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="text-accent" size={24} />
                                </div>
                                <p className="text-gray-300">Free demo class with IIT/NIT mentor</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="text-accent" size={24} />
                                </div>
                                <p className="text-gray-300">Personalized learning plan</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="text-accent" size={24} />
                                </div>
                                <p className="text-gray-300">No commitment required</p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-accent/10 border border-accent rounded-xl">
                            <p className="text-white font-semibold mb-2">Or call us directly:</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:9123092443" className="text-accent font-bold text-lg hover:text-accent-hover transition-colors">
                                    📞 +91 9123092443
                                </a>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">LIMITED SEATS AVAILABLE FOR THIS BATCH</p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-black border-2 border-accent/30 rounded-2xl p-8 yellow-glow">
                        <h3 className="text-2xl font-bold text-white mb-6">Book Free Demo Class</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Student Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Enter student's full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-white font-medium mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="10-digit mobile number"
                                />
                            </div>

                            <div>
                                <label htmlFor="class" className="block text-white font-medium mb-2">
                                    Class *
                                </label>
                                <select
                                    id="class"
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="" className="bg-black">Select class</option>
                                    {[7, 8, 9, 10, 11, 12].map(cls => (
                                        <option key={cls} value={cls} className="bg-black">Class {cls}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Subject Interest *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="" className="bg-black">Select subject</option>
                                    <option value="Math" className="bg-black">Mathematics</option>
                                    <option value="Science" className="bg-black">Science</option>
                                    <option value="Both" className="bg-black">Both (Math & Science)</option>
                                    <option value="All Subjects" className="bg-black">All Subjects</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent hover:bg-accent-hover text-black font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 yellow-glow"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>
                                        Book Free Demo Class
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Status Messages */}
                        {status.message && (
                            <div className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${status.type === 'success'
                                ? 'bg-green-500/10 border border-green-500/30'
                                : 'bg-red-500/10 border border-red-500/30'
                                }`}>
                                {status.type === 'success' ? (
                                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                ) : (
                                    <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                                )}
                                <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                                    {status.message}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoForm;
