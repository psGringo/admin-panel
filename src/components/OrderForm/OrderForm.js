import React, {useState} from "react";
import styles from './OrderForm.module.css';
import cc from "classcat";
import {useSelector} from "react-redux";


export const OrderForm = () => {
    const isVisible = useSelector(state => state.orderForm.isVisible)

    return (
        <div
            className={cc({
                [styles._]: true,
                [styles.visible]: isVisible,
            })}
        >
            Форма заказа

        </div>
    );
}
