import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../../../../State/state.store.js';
import ButtonRouterLinkAtom from '../../../../../Atoms/Buttons/Router Link/routerlink.atom.js';
import TextFirstTitleAtom from '../../../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextThirdTitleAtom from '../../../../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextFourthTitleAtom from '../../../../../Atoms/Text/Fourth Title/text.fourthtitle.atom';
import TextParagraphAtom from '../../../../../Atoms/Text/Paragraph/text.paragraph.atom';
import TextLabelAtom from '../../../../../Atoms/Text/Label/text.labe.atom';
import ButtonGenericAtom from '../../../../../Atoms/Buttons/Generic/button.generic.atom';
import ButtonSelectAtom from '../../../../../Atoms/Buttons/Select/button.select.atom';
import ButtonRouterLink from '../../../../../Atoms/Buttons/Router Link/routerlink.atom';
import DesignBarAtom from '../../../../../Atoms/Design/Bar/design.bar.atom';
import FieldSmallInputAtom from '../../../../../Atoms/Fields/Input Text Small/fields.inputsmall.atom';
import styles from './admin.edituser.css';
import { getDBRoutes, postDBRoutes, putDBRoutes } from '../../../../../../Routes/routes.db_server.js';

function AccountAdminEditUserView(){

    const context = useContext(AppContext);
    const userName = context.authorization.userCredentials.value.user;
    const userExists = context.authorization.userCredentials.value.length;

    const [ activeUserList, setActiveUserList ] = useState([]);

    const userTypes = [
        {
            id: 1,
            title: 'Admin',
        },    
        {
            id: 2,
            title: 'Editor'
        }, 
        {
            id: 3,
            title: 'User'
        }
    ];

    useEffect(() => {

            fetch(getDBRoutes.account.active)
            .then(res => {
                return res.json()
            })
            .then(json => {
                setActiveUserList(json)
            })
            .catch(err => {
                console.log(err)
                setUserList("An Error Occurred Retrieving the list")
            })
    }, []);

    return(
        <div className={styles.viewContainer}>
            <div className={styles.backButtonContainer}>
                <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${userName}`} />
            </div>
            <div className={styles.viewTitle}>
                <TextFirstTitleAtom content="Edit User" />
                <DesignBarAtom />
            </div>
            <div className={styles.viewSection}>
                {userTypes.map(typedata => (
                    <div className={styles.subSectionContainer}>
                        <div className={styles.subSectionHeader}>
                            <TextFourthTitleAtom content={typedata.title} />
                        </div>
                        <div className={styles.userDataContainer}>
                            {activeUserList.map(userdata => {
                                if(userdata.typeId == typedata.id){
                                    return(
                                        <div className={styles.userElem}>
                                            <div className={styles.detailsContainer}>
                                                <div className={styles.dataRowLabel}>
                                                    <TextLabelAtom label="Username" />
                                                </div>
                                                <div className={styles.dataCell}>
                                                    <TextParagraphAtom content={userdata.user} />
                                                </div>
                                                <div className={styles.dataRowLabel}>
                                                    <TextLabelAtom label="Email" />
                                                </div>
                                                <div className={styles.dataCell}>
                                                    <TextParagraphAtom content={userdata.email} />
                                                </div>
                                            </div>
                                            <div className={styles.buttonContainer}>
                                                <div className={styles.buttonElem}>
                                                    <ButtonRouterLink 
                                                        linkText="Select"
                                                        link={{
                                                            pathname: `/profile/admin/${userName}/users/edit/${userdata.user}`,
                                                            state: {
                                                                id: userdata.id,
                                                                userTitle: userdata.user
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default AccountAdminEditUserView;