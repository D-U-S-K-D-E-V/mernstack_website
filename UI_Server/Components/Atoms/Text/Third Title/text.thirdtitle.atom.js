import React from 'react';
import styles from './text.thirdtitle.atom.css';

function TextThirdTitleAtom(props){
    return(
        <div className={styles.thirdTitleContainer}>
            <h3 className={styles.thirdTitle}>{props.content}</h3>
        </div>
    )
}

export default TextThirdTitleAtom;