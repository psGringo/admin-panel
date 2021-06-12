import React from "react";
import styles from './ButtonChangeStatus.module.css';
import {ReactComponent as Pencil} from '../../static/pencil.svg';
import {IconButton} from "../IconButton/IconButton";
import styles_icon_button from "../IconButton/IconButton.module.css";
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {toggleOrderFormVisible, updateFormData} from "../../actions/orderFormActions";
import {updateIndexOfSelectedOrder} from "../../actions/tableDataActions";

export const ButtonChangeStatus = () => {

    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const data = useSelector(state => state.tableData.data);
    const dispatch = useDispatch();

    const showForm = () => {
        const index = data.findIndex(item => item.id === selectedRows[0]);
        dispatch(updateFormData(data[index].id,data[index].state,data[index].date,data[index].person))
        dispatch(updateIndexOfSelectedOrder(selectedRows[0]));
        dispatch(toggleOrderFormVisible());
    }

    function isDisabled () {
        return (selectedRows.length === 0);
    }

    const handleClick = () => {
        isDisabled() ? alert('Выберите заказ') : showForm()
    }

    return (
        <div>
            <IconButton
                text="Изменить статус"
                icon={<Pencil/>}
                className={cc({
                    [styles._]: true,
                    [styles.disabled]: isDisabled(),
                    [styles_icon_button._]: true
                })}
                onClick={handleClick}
            />
        </div>
    );
}
