import React from "react";
import styles from './ButtonFiltersToggle.module.css';
import {ReactComponent as Sun} from '../../../static/filter.svg';
import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "../IconButton/IconButton";
import cc from "classcat";
import styles_icon_button from "../IconButton/IconButton.module.css";
import {toggleIsFilterVisible} from "../../../actions/filterActions";

export const ButtonFiltersToggle = () => {

    const dispatch = useDispatch();
    const handleToggleVisible = () => dispatch(toggleIsFilterVisible());
    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div>
            <IconButton
                text="Фильтры"
                icon={<Sun/>}
                onClick={handleToggleVisible}
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
            />
        </div>
    );
}
