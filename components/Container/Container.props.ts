import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode;
    typeContainer: 'none' | 'header' | 'subheader' | 'buttons' | 'input' | 'rating' | 'logoNewFilm' | 'preview';
    mobileHide?: boolean;
    columnGap?: 's' | 'm';
}