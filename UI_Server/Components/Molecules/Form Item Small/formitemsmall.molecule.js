import React from 'react';
import TextLabelAtom from '../../Atoms/Text/Label/text.labe.atom';
import FieldInputSmallAtom from '../../Atoms/Fields/Input Text Small/fields.inputsmall.atom';
import styles from './formitemsmall.molecule.css';

function FormItemSmallMol(props){

    return(
        <div className={styles.itemContainer}>
            <div className={styles.labelContainer}>
                <TextLabelAtom label={props.label} />
            </div>
            <div className={styles.inputContainer}>
                <FieldInputSmallAtom ifchange={props.ifchange} input={props.input}/>
            </div>
        </div>
    )
}

export default FormItemSmallMol;