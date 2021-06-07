import React from "react";
import styles from './TableDataRow.module.css';
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";
import {toggleRowChecked} from "../../actions/tableDataActions";
import {useDispatch, useSelector} from "react-redux";


export const TableDataRow = ({contents}) => {

    const {
        id,
        date,
        state,
        statusIcon,
        positions,
        summa,
        person,
    } = contents;

    const dispatch = useDispatch();
    const handleOnChangeCheckBox = ({currentTarget}) => {
        dispatch(toggleRowChecked(currentTarget.id, currentTarget.checked));
    }

    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isSelected = selectedRows.includes(id.toString());

    const handleClick = () => {
        dispatch(toggleRowChecked(id.toString(), true));
    }

    return (
        <div className={styles._}>
            <div className={styles.title}
                 className={cc({
                     [styles.title]: true,
                     [styles.selectedRow]: isSelected,
                 })}

            >
                <div className={styles.titleFirstColumn}>
                    <Checkbox id={id} onChange={handleOnChangeCheckBox} checked={isSelected}/>
                    <div className={styles.id}>
                        {id}
                    </div>
                </div>
            </div>

            <div className={styles.title}
                 className={cc({
                     [styles.title]: true,
                     [styles.selectedRow]: isSelected,
                 })}

                 onClick={handleClick}
            >
                {date.toLocaleDateString()}
            </div>

            <div className={styles.title}
                 className={cc({
                     [styles.title]: true,
                     [styles.selectedRow]: isSelected,
                 })}

            >
                {statusIcon}
                {state}
            </div>

            <div className={styles.title}
                 className={cc({
                     [styles.title]: true,
                     [styles.selectedRow]: isSelected,
                 })}

            >
                {positions}
            </div>

            <div className={styles.title}
                 className={cc({
                     [styles.title]: true,
                     [styles.selectedRow]: isSelected,
                 })}

            >
                {summa}
            </div>

            <div
                className={cc({
                    [styles.title]: true,
                    [styles.selectedRow]: isSelected,
                    [styles.titlePerson]: true,
                })}
            >
                {person}
            </div>
        </div>
    );
}
