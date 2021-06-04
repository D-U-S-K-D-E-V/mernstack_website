import React from 'react';
import { Link } from 'react-router-dom';
import styles from './text.logo.atom.css';

function TextLogoAtom(props){
    return(
        <div className={styles.logoContainer}>
            
                <p className={styles.logo}>
                    <Link className={props.toggle ? styles.logoLinkOpen : styles.logoLinkClosed} to='/' >Encircle</Link>
                </p>
        </div>
    )
}

export default TextLogoAtom;