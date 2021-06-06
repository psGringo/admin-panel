import React from "react";
import styles from './ButtonChangeStatus.module.css';
import {ReactComponent as Pencil} from '../../static/pencil.svg';
import {IconButton} from "../IconButton/IconButton";
import styles_icon_button from "../IconButton/IconButton.module.css";
import cc from "classcat";
import {useDispatch} from "react-redux";
import {toggleOrderFormVisible} from "../../actions/orderFormActions";

export const ButtonChangeStatus = () => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleOrderFormVisible())
    }

    return (
        <div>
            <IconButton
                text="Изменить статус"
                icon={<Pencil/>}
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true
                })}
                onClick={handleClick}
            />
        </div>
    );
}
