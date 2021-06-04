import React, { useContext } from 'react';
import { AppContext } from '../../../State/state.store.js';
import styles from './notification.molecule.css'

export function NotificationMol(props){

    const context = useContext(AppContext);
    const noteType = context.components.notification.value.type;
    const noteText = context.components.notification.value.text;

    if(noteType == "Good"){
        return(
            <div className={styles.goodClass}>
                <p>{noteText}</p>
            </div>
        )
    }
    else if(noteType == "Bad"){
        return(
            <div className={styles.badClass}>
                <p>{noteText}</p>
            </div>
        )
    }
    else if(noteType == "Error"){
        return(
            <div className={styles.errorClass}>
                <p>{noteText}</p>
            </div>
        )
    }
    else{
        return(
            <div className={styles.noClass}>
                <p>{noteText}</p>
            </div>
        )
    }
}