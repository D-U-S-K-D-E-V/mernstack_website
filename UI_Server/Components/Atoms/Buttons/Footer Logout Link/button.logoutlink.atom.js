import React, { useContext } from 'react';
import { AppContext } from '../../../../State/state.store.js';
import { Link, useHistory } from 'react-router-dom';
import styles from './button.logoutlink.atom.css';

function ButtonLogoutLinkAtom(props){

    const context = useContext(AppContext);
    const history = useHistory();
    let accountLink = () => {

        try{
            if(context.authorization.userCredentials.value.typeId == 3){
                return `/profile/user/${context.authorization.userCredentials.value.user}`;
            }
            else if(context.authorization.userCredentials.value.typeId == 2){
                return `/profile/editor/${context.authorization.userCredentials.value.user}`;
            }
            else{
                return `/profile/admin/${context.authorization.userCredentials.value.user}`;
            }
        }
        catch(err){
            console.log(err);
            return "/";
        }
    }

    function handleLogoutClick(){
        context.authorization.isLoggedIn.setValue(false);
        context.authorization.userCredentials.setValue({});
        history.push("/");
    }

    return(
        <div className={styles.navlistContainer}>   
            <ul className={styles.navlist}>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to={accountLink}>Manage</Link>
                </li>
                <li className={styles.navlistItem} onClick={props.click}>
                    <Link className={styles.link} to="/" onClick={handleLogoutClick}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default ButtonLogoutLinkAtom;