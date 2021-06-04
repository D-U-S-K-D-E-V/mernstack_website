import React from 'react';
import styles from './button.generic.atom.css';

function ButtonGenericAtom(props){

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
                <button 
                    type={determineType()} 
                    className={styles.genericButton} 
                    onClick={props.btnclick} 
                    value={props.btnvalue}
                >
                    {props.content}
                </button>
            </a>
        </div>
    )
}

export default ButtonGenericAtom;