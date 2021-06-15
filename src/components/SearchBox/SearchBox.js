import React from 'react';
import styles from './SearchBox.module.css';
import { ReactComponent as SearchButton } from '../../static/search.svg';
import {useDispatch, useSelector} from "react-redux";
import {filterTableDataByOrderNoOrPerson} from "../../actions/tableDataActions";
import cc from "classcat";


export const SearchBox = () => {
    const isLightTheme = useSelector(state => state.theme.isLight);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const value = {value: e.target.value};
        dispatch(filterTableDataByOrderNoOrPerson(value));
    }

    return (
        <div className={styles._}>
          <SearchButton className = {styles.icon} />
          <input className={styles.input}
                 className={cc({
                     [styles.input]: true,
                     [styles.darkTheme]: !isLightTheme,
                 })}
                 placeholder="Номер заказа или ФИО"
                 onChange={onChange} />
        </div>
    );

};
