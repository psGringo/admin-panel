import React, {useState} from "react";
import styles from './OrderForm.module.css';
import cc from "classcat";
import {useDispatch, useSelector} from "react-redux";
import {OrderFormHeader} from "../OrderFormHeader/OrderFormHeader";
import {OrderFormPerson} from "../OrderFormPerson/OrderFormPerson";
import {OrderFormDateLockedData} from "../OrderFormLockedData/OrderFormDateLockedData";
import {OrderFormState} from "../OrderFormOrderState/OrderFormState";
import {OrderFormConfirmationCode} from "../OrderFormConfirmationCode/OrderFormConfirmationCode";
import {OrderFormFooter} from "../OrderFormFooter/OrderFormFooter";
import {updateOrder} from "../../actions/orderFormActions";


export const OrderForm = () => {

    const isVisible = useSelector(state => state.orderForm.isVisible)
    const page = useSelector(state => state.tableData.page);
    const index = useSelector(state => state.tableData.indexOfSelectedOrder);
    const dispatch = useDispatch();

    const handleOnSaveClick = () => {
        dispatch(updateOrder(id, person, state))
    }

    let id;
    let state;
    let date;
    let person;

    if (index != -1) {
        const selectedOrder = page[index];
        id = selectedOrder.id
        date = selectedOrder.date.toLocaleDateString();
        state = selectedOrder.state;
        person = selectedOrder.person;
    }


    const handleOnChangePerson = (e) => {
        person = e.target.value;
    }

    const handleOnChangeState = (e) => {
        state = e.target.value;
    }

    return (
        <div
            className={cc({
                [styles._]: true,
                [styles.visible]: isVisible && (index != -1),
            })}
        >
            <div className={styles.content}>
                <OrderFormHeader orderNumber={id}/>
                <OrderFormDateLockedData text="Дата и время" value={date}/>
                <OrderFormPerson value={person} onChange={handleOnChangePerson}/>
                <OrderFormDateLockedData text="Уровень лояльности" value="Новичок"/>
                <OrderFormState orderState={state} onChange={handleOnChangeState}/>
                <OrderFormConfirmationCode text="Код подтверждения" defaultValue={123}/>
                <OrderFormFooter onClick={handleOnSaveClick}/>
            </div>
        </div>
    );
}
