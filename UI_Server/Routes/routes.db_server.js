

const server = "http://localhost:3000";

const route = {
    aboutBio: '/aboutbio',
    aboutTeam: '/aboutteam',
    aboutTestimonials: '/abouttestimonials',
    accounts: '/accounts',
    accountType: '/accounttype',
    blogCategory: '/blogcategory',
    blogCommentReply: '/blogcommentreply',
    blogComments: '/blogcomments',
    blogContent: '/blogcontent',
    homeAbout: '/homeabout',
    homeContact: '/homecontact',
    homeHeader: '/homeheader',
    homePortfolio: '/homeportfolio',
    homeService: '/homeservices',
    homeHeader: '/homeheader',
    pageHeader: '/pageheader',
    pageManifest: '/pagemanifest',
    portfolio: '/portfolio',
    portfolioService: '/portfolioservice',
    service: '/services',
    serviceCategory: '/servicecategory',
    servicePricing: '/servicepricing',
    serviceUnitOfMeasure: '/serviceunitofmeasure'
}

export const getDBRoutes = {
    home: {
        about: 'http://localhost:3000/homeabout/selectCurrent',
        service: 'http://localhost:3000/homeservices/selectCurrent',
        portfolio: 'http://localhost:3000/homeportfolio/selectCurrent',
        contact: 'http://localhost:3000/homecontact/selectCurrent',
        header: 'http://localhost:3000/homeheader/selectCurrent'
    },
    about: {
        team: `${server}${route.aboutTeam}/selectAll`,
        bio: `${server}${route.aboutBio}/selectCurrent`,
        testimonials: `${server}${route.aboutTestimonials}/selectAll`
    },
    service: {
        type: 'http://localhost:3000/services/selectAll',
        category: 'http://localhost:3000/serviceCategory/selectAll'
    },
    portfolio: {
        content: 'http://localhost:3000/portfolio/PortfolioContentData'
    },
    blog: {
        category: {
            getAll: `${server}${route.blogCategory}/selectAll`,
            getById: function(id){
                return `${server}${route.blogCategory}/selectOne/${id}`
            }
        },
        post: {
            getByCategory: function(id){
                return `${server}${route.blogContent}/selectByCategory/${id}`
            },
            getAll: `${server}${route.blogContent}/selectAll`,
            getById: function(id){
                return `${server}${route.blogContent}/selectOne/${id}`;
            }
        },
        comments: function (id){
            return `http://localhost:3000/blog/BlogCommentsData/${id}`;
        },
        replies: function(id){
                return `http://localhost:3000/blog/BlogReplyData/${id}`;
        }
    },
    account: {
        validate: function(username, password){
            return `http://localhost:3000/accounts/authenticate/${username}/${password}`;
        },
        active: 'http://localhost:3000/accounts/selectActive',
        inactive: 'http://localhost:3000/accounts/selectInactive',
        type: 'http://localhost:3000/accounts/type',
        selectOne: function(id){
            return `http://localhost:3000/accounts/selectOne/${id}`
        }
    }
}

export const postDBRoutes = {
    account: {
        addUser: 'http://localhost:3000/accounts/insertOne'
    },
    blog: {
        comments: {
            new: 'http://localhost:3000/blog/BlogCommentsData/newComment'
        }
    },
    page:{
        home: {
            homeBanner: `${server}${route.homeHeader}/insert`,
            homeAbout: `${server}${route.homeAbout}/insert`,
            homePortfolio: `${server}${route.homePortfolio}/insert`,
            homeServices: `${server}${route.homeService}/insert`,
            homeContact: `${server}${route.homeContact}/insert`
        }
    }
}

export const putDBRoutes = {
    
    account: {
        changepw: 'http://localhost:3000/accounts/updatePassword',
        users: {
            restore: 'http://localhost:3000/accounts/activateId',
            deactivate: 'http://localhost:3000/accounts/deactivateId',
            update: 'http://localhost:3000/accounts/update'
        }
    }
}

//What do these do?

export const blogContent = 'http://localhost:3000/blog/BlogContentData';

export const blogComments = 'http://localhost:3000/blog/BlogCommentsData';