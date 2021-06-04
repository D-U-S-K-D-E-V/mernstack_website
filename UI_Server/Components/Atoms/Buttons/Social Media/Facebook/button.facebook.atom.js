import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF  } from '@fortawesome/free-brands-svg-icons';
import styles from './button.facebook.atom.css';

function ButtonFacebookAtom(){
    return(
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={faFacebookF} size="2x" className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonFacebookAtom;