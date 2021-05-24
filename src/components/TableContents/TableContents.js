import React from "react";
import './TableContents.css';
import {TableDataRow} from "../TableDataRow/TableDataRow";
import {ReactComponent as DotIcon} from "../../static/dot.svg";


const contents = [
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: <DotIcon width = "16px" height = "16px" />,
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: '123',
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    },
    {
        number: 1,
        date: '24.05.2021',
        status: 'Исполнен',
        statusIcon: '123',
        positions: 7,
        summa: '3800 Р',
        person: 'Греф Герман Оскарович'
    }
]


export const TableContents = () => {
    return (
        <div className="tableContents">
            {contents.map((order) => <TableDataRow contents={order}/>)}
        </div>
    );
}