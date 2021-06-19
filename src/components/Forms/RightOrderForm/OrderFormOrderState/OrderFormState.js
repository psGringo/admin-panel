import React from "react";
import styles from './OrderFormState.module.css';
import {useSelector} from "react-redux";
import cc from "classcat";


export const OrderFormState = ({id, orderState, onChange}) => {
    const states = useSelector(state => state.orderStates);
    const isLightTheme = useSelector(state => state.theme.isLight);
    return (
        <div className={styles._}>
            <div className={styles.title}>
                Статус заказа
            </div>
            <select
                    className={cc({
                        [styles.select]: true,
                        [styles.darkTheme]: !isLightTheme,
                    })}
                    onChange = {onChange}
            >
                {states.map(item => <option key = {id} value={item} selected={orderState === item}> {item} </option>)}
            </select>
        </div>
    );
}
