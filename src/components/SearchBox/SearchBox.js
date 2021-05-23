import React, { useState } from 'react';
import styles from './SearchBox.module.css';
import { ReactComponent as SearchButton } from '../../static/search.svg';


export const SearchBox = () => {

    return (
        <div className={styles._}>
          <SearchButton className = {styles.icon} />
          <input className={styles.input} placeholder="Номер заказа или ФИО" />
        </div>
    );
};