import React from 'react';
import styles from './text.lighttext.atom.css';

// function TextLightTextAtom(props){
//     return(
//         <div className={styles.lightTextContainer}>
//             <p className={styles.lightText}>Posted On: {props.content}</p>
//         </div>
//     )
// }

function TextLightTextAtom(props){
    return(
        <div className={styles.lightTextContainer}>
            <p className={styles.lightText}>{props.content}</p>
        </div>
    )
}

export default TextLightTextAtom;