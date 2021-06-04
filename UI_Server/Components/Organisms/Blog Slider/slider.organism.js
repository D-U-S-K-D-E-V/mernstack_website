import React from 'react';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import ButtonGenericAtom from '../../Atoms/Buttons/Generic/button.generic.atom';
import ButtonBackAtom from '../../Atoms/Buttons/Back Button/button.back.atom';
import ButtonForwardAtom from '../../Atoms/Buttons/Forward Button/button.forward.atom';
import SliderItemMol from '../../Molecules/Blog Slider Item/slideritem.molecule';
import styles from './slider.organism.css';

class SliderOrg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded: false
        }
        this.slidecontainer = React.createRef();
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    };  
    handleLeftClick() {
        this.slidecontainer.current ? this.slidecontainer.current.scrollLeft -=416 : null;
    }
    handleRightClick() {
        this.slidecontainer.current ? this.slidecontainer.current.scrollLeft +=416: null;
    }
    async componentDidMount(){
        try{
          await Promise.all([
              this.setState({ isLoaded: this.props.status })
          ])  
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        let { isLoaded } = this.state;
        if(isLoaded == true && this.props.data.message == "record not found"){
            return(
                <div className={styles.errorHandleContainer}>
                    <TextThirdTitleAtom content="Sorry, No Blog Posts Yet" />
                    <TextParagraphAtom content="Check back later to see when new content has been added." />
                    <ButtonGenericAtom content="Back" link="/blog"/>
                </div>
            )
        }
        else if(isLoaded == true){
            return(
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderItemContainer} ref={this.slidecontainer}>
                        {this.props.data.slice(0,5).map(blogdata => (
                            <div className={styles.sliderItem}>
                                <SliderItemMol key={blogdata.id} image={blogdata.image} title={blogdata.header} date={blogdata.date} url={blogdata.header} post={blogdata.id}/>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.backButtonContainer} onClick={this.handleLeftClick}>
                            <ButtonBackAtom />
                        </div>
                        <div className={styles.forwardButtonContainer} onClick={this.handleRightClick}>
                            <ButtonForwardAtom />
                        </div>
                    </div>
                </div>
            )
        }
        
        else{
            return(
                <div className={styles.sliderContainer}>
                    ...Loading
                </div>
            )
        }
    }
}

export default SliderOrg;