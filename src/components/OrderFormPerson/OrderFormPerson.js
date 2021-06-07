import React from "react";
import styles from './OrderFormPerson.module.css';


export const OrderFormPerson = ({value}) => {

    const handleOnChange = () => {
        console.log('123')
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>
                ФИО
            </div>

            <input type="text" className={styles.value} defaultValue={value} onChange={handleOnChange}/>
        </div>
    );
}
