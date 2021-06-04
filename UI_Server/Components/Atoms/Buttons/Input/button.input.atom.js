import React from 'react';
import styles from './button.input.atom.css';

function ButtonInputAtom(props){

    function determineType(){
        if(props.btnType != ""){
            return props.btnType
        }
        else{
            return "button"
        }
    }

    return (
        <div className={styles.genericContainer}>
            <a 
                href={props.link} 
                className={styles.genericLink}
            >
                <input
                    type={determineType()} 
                    className={styles.genericButton} 
                    onClick={props.btnclick} 
                    name={props.content}
                />
            </a>
        </div>
    )
}

export default ButtonInputAtom;