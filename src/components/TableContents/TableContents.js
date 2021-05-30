import React, {useCallback, useEffect} from "react";
import styles from './TableContents.module.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {useDispatch, useSelector} from "react-redux";


export const TableContents = () => {

    // const dispatch = useDispatch();

    //
    // const searchText = useSelector(state => state.tableData.searchTextOrderNoOrPerson);
    // tableData = tableData.filter((item) => (item.person.startsWith(searchText) || (item.id.toString().startsWith(searchText))));
    //
    // // panel filters
    // const dateFrom = useSelector(state => state.filter.dateFrom);
    // const dateTo = useSelector(state => state.filter.dateTo);
    // const needFilterFromPanel = useSelector(state => state.filter.needFilterFromPanel);
    //
    //
    // if (prevNeedFilterFromPanel != needFilterFromPanel) {
    //     if (dateFrom)
    //         tableData = tableData.filter((item) => (((item.date).getTime() - dateFrom.getTime()) > 0));
    //
    //     if (dateTo)
    //         tableData = tableData.filter((item) => ((dateTo.getTime() - (item.date).getTime()) > 0));
    //
    //     // ;
    // }
    //
    // const prevNeedFilterFromPanel = needFilterFromPanel;
    // dispatch(switchNeedFilterFromPanel(false));

    // const tableData = useSelector(state => state.tableData.data)

    let tableData = useSelector(state => state.tableData.data);
    return (
        <div className={styles._}>
            {tableData.map((order) => <TableDataRow key={order.id} contents={order}/>)}

        </div>
    );
}

