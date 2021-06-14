import React, {useEffect, useState} from "react";
import styles from './OrderForm.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {OrderFormHeader} from "../OrderFormHeader/OrderFormHeader";
import {OrderFormPerson} from "../OrderFormPerson/OrderFormPerson";
import {OrderFormDateLockedData} from "../OrderFormLockedData/OrderFormDateLockedData";
import {OrderFormState} from "../OrderFormOrderState/OrderFormState";
import {OrderFormConfirmationCode} from "../OrderFormConfirmationCode/OrderFormConfirmationCode";
import {OrderFormFooter} from "../OrderFormFooter/OrderFormFooter";
import {
    setOrderFormDataChanged,
    updateOrder,
    updatePersonOnOrderForm,
    updateStateOnOrderForm
} from "../../../../actions/orderFormActions";
import {OrderItemsTable} from "../../../Tables/OrderItemsTable/Table/OrderItemTable";



export const OrderForm = () => {

    const isVisible = useSelector(state => state.orderForm.isVisible)
    const data = useSelector(state => state.orderForm);
    const dispatch = useDispatch();

    const id = useSelector(state => state.orderForm.id);
    const date = useSelector(state => state.orderForm.date);
    const state = useSelector(state => state.orderForm.state);
    const person = useSelector(state => state.orderForm.person);

    const handleOnSaveClick = () => {
        dispatch(updateOrder(data));
    }

    const handleOnChangePerson = (e) => {
        dispatch(updatePersonOnOrderForm(e.target.value));
        dispatch(setOrderFormDataChanged(true));
    }

    const handleOnChangeState = (e) => {
        dispatch(updateStateOnOrderForm(e.target.value));
        dispatch(setOrderFormDataChanged(true));
    }

    const getDate = (value) => {
        const date = new Date(value);
        return date.toLocaleString();
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
                <OrderFormDateLockedData text="Дата и время" value={getDate(date)}/>
                <OrderFormPerson value={person} onChange={handleOnChangePerson}/>
                <OrderItemsTable />
                <OrderFormDateLockedData text="Уровень лояльности" value="Новичок"/>
                <OrderFormState orderState={state} onChange={handleOnChangeState}/>
                <OrderFormConfirmationCode text="Код подтверждения" defaultValue={123}/>
                <OrderFormFooter onClick={handleOnSaveClick}/>
            </div>
        </div>
    );
}
