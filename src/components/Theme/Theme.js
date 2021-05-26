import React from "react";
import styles from './Theme.module.css';
import { ReactComponent as Sun } from '../../static/sun.svg';
import {useDispatch, useSelector} from "react-redux";
import {AllActions} from "../../actions";

export const Theme = () => {
    const isLightTheme = useSelector(state => state.theme.isLight)
    const dispatch = useDispatch();

    const handleClick = () => {
        alert('isLightTheme = ' + isLightTheme +' +  to do dark theme');
        dispatch(AllActions.themeActions.toggleTheme());
    }

    return (
        <div className={styles._}>
            <Sun className = {styles.icon} />
            <div className={styles.title} onClick={handleClick} >Светлая тема</div>
        </div>
    );
}
