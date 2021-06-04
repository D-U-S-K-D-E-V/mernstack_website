import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.loginlink.atom.css';

function ButtonLoginLinkAtom(props){
    return(
        <div className={styles.navlistContainer}>   
            <ul className={styles.navlist}>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to="/login">Login</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to="/register">Register</Link>
                </li>
            </ul>
        </div>
    )
}

export default ButtonLoginLinkAtom;