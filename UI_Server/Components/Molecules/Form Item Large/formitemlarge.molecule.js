import React from 'react';
import TextLabelAtom from '../../Atoms/Text/Label/text.labe.atom';
import FieldInputLargeAtom from '../../Atoms/Fields/Input Text Large/fields.inputlarge.atom';
import styles from './formitemlarge.molecule.css';

function FormItemLargeMol(props){

    return(
        <div className={styles.itemContainer}>
            <div className={styles.labelContainer}>
                <TextLabelAtom label={props.label}/>
            </div>
            <div className={styles.inputContainer}>
                <FieldInputLargeAtom ifchange={props.ifchange} input={props.input}/>
            </div>
        </div>
    )
}

export default FormItemLargeMol;