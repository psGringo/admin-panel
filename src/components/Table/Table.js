import React, {useEffect} from "react";
import classes from './Table.module.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {useDispatch} from "react-redux";
import {fetchStates, fetchTableData, generateRandomTableData, setData} from "../../actions/tableDataActions";
import {FETCH_ALL_DATA_FAIL, FETCH_ALL_DATA_SUCCESS} from "../../actions/actionTypes";

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
