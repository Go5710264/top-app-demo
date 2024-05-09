import { IconProps } from "./Icon.props"
import styles from "./Icon.module.scss"
import cn from 'classnames';
import IconArrowRight from './arrowRight.svg'
import IconBookmark from './bookmark.svg'
import IconHeart from './heart.svg'
import IconLoupe from './loupe.svg'


export const Icon = ({svg, alt, className, ...props}:IconProps) => {
    switch (svg) {
        case "IconArrowRight":
            return <IconArrowRight className={cn(styles.icon, className)}></IconArrowRight>
        case 'IconBookmark':
            return <IconBookmark className={cn(styles.icon, className)}></IconBookmark>
        case 'IconHeart':
            return <IconHeart className={cn(styles.icon, className)}></IconHeart>
        case 'IconLoupe':
            return <IconLoupe className={cn(styles.icon, styles.iconLoupe, className)}></IconLoupe>
        default:
            return <></>
    }
    return(
        <img 
            className={cn(styles.icon, className)} 
            src={svg} 
            alt={alt} 
            {...props}
        />
    )
}