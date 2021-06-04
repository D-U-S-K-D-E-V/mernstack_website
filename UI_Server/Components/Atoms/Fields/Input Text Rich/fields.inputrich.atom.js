import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import styles from './fields.inputrich.atom.css';

class FieldsInputRichAtom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editorState: EditorState.createEmpty(),
            headerSelect: false,
            subHeaderSelect: false
        };
        this.onChange = editorState => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState){
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if(newState){
            this.onChange(newState);
            return console.log('handled');
        }
        else{
            return console.log('not handled');
        }
    }

    //Styles

    _onHeaderClick(){
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onSubheaderClick(){
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render(){
        let { editorState, headerSelect, subHeaderSelect } = this.state;
        return(
            <div className={styles.atomContainer}>
                <div className={styles.richSelectContainer}>
                    <div className={styles.richSelectElem} onClick={() => this.setState({ headerSelect: !this.state.headerSelect})}>
                        <button className={headerSelect ? styles.richSelectButtonSelected : styles.richSelectButtonUnselected} onClick={this._onHeaderClick.bind(this)}>Header</button>
                    </div>
                    <div className={styles.richSelectElem} onClick={() => this.setState({ subHeaderSelect: !this.state.subHeaderSelect})}>
                        <button className={subHeaderSelect ? styles.richSelectButtonSelected : styles.richSelectButtonUnselected} onClick={this._onSubheaderClick.bind(this)}>Subheader</button>
                    </div>
                </div>
                <hr />
                <Editor
                    placeholder="enter text here..."
                    editorState={editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default FieldsInputRichAtom;