import React from "react";
import styles from './Header.module.css';
import {Theme} from "../Theme/Theme";


export const Header = () => {

    return (
        <div className={styles._}>
            <div className={styles.title} > Список заказов</div>
            <Theme/>
        </div>
    );
}
