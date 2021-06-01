import React from "react";
import styles from './Paginator.module.css';


export const Paginator = () => {
    return (
        <div className={styles._}>
            <div>
                arrow left
            </div>

            <div>
                arrow right
            </div>
        </div>
    );
}
