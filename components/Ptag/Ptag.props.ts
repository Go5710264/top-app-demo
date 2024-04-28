import { ReactNode } from "react";

export interface PtagProps{
    appearance: 'description-main' | 'description-series' | 'reviews' | 'none'
    children: ReactNode;
    icon?: 'none' | 'souvenir';
}