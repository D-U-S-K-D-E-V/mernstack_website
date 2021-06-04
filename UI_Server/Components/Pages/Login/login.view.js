import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../State/state.store.js'; 
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import ButtonRouterLinkAtom from '../../Atoms/Buttons/Router Link/routerlink.atom';
import LoginFormOrg from '../../Organisms/Login Form/loginform.organism';
import styles from './login.view.css';
import { Redirect } from 'react-router-dom';

function LoginView(props){

    

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    return(
        <div className={styles.loginViewContainer}>
            <div className={styles.pageBannerContainer}>
                <PageBannerMol title="login" image="hjcopiedcitycover.jpg"/>
            </div>
            <div className={styles.loginContainer}>
                <LoginFormOrg />
            </div>
            <div className={styles.regOpportunityContainer}>
                <div className={styles.regQuestionContainer}>
                    <TextParagraphAtom content="Don't Have An Account? " className={styles.textElem}/>
                </div>
                <div className={styles.regQuestionLinkContainer}>
                    <ButtonRouterLinkAtom linkText="Register" link="/register" className={styles.linkElem}/>
                </div>
            </div>
        </div>
    )
}


export default LoginView;