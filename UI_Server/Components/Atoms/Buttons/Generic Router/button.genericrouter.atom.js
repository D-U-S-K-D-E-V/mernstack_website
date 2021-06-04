import React from 'react';
import styles from './button.genericrouter.atom.css';
import { Link } from 'react-router-dom';

function ButtonGenericRouterAtom(props){
    return(
        <div className={styles.genericContainer}>
            <Link to={props.link}><button type="button" className={styles.genericButton} onClick={props.btnclick} value={props.btnvalue}>{props.content}</button></Link>
        </div>
    )
}


export default ButtonGenericRouterAtom;