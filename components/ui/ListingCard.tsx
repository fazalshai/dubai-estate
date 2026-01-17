'use client';

import { motion } from 'framer-motion';

interface ListingProps {
    title: string;
    price: string;
    features: string[];
    type: 'bed-space' | 'couple' | 'premium';
}

export default function ListingCard({ title, price, features, type }: ListingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl text-gold-900 pointer-events-none -mr-10 -mt-10">
                {type === 'bed-space' ? 'BS' : type === 'couple' ? 'CS' : 'PR'}
            </div>

            <h3 className="text-2xl font-bold text-gold-100 mb-2">{title}</h3>
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-500 mb-6">
                {price} <span className="text-sm text-gray-400 font-normal">/ month</span>
            </div>

            <ul className="space-y-3 mb-8 text-gray-300">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="w-full py-3 border border-gold-500/30 rounded-lg text-gold-300 hover:bg-gold-500 hover:text-black transition-all font-bold uppercase tracking-wider group-hover:shadow-[0_0_20px_rgba(243,212,102,0.3)]">
                Enquire Now
            </button>
        </motion.div>
    );
}
