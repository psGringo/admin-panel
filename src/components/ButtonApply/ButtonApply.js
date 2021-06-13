import React from "react";
import styles from './ButtonApply.module.css';
import {ReactComponent as Bin} from '../../static/bin.svg';
import {IconButton} from "../IconButton/IconButton";
import cc from "classcat";
import styles_icon_button from "../IconButton/IconButton.module.css";
import {useDispatch, useSelector} from "react-redux";
import {filterTableFromPanel} from "../../actions/tableDataActions";

export const ButtonApply = () => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filter)
    const handleClick = () => {
        dispatch(filterTableFromPanel(filterState));
    }
    return (
        <div>
            <IconButton
                text="Применить"
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true
                })}
                onClick={handleClick}
            />
        </div>
    );
}
