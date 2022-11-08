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
    category?: string;
}

export interface JobDetails {
    slug: string;
    desc: string;
    image?: Array<ReactElement<any>>;
    frontend?: Array<string>;
    backend?: Array<string>;
}

export interface Articles {
    id: number;
    title: string;
    date: string;
    href: string;
}

export interface Certificate {
    id: number;
    title: string;
    award: string;
    href?: string;
    date: string;
}

export interface ModalProps {
    titleOpen: ReactElement<any> | string;
    title?: string;
    submit?: () => void;
    element: ReactElement<any>;
    closeModal: boolean;
    submitModal: boolean;
}