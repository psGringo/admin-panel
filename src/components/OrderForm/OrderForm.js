import React, {useState} from "react";
import styles from './OrderForm.module.css';
import cc from "classcat";
import {useSelector} from "react-redux";
import {OrderFormHeader} from "../OrderFormHeader/OrderFormHeader";
import {OrderFormPerson} from "../OrderFormPerson/OrderFormPerson";
import {OrderFormDateLockedData} from "../OrderFormLockedData/OrderFormDateLockedData";
import {OrderFormState} from "../OrderFormOrderState/OrderFormState";
import {OrderFormConfirmationCode} from "../OrderFormConfirmationCode/OrderFormConfirmationCode";
import {OrderFormFooter} from "../OrderFormFooter/OrderFormFooter";


export const OrderForm = () => {

    const isVisible = useSelector(state => state.orderForm.isVisible)
    const selectedRows = useSelector(state => state.tableData.selectedRows);
    const page = useSelector(state => state.tableData.page);
    let date;
    let orderState;
    let person;
    let id;

    if ((selectedRows.length > 0) && (page.length > 0)) {
        const index = page.findIndex(item => item.id === Number(selectedRows[0]));
        if (index != -1) {
            const selectedOrder = page[index];
            date = selectedOrder.date.toLocaleDateString();
            orderState = selectedOrder.state;
            person = selectedOrder.person;
            id = selectedOrder.id
        }
    }

    return (
        <div
            className={cc({
                [styles._]: true,
                [styles.visible]: isVisible,
            })}
        >
            <div className={styles.content}>
                <OrderFormHeader orderNumber={id}/>
                <OrderFormDateLockedData text="Дата и время" value={date}/>
                <OrderFormPerson value={person}/>
                <OrderFormDateLockedData text="Уровень лояльности" value="Новичок"/>
                <OrderFormState orderState={orderState}/>
                <OrderFormConfirmationCode text="Код подтверждения" defaultValue={123}/>
                <OrderFormFooter/>
            </div>
        </div>
    );
}
