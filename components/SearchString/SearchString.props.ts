import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface SearchStringProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    bgColor: 'none' | 'Main/Dimming-gray'
}