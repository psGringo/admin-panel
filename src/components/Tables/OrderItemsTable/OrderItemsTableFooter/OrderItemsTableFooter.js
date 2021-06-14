import React, {useEffect} from "react";
import styles from './OrderItemsTableFooter.module.css';
import {useSelector} from "react-redux";


export const OrderItemsTableFooter = () => {

    const summa = useSelector(state => state.orderForm.summa);

    return (
        <div className={styles._}>
            <div className={styles.title}>
                Итоговая сумма:
            </div>
            <div className={styles.price}>
                {summa + ' р.'}
            </div>
        </div>
    );
}
