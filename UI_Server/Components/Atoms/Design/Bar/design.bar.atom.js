import React from 'react';
import styles from './design.bar.atom.css';

function DesignBarAtom(){
    return(
        <div className={styles.barContainer}>
            <hr className={styles.bar}/>
        </div>
    )
}

export default DesignBarAtom;