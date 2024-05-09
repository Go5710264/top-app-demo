import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";

export interface IconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>{
    svg: 'IconArrowRight' | 'IconBookmark' | 'IconHeart' | 'IconLoupe';
}