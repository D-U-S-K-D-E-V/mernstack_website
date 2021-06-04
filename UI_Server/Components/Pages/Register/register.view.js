import React from 'react';
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import RegistrationFormOrg from '../../Organisms/Registration Form/registrationform.organism'
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import ButtonRouterLinkAtom from '../../Atoms/Buttons/Router Link/routerlink.atom';
import styles from './register.view.css';

class RegisterView extends React.Component{
    
    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    render(){
        return(
            <div className={styles.loginViewContainer}>
                <div className={styles.pageBannerContainer}>
                    <PageBannerMol title="Register" image="isolectcover.jpg"/>
                </div>
                <div className={styles.loginContainer}>
                    <RegistrationFormOrg />
                </div>
                <div className={styles.loginOpportunityContainer}>
                    <div className={styles.loginQuestionContainer}>
                        <TextParagraphAtom content="Already Have An Account? " className={styles.textElem}/>
                    </div>
                    <div className={styles.loginQuestionLinkContainer}>
                        <ButtonRouterLinkAtom linkText="Login" link="/login" className={styles.linkElem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterView;