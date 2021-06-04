import React from 'react';
import TextFirstTitleAtom from '../../../Atoms/Text/First Title/text.firsttitle.atom';
import TextThirdTitleAtom from '../../../Atoms/Text/Third Title/text.thirdtitle.atom';
import DesignBarAtom from '../../../Atoms/Design/Bar/design.bar.atom';
import SliderOrg from '../../../Organisms/Blog Slider/slider.organism';
import BlogTileMol from '../../../Molecules/Blog Tiles/blogtile.molecule';
import { getDBRoutes } from '../../../../Routes/routes.db_server';
import styles from './blogcategory.template.css';

class PostCatView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            catId: this.props.location.state.categoryId,
            categoryData: [],
            blogData: [],
            isLoaded: true
        }

    }
    async componentDidMount(){
        try{
            await Promise.all([
                fetch(getDBRoutes.blog.category.getById(this.state.catId))
                    .then(result => result.json())
                    .then(json => this.setState({ categoryData: json })),

                fetch(getDBRoutes.blog.post.getByCategory(this.state.catId))
                    .then(results => results.json())
                    .then(json => this.setState({ blogData: json }))
                
            ])
        }
        catch(error){
            this.setState({ isLoaded: false })
            console.log(error);
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    render(){
        let { categoryData, blogData, isLoaded } = this.state;
        
        if(!blogData.length){
            return(
                <div className={styles.blogCatContainer}>
                    {categoryData.map(data => (
                        <div className={styles.pageTitleContainer}>
                            <TextFirstTitleAtom content={data.categoryname}/>
                            <DesignBarAtom />
                        </div>
                    ))}
                    <div className={styles.sliderOrgContainer}>
                        <TextThirdTitleAtom content="New posts coming soon!" />
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={styles.blogCatContainer}>
                    {categoryData.map(data => (
                        <div className={styles.pageTitleContainer}>
                            <TextFirstTitleAtom content={data.categoryname}/>
                            <DesignBarAtom />
                        </div>
                    ))}
                    <div className={styles.sliderOrgContainer}>
                        <div className={styles.recentPostsTitleContainer}>
                            <TextThirdTitleAtom content="Recent Posts" />
                        </div>
                        <SliderOrg 
                            data={blogData}
                            status={isLoaded}
                        />
                    </div>
                    <div className={styles.archiveContainer}>
                        <div className={styles.archiveTitleContainer}>
                            <TextThirdTitleAtom content="Archive" />
                        </div>
                        <div className={styles.archiveItemsContainer}>
                            {blogData.map(data => 
                            (
                                <div className={styles.tileContainer}>
                                    <BlogTileMol 
                                        key={data.id} 
                                        data={data.id}
                                        image={data.image} 
                                        title={data.header} 
                                        date={data.date} 
                                        post={`/blog/post/${data.header}`} 
                                        category={data.category}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PostCatView;