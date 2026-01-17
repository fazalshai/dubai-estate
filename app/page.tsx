import Scene from '@/components/canvas/Scene';
import Navbar from '@/components/ui/Navbar';
import ChatWidget from '@/components/ui/ChatWidget';
import ListingCard from '@/components/ui/ListingCard';

export default function Home() {
    return (
        <main className="relative w-full min-h-screen overflow-hidden">
            <Scene />

            {/* Hero Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center pointer-events-none">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gold-400 drop-shadow-2xl">
                    DUBAI<br />ESTATE
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gold-100/80 font-light tracking-widest uppercase">
                    Trillion Dirham Living
                </p>

                <div className="mt-12 pointer-events-auto">
                    <button className="px-8 py-4 bg-gold-600/20 backdrop-blur-md border border-gold-400/50 text-gold-100 uppercase tracking-widest hover:bg-gold-500/30 transition-all rounded-full glass-card hover:scale-105 active:scale-95">
                        Explore Residences
                    </button>
                </div>
            </div>

            {/* UI Overlay */}
            <Navbar />
            <ChatWidget />

            {/* Content Sections */}
            <div className="relative z-10 bg-gradient-to-b from-transparent via-black/80 to-black">

                {/* Listings Section */}
                <section id="bed-space" className="py-20 px-6 max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-gold-100 uppercase tracking-widest mb-4">Premium Living</h2>
                        <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ListingCard
                            title="Luxury Bed Space"
                            price="AED 1,500"
                            type="bed-space"
                            features={['High-speed WiFi', 'Gym Access', 'Weekly Cleaning', 'Metro Access']}
                        />
                        <ListingCard
                            title="Couple Master Suite"
                            price="AED 3,500"
                            type="couple"
                            features={['En-suite Bathroom', 'Balcony View', 'Pool Access', 'Dedicated Parking']}
                        />
                        <ListingCard
                            title="Executive Studio"
                            price="AED 5,000"
                            type="premium"
                            features={['Smart Home System', 'Full Kitchen', 'Concierge 24/7', 'Sea View']}
                        />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6 bg-gold-900/10 backdrop-blur-sm border-t border-gold-900/30">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gold-200 mb-6">Secure Your Space Today</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Experience the pinnacle of Dubai living. Contact us directly for exclusive viewings and offers.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a href="tel:+971552384081" className="flex items-center gap-3 px-8 py-4 bg-gold-600 text-black font-bold rounded-xl hover:bg-gold-500 transition-colors">
                                <span>Call +971 55 238 4081</span>
                            </a>
                            <button className="flex items-center gap-3 px-8 py-4 glass text-gold-200 font-bold rounded-xl hover:bg-white/5 transition-colors">
                                <span>WhatsApp Enquiry</span>
                            </button>
                        </div>
                    </div>
                </section>

                <footer className="py-8 text-center text-sm text-gray-600 border-t border-white/5">
                    &copy; 2026 Dubai Estate. All rights reserved.
                </footer>
            </div>
        </main>
    );
}
