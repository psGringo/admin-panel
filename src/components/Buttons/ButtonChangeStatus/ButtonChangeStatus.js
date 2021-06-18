import React from "react";
import styles from './ButtonChangeStatus.module.css';
import {ReactComponent as Pencil} from '../../../static/pencil.svg';
import {IconButton} from "../IconButton/IconButton";
import styles_icon_button from "../IconButton/IconButton.module.css";
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {toggleOrderFormVisible} from "../../../actions/orderFormActions";
import {fetchOrder} from "../../../actions/tableDataActions";

export const ButtonChangeStatus = () => {

    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const isLightTheme = useSelector(state => state.theme.isLight);
    const dispatch = useDispatch();

    const showForm = () => {
        dispatch(fetchOrder(selectedRows[0]));
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
                    [styles_icon_button._]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
                onClick={handleClick}
            />
        </div>
    );
}
