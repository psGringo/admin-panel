import React from "react";
import styles from "./TableDataRowDiv.module.css";
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {fetchOrder, toggleRowChecked} from "../../../../actions/tableDataActions";

export const TableDataRowDiv = ({children, id, style}) => {
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isSelected = selectedRows.includes(id.toString());
    const isVisibleOrderForm = useSelector(state => state.orderForm.isVisible);

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(toggleRowChecked(id));
        isVisibleOrderForm && dispatch(fetchOrder(id));
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
