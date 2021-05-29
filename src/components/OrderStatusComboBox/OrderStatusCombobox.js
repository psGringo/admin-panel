import React, {useState} from 'react';
import styles from './OrderStatusCombobox.module.css';
import {OrderSelect} from "../OrderSelect/OrderSelect";
import {ClearableInput} from "../ClearableInput/ClearableInput";


const options = [
    'Новый',
    'Рассчет',
    'Подтвержден',
    'Отложен',
    'Выполнен',
    'Отменен',
]

export const OrderStatusCombobox = () => {
    return (
        <div className={styles._}>

            <div className={styles.title}> Статус заказа</div>

            <div className={styles.select}>

                <OrderSelect
                    defaultValue="Любой"
                    values={options}
                />

            </div>


        </div>
    );
};
