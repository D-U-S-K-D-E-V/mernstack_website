import React from 'react';
import styles from './fields.inputlarge.atom.css';

function FieldInputLargeAtom(props){
    return(
        <div className={styles.inputContainer}>
            <textarea type="text" onChange={props.ifchange} ref={props.compref} value={props.input} className={styles.inputElem}/>
        </div>
    )
}

export default FieldInputLargeAtom;