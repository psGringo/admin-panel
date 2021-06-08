import React from "react";
import styles from './TableDataRow.module.css';
import {TableDataRowDiv} from "../TableDataRowDiv/TableDataRowDiv";
import {TableDataRowDivCheckBox} from "../TableDataRowDivCheckBox/TableDataRowDivCheckBox";

export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        state,
        stateIcon,
        positions,
        summa,
        person,
    } = contents;


    return (
        <div className={styles._}>

            <TableDataRowDivCheckBox id={id}/>

            <TableDataRowDiv id={id}>
                {date.toLocaleDateString()}
            </TableDataRowDiv>

            <TableDataRowDiv id={id}>
                <div className={styles.icon}>
                    {stateIcon}
                </div>
                {state}
            </TableDataRowDiv>

            <TableDataRowDiv id={id}>
                {positions}
            </TableDataRowDiv>

            <TableDataRowDiv id={id}>
                {summa}
            </TableDataRowDiv>

            <TableDataRowDiv id={id} style={styles.titlePerson}>
                {person}
            </TableDataRowDiv>

        </div>
    );
}
