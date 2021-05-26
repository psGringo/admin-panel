import React from "react";
import styles from './TableHeader.module.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {ReactComponent as V_Arrow} from "../../static/v_arrow.svg";

export const TableHeader = () => {
    return (
        <div className={styles._}>
            <div className={styles.title} style={{width: "9.25rem"}} >
                <Checkbox />
                #
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                Дата
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                Статус
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                Позиций
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                Сумма
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title} style={{width: "12.25rem"}}>
                ФИО покупателя
                <V_Arrow className={styles.icon} />
            </div>
        </div>

    );
}
