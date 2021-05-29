import React from "react";
import styles from './TableDataRow.module.css';
import {Checkbox} from "../Checkbox/Checkbox";


export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        status,
        statusIcon,
        positions,
        summa,
        person} = contents;

    return (
        <div className={styles._}>
            <div className={styles.title} >
                <Checkbox/>
                {id}
            </div>

            <div className={styles.title} >
                {date}
            </div>

            <div className={styles.title} >
                {statusIcon}
                {status}
            </div>

            <div className={styles.title} >
                {positions}
            </div>

            <div className={styles.title} >
                {summa}
            </div>

            <div className={styles.title} >
                {person}
            </div>
        </div>
    );
}
