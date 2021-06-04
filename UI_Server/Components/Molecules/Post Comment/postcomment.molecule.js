import React from 'react';
import TextFifthTitleAtom from '../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import TextLightTextAtom from '../../Atoms/Text/Light Text/text.lighttext.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import PostReplyMol from './Post Reply/postreply.molecule';
import FieldInputReplyAtom from '../../Atoms/Fields/Input Text Reply/fields.inputreply.atom';
import TextLabelAtom from '../../Atoms/Text/Label/text.labe.atom';
import ButtonReplyAtom from '../../Atoms/Buttons/Reply Button/button.reply.atom';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './postcomment.molecule.css';

class PostCommentMol extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            replies: []
        }
    }
    async componentDidMount(){
        await Promise.all([
            fetch(getDBRoutes.blog.replies(this.props.dataid))
                .then(response => response.json())
                .then(json => this.setState({ replies: json }))
        ])
    }
    render(){
        let { replies } = this.state;
        if(!replies.length){
            return(
                <div className={styles.commentContainer}>
                    <div className={styles.userContainer}>
                        <TextFifthTitleAtom content={this.props.user} />
                    </div>
                    <div className={styles.dateContainer}>
                        <TextLightTextAtom content={this.props.date} />
                    </div>
                    <div className={styles.bodyContainer}>
                        <TextParagraphAtom content={this.props.comment} />
                    </div>
                    <div className={styles.hrContainer}>
                        <hr className={styles.hrElem}/>
                    </div>
                    <div className={styles.allReplyContainer}>

                        <div className={styles.inputContainer}>
                            <div className={styles.labelContainer}>
                                <TextLabelAtom label="Reply" />
                            </div>
                            <div className={styles.inputElem}>
                                <FieldInputReplyAtom />
                            </div>
                            <div className={styles.replyButtonElem}>
                                <ButtonReplyAtom />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.commentContainer}>
                    <div className={styles.userContainer}>
                        <TextFifthTitleAtom content={this.props.user} />
                    </div>
                    <div className={styles.dateContainer}>
                        <TextLightTextAtom content={this.props.date} />
                    </div>
                    <div className={styles.bodyContainer}>
                        <TextParagraphAtom content={this.props.comment} />
                    </div>
                    <div className={styles.hrContainer}>
                        <hr className={styles.hrElem}/>
                    </div>
                    <div className={styles.allReplyContainer}>
                        {replies.map(data => (
                            <div className={styles.replyContainer}>
                                <div className={styles.replyBodyContainer}>
                                    <PostReplyMol title={data.user} date={data.replydate} reply={data.replybody} />
                                </div>
                            </div>
                        ))}
                        <div className={styles.hrContainer}>
                            <hr className={styles.hrElem}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.labelContainer}>
                                <TextLabelAtom label="Reply" />
                            </div>
                            <div className={styles.inputElem}>
                                <FieldInputReplyAtom />
                            </div>
                            <div className={styles.replyButtonElem}>
                                <ButtonReplyAtom />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default PostCommentMol;