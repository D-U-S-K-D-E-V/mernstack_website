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

function AccountAdminEditOneUserView(props){

    const context = useContext(AppContext);
    const userName = context.authorization.userCredentials.value.user;
    const editingId = props.location.state.id;
    const editingName = props.location.state.userTitle;
    const userExists = context.authorization.userCredentials.value.length;
    const [ inactiveUserList, setInactiveUserList ] = useState([]);
    const [ userNameInput, setUserNameInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ emailInput, setEmailInput ] = useState("");
    const [ typeInput, setTypeInput ] = useState([]);
    const [ putStatus, setPutStatus ] = useState(null);

    console.log(typeInput)

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
        },
        {
            id: 3,
            type: "User"
        }
    ];

    // const userTypes = [
    //     {
    //         id: 1,
    //         title: 'Admin',
    //     },    
    //     {
    //         id: 2,
    //         title: 'Editor'
    //     }, 
    //     {
    //         id: 3,
    //         title: 'User'
    //     }
    // ];

    //On Page Load
    useEffect(() => {
        fetch(getDBRoutes.account.selectOne(editingId))
        .then(res => {
            return res.json()
        })
        .then(json => {
            setUserNameInput(json[0].user);
            setTypeInput(json[0].typeid)
            setEmailInput(json[0].email)
        })
        .catch(err => {
            console.log(err)
            setUserList("An Error Occurred Retrieving the list")
        })
    }, [])

    //For Post Status
    useEffect(() => {
        if(putStatus == null){
            console.log("no Status Yet")
        }
        else if(putStatus.status == "success"){
            context.components.notification.setValue({
                text: "User Updated Successfully", 
                type: "Good"
            })
        }
        else if(putStatus.status == "error"){
            context.components.notification.setValue({
                text: "An Error Occured, See Console for more details",
                type: "Bad"
            })
        }
        else{
            console.log("no status yet")
        }
    }, [putStatus])



    function UpdateUser(){
        fetch(putDBRoutes.account.users.update, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: editingId,
                user: userNameInput,
                email: emailInput,
                typeId: typeInput
            })
        })
        .then(res => {
            return res.json()
        })
        .then(json => {
            setPutStatus(json)
        })
    }
    return(
        <div className={styles.viewContainer}>
            <div className={styles.backButtonContainer}>
                <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${userName}/users/edit`} />
            </div>
            <div className={styles.viewTitle}>
                <TextFirstTitleAtom content={`${editingName}`} />
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
                        <TextLabelAtom label="Type" />
                        <ButtonSelectAtom list={listItems} ifChange={(evt) => setTypeInput(evt.target.value)}/>
                    </div>
                    <div className={styles.addButtonContainer}>
                        <ButtonGenericAtom btnclick={UpdateUser} content="Update" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AccountAdminEditOneUserView;