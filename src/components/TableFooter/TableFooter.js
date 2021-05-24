import React from "react";
import './TableFooter.css';
import {CountChosenRecords} from "../CountChosenRecords/CountChosenRecords";
import {ButtonChangeStatus} from "../ButtonChangeStatus/ButtonChangeStatus";
import {ButtonDelete} from "../ButtonDelete/ButtonDelete";

export const TableFooter = () => {
    return (
        <div className="tableFooter">
            <CountChosenRecords count = "5" />
            <ButtonChangeStatus />
            <ButtonDelete />
        </div>
    );
}