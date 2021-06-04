import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.navlist.atom.css';

function ButtonNavListAtom(props){
    return(
        <div className={styles.navlistContainer}>   
            <ul className={styles.navlist}>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.home}>Home</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.about}>About</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.portfolio}>Portfolio</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.service}>Services</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.contact}>Contact</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={props.blog}>Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default ButtonNavListAtom;