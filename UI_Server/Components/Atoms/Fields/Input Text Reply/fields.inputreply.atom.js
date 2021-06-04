import React from 'react';
import styles from './fields.inputreply.atom.css';

function FieldInputReplyAtom(props){
    return(
        <div className={styles.inputContainer}>
            <input type="text" value={props.input} onChange={props.ifchange} className={styles.inputElem}/>
        </div>
    )
}

export default FieldInputReplyAtom;