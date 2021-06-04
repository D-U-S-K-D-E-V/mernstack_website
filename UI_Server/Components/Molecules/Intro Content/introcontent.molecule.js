import React from 'react';
import TextFirstTitleAtom from '../../Atoms/Text/First Title/text.firsttitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import styles from './introcontent.molecule.css';

function IntroContentMolecule(props){
    return(
        <div className={styles.bodyContentContainer}>
            <div className={styles.titleContainer}>
                <TextFirstTitleAtom content={props.title} />
            </div>
            <div className={styles.barContainer}>
                <DesignBarAtom className={styles.designbar}/>
            </div>
            <div className={styles.paragraphContainer}>
                <TextParagraphAtom content={props.bodytext} />
            </div>
            <div className={styles.buttonContainer}>
                <ButtonGenericAtom content={props.buttontext} />
            </div>
        </div>
    )
}

export default IntroContentMolecule;