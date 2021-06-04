import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../../State/state.store.js';
import styles from './account.admin.dashboard.css'
import TextFirstTitleAtom from '../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextThirdTitleAtom from '../../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextFifthTitleAtom from '../../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import ButtonRouterLinkAtom from '../../../Atoms/Buttons/Router Link/routerlink.atom.js';
import DesignBarAtom from '../../../Atoms/Design/Bar/design.bar.atom';
import { Link } from 'react-router-dom';


function AccountAdminDashboardView(props){

    const context = useContext(AppContext);
    const history = useHistory();

    const username = context.authorization.userCredentials.value.user;
    const userExists = context.authorization.userCredentials.value.length;

    function handleLogoutClick(){
        context.authorization.isLoggedIn.setValue(false);
        context.authorization.userCredentials.setValue({});
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    if(userExists == 0){
        return(
            <div className={styles.pageContainer}>
                <div className={styles.backButtonContainer}>
                    <ButtonRouterLinkAtom linkText="Back" link={`/`} />
                </div>
                <p>Nice Try</p>
            </div>
        )
    }
    else{
        return(
            <div className={styles.pageContainer}>
                <div className={styles.pageHeader}>
                    <TextFirstTitleAtom content="Account" />
                    <DesignBarAtom />
                </div>
                <div className={styles.accountCategoryContainer}>
                    <div className={styles.pageSubtitleContainer}>
                        <TextThirdTitleAtom content="Profile" />
                        <DesignBarAtom />
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/profile/changepw` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Change Password" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: '/' }} 
                            onClick={handleLogoutClick}
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Log Out" />
                        </Link>
                    </div>
                </div>
                <div className={styles.accountCategoryContainer}>
                    <div className={styles.pageSubtitleContainer}>
                        <TextThirdTitleAtom content="Pages" />
                        <DesignBarAtom />
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/home` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Home" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/about` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="About" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/portfolio` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Portfolio" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/services` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Services" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/blog` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Blog" />
                        </Link>
                    </div>
                </div>
                <div className={styles.accountCategoryContainer}>
                    <div className={styles.pageSubtitleContainer}>
                        <TextThirdTitleAtom content="Users" />
                        <DesignBarAtom />
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/users/add` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Add" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/users/edit` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Edit" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/users/remove` }} 
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Remove" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountAdminDashboardView;