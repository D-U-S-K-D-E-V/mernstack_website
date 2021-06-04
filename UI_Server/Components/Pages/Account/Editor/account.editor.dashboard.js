import React from 'react';

class AccountEditorDashboardView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userdata: []
        }
    }
    render(){
        return(
            <div>
                <h1>Hello Editor</h1>
            </div>
        )
    }
}

export default AccountEditorDashboardView;