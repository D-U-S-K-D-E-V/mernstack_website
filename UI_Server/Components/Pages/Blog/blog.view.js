import React, { useState, useEffect, useContext } from 'react';
import PageBannerMol from '../../Molecules/Page Banner/pagebanner.molecule';
import TextSecondTitleAtom from '../../Atoms/Text/Second Title/text.secondtitle.atom';
import TextFourthTitleAtom from'../../Atoms/Text/Fourth Title/text.fourthtitle.atom';
import { Link } from 'react-router-dom';
import DesignBarAtom from '../../Atoms/Design/Bar/design.bar.atom';
import SliderOrg from '../../Organisms/Blog Slider/slider.organism';
import { getDBRoutes } from '../../../Routes/routes.db_server.js';
import styles from './blog.view.css';

function BlogView(){

    const [ blogCategories, setBlogCategories ] = useState([]);
    const [ blogPosts, setBlogPosts ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(async () => {
        try{
            await Promise.all([
                fetch(getDBRoutes.blog.category.getAll)
                    .then(res => res.json())
                    .then(json => setBlogCategories(json)),
                fetch(getDBRoutes.blog.post.getAll)
                    .then(res => res.json())
                    .then(json => setBlogPosts(json))
            ])
            setIsLoaded(true);
        }
        catch(error){
            setIsLoaded(false);
            console.log(error);
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    if(isLoaded == true){
        return(
            <div className={styles.blogViewContainer}>
                <div className={styles.pageBannerContainer}>
                    <PageBannerMol 
                        title="Blog" 
                        image="kadinjacover.jpg"
                    />
                </div>
                <div className={styles.pageContentContainer}>
                    <div className={styles.recentPostsContainer}>
                        <div className={styles.recentPostTitleContainer}>
                            <TextSecondTitleAtom content="Recent Posts" />
                            <DesignBarAtom />
                        </div>
                        <div className={styles.sliderContainer}>
                            <SliderOrg 
                                data={blogPosts} 
                                status={isLoaded}
                            />
                        </div>
                    </div>
                    <div className={styles.categoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <TextSecondTitleAtom content="Categories" />
                            <DesignBarAtom />
                        </div>
                        <div className={styles.categoriesContainer}>
                            {blogCategories.map(data => (
                                <div className={styles.linkContainer}>
                                    <Link 
                                        key={data.id}
                                        to={{
                                            pathname: `/blog/${data.categoryname}`,
                                            state:{ 
                                                categoryId: data.id
                                            }
                                        }} 
                                        className={styles.link}
                                    >
                                        <TextFourthTitleAtom key={data.id} content={data.categoryname} />
                                    </Link>    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.blogViewContainerLoading}>
                ...Loading
            </div>
        )
    }
}

export default BlogView;