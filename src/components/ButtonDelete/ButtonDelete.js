import React from "react";
import styles from './ButtonDelete.module.css';
import {ReactComponent as Bin} from '../../static/bin.svg';
import {IconButton} from "../IconButton/IconButton";
import cc from "classcat";
import styles_icon_button from "../IconButton/IconButton.module.css";

export const ButtonDelete = () => {
    return (
        <div>
            <IconButton
                text="Удалить"
                icon={<Bin />}
                className={cc({
                    [styles._]: true,
                    [styles_icon_button._]: true
                })}
            />
        </div>
    );
}
