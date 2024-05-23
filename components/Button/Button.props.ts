import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'gradient' | 'gray' | 'transparent';
    fontSize?: 's' | 'm' | 'l';
    padding?: 's' | 'm';
    children: ReactNode;
    icon?: boolean;
}