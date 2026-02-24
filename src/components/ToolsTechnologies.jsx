import React from 'react';
import { Database, Cloud, Code2, Terminal, Cpu, Globe } from 'lucide-react';

const ToolsTechnologies = () => {
    const tools = [
        { name: 'Python', icon: <Terminal size={24} /> },
        { name: 'React', icon: <Code2 size={24} /> },
        { name: 'AWS', icon: <Cloud size={24} /> },
        { name: 'MongoDB', icon: <Database size={24} /> },
        { name: 'Docker', icon: <Globe size={24} /> },
        { name: 'TensorFlow', icon: <Cpu size={24} /> },
    ];

    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                    Master the tools used by top companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300 font-semibold text-xl group cursor-default">
                            <span className="group-hover:scale-110 transition-transform">{tool.icon}</span>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsTechnologies;
