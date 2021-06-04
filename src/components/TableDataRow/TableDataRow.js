import React from "react";
import styles from './TableDataRow.module.css';
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";


export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        state,
        statusIcon,
        positions,
        summa,
        person
    } = contents;

    return (
        <div className={styles._}>
            <div className={styles.title}>
                <div className={styles.titleFirstColumn}>
                    <Checkbox />
                    <div className={styles.id}>
                        {id}
                    </div>

                </div>
            </div>

            <div className={styles.title}>
                {date.toLocaleDateString()}
            </div>

            <div className={styles.title}>
                {statusIcon}
                {state}
            </div>

            <div className={styles.title}>
                {positions}
            </div>

            <div className={styles.title}>
                {summa}
            </div>

            <div
                className={cc({
                    [styles.title]: true,
                    [styles.titlePerson]: true,
                })}
            >
                {person}
            </div>
        </div>
    );
}
