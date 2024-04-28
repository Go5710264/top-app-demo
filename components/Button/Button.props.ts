import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'gradient' | 'gray';
    children: ReactNode;
    icon?: 'none' | 'souvenir';
}