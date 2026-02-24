import React from 'react';
import { Star, Quote } from 'lucide-react';

const Results = () => {
    const testimonials = [
        {
            name: "Sneha K.",
            class: "Class 10",
            score: "95%",
            subject: "CBSE Boards",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
            text: "Zenith's mentorship was the game changer. My grades improved steadily and I gained confidence."
        },
        {
            name: "Aarav S.",
            class: "Class 9",
            score: "AIR 127",
            subject: "NTSE Stage 1",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aarav",
            text: "The interactive doubt sessions are game changers. Rohit sir explains concepts so clearly!"
        },
        {
            name: "Diya M.",
            class: "Class 11",
            score: "98%",
            subject: "JEE Foundation",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=diya",
            text: "Best decision ever! The 1-on-1 mentorship helped me build a strong foundation for JEE."
        },
        {
            name: "Arjun P.",
            class: "Class 8",
            score: "Gold Medal",
            subject: "Science Olympiad",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjunp",
            text: "Amazing teachers and structured curriculum. I won gold in the Science Olympiad!"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Proven <span className="text-gradient">Results</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Success stories from our students
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-black border-2 border-white/20 rounded-2xl p-8 hover:border-accent yellow-glow-hover transition-all">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="relative flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1">
                                        <Star size={12} fill="#000000" stroke="#000000" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                                    <p className="text-gray-400 text-sm">{testimonial.class}</p>
                                </div>

                                <Quote className="text-accent/30" size={32} />
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                <div>
                                    <p className="text-gray-400 text-sm">{testimonial.subject}</p>
                                </div>
                                <div className="bg-accent/10 border border-accent px-4 py-2 rounded-lg">
                                    <p className="text-accent font-bold text-lg">{testimonial.score}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">95%</div>
                        <p className="text-gray-400">Success Rate</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
                        <p className="text-gray-400">Students</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">200+</div>
                        <p className="text-gray-400">Top Ranks</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">4.9★</div>
                        <p className="text-gray-400">Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
