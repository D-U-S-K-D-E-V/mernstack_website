import React from 'react';
import styles from './text.sixthtitle.atom.css';

function TextSixthTitleAtom(props){
    return(
        <div className={styles.sixthTitleContainer}>
            <h6 className={styles.sixthTitle}>{props.content}</h6>
        </div>
    )
}

export default TextSixthTitleAtom;