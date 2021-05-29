import React from "react";
import styles from './TableContents.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {ReactComponent as DotIcon} from "../../static/dot.svg";


const contents = [
    {
        id: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 2,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 3,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 4,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 5,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 6,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 7,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 8,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 9,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: '123',
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        id: 10,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: '123',
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    // {
    //     id: 11,
    //     date: '24.05.2021',
    //     status: 'Исполнен',
    //     statusIcon: '123',
    //     positions: 7,
    //     summa: '3800 Р',
    //     person: 'Греф Герман Оскарович'
    // },
    // {
    //     id: 12,
    //     date: '24.05.2021',
    //     status: 'Исполнен',
    //     statusIcon: '123',
    //     positions: 7,
    //     summa: '3800 Р',
    //     person: 'Греф Герман Оскарович'
    // }
]


export const TableContents = () => {
    return (
        <div className={styles._}>
            {contents.map((order) => <TableDataRow key = {order.id} contents={order}/>)}
        </div>
    );
}
