import React, {useCallback, useEffect} from "react";
import styles from './TableContents.module.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {useSelector} from "react-redux";


export const TableContents = () => {

    let tableData = useSelector(state => state.tableData.data);
    return (
        <div className={styles._}>
            {tableData.map((order) => <TableDataRow key={order.id} contents={order}/>)}
        </div>
    );
}

