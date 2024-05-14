import { RatingProps } from "./Rating.props"
import styles from "./Rating.module.scss"
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState } from "react";

export const Rating = ({isEditable = false, rating, setRating, className, ...props}:RatingProps) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating])
    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r:JSX.Element, i: number) =>{
            return(
                <StarIcon
                    className={cn(styles.rating__svg, {
                        [styles.rating__svg_fill]: i < currentRating,
                        [styles.raiting__svg_editable]: isEditable,
                    })}
                    onMouseEnter={()=> changeDisplay(i+1)}
                    onMouseLeave={()=> changeDisplay(rating)}
                    onClick={()=>clickStar(i+1)}
                />
            );
        })

        setRatingArray(updateArray);
    }

    const changeDisplay = (i: number) => {
        if(!isEditable) return;
        constructRating(i);
    }
    
    const clickStar = (i: number) => {
        if(!isEditable || !setRating) return;
        setRating(i);
    }

    return(
        <>
            {ratingArray.map((r, i) =>  (<span key={i}>{r}</span>))}
        </>
    )
}