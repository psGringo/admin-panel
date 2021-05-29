import React from "react";
import styles from './TableHeader.module.css';
import {Checkbox} from "../Checkbox/Checkbox";
import {ReactComponent as V_Arrow} from "../../static/v_arrow.svg";
import cc from "classcat";

export const TableHeader = () => {
    return (
        <div className={styles._}>
            <div className={styles.title}  >
                <Checkbox />
                #
            </div>

            <div className={styles.title}>
                Дата
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title}>
                Статус
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title}>
                Позиций
                <V_Arrow className={styles.icon} />
            </div>

            <div className={styles.title}>
                Сумма
                <V_Arrow className={styles.icon} />
            </div>

            <div   className={cc({
                [styles.title]: true,
                [styles.titlePerson]: true,
            })}>
                ФИО покупателя
                <V_Arrow className={styles.icon} />
            </div>
        </div>

    );
}
