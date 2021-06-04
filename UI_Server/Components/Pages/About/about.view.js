import React, { useState, useEffect } from 'react';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import TeamTileMol from '../../Molecules/Team Tile/teamtile.molecule';
import TestimonialSliderOrg from '../../Organisms/Testimonial Slider/testimonialslider.organism';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './about.view.css';

function AboutView(){

    const [ bioData, setBioData ] = useState([]);
    const [ teamData, setTeamData ] = useState([]);
    const [ testimonialData, setTestimonialData ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState([]);

    useEffect(async () => {
        try{
            await Promise.all([

                fetch(getDBRoutes.about.bio)
                    .then(res => res.json())
                    .then(json => setBioData(json)),
                fetch(getDBRoutes.about.team)
                    .then(res => res.json())
                    .then(json => setTeamData(json)),
                fetch(getDBRoutes.about.testimonials)
                    .then(res => res.json())
                    .then(json => setTestimonialData(json))
            ]);
            setIsLoaded(true);
        }
        catch(err){
            console.log(err)
            setIsLoaded(false);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return(
        <div className={styles.aboutViewContainer}>
            <div className={styles.headerContainer}>
                <PageBannerMol title="about" image="grymmcover.jpg"/>
            </div>
            <div className={styles.aboutContentContainer}>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content="The Company" />
                    <DesignBarAtom />
                </div>
                <div className={styles.bioContainer}>
                    {bioData.map(data => (
                        <div className={styles.bioTextContainer}>
                            <TextParagraphAtom content={data.biocontent} />
                        </div>
                    ))}
                </div>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content="The Team" />
                    <DesignBarAtom />
                </div>
                <div className={styles.teamTiles}>
                    {teamData.map(data => (
                        <div className={styles.tileElem}>
                            <TeamTileMol 
                                memberName={data.name} 
                                titleName={data.title}
                                textContent={data.bio}
                            /> 
                        </div>
                    ))}
                </div>
                <div className={styles.titleContainer}>
                    <TextSecondTitleAtom content="Testimonials" />
                    <DesignBarAtom />
                </div>
                <div className={styles.sliderContainer}>
                    <TestimonialSliderOrg 
                        status={isLoaded}
                        data={testimonialData}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutView;