import React from "react";
import styles from './Theme.module.css';
import { ReactComponent as Sun } from '../../static/sun.svg';
import {useDispatch, useSelector} from "react-redux";
import {IconText} from "../IconText/IconText";
import {toggleTheme} from "../../actions/themeActions";

export const Theme = () => {
    const isLightTheme = useSelector(state => state.theme.isLight)
    const dispatch = useDispatch();

    const handleClick = () => {
        alert('isLightTheme = ' + isLightTheme +' +  to do dark theme');
        dispatch(toggleTheme());
    }

    return (
        <IconText
            icon={<Sun />}
            text = "Светлая тема"
            onClick={handleClick}
        />
    );
}
