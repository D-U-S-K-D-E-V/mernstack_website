import React, { useState, useEffect } from 'react';
import ButtonsRadioAtom from '../../Atoms/Buttons/Radio_Button/buttons.radio.atom.js';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom.js';
import ButtonInputAtom from '../../Atoms/Buttons/Input/button.input.atom.js';
import MediaContentImageAtom from '../../Atoms/Media/Content Image/media.contentimage.atom.js';
import FieldSmallInputAtom from '../../Atoms/Fields/Input Text Small/fields.inputsmall.atom.js';
import TextLabelAtom from '../../Atoms/Text/Label/text.labe.atom.js';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom.js'
import { getFileRoutes, postFileRoutes } from '../../../Routes/routes.file_server.js';
import styles from './image_selection.molecule.css';

function ImageSelectMol(props){
    
    const [ imageType, setImageType ] = useState(null);
    const [ fileName, setFileName ] = useState("");
    const [ fileSelect, setFileSelect ] = useState("");
    const fileInput = React.createRef();
    
    console.log(fileInput)
    
    const radioOptions = [
        {
            id: 0,
            label: "Upload"
        },
        {
            id: 1,
            label: "Server"
        },
        {
            id: 2,
            label: "Web"
        }
    ];

    useEffect(() => {
        setFileName(props.imageName)
    }, [])

    function displayImage(){
        if(fileName != "" && imageType == 1){
            const processImageName = getFileRoutes.images(fileName);
            return(
                <div>
                    <MediaContentImageAtom image={processImageName} />
                </div>
            )
        }
        else if(fileName != "" && imageType == 2){
            return(
                <div>
                    <MediaContentImageAtom image={fileName} />
                </div>
            )
        }
    }

    function postServerImage(){

        const formData = new FormData();
        formData.append('file', fileInput.current.files[0]);
        console.log(JSON.stringify(formData));
        fetch(postFileRoutes.images, {
            method: "POST",
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            return console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    function imageUI(){
        if(imageType == 0){
            return(
                <div className={styles.imageBannerContainer}>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Image Upload" />
                    </div>
                    <div className={styles.addButtonContainer}>
                        <form
                            // action="http://localhost:5000/file/upload" 
                            // encType="multipart/form-data" 
                            // method="post"
                            //onSubmit={postServerImage}
                        >
                            <div className={styles.fileButtonContainer}>
                                <input
                                    type="file" 
                                    className={styles.fileButton} 
                                    onChange={(evt) => setFileSelect(evt.target.files[0])}
                                    ref={fileInput}
                                />
                            </div>
                            
                            <ButtonGenericAtom
                                btnclick={postServerImage}
                                content="Upload" 
                                btnType="button"
                            />
                        </form>
                    </div>
                </div>
            )
        }
        else if(imageType == 1){
            return(
                <div className={styles.imageBannerContainer}>
                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Image File Name" />
                        <FieldSmallInputAtom ifchange={(evt) => setFileName(evt.target.value)} input={fileName}/>
                    </div>
                    <div className={styles.addButtonContainer}>
                        <ButtonGenericAtom
                            btnclick={() => UpdateUser()} 
                            content="Update" 
                        />
                    </div>
                </div>
            )
        }
        else if(imageType == 2){
            return(
                <div className={styles.imageBannerContainer}>

                    <div className={styles.fieldItemContainer}>
                        <TextLabelAtom label="Image URL" />
                        <FieldSmallInputAtom ifchange={(evt) => setFileName(evt.target.value)} input={fileName}/>
                    </div>
                    <div className={styles.addButtonContainer}>
                        <ButtonGenericAtom
                            btnclick={() => UpdateUser()} 
                            content="Update" 
                        />
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.imageBannerContainer}>
                    <TextLightTextAtom content="Select An Option" />
                </div>
            )
        }
    }

    return(
        <div className={styles.imageSelectContainer}>
            {displayImage()}
            <div>
                <TextLabelAtom label={props.compLabel} />
            </div>
            <div>
                <ButtonsRadioAtom 
                    data={radioOptions} 
                    change={(evt) => setImageType(evt.target.value)}
                />
            </div>
            <div>
                {imageUI()}
            </div>
        </div>
    )
}

export default ImageSelectMol;