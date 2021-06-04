import React from 'react';
import FieldInputLargeAtom from '../../Atoms/Fields/Input Text Large/fields.inputlarge.atom';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import { postDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './commenttile.molecule.css';

class CommentTileMol extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commentText: ""
        }

        this.createComment = this.createComment.bind(this);
    }

    async createComment(){
        try{
            await Promise.all([
                fetch(postDBRoutes.blog.comments.new,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'applications/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userid: this.props.data[0].id,
                        commenttext: this.state.commentText,
                        blogid: this.props.post
                    })
                }),
                console.log("I was clicked"),
            ])
        }
        catch(error){
            console.log(error || "an unknown error occured")
        }
    }

    render(){
        return(
            <div className={styles.writeCommentContainer}>
                <FieldInputLargeAtom ifchange={e => this.setState({commentText: e.target.value})}/>
                <div className={styles.genericContainer}>
                    <ButtonGenericAtom content="Post" btnclick={this.createComment}/>
                </div>   
            </div>
        )
    }
}

export default CommentTileMol;