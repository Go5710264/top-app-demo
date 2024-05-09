import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode;
    typeContainer: 'none' | 'header' | 'buttons' | 'input';
}