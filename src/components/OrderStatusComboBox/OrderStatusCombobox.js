import React, {useState} from 'react';
import styles from './OrderStatusCombobox.module.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {OrderSelect} from "../OrderSelect/OrderSelect";

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];

const selectValues = [
    'Новый',
    'Рассчет',
    'Подтвержден',
    'Отложен',
    'Выполнен',
    'Отменен',
]

export const OrderStatusCombobox = ({data}) => {
    return (
       <div className={styles._}>
           <div className={styles.title}> Статус заказа </div>
           <OrderSelect
               defaultValue="Любой"
               values={selectValues}
           >
           </OrderSelect>
       </div>
    );
};