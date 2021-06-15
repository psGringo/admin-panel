import React, {useEffect, useState} from "react";
import styles from './Paginator.module.css';
import {PaginatorItem} from "../PaginatiorItem/PaginatorItem";
import {useDispatch, useSelector} from "react-redux";
import {
    changeActivePageIndex,
    changeLeftPageIndex,
    changeRightPageIndex,
    getPage
} from "../../../actions/tableDataActions";
import cc from "classcat";


export const Paginator = () => {

    const totalCountPages = useSelector(state => state.tableData.countPages);
    const leftIndex = useSelector(state => state.tableData.leftIndex);
    const rightIndex = useSelector(state => state.tableData.rightIndex);
    const activeIndex = useSelector(state => state.tableData.activeIndex);
    const isLightTheme = useSelector(state => state.theme.isLight);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        const pageIndex = parseInt(e.currentTarget.innerHTML) - 1;
        dispatch(changeActivePageIndex(pageIndex));
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
        dispatch(changeRightPageIndex(rightIndex + 1));
        dispatch(changeLeftPageIndex(leftIndex + 1));
    }


    const previous = () => {
        if (leftIndex <= 0)
            return;
        dispatch(changeRightPageIndex(rightIndex - 1));
        dispatch(changeLeftPageIndex(leftIndex - 1));
    }

    return (
        <div className={cc({
            [styles._]: true,
            [styles.invisible]: rightIndex <= 1,
        })}
        >
            <div className={styles.paginator}>

                <div className={cc({
                    [styles.arrow]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
                     onClick={previous}>
                    {'<'}
                </div>

                {getPages(leftIndex, rightIndex, activeIndex)}

                <div className={cc({
                    [styles.arrow]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
                     onClick={next}>
                    {'>'}
                </div>
            </div>
        </div>
    );
}
