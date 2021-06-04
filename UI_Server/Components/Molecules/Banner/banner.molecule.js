import React from 'react';
import styles from './banner.molecule.css';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';

function BannerMolecule(props){
    return(
        <div className={styles.bannerContainer}>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content={props.titlecontent} />
                </div>
                <div className={styles.subtitleContainer}>
                    <TextThirdTitleAtom content={props.subtitlecontent} />
                </div>
                <div className={styles.genericContainer}>
                    <ButtonGenericAtom content={props.buttoncontent} link={props.link}/>
                </div>
        </div>
    )
}

export default BannerMolecule;