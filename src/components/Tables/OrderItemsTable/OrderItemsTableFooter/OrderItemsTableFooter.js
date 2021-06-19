import React from "react";
import styles from './OrderItemsTableFooter.module.css';
import {useSelector} from "react-redux";
import cc from "classcat";


export const OrderItemsTableFooter = () => {

    const summa = useSelector(state => state.orderForm.summa);
    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        < div className={cc({
            [styles._]: true,
            [styles.darkThemeContent]: !isLightTheme,
        })}>
            <div className={styles.title}>
                Итоговая сумма:
            </div>
            <div className={styles.price}>
                {summa + ' ₽.'}
            </div>
        </div>
    );
}
