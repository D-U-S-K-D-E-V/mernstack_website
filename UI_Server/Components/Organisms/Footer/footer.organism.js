import React from 'react';
import SMNavMol from '../../Molecules/Social Media Nav/smnav.molecule';
import SiteNavMol from '../../Molecules/Site Nav/sitenav.molecule';
import FooterLoginMol from '../../Molecules/Footer Login/footerlogin.molecule';
import TextCopyRightAtom from '../../Atoms/Text/Copyright/text.rights.atom';
import TextDuskBrandingAtom from '../../Atoms/Text/Dusk Branding/text.duskbranding.js';
import styles from './footer.organism.css';

function FooterOrg(props){

    return(
        <div className={styles.footerContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.firstColumnContainer}>
                    <div className={styles.firstColumnInnerContainer}>
                        <div className={styles.smNavContainer}>
                            <SMNavMol />
                        </div>
                        <div className={styles.accountContainer}>
                            <FooterLoginMol isLoggedIn={props.status} logoutclick={props.logoutclick} user={props.user}/>
                        </div>
                    </div>
                </div>   
                <div className={styles.siteNavContainer}>
                    <SiteNavMol home={"/"} about={"/about"} contact={"/contact"} portfolio={"/portfolio"} service={"/services"} blog={"/blog"}/>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <TextCopyRightAtom />
                <TextDuskBrandingAtom />
            </div>
        </div>
    )
}

export default FooterOrg;