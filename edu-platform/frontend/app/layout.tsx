import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "YBM - SAT, IELTS & University Admissions Platform",
description: "Comprehensive preparation platform for SAT, IELTS, and university admissions guidance for USA, Europe, and Hong Kong",
keywords: "SAT prep, IELTS preparation, university admissions, study abroad, education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">YBM</Link>
            <div className="hidden md:flex items-center space-x-8">
            <a href="/sat" className="hover:text-blue-600 transition-colors">SAT Prep</a>
            <a href="/ielts" className="hover:text-blue-600 transition-colors">IELTS</a>
            <a href="/universities" className="hover:text-blue-600 transition-colors">Universities</a>
            <a href="/community" className="hover:text-blue-600 transition-colors">Community</a>
            <a href="/login" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">Login</a>
            </div>
            <button className="md:hidden" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
        </nav>
        </header>
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="font-bold mb-4">YBM</h3>
                <p className="text-gray-600">Empowering students worldwide to achieve their academic goals.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                <li><a href="/sat" className="text-gray-600 hover:text-blue-600">SAT Preparation</a></li>
                <li><a href="/ielts" className="text-gray-600 hover:text-blue-600">IELTS Training</a></li>
                <li><a href="/universities" className="text-gray-600 hover:text-blue-600">University Guide</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <ul className="space-y-2">
                <li><a href="/community" className="text-gray-600 hover:text-blue-600">Forums</a></li>
                <li><a href="/community/events" className="text-gray-600 hover:text-blue-600">Events</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Get in Touch</a></li>
                <li><a href="/support" className="text-gray-600 hover:text-blue-600">Support</a></li>
                </ul>
            </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} YBM. All rights reserved.</p>
            </div>
        </div>
        </footer>
    </body>
    </html>
  );
}
