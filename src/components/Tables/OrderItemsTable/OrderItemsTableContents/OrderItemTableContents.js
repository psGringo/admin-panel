import React from "react";
import styles from './OrderItemTableContents.module.css';
import {useSelector} from "react-redux";
import {OrderItemsTableDataRow} from "../OrderItemsTableDataRow/OrderItemsTableDataRow";


export const OrderItemTableContents = () => {

    const orderItems = useSelector(state => state.orderForm.orderItems);

    return (
        <div className={styles._}>
            {orderItems.map((item) => <OrderItemsTableDataRow key={item.id} contents={item} />)}
        </div>
    );
}

