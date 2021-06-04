import React, { useContext } from 'react';
import { AppContext } from '../../../State/state.store.js';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import ButtonLoginLinkAtom from '../../Atoms/Buttons/Footer Login Link/button.loginlink.atom';
import ButtonLogoutLinkAtom from '../../Atoms/Buttons/Footer Logout Link/button.logoutlink.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import styles from './footerlogin.molecule.css';

function FooterLoginMol(props){

    const context = useContext(AppContext);

    if(context.authorization.isLoggedIn.value == true){
        return(
            <div className={styles.loginContainer}>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content="Account" />
                    <DesignBarAtom />
                </div>
                <div className={styles.loginNav}>
                    <ButtonLogoutLinkAtom logoutclick={props.logoutclick} userData={props.user}/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.loginContainer}>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content="Account" />
                    <DesignBarAtom />
                </div>
                <div className={styles.loginNav}>
                    <ButtonLoginLinkAtom />
                </div>
            </div>
        )
    }
}

export default FooterLoginMol;