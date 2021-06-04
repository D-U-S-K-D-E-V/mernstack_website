import React from 'react';
import TextFirstTitleAtom from '../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextThirdTitleAtom from '../../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextFifthTitleAtom from '../../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import { Link } from 'react-router-dom';
import DesignBarAtom from '../../../Atoms/Design/Bar/design.bar.atom';
import styles from './account.user.dashboard.css';

class AccountUserDashboardView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData: this.props.userLoginData
        }
    }

    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render(){
        return(
            <div className={styles.profileContainer}>
                <div className={styles.profileTitleContainer}>
                    <TextFirstTitleAtom content="Account" />
                    <DesignBarAtom />
                </div>
                <div className={styles.subTitleContainer}>
                    <TextThirdTitleAtom content="Profile" />
                    <DesignBarAtom />
                </div>
                <div className={styles.listContainer1}>
                    <Link to={{ pathname: '/profile/user/username/changepw' }} className={styles.listItem}>
                        <TextFifthTitleAtom content="Change Password" />
                    </Link>
                </div>
                <div className={styles.listContainer2}>
                    <Link to={{ pathname: '/' }} className={styles.listItem} onClick={this.props.logOutClick}>
                        <TextFifthTitleAtom content="Log Out" />
                    </Link>
                </div>
                <div className={styles.listContainer1}>
                    <Link to={{ pathname: '/' }} className={styles.listItem}>
                        <TextFifthTitleAtom content="Delete Account" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default AccountUserDashboardView;