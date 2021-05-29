import React from "react";
import styles from './TableDataRow.module.css';
import {Checkbox} from "../Checkbox/Checkbox";
import cc from "classcat";


export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        status,
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
                {date}
            </div>

            <div className={styles.title}>
                {statusIcon}
                {status}
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
