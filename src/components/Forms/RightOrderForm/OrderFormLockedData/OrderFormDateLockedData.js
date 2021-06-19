import React from "react";
import styles from './OrderFormDateLockedData.module.css';
import {ReactComponent as Lock} from '../../../../static/locked.svg';
import cc from "classcat";
import {useSelector} from "react-redux";


export const OrderFormDateLockedData = ({text, value}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div className={styles._}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.date}>
                <input type="text"
                       className={cc({
                    [styles.input]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}
                       readOnly
                       value={value}
                       />
                <Lock className = {styles.icon}/>
            </div>
        </div>
    );
}
