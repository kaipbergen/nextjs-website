'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { TopNavProps } from './types';

const socialIcons = {
facebook: FaFacebook,
twitter: FaTwitter,
instagram: FaInstagram,
linkedin: FaLinkedin,
};

export default function TopNav({ phone, email, socialLinks }: TopNavProps) {
return (
    <div className="bg-gray-100 text-sm py-2 hidden md:block">
    <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
            <a 
            href={`tel:${phone}`} 
            className="flex items-center hover:text-blue-600 transition-colors"
            >
            <FaPhone className="mr-2 h-4 w-4" />
            <span>{phone}</span>
            </a>
            <a 
            href={`mailto:${email}`}
            className="flex items-center hover:text-blue-600 transition-colors"
            >
            <FaEnvelope className="mr-2 h-4 w-4" />
            <span>{email}</span>
            </a>
        </div>
        <div className="flex items-center space-x-4">
            {socialLinks.map(({ platform, url }) => {
            const Icon = socialIcons[platform];
            return (
                <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                >
                <Icon className="h-4 w-4" />
                </a>
            );
            })}
        </div>
        </div>
    </div>
    </div>
);
}

