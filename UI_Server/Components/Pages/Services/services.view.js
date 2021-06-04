import React, { useState, useEffect } from 'react';
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import TextFirstTitleAtom from '../../Atoms/Text/First Title/text.firsttitle.atom';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import TextThirdTitleAtom from '../../Atoms/Text/Third Title/text.thirdtitle.atom';
import TextParagraphAtom from '../../Atoms/Text/Paragraph/text.paragraph.atom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './services.view.css';

function ServicesView(){

    const [ serviceCat, setServiceCat ] = useState([]);
    const [ serviceType, setServiceType ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect( async () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        try{
            await Promise.all([
                fetch(getDBRoutes.service.category)
                    .then(res => res.json())
                    .then(json => setServiceCat(json)),
                fetch(getDBRoutes.service.type)
                    .then(res => res.json())
                    .then(json => setServiceType(json)),
            ])
            setIsLoaded(true);
        }
        catch(err){
            setIsLoaded(false)
            console.log(err);
        }
    }, []);

    if(isLoaded == true){
        return(
            <div className={styles.pageContainer}>
                <div className={styles.bannerContainer}>
                    <PageBannerMol image="utlpremiertest.jpg" title="services" />
                </div>
                <div className={styles.pageContentContainer}>
                {serviceCat.map(catData => (
                    <div className={styles.serviceCatCotnainer}>
                        <div className={styles.secondTitleContainer}>
                            <TextSecondTitleAtom key={catData.Id} content={catData.name} />
                        </div>
                        <div className={styles.barContainer}>
                            <DesignBarAtom />
                        </div>
                        {serviceType.map(typeData => {
                            if(typeData.categoryId == catData.id){
                                return(
                                    <div key={typeData.Id} className={styles.typeDataContainer}>
                                        <div className={styles.thirdTitleContainer}>
                                            <TextThirdTitleAtom key={typeData.Id} content={typeData.title} />
                                        </div>
                                        <div className={styles.paragraphContainer}>
                                            <TextParagraphAtom content={typeData.description} />
                                        </div>
                                    </div>
                        )}})}
                    </div>
                ))}
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <TextParagraphAtom content="...Loading" />
            </div>
        )
    }
}


export default ServicesView;