import React from 'react';
import styles from './text.paragraph.atom.css';

function TextParagraphAtom(props){
    return(
        <div className={styles.paragraphContainer}>
            <p className={styles.paragraph}>{props.content}</p>
        </div>
    );
};

export default TextParagraphAtom