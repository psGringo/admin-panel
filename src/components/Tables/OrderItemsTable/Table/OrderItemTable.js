import {OrderItemsTableHeader} from "../OrderItemsTableHeader/OrderItemsTableHeader";
import styles from './OrderItemsTable.module.css';
import React from "react";
import {OrderItemTableContents} from "../OrderItemsTableContents/OrderItemTableContents";

export const OrderItemsTable = () => {
    return (
        <div className = {styles._}>
            <OrderItemsTableHeader  />
            <OrderItemTableContents />
        </div>
    );
}
