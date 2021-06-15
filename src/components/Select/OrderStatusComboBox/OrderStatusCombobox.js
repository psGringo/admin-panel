import React, {useState} from 'react';
import styles from './OrderStatusCombobox.module.css';
import {OrderSelect} from "../OrderSelect/OrderSelect";
import {useSelector} from "react-redux";


export const OrderStatusCombobox = () => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    const states = useSelector(state => state.orderStates);
    return (
        <div className={styles._}>

            <div className={styles.title}> Статус заказа</div>

            <div className={styles.select}>
                <OrderSelect
                    defaultValue="Любой"
                    values={states}
                />

            </div>
        </div>
    );
};
