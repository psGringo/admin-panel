import React from "react";
import styles from './OrderItemsTableHeader.module.css';
import {useSelector} from "react-redux";
import cc from "classcat";


export const OrderItemsTableHeader = () => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div className={cc({
            [styles._]: true,
            [styles.darkTheme]: !isLightTheme,
        })}
        >
            <div className={styles.art}>
                Артикул
            </div>
            <div className={styles.title}>
                Наименование
            </div>
            <div className={styles.price}>
                Цена
            </div>
        </div>
    );
}
