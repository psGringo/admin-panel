import React from "react";
import styles from './ButtonDelete.module.css';
import {ReactComponent as Bin} from '../../../static/bin.svg';
import {IconButton} from "../IconButton/IconButton";
import cc from "classcat";
import styles_icon_button from "../IconButton/IconButton.module.css";
import {useDispatch, useSelector} from "react-redux";
import {toggleModalWindowDeleteVisible} from "../../../actions/modalFormDeleteActions";

export const ButtonDelete = () => {
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const dispatch = useDispatch();
    const handleOnClick = () => {
        (selectedRows.length > 0) && dispatch(toggleModalWindowDeleteVisible());
    }


    const isDisabled = () => {
       return (selectedRows.length === 0);
    }

    return (
        <div>
            <IconButton
                text="Удалить"
                icon={<Bin/>}
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true,
                    [styles.disabled]: isDisabled()
                })}
                onClick={handleOnClick}
            />
        </div>
    );
}
