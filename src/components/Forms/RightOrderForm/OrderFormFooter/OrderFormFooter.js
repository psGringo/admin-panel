import React from "react";
import styles from './OrderFormFooter.module.css';
import {IconButton} from "../../../Buttons/IconButton/IconButton";
import {ReactComponent as Confirmation} from '../../../../static/checkmark.svg';
import cc from "classcat";
import {useSelector} from "react-redux";

export const OrderFormFooter = ({onClick}) => {

    const isDataChanged = useSelector(state => state.orderForm.isDataChanged);
    const isLoadIndicationVisible = useSelector(state => state.loadIndication.isVisible);
    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div className={styles._}>
            <div
                className={cc({
                    [styles.footerContent]: true,
                    [styles.darkThemeContent]: !isLightTheme
                })}
            >
                < div className={cc({
                    [styles.title]: true,
                    [styles.titleInvisible]: !isLoadIndicationVisible,
                })}>
                    Загрузка...
                </div>
                <IconButton
                    text="Сохранить"
                    icon={<Confirmation className={styles.icon}/>}
                    className={cc({
                        [styles.button]: true,
                        [styles.disabled]: !isDataChanged,
                        [styles.darkThemeButton]: !isLightTheme
                    })}

                    onClick={onClick}
                />
            </div>
        </div>
    );
}
