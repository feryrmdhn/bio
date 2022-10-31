import { ReactElement } from "react";

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

export interface Socmed {
    label: string;
    icon?: ReactElement<SVGAElement>;
    href?: string;
}
export interface ToolsIcon {
    id: number;
    icon?: any;
    text: string;
}

export interface RouteProps {
    path: string;
    component: ReactElement<any>;
    exact?: boolean;
}

export interface Experience {
    icon?: ReactElement<any>;
    title: string;
    company: string;
    status: string;
    time: string;
    location: string;
    href: string;
}

export interface Jobs {
    id?: number;
    name: string;
    href?: string;
}

export interface Articles {
    id: number;
    title: string;
    date: string;
    href: string;
}