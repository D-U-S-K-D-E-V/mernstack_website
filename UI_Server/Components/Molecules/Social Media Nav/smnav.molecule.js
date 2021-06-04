import React from 'react';
import ButtonRedditAtom from '../../Atoms/Buttons/Social Media/Reddit/button.reddit.atom';
import ButtonFacebookAtom from '../../Atoms/Buttons/Social Media/Facebook/button.facebook.atom';
import ButtonInstagramAtom from '../../Atoms/Buttons/Social Media/Instagram/button.instagram.atom';
import ButtonTikTokAtom from '../../Atoms/Buttons/Social Media/TikTok/button.tiktok.atom';
import ButtonYouTubeAtom from '../../Atoms/Buttons/Social Media/Youtube/button.youtube.atom';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import styles from './smnav.molecule.css';

function SMNavMol(){
    return(
        <div className={styles.smNavContainer}>
            <div className={styles.navTitleContainer}>
                <TextSecondTitleAtom content="Follow Us" />
            </div>
            <div className={styles.barContainer}>
                <DesignBarAtom />
            </div>
            <div className={styles.linkBox}>
                <div className={styles.linkContainer}>
                    <ButtonRedditAtom />
                </div>    
                <div className={styles.linkContainer}>
                    <ButtonFacebookAtom />
                </div>
                <div className={styles.linkContainer}>
                    <ButtonInstagramAtom />
                </div>
                {/* <div className={styles.linkContainer}>
                    <ButtonTikTokAtom />
                </div> */}
                <div className={styles.linkContainer}>
                    <ButtonYouTubeAtom />
                </div>
            </div>
        </div>
    )
}

export default SMNavMol;