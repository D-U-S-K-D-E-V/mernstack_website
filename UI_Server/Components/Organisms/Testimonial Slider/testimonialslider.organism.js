import React from 'react';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import TestimonyItemMol from '../../Molecules/Testimony Item/testimonyitem.molecule';
import ButtonBackAtom from '../../Atoms/Buttons/Back Button/button.back.atom';
import ButtonForwardAtom from '../../Atoms/Buttons/Forward Button/button.forward.atom';
import SliderItemMol from '../../Molecules/Blog Slider Item/slideritem.molecule';

import styles from './testimonialslider.organism.css';

class TestimonialSliderOrg extends React.Component{
    constructor(props){
        super(props);
        this.slidecontainer = React.createRef();
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }
        
    handleLeftClick() {
        this.slidecontainer.current ? this.slidecontainer.current.scrollLeft -=700 : null;
    }
    handleRightClick() {
        this.slidecontainer.current ? this.slidecontainer.current.scrollLeft +=700: null;
    }

    render(){
        if(this.props.status == false){

            return(
                <div className={styles.sliderContainer}>
                    ...Loading
                </div>
            )
        }
        else{
            return(
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderItemContainer} ref={this.slidecontainer}>
                        {this.props.data.map(data => (
                            <div className={styles.sliderItem}>
                                <TestimonyItemMol key={data.id} content={data.content} author={data.author} className={styles.itemElem}/>
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
    }
}

export default TestimonialSliderOrg;