import React from 'react';
import TextFirstTitleAtom from '../../../../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextLabelAtom from '../../../../../../Atoms/Text/Label/text.labe.atom';
import FieldInputSmallAtom from '../../../../../../Atoms/Fields/Input Text Small/fields.inputsmall.atom';
import ButtonGenericAtom from '../../../../../../Atoms/Buttons/Generic/button.generic.atom';
import ButtonGenericRouterAtom from '../../../../../../Atoms/Buttons/Generic Router/button.genericrouter.atom';
import ButtonRouterLinkAtom from '../../../../../../Atoms/Buttons/Router Link/routerlink.atom';
import DesignBarAtom from '../../../../../../Atoms/Design/Bar/design.bar.atom';
import FieldsInputRichAtom from '../../../../../../Atoms/Fields/Input Text Rich/fields.inputrich.atom';
import styles from './account.admin.newblog.css';

class AccountAdminNewBlog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            author: ""
        }
    }


    render(){
        const userinfo = JSON.parse(window.sessionStorage.getItem('userdata'));
        const username = userinfo[0].user;
        const { title, author, content } = this.state;
        return(
            <div className={styles.viewContainer}>
                <div className={styles.backButtonContainer}>
                    <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${username}/pages/blog`} />
                </div>
                <div className={styles.viewHeader}>
                    <TextFirstTitleAtom content="New Post" />
                    <DesignBarAtom />
                </div>
                <div className={styles.blogFieldContainer}>
                    <div className={styles.postFieldContainer}>
                        <TextLabelAtom label="Title" />
                        <FieldInputSmallAtom />
                    </div>
                    <div className={styles.postFieldContainer}>
                        <TextLabelAtom label="Author" />
                        <FieldInputSmallAtom />
                    </div>
                    <div className={styles.postFieldContainer}>
                        <TextLabelAtom label="Banner" />
                        <ButtonGenericAtom content="Upload" />
                    </div>
                    <div className={styles.postFieldContainer}>
                        <TextLabelAtom label="Content" />
                        <div className={styles.editorContainer}>
                            <FieldsInputRichAtom />
                        </div>
                    </div>
                </div>
                <div className={styles.postButtonContainer}>
                    <ButtonGenericRouterAtom content="Post" />
                </div>
            </div>
        )
    }
}

export default AccountAdminNewBlog;