import React from "react";
import styles from './ButtonFiltersToggle.module.css';
import {ReactComponent as Sun} from '../../static/filter.svg';
import {useDispatch} from "react-redux";
import {AllActions} from "../../actions";
import {IconButton} from "../IconButton/IconButton";
import {ReactComponent as Pencil} from "../../static/pencil.svg";
import cc from "classcat";
import styles_icon_button from "../IconButton/IconButton.module.css";
import {ReactComponent as Bin} from "../../static/bin.svg";

export const ButtonFiltersToggle = () => {

    const dispatch = useDispatch();
    const handleToggleVisible = () => dispatch(AllActions.filterActions.toggleIsFilterVisible());

    return (
        <div>
            <IconButton
                text="Фильтры"
                icon={<Sun />}
                onClick = {handleToggleVisible}
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true
                })}
            />
        </div>
    );
}
