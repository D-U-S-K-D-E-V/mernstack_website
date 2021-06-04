import React from 'react';
import TextFirstTitleAtom from '../../../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextFifthTitleAtom from '../../../../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import DesignBarAtom from '../../../../../Atoms/Design/Bar/design.bar.atom';
import ButtonRouterLinkAtom from '../../../../../Atoms/Buttons/Router Link/routerlink.atom';
import { Link } from 'react-router-dom';
import styles from './account.admin.blog.css';

class AccountAdminBlogView extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render(){
        const userinfo = JSON.parse(window.sessionStorage.getItem('userdata'));
        const username = userinfo[0].user;
        return(
            <div className={styles.viewContainer}>
                <div className={styles.backButtonContainer}>
                    <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${username}`} />
                </div>
                <div className={styles.viewTitleContainer}>
                    <TextFirstTitleAtom content="Blog" />
                    <DesignBarAtom />
                </div>
                <div className={styles.listSectionContainer}>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: `/profile/admin/${username}/pages/blog/new` }} 
                            onClick={this.props.logOutClick}
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="New" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: '/' }} 
                            onClick={this.props.logOutClick}
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Edit" />
                        </Link>
                    </div>
                    <div className={styles.listContainer}>
                        <Link 
                            to={{ pathname: '/' }} 
                            onClick={this.props.logOutClick}
                            className={styles.listItem}>
                            <TextFifthTitleAtom content="Remove" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountAdminBlogView;