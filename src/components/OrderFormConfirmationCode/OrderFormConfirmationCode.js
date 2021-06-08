import React from "react";
import styles from './OrderFormConfirmationCode.module.css';
import {ReactComponent as Clear} from '../../static/x-medium.svg';
import {useDispatch, useSelector} from "react-redux";
import {updateConfirmationCode} from "../../actions/orderFormActions";


export const OrderFormConfirmationCode = ({text}) => {

    let value2 = useSelector(state => state.orderForm.confirmationCode);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateConfirmationCode(e.target.value));
    }

    const handleClear = (e) => {

        dispatch(updateConfirmationCode(''))
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.date}>
                <input
                    type="text"
                    placeholder="Введите ваш код подтверждения"
                    className={styles.input}
                    onChange={handleChange}
                    value={value2}
                />
                <Clear className={styles.icon} onClick={handleClear}/>
            </div>
        </div>
    );
}
