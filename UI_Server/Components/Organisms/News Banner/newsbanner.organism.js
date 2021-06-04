import React from 'react';
import BannerMolecule from '../../Molecules/Banner/banner.molecule';
import MediaMainBannerAtom from '../../Atoms/Media/Main Banner/media.mainbanner.atom';
import styles from './newsbanner.organism.css';

function NewsBannerOrganism(props){
    return(
        <div className={styles.newsBannerContainer}>
            <div className={styles.mainBannerContainer}> 
                <MediaMainBannerAtom image={props.image}/>
            </div>
            <div className={styles.bannerContainer}>
                <BannerMolecule titlecontent={props.titlecontent} subtitlecontent={props.subtitlecontent} buttoncontent={props.buttoncontent} link={props.link}/>
            </div>
        </div>
    )
}

export default NewsBannerOrganism;