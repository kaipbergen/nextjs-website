'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

interface MenuItem {
title: string;
href: string;
submenu?: {
    title: string;
    items: {
    name: string;
    description?: string;
    href: string;
    }[];
}[];
}

const menuItems: MenuItem[] = [
{
    title: 'Programs',
    href: '/programs',
    submenu: [
    {
        title: 'Test Prep',
        items: [
        { name: 'SAT Prep', description: 'Comprehensive SAT preparation', href: '/programs/sat' },
        { name: 'ACT Prep', description: 'Expert ACT tutoring', href: '/programs/act' },
        { name: 'GRE Prep', description: 'Graduate school test prep', href: '/programs/gre' },
        ],
    },
    {
        title: 'Academic Tutoring',
        items: [
        { name: 'Math', description: 'All levels of mathematics', href: '/tutoring/math' },
        { name: 'Science', description: 'Physics, Chemistry, Biology', href: '/tutoring/science' },
        { name: 'English', description: 'Writing and Literature', href: '/tutoring/english' },
        ],
    },
    ],
},
{
    title: 'About',
    href: '/about',
    submenu: [
    {
        title: 'Our Company',
        items: [
        { name: 'Team', href: '/about/team' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Careers', href: '/about/careers' },
        ],
    },
    ],
},
{ title: 'Resources', href: '/resources' },
{ title: 'Contact', href: '/contact' },
];

export default function Navigation() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

return (
    <nav className="w-full">
    {/* Top Bar */}
    <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <a href="tel:1234567890" className="flex items-center space-x-2 text-sm hover:text-gray-300">
            <FaPhone className="h-4 w-4" />
            <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center space-x-2 text-sm hover:text-gray-300">
            <FaEnvelope className="h-4 w-4" />
            <span>info@example.com</span>
            </a>
        </div>
        <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin className="h-4 w-4" /></a>
        </div>
        </div>
    </div>

    {/* Main Navigation */}
    <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
            <div className="relative w-40 h-12">
                {/* Replace with your actual logo */}
                <div className="text-2xl font-bold">LOGO</div>
            </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
                <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
                >
                <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 py-8 px-4"
                >
                    {item.title}
                </Link>

                {/* Mega Menu */}
                {item.submenu && activeSubmenu === item.title && (
                    <div className="absolute top-full left-0 w-screen max-w-7xl mx-auto bg-white shadow-lg p-8 z-50">
                    <div className="grid grid-cols-2 gap-8">
                        {item.submenu.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-4">
                            {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                <Link
                                    href={subItem.href}
                                    className="block text-gray-600 hover:text-blue-600"
                                >
                                    <span className="font-medium">{subItem.name}</span>
                                    {subItem.description && (
                                    <p className="text-sm text-gray-500">{subItem.description}</p>
                                    )}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                </div>
            ))}
            </div>

            {/* Mobile menu button */}
            <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
            ) : (
                <HiMenu className="h-6 w-6" />
            )}
            </button>
        </div>
        </div>

        <MobileMenu
        isOpen={isMobileMenuOpen}
        menuItems={menuItems}
        onClose={() => setIsMobileMenuOpen(false)}
        />
    </div>
    </nav>
);
}

