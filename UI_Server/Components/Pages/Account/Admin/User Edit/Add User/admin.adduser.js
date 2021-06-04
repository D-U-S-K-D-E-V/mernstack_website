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
import styles from './admin.adduser.css';
import { getDBRoutes, postDBRoutes, putDBRoutes } from '../../../../../../Routes/routes.db_server.js';

function AccountAdminAddUserView(props){

    const context = useContext(AppContext);
    const userName = context.authorization.userCredentials.value.user;
    const userExists = context.authorization.userCredentials.value.length;
    const [ inactiveUserList, setInactiveUserList ] = useState([]);
    const [ userNameInput, setUserNameInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ emailInput, setEmailInput ] = useState("");
    const [ typeInput, setTypeInput ] = useState([]);
    const [ postStatus, setPostStatus ] = useState(null);
    const [ restoreStatus, setRestoreStatus ] = useState(null);

    console.log(typeInput)
    const userData = {
        typeId: typeInput,
        user: userNameInput,
        password: passwordInput,
        email: emailInput
    }

    const listItems = [
        {
            id: 0,
            type: ""
        },
        {
            id: 1,
            type: "Admin"
        },
        {
            id: 2,
            type: "Editor"
        }
    ];

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

    //On Page Load
    useEffect(() => {
        fetch(getDBRoutes.account.inactive)
        .then(res => {
            return res.json()
        })
        .then(json => {
            setInactiveUserList(json)
        })
        .catch(err => {
            console.log(err)
            setUserList("An Error Occurred Retrieving the list")
        })
    }, [])

    //For Post Status
    useEffect(() => {
        if(postStatus == null){
            console.log("no Status Yet")
        }
        else if(postStatus.status == "success"){
            context.components.notification.setValue({
                text: "User Added Successfully", 
                type: "Good"
            })
        }
        else if(postStatus.status == "error"){
            context.components.notification.setValue({
                text: "An Error Occured, See Console for more details",
                type: "Bad"
            })
        }
        else{
            console.log("no status yet")
        }
    }, [postStatus])

    //For Restore Status
    useEffect(() => {
        if(restoreStatus == null){
            console.log("no status yet")
        }
        else if(restoreStatus.status == "success"){
            context.components.notification.setValue({
                text: "User Restored Successfully",
                type: "Good"
            })

            fetch(getDBRoutes.account.inactive)
                .then(res => {
                    return res.json()
                })
                .then(json => {
                    setInactiveUserList(json)
                })
                .catch(err => {
                    console.log(err)
                    setUserList("An Error Occurred Retrieving the list")
                })
        }
        else if(restoreStatus.status == "error"){
            context.components.notification.setValue({
                text: "An Error Occured, See Console for more details",
                type: "Bad"
            })
        }
        else{
            context.components.notification.setValue({
                text: "An Unknown Error Occured, See Console for more details",
                type: "Error"
            })
            console.log(restoreStatus)
        }
    }, [restoreStatus])

    function AddUser(){
        fetch(postDBRoutes.account.addUser, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            setPostStatus(json)
        })
        .then(json => {
            setUserNameInput("")
            setEmailInput("")
            setPasswordInput("")
        })
        .catch(err => {
            setPostStatus({
                text: "client_error",
                message: err
            })
        })
    }

    function RestoreUser(personData){
        fetch(putDBRoutes.account.users.restore, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: personData
            })
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            setRestoreStatus(json)
        })
    }
    return(
        <div className={styles.viewContainer}>
            <div className={styles.backButtonContainer}>
                <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${userName}`} />
            </div>
            <div className={styles.viewTitle}>
                <TextFirstTitleAtom content="Add User" />
                <DesignBarAtom />
            </div>
            <div className={styles.viewSection}>
                <div className={styles.viewSectionTitle}>
                    <TextThirdTitleAtom content="New User" />
                    <DesignBarAtom />
                </div>
                <div className={styles.newUserContainer}>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Username" />
                        <FieldSmallInputAtom ifchange={(evt) => setUserNameInput(evt.target.value)} input={userNameInput}/>
                    </div>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Email" />
                        <FieldSmallInputAtom ifchange={(evt) => setEmailInput(evt.target.value)} input={emailInput}/>
                    </div>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Password" />
                        <FieldSmallInputAtom ifchange={(evt) => setPasswordInput(evt.target.value)} input={passwordInput}/>
                    </div>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Type" />
                        <ButtonSelectAtom list={listItems} ifChange={(evt) => setTypeInput(evt.target.value)}/>
                    </div>
                    <div className={styles.addButtonContainer}>
                        <ButtonGenericAtom btnclick={AddUser} content="Add" />
                    </div>
                </div>
            </div>
            <div className={styles.viewSection}>
                <div className={styles.viewSectionTitle}>
                    <TextThirdTitleAtom content="Restore User" />
                    <DesignBarAtom />
                </div>
                
                {userTypes.map(typedata => (
                    <div className={styles.subSectionContainer}>
                        <div className={styles.subSectionHeader}>
                            <TextFourthTitleAtom content={typedata.title} />
                        </div>
                        <div className={styles.userDataContainer}>
                            {inactiveUserList.map(userdata => {
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
                                                    <ButtonRouterLink linkText="Restore" btnclick={() => RestoreUser(userdata.id)}/>
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

export default AccountAdminAddUserView;