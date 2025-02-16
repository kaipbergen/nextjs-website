export interface NavLink {
title: string;
href: string;
}

export interface MegaMenuItem extends NavLink {
description?: string;
children?: NavLink[];
}

export interface MainNavProps {
items: MegaMenuItem[];
}

export interface TopNavProps {
phone: string;
email: string;
socialLinks: {
    platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
    url: string;
}[];
}

