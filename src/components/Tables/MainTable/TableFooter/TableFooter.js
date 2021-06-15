import React from "react";
import styles from './TableFooter.module.css';
import {CountChosenRecords} from "../../../CountChosenRecords/CountChosenRecords";
import {ButtonChangeStatus} from "../../../Buttons/ButtonChangeStatus/ButtonChangeStatus";
import {ButtonDelete} from "../../../Buttons/ButtonDelete/ButtonDelete";
import {Paginator} from "../../../Pagination/Paginator/Paginator";
import cc from "classcat";
import {useSelector} from "react-redux";


export const TableFooter = () => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    return (
        <div
             className={cc({
                 [styles._]: true,
                 [styles.darkTheme]: !isLightTheme,
             })}

        >
            <CountChosenRecords count = "5" />
            <ButtonChangeStatus />
            <ButtonDelete />
            <Paginator />
        </div>
    );
}
