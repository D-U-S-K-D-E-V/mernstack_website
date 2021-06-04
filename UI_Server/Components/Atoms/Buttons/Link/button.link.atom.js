import React from 'react';
import styles from './button.link.atom.css';

function ButtonLinkAtom(props){
    return(
        <div>
            <a href={props.link} className={styles.linkElem}>{props.content}</a>
        </div>
    )
}

export default ButtonLinkAtom;