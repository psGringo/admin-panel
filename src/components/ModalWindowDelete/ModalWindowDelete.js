import React from "react";
import styles from './ModalWindow.Delete.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {toggleModalWindowDeleteVisible} from "../../actions/modalWindowDeleteActions";
import {deleteSelectedTableRows} from "../../actions/tableDataActions";

export const ModalWindowDelete = () => {

    const isVisible = useSelector(state => state.modalWindowDelete.isVisible);
    const selectedRows = useSelector(state => state.tableData.selectedRows);

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(toggleModalWindowDeleteVisible());
    }

    const handleDelete = () => {
        dispatch(deleteSelectedTableRows())
        dispatch(toggleModalWindowDeleteVisible());
    }

    return (
        <div className={cc({
            [styles._]: true,
            [styles.visible]: isVisible,
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
