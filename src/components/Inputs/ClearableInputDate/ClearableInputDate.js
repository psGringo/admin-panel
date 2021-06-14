import React, {useState} from 'react';
import styles from './ClearableInputDate.module.css';
import {ReactComponent as ClearButton} from '../../../static/x-large.svg';
import cc from "classcat";
import DatePicker, {registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import locale from "date-fns/locale/ru";
import {useDispatch, useSelector} from "react-redux";
registerLocale("ru", locale)

const CustomInput = (props) => {
    return (
        <input
            className ={styles.input}
            onClick={props.onClick}
            value={props.value}
            type="text"
            readOnly={true}
            placeholder = "dd.mm.yyyy"
        />
    )
}


export const ClearableInputDate = ({firstLetter, style, value, onChange}) => {

    const combinedStyles = cc({
        [styles._]: true,
        [style]: true
    })


    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    }

    const handleClearButtonClick = () => {
        onChange(null);
    }


    return (
        <div className={combinedStyles}>
            <div className={styles.firstLetter}>{firstLetter}</div>

            <DatePicker
                customInput = {<CustomInput />}
                dateFormat="dd-MM-yyyy"
                onChange={onChange}
                selected = {value}
                placeholderText = "dd.mm.yyyy"
                onChangeRaw={handleDateChangeRaw}
                locale = 'ru'
            />

            <ClearButton className={styles.icon} onClick = {handleClearButtonClick}/>
        </div>
    );
};
