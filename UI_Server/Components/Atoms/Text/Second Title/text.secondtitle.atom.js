import React from 'react';
import styles from './text.secondtitle.atom.css';

function TextSecondTitleAtom(props){
    return(
        <div className={styles.secondTitleContainer}>
            <h2 className={styles.secondTitle}>{props.content}</h2>
        </div>
    )
}

export default TextSecondTitleAtom;