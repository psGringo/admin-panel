import React from "react";
import styles from './PaginatorItem.module.css';
import cc from "classcat";
import {useSelector} from "react-redux";


export const PaginatorItem = ({value, active, invisible, onClick}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div className={cc({
            [styles._]: true,
            [styles.active]: active,
            [styles.invisible]: invisible,
            [styles.darkTheme]: !isLightTheme
        })}
        onClick={onClick}
        key = {value}
        >
            {value}
        </div>
    );
}
