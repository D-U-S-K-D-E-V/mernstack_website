import React from 'react';
import TextFirstTitleAtom from '../../Atoms/Text/First Title/text.firsttitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import TextFifthTitleAtom from '../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import MediaContentImageAtom from '../../Atoms/Media/Content Image/media.contentimage.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import ButtonLinkAtom from '../../Atoms/Buttons/Link/button.link.atom';
import ButtonForwardAtom from '../../Atoms/Buttons/Forward Button/button.forward.atom';
import ButtonBackAtom from '../../Atoms/Buttons/Back Button/button.back.atom';
import styles from './posts.molecule.css';
import { facebookAPI } from '../../../Routes/routes.external.js';

class PostsMol extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fbdata: [],
            isLoaded: false
        }
        this.postcontainer = React.createRef();
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    };  
    handleLeftClick() {
        this.postcontainer.current ? this.postcontainer.current.scrollLeft -=416 : null;
    }
    handleRightClick() {
        this.postcontainer.current ? this.postcontainer.current.scrollLeft +=416: null;
    }
    async componentDidMount(){
        try{
            await Promise.all([
                fetch(facebookAPI).then(res => res.json()).then(json => this.setState({ fbdata: json.published_posts.data}))
            ])
            this.setState({ isLoaded: true })  
        }
        catch(err){
            console.log(err)
        }
    };

    render(){

        let {fbdata, isLoaded} = this.state;
        
        if(isLoaded == true){
            return(
                <div className={styles.postsContainer}>
                    <div className={styles.sectionTitle}>
                        <TextFirstTitleAtom content="Posts" />
                    </div>
                    <div className={styles.barContainer}>
                        <DesignBarAtom />
                    </div>
                    <div className={styles.postDataContainer}>
                        <div className={styles.postContentContainer} ref={this.postcontainer}>
                            {fbdata.map(postdata => {
                                if(postdata.attachments){
                                    return(
                                        <div key={postdata.Id} className={styles.dataDisplayContainer}>
                                            <div key={postdata.Id} className={styles.postTime}>
                                                <TextLightTextAtom key={postdata.Id} content={"Posted On: " + postdata.created_time} />
                                            </div>
                                            <div key={postdata.Id} className={styles.contentContainer}>
                                                <TextParagraphAtom key={postdata.Id} content={postdata.message} className={styles.contentElem}/>
                                            </div>
                                            <div key={postdata.Id} className={styles.attachmentContainer}>
                                                <div key={postdata.Id} className={styles.textDataContainer}>
                                                    <div key={postdata.Id} className={styles.linkTitle}>
                                                        <TextFifthTitleAtom key={postdata.Id} content={postdata.attachments.data[0].title} />
                                                    </div>
                                                    <div key={postdata.Id} className={styles.linkContainer}>
                                                        <ButtonLinkAtom key={postdata.Id} link={postdata.attachments.data[0].media.source} content={postdata.attachments.data[0].media.source} />
                                                    </div>
                                                </div>
                                                <div key={postdata.Id} className={styles.imageContainer}>
                                                    <a key={postdata.Id} href={postdata.attachments.data[0].media.source}><MediaContentImageAtom image={postdata.attachments.data[0].media.image.src} /></a>
                                                </div>    
                                            </div>
                                        </div>
                                    )
                                }
                                else{
                                    return(
                                        <div key={postdata.Id} className={styles.dataDisplayContainer}>
                                            <div key={postdata.Id} className={styles.postTime}>
                                                <TextLightTextAtom key={postdata.Id} content={"Posted On: " + postdata.created_time} />
                                            </div>
                                            <div key={postdata.Id} className={styles.contentContainer}>
                                                <TextParagraphAtom key={postdata.Id} content={postdata.message} className={styles.contentElem}/>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.backContainer} onClick={this.handleLeftClick}>
                                <ButtonBackAtom />
                            </div>
                            <div className={styles.forwardContainer} onClick={this.handleRightClick}>
                                <ButtonForwardAtom />
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.postsContainer}>
                    <div className={styles.sectionTitle}>
                        <TextFirstTitleAtom content="Posts" />
                    </div>
                    <div className={styles.barContainer}>
                        <DesignBarAtom />
                    </div>
                    <div className={styles.postDataContainer}>
                        <div className={styles.backContainer}>
                            <ButtonBackAtom />
                        </div>
                        <div className={styles.postContentContainer}>
                            <div className={styles.contentContainer}>
                                <TextParagraphAtom content="...Loading" className={styles.contentElem}/>
                            </div>
                        </div>
                        <div className={styles.forwardContainer}>
                            <ButtonForwardAtom />
                        </div>
                    </div>
                </div>
            )
        }  
    }
}

export default PostsMol;