import React, { useState, useEffect, useContext } from 'react';
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import ContactFormOrg from '../../Organisms/Contact Form/contactform.organism';
import styles from './contact.view.css';

function ContactView(){

    const [ messageSent, setMessageSent ] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    if(messageSent == false){
        return(
            <div className={styles.contactContainer}>
                <div className={styles.bannerContainer}>
                    <PageBannerMol title="Contact" image="harpermuzak.jpg" />
                </div>
                <div className={styles.contactFormContainer}>
                    <ContactFormOrg />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.contactContainer}>
                <div className={styles.bannerContainer}>
                    <PageBannerMol title="Contact" image="harpermuzak.jpg" />
                </div>
                <p>Message Sent</p>
            </div>
        )
    }

    
}

export default ContactView;