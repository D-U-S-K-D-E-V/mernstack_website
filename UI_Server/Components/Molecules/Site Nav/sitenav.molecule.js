import React from 'react';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import ButtonNavlistAtom from '../../Atoms/Buttons/Nav List/button.navlist.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import styles from './sitenav.molecule.css';

function SiteNavMol(props){
    return(
        <div className={styles.siteNavContainer}>
            <div className={styles.title}>
                <TextSecondTitleAtom content="Navigate"/>
            </div>
            <div className={styles.barConatiner}>
                <DesignBarAtom />
            </div>
            <div className={styles.navListContainer}>
                <ButtonNavlistAtom home={props.home} about={props.about} portfolio={props.portfolio} contact={props.contact} service={props.service} blog={props.blog}/>
            </div>
        </div>
    )
}

export default SiteNavMol;