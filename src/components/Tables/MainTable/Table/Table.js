import React, {useEffect} from "react";
import classes from './Table.module.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {useDispatch} from "react-redux";
import {fetchStates, fetchTableData, generateRandomTableData, setOrders} from "../../../../actions/tableDataActions";

export const Table = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTableData());
        dispatch(fetchStates());
    }, [])


    return (
        <div className={classes._}>
            <TableHeader/>
            <TableContents/>
        </div>
    );
}