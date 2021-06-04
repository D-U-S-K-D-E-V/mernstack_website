import React from 'react';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextFourthTitleAtom from '../../Atoms/Text/Fourth Title/text.fourthtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import styles from './teamtile.molecule.css';

function TeamTileMol(props){
    return(
        <div className={styles.teamTileContainer}>
            <div className={styles.teamName}>
                <TextThirdTitleAtom content={props.memberName} />

            </div>
            <div className={styles.titleName}>
                <TextLightTextAtom content={props.titleName} className={styles.titleElem}/>
            </div>
            <div className={styles.contentContainer}>
                <TextParagraphAtom content={props.textContent}/>
            </div>
        </div>
    )
}

export default TeamTileMol;