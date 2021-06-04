import React from 'react';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import styles from './testimonyitem.css';

function TestimonyItemMol(props){
    return(
        <div className={styles.itemContainer}>
            <div className={styles.contentContainer}>
                <TextParagraphAtom content={props.content} />
            </div>
            <div className={styles.authorContainer}>
                <TextLightTextAtom content={`- ${props.author}`} />
            </div>
        </div>
    )
}

export default TestimonyItemMol;