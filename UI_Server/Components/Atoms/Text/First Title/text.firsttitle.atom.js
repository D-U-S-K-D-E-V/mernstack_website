import React from 'react';
import styles from './text.firsttitle.atom.css';

function TextFirstTitleAtom(props){
    return(
        <div className={styles.firstTitleContainer}>
            <h1 className={styles.firstTitle}>{props.content}</h1>
        </div>
    )
}

export default TextFirstTitleAtom;