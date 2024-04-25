import { ReactNode } from "react";

export interface ButtonProps{
    appearance: 'gradient' | 'gray';
    children: ReactNode;
}