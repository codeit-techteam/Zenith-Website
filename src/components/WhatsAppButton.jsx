import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '919123092443'; // WhatsApp number without + or spaces
    const message = 'Hi! I would like to book a free demo class.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-black border-2 border-accent p-4 rounded-full yellow-glow hover:yellow-glow-hover transition-all duration-300 transform hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle
                size={28}
                className="text-accent group-hover:rotate-12 transition-transform duration-300"
            />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black border border-accent px-3 py-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us!
            </span>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-75"></span>
        </a>
    );
};

export default WhatsAppButton;
