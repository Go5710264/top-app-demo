import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    appearance: 'description-main' | 'description-series' | 'reviews' | 'none'
    children: ReactNode;
}