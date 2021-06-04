import React, {useEffect, useState} from "react";
import styles from './Paginator.module.css';
import {PaginatorItem} from "../PaginatiorItem/PaginatorItem";
import {useDispatch, useSelector} from "react-redux";
import {changeActiveIndex, changeLeftIndex, changeRightIndex, getPage} from "../../actions/tableDataActions";
import cc from "classcat";


export const Paginator = () => {

    const totalCountPages = useSelector(state => state.tableData.countPages);
    const leftIndex = useSelector(state => state.tableData.leftIndex);
    const rightIndex = useSelector(state => state.tableData.rightIndex);
    const activeIndex = useSelector(state => state.tableData.activeIndex);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        const pageIndex = parseInt(e.currentTarget.innerHTML) - 1;
        dispatch(changeActiveIndex(pageIndex));
        dispatch(getPage(pageIndex));
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
        dispatch(changeRightIndex(rightIndex + 1));
        dispatch(changeLeftIndex(leftIndex + 1));
    }


    const previous = () => {
        if (leftIndex <= 0)
            return;
        dispatch(changeRightIndex(rightIndex - 1));
        dispatch(changeLeftIndex(leftIndex - 1));
    }

    return (
        <div className={cc({
            [styles._]: true,
            [styles.invisible]: rightIndex <= 1,
        })}
        >
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
