import React from 'react';
import { Link } from 'react-router-dom';
import FirstTitleTextAtom from '../../../../Atoms/Text/First Title/text.firsttitle.atom';
import FormItemSmallMol from '../../../../Molecules/Form Item Small/formitemsmall.molecule';
import ButtonRouterLinkAtom from '../../../../Atoms/Buttons/Router Link/routerlink.atom';
import DesignBarAtom from '../../../../Atoms/Design/Bar/design.bar.atom';
import ButtonGenericAtom from '../../../../Atoms/Buttons/Generic/button.generic.atom';
import styles from './account.changepw.view.css';

class AccountChangePWView extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){

    }
    render(){
        return(
            <div className={styles.viewContainer}>
                <div className={styles.backButtonContainer}>
                    <ButtonRouterLinkAtom linkText="Back" link="/profile/user/username" />
                </div>
                <div className={styles.titleContainer}>
                    <FirstTitleTextAtom content="Reset" />
                    <DesignBarAtom />
                </div>
                <form>
                    <div className={styles.formItem}>
                        <FormItemSmallMol label="Old Password" />
                    </div>
                    <div className={styles.formItem}>
                        <FormItemSmallMol label="New Password" />
                    </div>
                    <div className={styles.genButtonContainer}>
                        <ButtonGenericAtom content="Update" />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default AccountChangePWView;