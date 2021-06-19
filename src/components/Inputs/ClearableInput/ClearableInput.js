import React from 'react';
import styles from './ClearableInput.module.css';
import {ReactComponent as ClearButton} from '../../../static/x-large.svg';
import cc from "classcat";
import {useSelector} from "react-redux";


export const ClearableInput = ({placeholder, value, firstLetter, style, onChange}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    const combinedStyles = cc({
        [styles._]: true,
        [style]: true,
        [styles.darkTheme]: !isLightTheme,
    })

    const handleClick = () => {
        onChange(null)
    }

    return (
        <div className={combinedStyles}>
            <div className={styles.firstLetter}>{firstLetter}</div>
            <input
                className={cc({
                    [styles.input]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />

            <ClearButton className={styles.icon} onClick={handleClick}/>
        </div>
    );
};
