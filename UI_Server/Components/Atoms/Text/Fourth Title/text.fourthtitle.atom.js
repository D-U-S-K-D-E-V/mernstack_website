import React from 'react';
import styles from './text.fourthtitle.atom.css';

function TextFourthTitleAtom(props){
    return(
        <div className={styles.fourthTitleContainer}>
            <h4 className={styles.fourthTitle}>{props.content}</h4>
        </div>
    )
}

export default TextFourthTitleAtom;