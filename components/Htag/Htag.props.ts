import { ReactNode } from "react";

export interface HtagProps{
    tag: 'h3' | 'h4' | 'h5';
    children: ReactNode;
}