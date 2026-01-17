'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-sm">
            <div className="text-2xl font-bold tracking-tighter text-gold-200">
                DUBAI<span className="text-gold-500">ESTATE</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gold-100 uppercase">
                {['Residences', 'Bed Space', 'Couple Sharing', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                        {item}
                    </a>
                ))}
                <button className="px-5 py-2 text-black bg-gold-400 rounded-full hover:bg-gold-300 transition-colors font-bold">
                    Book View
                </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-gold-200" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 right-0 p-6 bg-black/90 backdrop-blur-xl border-b border-gold-800 flex flex-col gap-4 text-center"
                >
                    {['Residences', 'Bed Space', 'Couple Sharing', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-gold-100 uppercase py-2">
                            {item}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
