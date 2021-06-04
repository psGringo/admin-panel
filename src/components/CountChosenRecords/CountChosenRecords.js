import React from "react";
import styles from './CountChosenRecords.module.css';
import cc from "classcat";
import {useSelector} from "react-redux";

export const CountChosenRecords = () => {
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    return (
        <div className={styles._}>
            <div className={styles.text}>Выбрано записей:</div>

            <div className={cc({
                [styles.text]: true,
                [styles.count]: true,
            })}
            >
                {selectedRows.length}
            </div>

        </div>
    );
}
