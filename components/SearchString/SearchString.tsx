import cn from 'classnames';
import styles from './SearchString.module.scss';
import { SearchStringProps } from './SearchString.props';

export const SearchString = ({bgColor = 'none', className, ...props}: SearchStringProps) => {
    return (
        <input className={cn(styles.searchInput, className,{
            [styles.searchInput_bgColorDimmingGray]: bgColor == 'Main/Dimming-gray',
        })}
        {...props}
        >
        </input>
    )
}