import React from "react";
import styles from './TableHeader.module.css';
import {ReactComponent as V_Arrow} from "../../static/v_arrow.svg";
import cc from "classcat";
import {Checkbox} from "../Checkbox/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {toggleAllRowsChecked, toggleRowChecked} from "../../actions/tableDataActions";

export const TableHeader = () => {

    const dispatch = useDispatch();
    const handleOnChangeCheckBox = ({currentTarget}) => {
        dispatch(toggleAllRowsChecked(currentTarget.checked));
    }

    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const data = useSelector(state => state.tableData.data);

    return (
        <div className={styles._}>
            <div className={styles.title}>
                <div className={styles.titleFirstColumn}>
                    <Checkbox onChange={handleOnChangeCheckBox} checked = {(selectedRows.length > 0) && (selectedRows.length === data.length)}/>
                    <div className={styles.id}>
                        #
                    </div>
                </div>
            </div>

            <div className={styles.title}>
                Дата
                <V_Arrow className={styles.icon}/>
            </div>

            <div className={styles.title}>
                Статус
                <V_Arrow className={styles.icon}/>
            </div>

            <div className={styles.title}>
                Позиций
                <V_Arrow className={styles.icon}/>
            </div>

            <div className={styles.title}>
                Сумма
                <V_Arrow className={styles.icon}/>
            </div>

            <div className={cc({
                [styles.title]: true,
                [styles.titlePerson]: true,
            })}>
                ФИО покупателя
                <V_Arrow className={styles.icon}/>
            </div>
        </div>

    );
}
