import React from 'react';
import TextSixthTitleAtom from '../../../Atoms/Text/Sixth Title/text.sixthtitle.atom';
import TextLightTextAtom from '../../../Atoms/Text/Light Text/text.lighttext.atom';
import TextParagraphAtom from '../../../Atoms/Text/Paragraph/text.paragraph.atom';
import styles from './postreply.molecule.css';

function PostReplyMol(props){
    return(
        <div className={styles.replyContainer}>
            <div className={styles.userContainer}>
                <TextSixthTitleAtom content={props.title} />
            </div>
            <div className={styles.dateContainer}>
                <TextLightTextAtom content={props.date} />
            </div>
            <div className={styles.replyBodyContainer}>
                <TextParagraphAtom content={props.reply} />
            </div>
        </div>
    )
}

export default PostReplyMol;