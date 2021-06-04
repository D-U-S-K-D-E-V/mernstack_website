import React from 'react';
import styles from './fields.inputsmall.atom.css';

function FieldInputTextAtom(props){
    return(
        <div className={styles.inputContainer}>
            <input type="text" value={props.input} onChange={props.ifchange} className={styles.inputElem}/>
        </div>
    )
}

export default FieldInputTextAtom;