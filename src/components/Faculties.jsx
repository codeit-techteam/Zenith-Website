import React from 'react';
import { Phone } from 'lucide-react';
import shoaibPhoto from '../assets/shoaib.jpg';

const Faculties = () => {
    const mentors = [
        {
            name: "Shoaib",
            college: "IIT Madras",
            specialization: "CBSE, NTSE, Olympiads & IIT-JEE/NEET Foundation",
            experience: "6+ years",
            image: shoaibPhoto,
            featured: true,
            phone1: "9123092443"
        },
        {
            name: "Gouhar Shakil",
            college: "NIT Andhra Pradesh",
            specialization: "Maths Mentor",
            qualification: "B.Tech",
            image: "/assets/gouhar.jpg",
            featured: false
        },
        {
            name: "Arjun Chatterjee",
            college: "NIT Durgapur",
            specialization: "Physics Mentor",
            qualification: "B.Tech",
            image: "/assets/arjun-chatterjee.jpg",
            featured: false
        },
        {
            name: "Sumit Prasad",
            college: "IIT Bombay",
            specialization: "Physics & Chemistry Mentor",
            qualification: "CSE",
            image: "/assets/sumit.jpg",
            featured: false
        },
        {
            name: "Saqlean Zafar",
            college: "NIT Durgapur",
            specialization: "Chemistry Mentor",
            qualification: "B.Tech",
            image: "/assets/saqlean.jpg",
            featured: false
        }
    ];

    return (
        <section id="faculties" className="py-20 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Master <span className="text-gradient">Faculty</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Learn directly from IIT & NIT toppers
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                </div>

                {/* Featured Mentor - Shoaib */}
                <div className="mb-16 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent rounded-2xl p-8 lg:p-12">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent yellow-glow">
                                    <img src={mentors[0].image} alt={mentors[0].name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">
                                    IIT Madras
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-white mb-2">Hello, I'm {mentors[0].name}</h3>
                                <p className="text-accent font-semibold mb-4">{mentors[0].college} Graduate</p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    An IIT Madras graduate currently teaching CBSE boards, NTSE, Olympiads and IIT-JEE/NEET Foundation students.
                                    <br />
                                    With <span className="text-accent font-semibold">{mentors[0].experience}</span> of experience, I focus on concept clarity and long-term academic excellence.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <a href={`tel:${mentors[0].phone1}`} className="flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                                        <Phone size={18} />
                                        {mentors[0].phone1}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Mentors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.slice(1).map((mentor, index) => (
                        <div key={index} className="bg-black border-2 border-white/20 rounded-2xl p-6 hover:border-accent yellow-glow-hover transition-all transform hover:-translate-y-2">
                            <div className="relative mb-6">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/50 mx-auto">
                                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-accent text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                    {mentor.college}
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                                <p className="text-accent font-semibold text-sm mb-1">{mentor.specialization}</p>
                                <p className="text-gray-400 text-sm">{mentor.qualification} - {mentor.college}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculties;
