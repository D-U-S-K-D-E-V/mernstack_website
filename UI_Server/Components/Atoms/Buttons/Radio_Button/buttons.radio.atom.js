import React, { useState } from 'react';
import TextLabelAtom from '../../Text/Label/text.labe.atom.js';
import styles from './button.radio.atom.css';

function ButtonsRadioAtom(props){

    return(
        <div>
            {props.data.map(data => (
                <div className={styles.radioContainer}>
                    <input 
                        className={styles.radioElem} 
                        type="radio" 
                        id={data.id} 
                        name="radiogroup" 
                        value={data.id}
                        onChange={props.change} 
                    />
                    <div className={styles.radioLabelContainer}>
                        <TextLabelAtom label={data.label} />
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ButtonsRadioAtom;