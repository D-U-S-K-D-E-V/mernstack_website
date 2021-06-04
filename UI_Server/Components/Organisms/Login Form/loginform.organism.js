import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../State/state.store.js';
import FormItemSmallMol from '../../Molecules/Form Item Small/formitemsmall.molecule';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './loginform.organism.css';

function LoginFormOrg(props){

    const context = useContext(AppContext);
    const history = useHistory();
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loginResponse, setLoginResponse ] = useState(null);

    useEffect(() => {
        checkLogin()
    }, [context.authorization.isLoggedIn.value])

    function checkLogin(){
        console.log(context.authorization.userCredentials.value.typeId)
        if(context.authorization.isLoggedIn.value == true){
            if(context.authorization.userCredentials.value.typeId == 1){
                history.push(`/profile/admin/${context.authorization.userCredentials.value.user}`);
            }
            else if(context.authorization.userCredentials.value.typeId == 2){
                history.push(`/profile/editor/${context.authorization.userCredentials.value.user}`);
            }
            else{
                history.push(`/profile/user/${context.authorization.userCredentials.value.user}`);
            }
        }
    }

    async function getData(){
        await fetch(getDBRoutes.account.validate(userName, password))
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
            if(json.length){
                setLoginResponse({
                    data: json,
                    status: true
                })
                context.authorization.userCredentials.setValue({
                    id: json[0].id,
                    user: userName,
                    typeId: json[0].typeId
                })
                context.authorization.isLoggedIn.setValue(true)
            }
            else{
                console.log("There was no data returned");
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    function handleLogin(){
        getData()
        console.log(loginResponse)
    }

    return(
        <div className={styles.loginFormContainer}>
            <form className={styles.formContainer}>
                <div className={styles.formItemContainer}>
                    <FormItemSmallMol label="Username" input={props.usernameInput} ifchange={(evt) => setUserName(evt.target.value)}/>
                </div>
                <div className={styles.formItemContainer}>
                    <FormItemSmallMol label="Password" input={props.passwordInput} ifchange={(evt) => setPassword(evt.target.value)}/>
                </div>
                <div className={styles.buttonContainer}>
                    <ButtonGenericAtom 
                        content="Login" 
                        btnvalue="Submit" 
                        btnclick={handleLogin}
                        ref={props.buttonRef}
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginFormOrg;