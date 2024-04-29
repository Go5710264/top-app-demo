import { TagProps } from "./Tag.props"
import styles from "./Tag.module.scss"
import cn from 'classnames';

export const Tag = ({size='m', bgColor='none', border='none', children, href, className, ...props}:TagProps) => {
    return(
        <div className={cn(styles.tag, className, {
                [styles.tag_s]: size == 's',
                [styles.tag_m]: size == 'm',
                [styles.tag_l]: size == 'l',
                [styles.tag_bgColorBlue]: bgColor == 'Main/Blue',
                [styles.tag_bgColorDimmingGray]: bgColor == 'Main/Dimming-gray',
                [styles.tag_borderWhite30]: border == 'Main/White30',

            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}