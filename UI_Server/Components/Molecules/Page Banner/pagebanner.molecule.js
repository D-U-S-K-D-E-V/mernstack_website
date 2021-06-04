import React from 'react';
import TextFirstTitleAtom from '../../Atoms/Text/First Title/text.firsttitle.atom';
import MediaMainBannerAtom from '../../Atoms/Media/Main Banner/media.mainbanner.atom';
import styles from './pagebanner.molecule.css'

function PageBannerMol(props){
    return(
        <div className={styles.pageBannerContainer}>
            <div className={styles.imageContainer}>
                <MediaMainBannerAtom image={props.image}/>
            </div>
            <div className={styles.pageTitleContainer}>
                <TextFirstTitleAtom content={props.title} classname={styles.title}/>
            </div>
        </div>
    )
}

export default PageBannerMol;