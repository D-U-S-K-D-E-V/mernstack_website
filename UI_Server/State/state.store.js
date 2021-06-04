import React, { useState } from 'react';
import { getData } from '../Routes/routes.axios.js';
import { updateIntState, 
        updateStringState, 
        updateObjectState, 
        updateArrayState, 
        updateBooleanState, 
        getIntState, 
        getStringState, 
        getObjectState, 
        getArrayState, 
        getBooleanState } from './state.storage.js';


export const AppContext = React.createContext();

export function AppProvider(props){

    const notificationStateKey = "noteState";
    const [ notificationState, setNotificationState ] = useState(getObjectState(notificationStateKey, {text: "", type: null}));

    const userNameKey = "userName";
    const [ userName, setUserName ] = useState(getStringState(userNameKey, ""));

    const passwordKey = "password";
    const [ password, setPassword ] = useState(getStringState(passwordKey, ""));

    const loginStateKey = "loginState";
    const [ loginState, setLoginState ] = useState(getBooleanState(loginStateKey, false));

    const loginCredKey = "loginCredentials";
    const [ loginCred, setLoginCred ] = useState(getObjectState(loginCredKey, {}));

    function setNoteDefault(){
        const state = {text: "", type: null};
        updateObjectState(notificationStateKey, state, setNotificationState)
    }

    const appStore = {
        components: {
            notification:{
                value: notificationState,
                setValue: function(state){
                    updateObjectState(notificationStateKey, state, setNotificationState);
                    setTimeout(setNoteDefault, 2000);
                }
            }
        },
        authorization: {
            user: {
                value: userName,
                setValue: function(state){
                    return updateStringState(useNameKey, state, setUserName);
                }
            },
            pw: {
                value: password,
                setValue: function(state){
                    return updateStringState(passwordKey, state, setPassword);
                }
            },
            isLoggedIn: {
                value: loginState,
                setValue: function(state){
                    return updateBooleanState(loginStateKey, state, setLoginState);
                }
            },
            userCredentials: {
                value: loginCred,
                setValue: function(state){
                    return updateObjectState(loginCredKey, state, setLoginCred)
                }
            }
        }
    }
    console.log(appStore);
    return(
        <AppContext.Provider value={appStore}>
            {props.children}
        </AppContext.Provider>
    );
};