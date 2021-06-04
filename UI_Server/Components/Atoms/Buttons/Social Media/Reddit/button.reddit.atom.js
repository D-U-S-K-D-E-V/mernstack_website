import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien  } from '@fortawesome/free-brands-svg-icons';
import styles from './button.reddit.atom.css';

function ButtonRedditAtom(){
    return(
        <div className={styles.buttonContainer}>
            <FontAwesomeIcon icon={faRedditAlien} size="2x" className={styles.buttonElem}/>
        </div>
    )
}

export default ButtonRedditAtom;