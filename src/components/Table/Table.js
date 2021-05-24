import React from "react";
import './Table.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {TableFooter} from "../TableFooter/TableFooter";

export const Table = () => {
    return (
        <div className="_">
            <TableHeader/>
            <TableContents/>
            <TableFooter/>
        </div>
    );
}