import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './button.forward.atom.css';

function ButtonForwardAtom(props){
    return(
        <div className={styles.forwardContainer}>
            <FontAwesomeIcon icon={faChevronRight} size="2x" className={styles.buttonElem} onClick={props.action}/>
        </div>
    )
};

export default ButtonForwardAtom;