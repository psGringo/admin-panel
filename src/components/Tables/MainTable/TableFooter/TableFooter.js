import React from "react";
import classes from './TableFooter.module.css';
import {CountChosenRecords} from "../../../CountChosenRecords/CountChosenRecords";
import {ButtonChangeStatus} from "../../../Buttons/ButtonChangeStatus/ButtonChangeStatus";
import {ButtonDelete} from "../../../Buttons/ButtonDelete/ButtonDelete";
import {Paginator} from "../../../Pagination/Paginator/Paginator";


export const TableFooter = () => {

    return (
        <div className={classes._} >
            <CountChosenRecords count = "5" />
            <ButtonChangeStatus />
            <ButtonDelete />
            <Paginator />
        </div>
    );
}
