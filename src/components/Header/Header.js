import React from "react";
import styles from './Header.module.css';
import {Theme} from "../Theme/Theme";


export const Header = () => {
    const handleClick = () => {

        let a =  [1, 2 ,3 ];
        const b = a.filter(item => item > 1);

        alert(a);
        alert(b);

        // fetch("/api/users")
        //     .then((res) => res.json())
        //     .then((json) => {
        //         alert(JSON.stringify(json.users))
        //     })
    }


    return (
        <div className={styles._}>
            <div className={styles.title} onClick={handleClick}> Список заказов</div>
            <Theme/>
        </div>
    );
}
