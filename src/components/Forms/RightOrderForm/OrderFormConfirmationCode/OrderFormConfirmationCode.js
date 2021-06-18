import React from "react";
import styles from './OrderFormConfirmationCode.module.css';
import {ReactComponent as Clear} from '../../../../static/x-medium.svg';
import {useDispatch, useSelector} from "react-redux";
import {updateConfirmationCode} from "../../../../actions/orderFormActions";
import cc from "classcat";


export const OrderFormConfirmationCode = ({text}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);
    let value = useSelector(state => state.orderForm.confirmationCode);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateConfirmationCode(e.target.value));
    }

    const handleClear = () => {
        dispatch(updateConfirmationCode(''))
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.date}>
                <input
                    className={cc({
                        [styles.input]: true,
                        [styles.darkTheme]: !isLightTheme,
                    })}
                    type="text"
                    placeholder="Введите ваш код подтверждения"
                    onChange={handleChange}
                    value={value}
                />
                <Clear className={styles.icon} onClick={handleClear}/>
            </div>
        </div>
    );
}
