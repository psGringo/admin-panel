import React from "react";
import styles from './ModalForm.Delete.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {toggleModalFormDeleteVisible} from "../../../actions/modalFormDeleteActions";
import {deleteSelectedTableRows} from "../../../actions/tableDataActions";

export const ModalFormDelete = () => {

    const isVisible = useSelector(state => state.modalFormDelete.isVisible);
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isLightTheme = useSelector(state => state.theme.isLight);

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(toggleModalFormDeleteVisible());
    }

    const handleDelete = () => {
        dispatch(deleteSelectedTableRows( ({selectedRows})));
        dispatch(toggleModalFormDeleteVisible());
    }

    return (
        <div className={cc({
            [styles._]: true,
            [styles.visible]: isVisible,
            [styles.darkTheme]: !isLightTheme
        })}
        >
            <div className={styles.windowContent}>
                <div className={styles.title}>
                    Удалить выбранные записи ? ({selectedRows.length} шт.)
                </div>

                <div className={styles.actions}>
                    <button className={styles.button} onClick={handleDelete}>Удалить</button>
                </div>

                <div className={styles}>
                    <button className={styles.button} onClick={handleCancel}>Отмена</button>
                </div>
            </div>

        </div>
    );
}
