import React from "react";
import styles from './FilterBody.module.css';
import {FilterIssueDate} from "../FilterIssueDate/FilterIssueDate";
import {FilterOrderSum} from "../FilterOrderSum/FilterOrderSum";
import {OrderStatusCombobox} from "../OrderStatusComboBox/OrderStatusCombobox";
import {ButtonApply} from "../ButtonApply/ButtonApply";


export const FilterBody = () => {
    return (
        <div className={styles._}>
            <FilterIssueDate />
            <OrderStatusCombobox />
            <FilterOrderSum />
            <ButtonApply />
        </div>
    );
}
