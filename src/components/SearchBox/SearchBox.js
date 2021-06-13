import React from 'react';
import styles from './SearchBox.module.css';
import { ReactComponent as SearchButton } from '../../static/search.svg';
import {useDispatch} from "react-redux";
import {filterTableDataByOrderNoOrPerson} from "../../actions/tableDataActions";


export const SearchBox = () => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        const value = {value: e.target.value};
        dispatch(filterTableDataByOrderNoOrPerson(value));
    }

    return (
        <div className={styles._}>
          <SearchButton className = {styles.icon} />
          <input className={styles.input} placeholder="Номер заказа или ФИО" onChange={onChange} />
        </div>
    );

};
