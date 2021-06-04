import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import styles from './button.instagram.atom.css';

function ButtonInstagramAtom(){
    return(
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonInstagramAtom;