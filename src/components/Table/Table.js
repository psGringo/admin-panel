import React from "react";
import classes from './Table.module.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {useDispatch} from "react-redux";
import {generateRandomTableData} from "../../actions/tableDataActions";

export const Table = () => {
    const dispatch = useDispatch();
    dispatch(generateRandomTableData());

    return (
        <div className = {classes._}>
            <TableHeader />
            <TableContents />
        </div>
    );
}
