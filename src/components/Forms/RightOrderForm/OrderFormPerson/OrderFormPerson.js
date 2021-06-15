import React from "react";
import styles from './OrderFormPerson.module.css';
import cc from "classcat";
import {useSelector} from "react-redux";


export const OrderFormPerson = ({value, onChange}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div className={styles._}>
            <div className={styles.title}>
                ФИО
            </div>

            <input type="text"
                   className={cc({
                       [styles.value]: true,
                       [styles.darkTheme]: !isLightTheme,
                   })}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
}
