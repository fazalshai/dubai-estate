'use client';

import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Welcome to Dubai Estate. How can I assist you with your luxury living requirements today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: 'Thank you for your enquiry. Our luxury agent will contact you shortly at +971552384081.' }]);
        }, 1000);
        setInput('');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-80 md:w-96 glass-card rounded-2xl overflow-hidden flex flex-col h-[500px]"
                    >
                        <div className="p-4 bg-gold-900/50 border-b border-gold-800 flex justify-between items-center">
                            <div className="font-bold text-gold-100 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Dubai Estate AI
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === 'user'
                                            ? 'bg-gold-600 text-black rounded-tr-none'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border-t border-gold-800/50 bg-black/40 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about availability..."
                                className="flex-1 bg-transparent border border-gold-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500"
                            />
                            <button onClick={handleSend} className="p-2 bg-gold-600 rounded-lg text-black hover:bg-gold-500 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center shadow-[0_0_20px_rgba(235,183,0,0.5)] hover:scale-110 transition-transform"
            >
                {isOpen ? <X color="black" /> : <MessageSquare color="black" />}
            </button>
        </div>
    );
}
