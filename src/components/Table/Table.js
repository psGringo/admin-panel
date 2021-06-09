import React, {useEffect} from "react";
import classes from './Table.module.css';
import {TableHeader} from "../TableHeader/TableHeader";
import {TableContents} from "../TableContents/TableContents";
import {useDispatch} from "react-redux";
import {fetchAllData, generateRandomTableData} from "../../actions/tableDataActions";
import {FETCH_ALL_DATA_FAIL, FETCH_ALL_DATA_SUCCESS} from "../../actions/actionTypes";

export const Table = () => {
    const dispatch = useDispatch();
    dispatch(generateRandomTableData());

    // useEffect(() => {
    //     dispatch(fetchAllData());
    // }, [])





    // const url = '/api/allData'
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         alert(data)
    //         return dispatch({type: FETCH_ALL_DATA_SUCCESS, payload: data});
    //     })
    //     .catch(e => {
    //         alert('err')
    //         dispatch({type: FETCH_ALL_DATA_FAIL, payload: e})
    //     }
    //
    //     )


    return (
        <div className={classes._}>
            <TableHeader/>
            <TableContents/>
        </div>
    );
}
