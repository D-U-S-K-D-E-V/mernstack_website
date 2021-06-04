import React from 'react';
import { Link } from 'react-router-dom';
import MediaContentImageAtom from '../../Atoms/Media/Content Image/media.contentimage.atom';
import TextFifthTitleAtom from '../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import styles from './blogtile.molecule.css';

function BlogTileMol(props){

    const address = '../../../../Resources/Images/' + props.image;
    const post = toString(props.post);
    return(
        <div className={styles.blogTileContainer}>
            
                <div className={styles.imageContainer}>
                    <MediaContentImageAtom image={address}/>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.titleContainer}>
                        <Link 
                            to={{
                                pathname: `${props.post}`,
                                state: {
                                    blogpost: props.data
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

export default BlogTileMol;