import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";

export interface ImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>{
    imgPath: string;
    alt: string;
    typeImage: 'preview';
}