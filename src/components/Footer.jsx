import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/ZENITH.jpeg';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-accent/20 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-4">
                        <img
                            src={logo}
                            alt="Zenith Edutech"
                            className="h-12 w-auto object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students with IIT/NIT mentorship for CBSE, NTSE, Olympiads, and competitive exam preparation.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
                            <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
                            <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
                            <Linkedin size={20} className="hover:text-accent cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-accent cursor-pointer transition-colors">Online Group Classes</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">1-on-1 Mentorship</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">Performance Tracking</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">CBSE Foundation</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-accent cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">Our Faculties</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">Success Stories</li>
                            <li className="hover:text-accent cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-accent" />
                                <a href="tel:6291813121" className="hover:text-accent transition-colors">+91 6291813121</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-accent" />
                                <a href="tel:9681341693" className="hover:text-accent transition-colors">+91 9681341693</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-accent" />
                                <a href="mailto:info@zenith.edu" className="hover:text-accent transition-colors">info@zenith.edu</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>© 2026 Zenith Edutech. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Made with <span className="text-accent">❤️</span> for education</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
