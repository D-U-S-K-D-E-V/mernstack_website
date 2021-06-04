import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube  } from '@fortawesome/free-brands-svg-icons';
import styles from './button.youtube.atom.css';

function ButtonYoutubeAtom(){
    return(
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={faYoutube} size="2x" className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonYoutubeAtom;