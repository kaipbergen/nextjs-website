'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MainNavProps } from './types';
declare module './types' {
    interface NavLink {
        description?: string;
    }
}

export default function MainNav({ items }: MainNavProps) {
const [activeMenu, setActiveMenu] = useState<string | null>(null);

return (
    <nav className="border-b">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <Link href="/" className="font-bold text-2xl">
            Logo
        </Link>

        <div className="hidden lg:flex space-x-8">
            {items.map((item) => (
            <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <Link
                href={item.href}
                className="py-8 hover:text-blue-600 transition-colors"
                >
                {item.title}
                </Link>

                {item.children && activeMenu === item.title && (
                <AnimatePresence>
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-screen max-w-md px-4"
                    >
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-6">
                        {item.children.map((child) => (
                            <Link
                            key={child.title}
                            href={child.href}
                            className="flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                            <div>
                                <p className="text-base font-medium text-gray-900">
                                {child.title}
                                </p>
                                {child.description && (
                                <p className="mt-1 text-sm text-gray-500">
                                    {child.description}
                                </p>
                                )}
                            </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                </AnimatePresence>
                )}
            </div>
            ))}
        </div>

        <button className="lg:hidden">
            <span className="sr-only">Open menu</span>
            {/* Add mobile menu icon here */}
        </button>
        </div>
    </div>
    </nav>
);
}

