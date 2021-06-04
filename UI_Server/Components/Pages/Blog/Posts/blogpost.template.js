import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../../State/state.store.js';
import TextSecondTitleAtom from '../../../Atoms/Text/Second Title/text.secondtitle.atom';
import TextThirdTitleAtom from '../../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextFifthTitleAtom from '../../../Atoms/Text/Fifth Title/text.fifthtitle.atom';
import TextLightTextAtom from '../../../Atoms/Text/Light Text/text.lighttext.atom';
import TextParagraphAtom from '../../../Atoms/Text/Paragraph/text.paragraph.atom';
import DesignBarAtom from '../../../Atoms/Design/Bar/design.bar.atom';
import CommentTileMol from '../../../Molecules/Comment Tile/commenttile.molecule';
import ButtonRouterLinkAtom from '../../../Atoms/Buttons/Router Link/routerlink.atom';
import MediaPostBannerAtom from '../../../Atoms/Media/Post Banner/media.postbanner.atom';
import PostCommentMol from '../../../Molecules/Post Comment/postcomment.molecule';
import { getDBRoutes } from '../../../../Routes/routes.db_server.js';
import styles from './blogpost.template.css';

function BlogPostView(props){

    const context = useContext(AppContext);
    const loginState = context.authorization.isLoggedIn.value;

    const postId = props.location.state.blogpost;
    const [ postData, setPostData ] = useState([]);
    const [ postComments, setPostComments ] = useState([]);
    const [ category, setCategory ] = useState(null);
    const [ isLoaded, setIsLoaded ] = useState(false);

    let isLoggedIn = props.logStatus;
    let commentElem;
    let loginHandle;

    useEffect(async () => {
        try{
            await Promise.all([
                fetch(getDBRoutes.blog.post.getById(postId))
                    .then(response => response.json())
                    .then(json => setPostData(json)),
                fetch(getDBRoutes.blog.comments(postId))
                    .then(response => response.json())
                    .then(json => setPostComments(json))
            ])
            setIsLoaded(true)
        }
        catch(error){
            setIsLoaded(false)
            console.log(error);
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    if(!postComments.length){
        commentElem = (
            <div className={styles.errorContainer}>
                <TextFifthTitleAtom content="This post has no comments yet. Be the first!" />
            </div>)
    }
    else{
        commentElem = (
            <div className={styles.readCommentsContianer}>
                {postComments.map(data =>(
                    <div className={styles.postCommentContainer}>
                        <PostCommentMol user={data.user} date={data.date} comment={data.comment} dataid={data.id}/>
                    </div>
                ))}
            </div>
        )
    }

    if(loginState == true){
        loginHandle = (
            <div className={styles.writeCommentContainer}>
                <CommentTileMol data={props.userInfo} post={postId}/>
            </div>
        )
        
    }
    else{
        loginHandle = (
            <div className={styles.loginHandleContainer}>
                <div className={styles.loginHandleElem}>
                    <ButtonRouterLinkAtom linkText="Login" link="/login" />
                </div>
                <div className={styles.loginHandleElem}>
                    <TextParagraphAtom content="or"/>
                </div>
                <div className={styles.loginHandleElem}>
                    <ButtonRouterLinkAtom linkText="Register" link="/register"/>
                </div>
                <div className={styles.loginHandleElem}>
                    <TextParagraphAtom content="to reply to, or make, a comment."/>
                </div>
            </div>
        )
    }
    return(
        <div className={styles.postContainer}>
            {postData.map(data => (
                <div className={styles.headerContainer}>
                    <div className={styles.postTitleContainer}>
                        <TextSecondTitleAtom content={data.header} />
                    </div>
                    <div className={styles.barContainer}>
                        <DesignBarAtom />
                    </div>
                    <div className={styles.authorContainer}>
                        <TextFifthTitleAtom content={`By ${data.author}`} />
                    </div>
                    <div className={styles.postDateContainer}>
                        <TextLightTextAtom content={`Date: ${data.date}`} />
                    </div>
                    <div className={styles.imageBannerContainer}>
                        <MediaPostBannerAtom image={data.image} />
                    </div>
                    <div className={styles.bodyContent} dangerouslySetInnerHTML={{__html: data.body}}>
                    </div>
                </div>
            ))}
            <div className={styles.commentTitleContainer}>
                <TextThirdTitleAtom content="Comments" />
                <DesignBarAtom />
            </div>
            {loginHandle}
            {commentElem}
        </div>
    )
}


export default BlogPostView;