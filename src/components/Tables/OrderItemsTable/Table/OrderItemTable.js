import {OrderItemsTableHeader} from "../OrderItemsTableHeader/OrderItemsTableHeader";
import styles from './OrderItemsTable.module.css';
import React from "react";
import {OrderItemTableContents} from "../OrderItemsTableContents/OrderItemTableContents";
import {OrderItemsTableFooter} from "../OrderItemsTableFooter/OrderItemsTableFooter";

export const OrderItemsTable = () => {
    return (
        <div className = {styles._}>
            <OrderItemsTableHeader  />
            <OrderItemTableContents />
            <OrderItemsTableFooter />
        </div>
    );
}
