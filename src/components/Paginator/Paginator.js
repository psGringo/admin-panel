import React, {useEffect, useState} from "react";
import styles from './Paginator.module.css';
import {PaginatorItem} from "../PaginatiorItem/PaginatorItem";


export const Paginator = ({totalCountPages, countVisiblePages}) => {

    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(countVisiblePages);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e) => {
        setActiveIndex(parseInt(e.currentTarget.innerHTML) - 1);
    }

    const getPages = (leftIndex, rightIndex, activeIndex) => {
        const result = [];
        for (let i = leftIndex; i < rightIndex; i++) {

            result.push(
                <PaginatorItem
                    value={i + 1}
                    active={(i === activeIndex)}
                    onClick={handleClick}
                />
            )
        }
        return result;
    }

    const next = () => {
        if (rightIndex >= totalCountPages)
            return;
        setLeftIndex(leftIndex + 1);
        setRightIndex(rightIndex + 1);
    }


    const previous = () => {
        if (leftIndex <= 0)
            return;
        setLeftIndex(leftIndex - 1);
        setRightIndex(rightIndex - 1);
    }

    return (
        <div className={styles._}>
            <div className={styles.paginator}>

                <div className={styles.arrow} onClick={previous}>
                    {'<'}
                </div>

                {getPages(leftIndex, rightIndex, activeIndex)}

                <div className={styles.arrow} onClick={next}>
                    {'>'}
                </div>
            </div>
        </div>
    );
}
