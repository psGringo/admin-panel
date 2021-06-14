import React from "react";
import styles from './OrderFormPerson.module.css';


export const OrderFormPerson = ({value, onChange}) => {

    return (
        <div className={styles._}>
            <div className={styles.title}>
                ФИО
            </div>

            <input type="text" className={styles.value} value={value} onChange={onChange}/>
        </div>
    );
}
