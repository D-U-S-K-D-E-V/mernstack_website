import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './button.reply.atom.css';

function ButtonReplyAtom(props){
    return(
        <div className={styles.replyButtonContainer}>
            <FontAwesomeIcon icon={faPlus} className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonReplyAtom;