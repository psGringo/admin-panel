import React, {useState} from 'react';
import styles from './OrderStatusCombobox.module.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {OrderSelect} from "../OrderSelect/OrderSelect";

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
           <div className={styles.title}> Статус заказа </div>
           <OrderSelect
               defaultValue="Любой"
               values={options}
           >
           </OrderSelect>
       </div>
    );
};
