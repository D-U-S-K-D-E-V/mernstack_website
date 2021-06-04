import React from 'react';
import FormItemSmallMol from '../../Molecules/Form Item Small/formitemsmall.molecule';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import styles from './registrationform.organism.css';

class RegistrationFormOrg extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            isLoaded: true
        }
    }

    handleSubmit(){
        console.log("was submitted");
    }

    render(){
        let {username, password, isLoaded} = this.state;
        return(
            <div className={styles.regFormContainer}>
                <form className={styles.formContainer}>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Name" input={username} ifchange={e => this.setState({username: e.target.value})}/>
                    </div>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Email" input={password} ifchange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Password" input={password} ifchange={e => this.setState({password: e.target.value})}/>
                    </div>
                    <div className={styles.buttonContainer}>
                        <ButtonGenericAtom content="Register" btnvalue="Submit" btnclick={this.props.btnclick}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationFormOrg;