import React from "react";
import styles from './TableContents.module.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {useDispatch, useSelector} from "react-redux";
import {generateRandomTableData} from "../../actions/tableDataActions";


export const TableContents = () => {
    const fullTableData = useSelector(state => state.tableData.data);
    const searchText = useSelector(state => state.tableData.searchTextOrderNoOrPerson)
    const tableData = fullTableData.filter((item) => (item.person.startsWith(searchText) || (item.id.toString().startsWith(searchText))));

    return (
        <div className={styles._}>
            {tableData.map((order) => <TableDataRow key = {order.id} contents={order}/>)}
        </div>
    );
}
