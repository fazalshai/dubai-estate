import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Dubai Estate - Trillion Dirham Living',
    description: 'Experience the pinnacle of luxury living in Dubai.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body className="antialiased bg-black text-gold-100">
                {children}
            </body>
        </html>
    );
}
