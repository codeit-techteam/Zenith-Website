import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/ZENITH.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Programs', href: '#programs' },
        { name: 'Faculties', href: '#faculties' },
        { name: 'Results', href: '#results' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className="fixed w-full z-50 glass-dark border-b border-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Zenith Edutech"
                            className="h-10 w-auto object-contain"
                        />
                        <span className="hidden sm:inline-block px-3 py-1 bg-accent/10 border border-accent rounded-full text-accent text-xs font-bold">
                            Since 2020
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium text-sm"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:9123092443" className="text-accent hover:text-accent-hover flex items-center gap-2 font-semibold">
                            <Phone size={18} />
                            Call Now
                        </a>
                        <button className="bg-accent hover:bg-accent-hover text-black px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 yellow-glow">
                            Book Demo
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass-dark border-t border-accent/20 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="tel:9123092443" className="text-accent hover:text-accent-hover flex items-center gap-2 px-3 py-2 font-semibold">
                            <Phone size={18} />
                            Call Now
                        </a>
                        <button className="w-full mt-4 bg-accent text-black px-6 py-3 rounded-lg font-bold yellow-glow">
                            Book Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
