import React from 'react';
import styles from './media.postbanner.atom.css';

function MediaPostBannerAtom(props){
    const address = '../../../../Resources/Images/' + props.image;
    return(
        <div className={styles.bannerContainer}>
            <img src={address} className={styles.postBanner}></img>
        </div>
    )
}

export default MediaPostBannerAtom;