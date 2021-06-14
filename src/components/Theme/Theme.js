import React from "react";
import { ReactComponent as Sun } from '../../static/sun.svg';
import { ReactComponent as Moon } from '../../static/moon.svg';
import {useDispatch, useSelector} from "react-redux";
import {IconText} from "../IconText/IconText";
import {toggleModalFormThemeVisible} from "../../actions/modalFormThemeActions";

export const Theme = () => {
    const isLightTheme = useSelector(state => state.theme.isLight)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleModalFormThemeVisible())
    }

    const getIcon = () => {
        return (isLightTheme) ?  <Sun /> : <Moon />
    }

    const getText = () => {
        return (isLightTheme) ?  "Светлая тема" : "Темная тема"
    }

    return (
        <IconText
            icon={getIcon()}
            text = {getText()}
            onClick={handleClick}
        />
    );
}
