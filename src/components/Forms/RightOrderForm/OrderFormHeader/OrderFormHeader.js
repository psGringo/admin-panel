import React from "react";
import styles from './OrderFormHeader.module.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleOrderFormVisible} from "../../../../actions/orderFormActions";
import {ReactComponent as CloseCross} from "../../../../static/x-medium.svg";
import cc from "classcat";


export const OrderFormHeader = ({orderNumber}) => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleOrderFormVisible())
    }

    return (
        <div className={styles._}>
            <div
                className={cc({
                    [styles.title]: true,
                    [styles.darkTheme]: !isLightTheme,
                })}

            >
                Заявка #{orderNumber}
            </div>
            <CloseCross className={styles.cross} onClick={handleClose}/>
        </div>
    );
}
