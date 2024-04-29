import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm' | 'l'; 
    bgColor?: 'Main/Blue' | 'Main/Dimming-gray' | 'none';
    border?: 'Main/White30' | 'none';
    href?: string;
    children: ReactNode;
}