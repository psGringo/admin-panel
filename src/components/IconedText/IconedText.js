import React from "react";
import styles from './IconedText.module.css';

/*По этому компоненту у меня вопрос - я пытался обобщить компоненты Theme и LoadIndication
* в один - IconedText, но из-за того, что нужно передавать исконку в качестве компонента - всё ломается
*
* */
export const IconedText = ({text, icon}) => {
    return (
        <div className={styles._}>
            {text}
            {/*{icon}*/}
        </div>
    );
}