import React, { useState, useEffect } from 'react';
import NewsBannerOrganism from '../../Organisms/News Banner/newsbanner.organism';
import IntroContentMolecule from '../../Molecules/Intro Content/introcontent.molecule';
import PostsMolecule from '../../Molecules/Posts/posts.molecule';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './home.view.css';

function HomeView(){

    const [ banner, setBanner ] = useState([]);
    const [ about, setAbout ] = useState([]);
    const [ portfolio, setPortfolio ] = useState([]);
    const [ services, setServices ] = useState([]);
    const [ contact, setContact ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(async () => {
        try{
            await Promise.all([
                fetch(getDBRoutes.home.header).then(res => res.json()).then(json => setBanner(json)),
                fetch(getDBRoutes.home.about).then(res => res.json()).then(json => setAbout(json)),
                fetch(getDBRoutes.home.service).then(res => res.json()).then(json => setServices(json)),
                fetch(getDBRoutes.home.portfolio).then(res => res.json()).then(json => setPortfolio(json)),
                fetch(getDBRoutes.home.contact).then(res => res.json()).then(json => setContact(json))
            ])
            setIsLoaded(true)
        }
        catch(err){
            console.log(err);
            setIsLoaded(false)
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);
    
    if(isLoaded == true){
        return(
            <div>
                {banner.map(data => (
                    <NewsBannerOrganism key={data.Id} titlecontent={data.headertitle} subtitlecontent={data.headersubtitle} buttoncontent="Learn More" image={data.headerimage} link={data.headerlink}/>
                ))}
                {about.map(data => (
                    <IntroContentMolecule key={data.Id} title="About" bodytext={data.aboutcontent} buttontext="learn more"/>
                ))}
                {portfolio.map(data => (
                    <IntroContentMolecule key={data.Id} title="Portfolio" bodytext={data.portfoliocontent} buttontext="learn more"/>
                ))}
                {services.map(data => (
                    <IntroContentMolecule key={data.Id} title="Services" bodytext={data.servicescontent} buttontext="learn more"/>
                ))}
                {contact.map(data => (
                    <IntroContentMolecule key={data.Id} title="Contact" bodytext={data.contactcontent} buttontext="learn more"/>
                ))}
                <PostsMolecule />
            </div>
        )
    }
    else{
        return(
            <div>
                Loading...
            </div>
        )
    }

}

export default HomeView;