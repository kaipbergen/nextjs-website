'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface SubMenuItem {
  name: string;
  href: string;
  description?: string;
}

interface SubMenuSection {
  title: string;
  items: SubMenuItem[];
}

interface MenuItemData {
  title: string;
  submenu?: SubMenuSection[];
  href?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItemData[];
  onClose: () => void;
}

export default function MobileMenu({ isOpen, menuItems, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
          >
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-gray-200">
                  <div className="flex items-center justify-between py-4">
                    {item.submenu ? (
                      <button
                        onClick={() => toggleExpanded(item.title)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="text-lg font-medium">{item.title}</span>
                        <motion.span
                          animate={{ rotate: expandedItems.includes(item.title) ? 180 : 0 }}
                          className="ml-2"
                        >
                          ▼
                        </motion.span>
                      </button>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        className="text-lg font-medium"
                        onClick={onClose}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="text-lg font-medium" onClick={onClose}>
                        {item.title}
                      </span>
                    )}
                  </div>

                  {item.submenu && (
                    <AnimatePresence>
                      {expandedItems.includes(item.title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {item.submenu.map((section) => (
                            <div key={section.title} className="py-2 pl-4">
                              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                {section.title}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block py-2 text-gray-600 hover:text-blue-600"
                                    onClick={onClose}
                                  >
                                    <span className="text-base">{subItem.name}</span>
                                    {subItem.description && (
                                      <p className="text-sm text-gray-500 mt-1">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}