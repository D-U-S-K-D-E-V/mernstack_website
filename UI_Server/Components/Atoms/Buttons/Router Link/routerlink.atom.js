import React from 'react';
import { Link } from 'react-router-dom';
import styles from './routerlink.atom.css';
import TextParagraphAtom from '../../Text/Paragraph/text.paragraph.atom';

function ButtonRouterLinkAtom(props){
    return(
        <div className={styles.linkContainer} onClick={props.btnclick}>
            <Link to={props.link} className={styles.link}><TextParagraphAtom content={props.linkText} className={styles.linkTextElem}/></Link>
        </div>
    )
}

export default ButtonRouterLinkAtom;