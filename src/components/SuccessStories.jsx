import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const SuccessStories = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            if (direction === 'left') {
                current.scrollLeft -= 300;
            } else {
                current.scrollLeft += 300;
            }
        }
    }

    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'Full Stack Dev',
            quote: "The mentorship was a game changer. My mentor helped me optimize my code and my resume. I cracked my first interview just 3 weeks after graduating!",
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
        },
        {
            name: 'David Miller',
            role: 'Data Scientist',
            quote: "The projects were very close to real-world scenarios. The hands-on practice gave me talking points for every interview. I felt confident.",
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
        },
        {
            name: 'Priya Rao',
            role: 'Frontend Dev',
            quote: "Coming from a non-tech background, the structured learning path and 24/7 support made it possible for me to learn coding. Highly recommend!",
            rating: 5,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
        },
        {
            name: 'James Wilson',
            role: 'Cloud Engineer',
            quote: "Zenith's placement team is rigorous. They prepared me for behavioral rounds that I usually failed. Now I work at a top fintech firm.",
            rating: 4,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Student Success Stories
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x scroll-smooth hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((story, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 snap-center relative"
                        >
                            <Quote className="absolute top-8 right-8 text-slate-200 fill-current" size={40} />

                            <div className="flex items-center gap-4 mb-6">
                                <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{story.name}</h4>
                                    <p className="text-xs text-slate-500">{story.role}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 italic mb-6 leading-relaxed">
                                "{story.quote}"
                            </p>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < story.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
