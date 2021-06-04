import React from 'react';
import { Link } from 'react-router-dom';
import MediaContentImageAtom from '../../Atoms/Media/Content Image/media.contentimage.atom';
import TextFifthTitleAtom from '../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import styles from './slideritem.molecule.css';

function SliderItemMol(props){

    const address = '../../../../Resources/Images/' + props.image;

    return(
        <div className={styles.sliderItemContainer}>
            
                <div className={styles.imageContainer}>
                    <MediaContentImageAtom image={address}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <Link 
                            to={{
                                    pathname:`/blog/post/${props.url}`,
                                    state:{
                                        blogpost: props.post
                                    }
                                }} 
                            className={styles.link}
                        >
                            <TextFifthTitleAtom content={props.title} />
                        </Link>
                    </div>
                    <div className={styles.dateContainer}>
                        <TextLightTextAtom content={props.date} />
                    </div>
                </div>
        </div>
    )
}

export default SliderItemMol;