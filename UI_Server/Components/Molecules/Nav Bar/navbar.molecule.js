import React from 'react';
import TextLogoAtom from '../../Atoms/Text/Logo/text.logo.atom';
import ButtonHamburgerAtom from '../../Atoms/Buttons/Hamburger/button.hamburger.atom';
import ButtonNavListAtom from '../../Atoms/Buttons/Nav List/button.navlist.atom';
import styles from './navbar.molecule.css';

class NavBarMolecule extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navToggle: false
        }
    }

    render(){
        return(
            <div className={styles.navBarMoleculeContainer}>
                <div className={styles.topBarContainer}>
                    <div className={this.state.navToggle ? styles.logoContainerOpen : styles.logoContainerClosed}>
                        <TextLogoAtom toggle={this.state.navToggle}/>
                    </div>
                    <div 
                        className={this.state.navToggle ? styles.hamburgerContainerOpen : styles.hamburgerContainerClosed }
                        onClick={ () => this.setState({navToggle: !this.state.navToggle})}
                    >
                        <ButtonHamburgerAtom toggle={this.state.navToggle}/>
                    </div>
                </div>    
                <div className={this.state.navToggle ?  styles.navListContainerOpen : styles.navListContainerClosed}>
                    <ButtonNavListAtom 
                        home={"/"} 
                        about={"/about"} 
                        contact={"/contact"} 
                        portfolio={"/portfolio"}
                        service={"/services"} 
                        blog={"/blog"}
                        click={ () => this.setState({ navToggle: !this.state.navToggle })}
                        />
                        
                </div>
            </div>
        )
    }
};

export default NavBarMolecule;