import React from "react";
import styles from './OrderFormFooter.module.css';
import {IconButton} from "../IconButton/IconButton";
import {ReactComponent as Confirmation} from '../../static/checkmark.svg';


export const OrderFormFooter = () => {
    return (
        <div className={styles._}>
            <div className={styles.footerContent}>
                <div className={styles.title}>
                    Ошибка или индикатор загрузки
                </div>
                <IconButton text = "Сохранить" icon={<Confirmation />} className={styles.button} />
            </div>
        </div>
    );
}
