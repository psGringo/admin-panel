import React from "react";
import styles from './TableContents.module.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {DataGenerator} from "../Data/DataGenereator";


export const TableContents = () => {
    return (
        <div className={styles._}>
            {DataGenerator(200).map((order) => <TableDataRow key = {order.id} contents={order}/>)}
        </div>
    );
}
