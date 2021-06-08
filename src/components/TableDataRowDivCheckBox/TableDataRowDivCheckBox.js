import React from "react";
import styles from "../TableDataRowDivCheckBox/TableDataRowDivCheckBox.module.css";
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox} from "../Checkbox/Checkbox";
import {toggleRowChecked} from "../../actions/tableDataActions";

export const TableDataRowDivCheckBox = ({children, id, style}) => {
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isSelected = selectedRows.includes(id.toString());

    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleRowChecked(String(id)));
    }

    return (<div className={cc({
        [styles.title]: true,
        [styles.selectedRow]: isSelected,
    })}
                 onClick={handleToggle}
    >
        <div className={styles.titleFirstColumn}>
            <Checkbox id={id} checked={isSelected}/>

            <div className={styles.id} >
                {id}
            </div>
        </div>
    </div>);
}
