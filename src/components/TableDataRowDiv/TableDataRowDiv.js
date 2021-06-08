import React from "react";
import styles from "../TableDataRowDiv/TableDataRowDiv.module.css";
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {toggleRowChecked} from "../../actions/tableDataActions";

export const TableDataRowDiv = ({children, id, style}) => {
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isSelected = selectedRows.includes(id.toString());

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(toggleRowChecked(String(id)))
    }

    return (<div className={cc({
        [styles.title]: true,
        [styles.selectedRow]: isSelected,
        [style]: style
    })}
                 onClick={onClick}
    >
        {children}
    </div>);
}
