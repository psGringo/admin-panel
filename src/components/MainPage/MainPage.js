import React, {useEffect} from "react";
import styles from './MainPage.module.css';
import {Header} from "../Header/Header";
import {Filter} from "../Filters/Filter/Filter";
import {Table} from "../Tables/MainTable/Table/Table";
import {TableFooter} from "../Tables/MainTable/TableFooter/TableFooter";
import {ModalFormDelete} from "../Forms/ModalFormDelete/ModalFormDelete";
import {OrderForm} from "../Forms/RightOrderForm/OrderForm/OrderForm";
import {ModalFormTheme} from "../Forms/ModalFormTheme/ModalFormTheme";
import {useSelector} from "react-redux";

export const MainPage = () => {

    const isLightTheme = useSelector(state => state.theme.isLight);

    useEffect(() => {
        (!isLightTheme) && document.body.classList.add(styles.darkTheme);
        return () => {
            (!isLightTheme) && document.body.classList.remove(styles.darkTheme);
        }
    });

    return (
            <div className={styles._}>
                <Header />
                <Filter />
                <Table />
                <TableFooter />
                <ModalFormDelete />
                <ModalFormTheme />
                <OrderForm  />
            </div>
    );
}
