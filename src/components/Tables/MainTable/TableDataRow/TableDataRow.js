import React from "react";
import styles from './TableDataRow.module.css';
import {TableDataRowDiv} from "../TableDataRowDiv/TableDataRowDiv";
import {TableDataRowDivCheckBox} from "../TableDataRowDivCheckBox/TableDataRowDivCheckBox";
import {ReactComponent as DotIcon} from "../../../../static/dot.svg";
import {ReactComponent as Abandon} from "../../../../static/abort.svg";
import {ReactComponent as Checkmark} from "../../../../static/checkmark.svg";
import {useSelector} from "react-redux";


export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        state,
        positions,
        summa,
        person,
    } = contents;

    const getDate = (value) => {
        const date = new Date(value);
        return date.toLocaleString();
    }

    const states = useSelector(state => state.tableData.states)

    const getStateIcon = (state, states) => {

        switch (state) {
            case states[0]:
                return <DotIcon className={styles.orange}/>
            case states[1]:
                return <DotIcon className={styles.blue}/>
            case states[3]:
                return <Abandon/>
            case states[4]:
                return <Checkmark className={styles.green}/>
            default:
                return <DotIcon/>
        }
    }

    return (
        <div className={styles._}>

            <TableDataRowDivCheckBox id={id}/>

            <TableDataRowDiv id={id}>
                {getDate(date)}
            </TableDataRowDiv>

            <TableDataRowDiv id={id}>
                <div className={styles.icon}>
                    {getStateIcon(state, states)}
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
