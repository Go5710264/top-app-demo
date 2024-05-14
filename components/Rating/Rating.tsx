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
        console.log(currentRating)
        const updateArray = ratingArray.map((r:JSX.Element, i: number) =>{
            return(
                <StarIcon
                    className={cn(styles.rating__svg, {
                        [styles.rating__svg_fill]: i < currentRating,
                    })}
                />
            );
        })

        setRatingArray(updateArray);
    }
    return(
        <>
            {ratingArray.map((r, i) =>  (<span key={i}>{r}</span>))}
        </>
    )
}