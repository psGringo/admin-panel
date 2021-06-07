import React from "react";
import styles from './OrderFormHeader.module.css';
import {useDispatch} from "react-redux";
import {toggleOrderFormVisible} from "../../actions/orderFormActions";


export const OrderFormHeader = ({orderNumber}) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleOrderFormVisible())
    }

    return (
        <div className={styles._}>
            <div className={styles.title}>
                Заявка #{orderNumber}
            </div>
            <div className={styles.cross} onClick={handleClose}>
                X
            </div>
        </div>
    );
}
