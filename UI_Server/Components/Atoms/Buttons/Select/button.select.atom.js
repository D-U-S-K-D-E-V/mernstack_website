import React from 'react';
import styles from './button.select.atom.css';

function ButtonSelectAtom(props){

    const listItems = props.list;
    return(
        <div className={styles.selectContainer}>
            <select className={styles.selectElem} onChange={props.ifChange}>
                {listItems.map(data => (
                    <option value={data.id}>{data.type}</option>
                ))}
            </select>
        </div>
    )
}

export default ButtonSelectAtom;