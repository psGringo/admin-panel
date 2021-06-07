import React from "react";
import styles from './OrderFormState.module.css';
import {useSelector} from "react-redux";


export const OrderFormState = ({orderState}) => {
    const states = useSelector(state => state.orderStates);
    return (
        <div className={styles._}>
            <div className={styles.title}>
                Статус заказа
            </div>
            <select className={styles.select}>
                {states.map(item => <option value={item} selected={orderState === item}> {item} </option>)}
            </select>
        </div>
    );
}
