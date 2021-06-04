import React from 'react';
import FormItemSmallMol from '../../Molecules/Form Item Small/formitemsmall.molecule';
import FormItemLargeMol from '../../Molecules/Form Item Large/formitemlarge.molecule';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import axios from 'axios';
import { getDBRoute } from '../../../Routes/routes.db_server.js';
import styles from './contactform.organism.css';

class ContactFormOrg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: false,
            error: false,
            errorNote: ''
        }
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     axios({
    //         method: 'post',
    //         url: api.testPost,
    //         headers: {'Content-Type': 'application/json'},
    //         data: this.state
    //     })
    //     .then(
    //         res => res.json()
    //     )
    //     .then(result =>
    //         this.setState({
    //             sent: true,
    //             error: false
    //         })
    //     )
    //     .then(result =>
    //         console.log(result)
    //     )
    //     .catch(error => this.setState({ error: true, error: 'ya done messed up kid' }))
    // }

    render(){
        return(
            <div className={styles.contactFormContainer}>
                <form className={styles.formContainer}>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Name" input={this.state.name} ifchange={e => this.setState({name: e.target.value})}/>
                    </div>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Email" input={this.state.email} ifchange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div className={styles.formItemContainer}>
                        <FormItemSmallMol label="Subject" input={this.state.subject} ifchange={e => this.setState({subject: e.target.value})}/>
                    </div>
                    <div className={styles.formItemContainer}>
                        <FormItemLargeMol label="Message" input={this.state.message} ifchange={e => this.setState({message: e.target.value})}/>
                    </div>
                    <div className={styles.buttonContainer}>
                        <ButtonGenericAtom content="Submit" btnvalue="Submit" btnclick={e => this.handleSubmit(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactFormOrg;