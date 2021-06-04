import React from 'react';
import { homeAbout } from '../../Data/api.data';
import FirstTitle from '../Atoms/Text/First Title/text.firsttitle.atom';
import Paragraph from '../Atoms/Text/Paragraph/text.paragraph.atom'

class DataTestView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    

    componentDidMount(){
        fetch(homeAbout)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json
                })
            })
    }

    render(){
        let {isLoaded, data } = this.state;

        if(!isLoaded){
            return(
                <div>
                    <FirstTitle content="Test Title" />
                    <Paragraph content="...Loading" />
                </div>
            )
        }
        else{
            return(
                <div>
                    <FirstTitle content="Test Title" />
                    {data.map(data => (<Paragraph key={data.Id}content={data.aboutcontent} />))}
                </div>
            )
        }
    }
}

export default DataTestView;