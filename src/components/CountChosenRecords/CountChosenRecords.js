import React from "react";
import styles from './CountChosenRecords.module.css';
import cc from "classcat";

export const CountChosenRecords = ({count}) => {
    return (
        <div className={styles._}>
            <div className={styles.text}>Выбрано записей:</div>

            <div className={cc({
                [styles.text]: true,
                [styles.count]: true,
            })}
            >
                {count}
            </div>

        </div>
    );
}