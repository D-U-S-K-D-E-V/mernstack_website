import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './button.back.atom.css';

function ButtonBackAtom(props){
    return(
        <div className={styles.backContainer}>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" className={styles.buttonElem} onClick={props.action}/>
        </div>
    )
};

export default ButtonBackAtom;