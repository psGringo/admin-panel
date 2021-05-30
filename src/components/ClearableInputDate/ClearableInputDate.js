import React, {useState} from 'react';
import styles from './ClearableInputDate.module.css';
import {ReactComponent as ClearButton} from '../../static/x-large.svg';
import cc from "classcat";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = (props) => {
    return (
        <input
            // className={[classes.TransparentInput, "uk-input"].join(" ")}
            className ={styles.input}
            onClick={props.onClick}
            value={props.value}
            type="text"
            readOnly={true}
        />
    )
}


export const ClearableInputDate = ({placeholder, firstLetter, style}) => {

    const combinedStyles = cc({
        [styles._]: true,
        [style]: true
    })

    const [value, onChange] = useState(new Date());

    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    }

    return (
        <div className={combinedStyles}>
            <div className={styles.firstLetter}>{firstLetter}</div>

            <DatePicker
                customInput = {<CustomInput />}
                dateFormat="dd-MM-yyyy"
                selected={value}
                onChange={onChange}
                placeholderText = "dd.mm.yyyy"
                onChangeRaw={handleDateChangeRaw}
            />

            <ClearButton className={styles.icon}/>
        </div>
    );
};
