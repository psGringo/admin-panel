import React from "react";
import styles from './ModalFormTheme.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "../../Buttons/IconButton/IconButton";
import {ReactComponent as Sun} from "../../../static/sun.svg";
import {modalFormTheme} from "../../../reducers/modalFormThemeReducers";

export const ModalFormTheme = () => {

    const isVisible = useSelector(state => state.modalFormTheme.isVisible);

    const dispatch = useDispatch();

    const handleLightThemeOnClick = () => {
        // dispatch(deleteSelectedTableRows( ({selectedRows})));
        // dispatch(toggleModalWindowDeleteVisible());
        alert('to do');
    }

    const handleDarkThemeOnClick = () => {
        // dispatch(deleteSelectedTableRows( ({selectedRows})));
        // dispatch(toggleModalWindowDeleteVisible());
        alert('to do');
    }





    return (
        <div className={cc({
            [styles._]: true,
            [styles.visible]: isVisible,
        })}
        >
            <div className={styles.windowContent}>
                <div className={styles.title}>
                    Выберите тему
                </div>


                <IconButton
                    text="Светлая тема"
                    icon={<Sun />}
                    // className={cc({
                    //     [styles._]: true,
                    //     [styles_icon_button._]: true,
                    // })}

                    onClick={handleLightThemeOnClick}
                />

                <IconButton
                    text="Темная тема"
                    icon={<Sun />}
                    // className={cc({
                    //     [styles._]: true,
                    //     [styles_icon_button._]: true,
                    // })}

                    onClick={handleDarkThemeOnClick}
                />

            </div>

        </div>
    );
}
