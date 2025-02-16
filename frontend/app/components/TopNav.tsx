'use client'

import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const TopNav = () => {
return (
    <div className="w-full bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
        {/* Contact Information */}
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
            <a href="tel:+1234567890" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaPhone className="mr-2" />
            <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaEnvelope className="mr-2" />
            <span>info@example.com</span>
            </a>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
            <FaFacebook size={18} />
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
            <FaTwitter size={18} />
            </a>
            <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
            >
            <FaInstagram size={18} />
            </a>
            <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
            <FaLinkedin size={18} />
            </a>
        </div>
        </div>
    </div>
    </div>
)
}

export default TopNav

