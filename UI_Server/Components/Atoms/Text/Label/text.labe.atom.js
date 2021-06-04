import React from 'react';
import styles from './text.label.atom.css';

function TextLabelAtom(props){
    return(
        <div className={styles.labelContainer}>
            <label className={styles.labelElem}>{props.label}</label>
        </div>
    )
}

export default TextLabelAtom;