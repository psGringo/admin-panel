import React from "react";
import classes from './Table.module.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {TableFooter} from "../TableFooter/TableFooter";

export const Table = () => {
    return (
        <div className = {classes._}>
            <TableHeader />
            <TableContents />
        </div>
    );
}
