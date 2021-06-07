import React from "react";
import styles from './PaginatorItem.module.css';
import cc from "classcat";


export const PaginatorItem = ({value, active, invisible, onClick}) => {
    return (
        <div className={cc({
            [styles._]: true,
            [styles.active]: active,
            [styles.invisible]: invisible
        })}
        onClick={onClick}
        key = {value}
        >


            {value}
        </div>
    );
}
