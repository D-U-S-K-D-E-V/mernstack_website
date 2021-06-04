import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok  } from '@fortawesome/free-brands-svg-icons';
import styles from './button.tiktok.atom.css';

function ButtonTikTokAtom(){
    return(
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={faTiktok} size="2x" className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonTikTokAtom;