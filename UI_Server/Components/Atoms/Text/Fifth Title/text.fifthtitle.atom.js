import React from 'react';
import styles from './text.fifthtitle.atom.css';

function TextFifthTitleAtom(props){
    return(
        <div className={styles.fifthTitleContainer}>
            <h5 className={styles.fifthTitle}>{props.content}</h5>
        </div>
    )
}

export default TextFifthTitleAtom;