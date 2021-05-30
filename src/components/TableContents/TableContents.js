import React from "react";
import styles from './TableContents.module.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {useDispatch, useSelector} from "react-redux";
import {generateRandomTableData} from "../../actions/tableDataActions";


export const TableContents = () => {
    const dispatch = useDispatch();
    dispatch(generateRandomTableData());
    const tableData = useSelector(state => state.tableData.data);
    return (
        <div className={styles._}>
            {tableData.map((order) => <TableDataRow key = {order.id} contents={order}/>)}
        </div>
    );
}
