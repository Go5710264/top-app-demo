import styles from "./Image.module.scss";
import { ImageProps } from "./Image.props";
import cn from 'classnames';


export const Image = ({imgPath, alt, typeImage, className, ...props}:ImageProps) => {
    return(
        <img 
            className={cn(styles.img, className, {
                [styles.img_preview]: typeImage == 'preview',
            })} 
            src={imgPath} 
            alt={alt} 
            {...props}
        />
    )
}