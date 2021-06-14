import React from "react";
import styles from './OrderItemsTableHeader.module.css';


export const OrderItemsTableHeader = () => {

    return (
        <div className={styles._}>
            <div className={styles.art}>
                Артикул
            </div>
            <div className={styles.title}>
                Наименование
            </div >
            <div className={styles.price}>
                Цена
            </div>
        </div>
    );
}
