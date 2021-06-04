import React, { useState, useContext, useEffect }  from 'react';
import { AppContext } from '../../../../../../State/state.store.js';
import ButtonRouterLinkAtom from '../../../../../Atoms/Buttons/Router Link/routerlink.atom.js';
import ButtonGenericAtom from '../../../../../Atoms/Buttons/Generic/button.generic.atom.js';
import ButtonsRadioAtom from '../../../../../Atoms/Buttons/Radio_Button/buttons.radio.atom.js';
import ImageSelectMol from '../../../../../Molecules/Image_Selection/image_selection.molecule.js';
import TextFirstTitleAtom from '../../../../../Atoms/Text/First Title/text.firsttitle.atom.js';
import DesignBarAtom from '../../../../../Atoms/Design/Bar/design.bar.atom.js';
import TextLabelAtom from '../../../../../Atoms/Text/Label/text.labe.atom.js';
import FieldSmallInputAtom from '../../../../../Atoms/Fields/Input Text Small/fields.inputsmall.atom.js';
import FieldLargeInputAtom from '../../../../../Atoms/Fields/Input Text Large/fields.inputlarge.atom.js';
import { getDBRoutes, postDBRoutes } from '../../../../../../Routes/routes.db_server.js';
import styles from './account.admin.home.css';

function AccountAdminHomeView(){

    const context = useContext(AppContext);
    const userName = context.authorization.userCredentials.value.user;
    
    const [ bannerState, setBannerState ] = useState(null);
    const [ bannerTitleState, setBannerTitleState ] = useState("")
    const [ bannerSubtitleState, setBannerSubtitleState ] = useState("");
    const [ bannerLinkState, setBannerLinkState ] = useState("");
    const [ bannerImageAddressState, setBannerImageAddressState ] = useState("");
    const [ aboutState, setAboutState ] = useState("");
    const [ portState, setPortState ] = useState("");
    const [ serviceState, setServiceState ] = useState("");
    const [ contactState, setContactState ] = useState("");

    
    console.log(bannerImageAddressState);

    //Load data when page loads
    useEffect(() => {
        Promise.all([
            fetch(getDBRoutes.home.header).then(res => res.json()).then(json => {
                setBannerState(json[0])
                setBannerTitleState(json[0].headertitle)
                setBannerSubtitleState(json[0].headersubtitle)
                setBannerImageAddressState(json[0].imageid)
                setBannerLinkState(json[0].headerlink)
            }),
            fetch(getDBRoutes.home.about).then(res => res.json()).then(json => setAboutState(json[0].aboutcontent)),
            fetch(getDBRoutes.home.service).then(res => res.json()).then(json => setServiceState(json[0].servicescontent)),
            fetch(getDBRoutes.home.portfolio).then(res => res.json()).then(json => setPortState(json[0].portfoliocontent)),
            fetch(getDBRoutes.home.contact).then(res => res.json()).then(json => setContactState(json[0].contactcontent))
        ])
    }, []);

    //When Image Type Changes



    function updateHomeSecions(route, data){

    }

    function updateBanner(){

    }

    return(
        <div className={styles.viewContainer}>
            <div className={styles.backButtonContainer}>
                <ButtonRouterLinkAtom linkText="Back" link={`/profile/admin/${userName}`} />
            </div>
            <div className={styles.viewTitle}>
                <TextFirstTitleAtom content="Edit Home" />
                <DesignBarAtom />
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Banner Title" />
                <FieldSmallInputAtom ifchange={(evt) => setBannerTitleState(evt.target.value)} input={bannerTitleState}/>
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Banner Subtitle" />
                <FieldSmallInputAtom ifchange={(evt) => setBannerSubtitleState(evt.target.value)} input={bannerSubtitleState}/>
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Banner Link" />
                <FieldSmallInputAtom ifchange={(evt) => setBannerLinkState(evt.target.value)} input={bannerLinkState}/>
            </div>
            <div>
                <ImageSelectMol compLabel="Banner Image" imageName={bannerImageAddressState}/>
            </div>
            <DesignBarAtom />
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="About" />
                <FieldLargeInputAtom ifchange={(evt) => setAboutState(evt.target.value)} input={aboutState}/>
                <div className={styles.addButtonContainer}>
                    <ButtonGenericAtom 
                        //btnclick={UpdateUser} 
                        content="Update" 
                    />
                </div>
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Portfolio" />
                <FieldLargeInputAtom ifchange={(evt) => setPortState(evt.target.value)} input={portState}/>
                <div className={styles.addButtonContainer}>
                    <ButtonGenericAtom 
                        //btnclick={UpdateUser} 
                        content="Update" 
                    />
                </div>
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Services" />
                <FieldLargeInputAtom ifchange={(evt) => setServiceState(evt.target.value)} input={serviceState}/>
                <div className={styles.addButtonContainer}>
                    <ButtonGenericAtom 
                        //btnclick={UpdateUser} 
                        content="Update" 
                    />
                </div>
            </div>
            <div className={styles.fieldItemContainer}>
                <TextLabelAtom label="Contact" />
                <FieldLargeInputAtom ifchange={(evt) => setContactState(evt.target.value)} input={contactState}/>
                <div className={styles.addButtonContainer}>
                    <ButtonGenericAtom 
                        //btnclick={UpdateUser} 
                        content="Update" 
                    />
                </div>
            </div>
        </div>
    )
}

export default AccountAdminHomeView;