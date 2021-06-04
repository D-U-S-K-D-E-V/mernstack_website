import React from 'react';
import { getFileRoutes } from '../../../../Routes/routes.file_server.js'; 
import styles from './media.mainbanner.atom.css'

function MediaMainBannerAtom(props){
    
    const address = getFileRoutes.images(props.image);

    return(
        <div className={styles.mainBannerContainer}>
            <img src={address} className={styles.mainBanner}></img>
        </div>
    )
}

export default MediaMainBannerAtom;