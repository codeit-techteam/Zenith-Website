import React from 'react';

const ProgramCard = ({ icon: Icon, title, description, badge, buttonText = "Learn More" }) => {
    return (
        <div className="group relative bg-black border-2 border-white/20 rounded-2xl p-8 hover:border-accent yellow-glow-hover transition-all duration-300 transform hover:-translate-y-2">
            {/* Badge */}
            {badge && (
                <div className="absolute top-4 right-4">
                    <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full">
                        {badge}
                    </span>
                </div>
            )}

            {/* Icon */}
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon className="text-accent" size={32} />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

            {/* Button */}
            <button className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                {buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </button>
        </div>
    );
};

export default ProgramCard;
