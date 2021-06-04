import React from 'react';
import styles from './media.contentimage.atom.css';

function MediaContentImageAtom(props){
    return(
        <div className={styles.imageContainer}>
            <img src={props.image} className={styles.imageElem} />
        </div>
    )
}

export default MediaContentImageAtom;