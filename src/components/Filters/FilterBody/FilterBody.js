import React from "react";
import styles from './FilterBody.module.css';
import {FilterIssueDate} from "../FilterIssueDate/FilterIssueDate";
import {FilterOrderSum} from "../FilterOrderSum/FilterOrderSum";
import {OrderStatusCombobox} from "../../Select/OrderStatusComboBox/OrderStatusCombobox";
import {ButtonApply} from "../../Buttons/ButtonApply/ButtonApply";
import {useSelector} from "react-redux";
import cc from "classcat";


export const FilterBody = () => {

    const isLightTheme = useSelector(state => state.theme.isLight)

    return (
        <div
            className={cc({
                [styles._]: true,
                [styles.darkTheme]: !isLightTheme
            })}
        >
            <FilterIssueDate/>
            <OrderStatusCombobox/>
            <FilterOrderSum/>
            <ButtonApply/>
        </div>
    );
}
