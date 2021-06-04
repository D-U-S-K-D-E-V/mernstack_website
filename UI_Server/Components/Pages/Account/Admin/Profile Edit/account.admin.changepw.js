import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../../../State/state.store.js';
import NotificationMol from '../../../../Molecules/Notification/notification.molecule.js';
import FirstTitleTextAtom from '../../../../Atoms/Text/First Title/text.firsttitle.atom';
import FormItemSmallMol from '../../../../Molecules/Form Item Small/formitemsmall.molecule';
import ButtonRouterLinkAtom from '../../../../Atoms/Buttons/Router Link/routerlink.atom';
import DesignBarAtom from '../../../../Atoms/Design/Bar/design.bar.atom';
import ButtonGenericAtom from '../../../../Atoms/Buttons/Generic/button.generic.atom';
import { putDBRoutes } from '../../../../../Routes/routes.db_server.js'
import styles from './account.admin.changepw.css';

function AccountAdminChangePWView(props){

    const context = useContext(AppContext);
    const [ newPassword, setNewPassword ] = useState("");
    const userId = context.authorization.userCredentials.value.id;
    const userName = context.authorization.userCredentials.value.user;
    const setNotification = context.components.notification.setValue;

    console.log(newPassword)

    function updatePassword(newpw, id){
                if(newPassword.length < 8){
                    setNotification({
                        type: "Bad",
                        text: "Password must be atleast 8 characters!"
                    })
                }
                else{
                    try{
                        fetch(putDBRoutes.account.changepw, {
                            method: 'PUT',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                Id: `${userId}`,
                                password: `${newPassword}`
                            })
                        })
                        .then(console.log({
                            Id: id,
                            password: newpw
                        }))
                        setNotification({
                            type: "Good",
                            text: "Your Password Successfully Updated"
                        })
                    }
                    catch(err){
                        console.log(err);
                        setNotification({
                            type: "error",
                            text: "There was an issue setting your password. Please try again later."
                        })
                    }
                }
                setNewPassword("");
            }


    return(
        <div className={styles.viewContainer}>
            <div className={styles.backButtonContainer}>
                <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${userName}`} />
            </div>
            <div className={styles.titleContainer}>
                <FirstTitleTextAtom content="Reset" />
                <DesignBarAtom />
            </div>
            <form>
                <div className={styles.formItem}>
                    <FormItemSmallMol label="New Password" input={newPassword} ifchange={(evt) => setNewPassword(evt.target.value)}/>
                </div>
                <div className={styles.genButtonContainer}>
                    <ButtonGenericAtom content="Update" btnclick={() => updatePassword(newPassword, userId)}/>
                </div>
            </form>
        </div>
    )
}

export default AccountAdminChangePWView;