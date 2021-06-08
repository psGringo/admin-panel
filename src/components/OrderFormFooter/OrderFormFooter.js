import React from "react";
import styles from './OrderFormFooter.module.css';
import {IconButton} from "../IconButton/IconButton";
import {ReactComponent as Confirmation} from '../../static/checkmark.svg';
import cc from "classcat";
import {useSelector} from "react-redux";

export const OrderFormFooter = ({onClick}) => {

    const isDataChanged = useSelector(state => state.orderForm.isDataChanged);

    return (
        <div className={styles._}>
            <div className={styles.footerContent}>
                <div className={styles.title}>
                    Ошибка или индикатор загрузки
                </div>
                <IconButton
                    text = "Сохранить"
                    icon={<Confirmation className = {styles.icon}/>}
                    className={cc({
                        [styles.button]: true,
                        [styles.disabled]: !isDataChanged
                    })}

                    onClick={onClick}
                />
            </div>
        </div>
    );
}
