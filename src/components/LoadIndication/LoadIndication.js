import React from "react";
import styles from './LoadIndication.module.css';
import {ReactComponent as Refresh} from "../../static/refresh.svg";
import {IconText} from "../IconText/IconText";

export const LoadIndication = () => {
    return (
        <IconText
            icon={<Refresh/>}
            text="Загрузка"
        />
    );
}
