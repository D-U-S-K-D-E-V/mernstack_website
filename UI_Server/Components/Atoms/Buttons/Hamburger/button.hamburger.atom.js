import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import styles from './button.hamburger.atom.css';

class ButtonHamburgerAtom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
			open: [false]
		};
    }
    handleClick(id) {
		let { open } = this.state;
        this.setState({
            open: [...open.slice(0, id), !open[id]]
        });
    }
    render(){
        return(
            <div className={styles.hamburgerContainer}>
                <HamburgerMenu 
                    isOpen={this.props.toggle}
                    menuClicked={this.handleClick.bind(this, 0)}
                    animationDuration={0.4}
                    width={23}
                    height={18}
                    className={styles.hambuger}
                    color={this.props.toggle ? 'white' : 'black'}
                />
            </div>
        )
    }
}

// function ButtonHamburgerAtom(props){
//     return(
//         <div className={styles.hamburgerContainer}>
//                 <HamburgerMenu 
//                     isOpen={props.toggle}
//                     menuClicked={props.toggle}
//                     animationDuration={0.4}
//                     width={23}
//                     height={18}
//                     className={styles.hambuger}
//                     color={props.toggle ? 'white' : 'black'}
//                 />
//             </div>
//     )
// }

export default ButtonHamburgerAtom;