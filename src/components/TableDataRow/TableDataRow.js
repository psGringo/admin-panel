import React from "react";
import styles from './TableDataRow.module.css';
import {Checkbox} from "../Checkbox/Checkbox";


export const TableDataRow = ({contents}) => {

    console.log('contents', {contents});
    const {number, date, status, statusIcon, positions, summa, person} = contents;
    console.log('number', {number});

    return (

        <div className={styles._}>
            <div className={styles.title} style={{width: "9.25rem"}}>
                <Checkbox/>
                {number}
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                {date}
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                {statusIcon}
                {status}
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                {positions}
            </div>

            <div className={styles.title} style={{width: "9.25rem"}}>
                {summa}
            </div>

            <div className={styles.title} style={{width: "12.25rem"}}>
                {person}
            </div>
        </div>
    );
}