import React from "react";
import styles from './OrderItemsTableDataRow.module.css';

export const OrderItemsTableDataRow = ({contents}) => {
    const {artNo, name, price} = contents
    return (
        <div className={styles._}>
            <div className={styles.art}>
                {artNo}
            </div>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.price}>
                {price + ' р.'}
            </div>
        </div>
    );
}
