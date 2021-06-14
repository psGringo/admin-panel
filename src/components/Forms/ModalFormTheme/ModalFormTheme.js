import React from "react";
import styles from './ModalFormTheme.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "../../Buttons/IconButton/IconButton";
import {ReactComponent as Sun} from "../../../static/sun.svg";
import {ReactComponent as Moon} from "../../../static/moon.svg";
import {setLightTheme} from "../../../actions/themeActions";
import {toggleModalFormThemeVisible} from "../../../actions/modalFormThemeActions";


export const ModalFormTheme = () => {

    const isVisible = useSelector(state => state.modalFormTheme.isVisible);

    const dispatch = useDispatch();

    const handleLightThemeOnClick = () => {
        dispatch(setLightTheme(true));
        dispatch(toggleModalFormThemeVisible());

    }

    const handleDarkThemeOnClick = () => {
        dispatch(setLightTheme(false));
        dispatch(toggleModalFormThemeVisible());
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
                    className={cc({
                        [styles.button]: true,
                         [styles.buttonLight]: true,
                    })}

                    onClick={handleLightThemeOnClick}
                />

                <IconButton
                    text="Темная тема"
                    icon={<Moon />}
                    className={cc({
                        [styles.button]: true,
                    })}

                    onClick={handleDarkThemeOnClick}
                />

            </div>

        </div>
    );
}
