import React from 'react';
import TextFirstTitleAtom from '../../Atoms/Text/First Title/text.firsttitle.atom';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import styles from './pagenotfound.view.css';

function PageNotFoundView(){
    return(
        <div className={styles.notFoundContainer}>
            <div className={styles.titleContainer}>
                <TextFirstTitleAtom content="Error: 404" />
            </div>
            <div className={styles.barContainer}>
                <DesignBarAtom />
            </div>
            <div className={styles.subtitleContainer}>
                <TextThirdTitleAtom content="Page Was Not Found" />
            </div>
            <div className={styles.paragraphContainer}>
                <TextParagraphAtom content="Please navigate back to a page that actually works, thank you." />
            </div>
        </div>
    )
}

export default PageNotFoundView;