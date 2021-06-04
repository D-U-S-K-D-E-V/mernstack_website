import { aboutBio } from '../../Library/Objects/AboutBio/query.aboutbio.js';
import { aboutTeam } from '../../Library/Objects/AboutTeam/query.aboutteam.js';
import { aboutTestimonials } from '../../Library/Objects/AboutTestimonials/query.abouttestimonial.js';
import { accounts } from '../../Library/Objects/Accounts/query.account.js';
import { accountType } from '../../Library/Objects/AccountType/query.accounttype.js';
import { blogCategory } from '../../Library/Objects/BlogCategory/query.blogcategory.js';
import { blogCommentReply } from '../../Library/Objects/BlogCommentReply/query.blogcommentreply.js';
import { blogComments } from '../../Library/Objects/BlogComments/query.blogcomments.js';
import { blogContent } from '../../Library/Objects/BlogContent/query.blogcontent.js';
import { homeAbout } from '../../Library/Objects/HomeAbout/query.homeabout.js';
import { homeContact} from '../../Library/Objects/HomeContact/query.homecontact.js';
import { homeHeader } from '../../Library/Objects/HomeHeader/query.homeheader.js';
import { homePortfolio } from '../../Library/Objects/HomePortfolio/query.homeportfolio.js';
import { homeServices } from '../../Library/Objects/HomeService/query.homeservice.js';
import { imageLibrary } from '../../Library/Objects/Image_Library/query.image_library.js';
import { pageManifest } from '../../Library/Objects/PageManifest/query.pagemanifest.js';
import { portfolio } from '../../Library/Objects/Portfolio/query.portfolio.js';
import { services } from '../../Library/Objects/Service/query.service.js';
import { serviceCategory } from '../../Library/Objects/ServiceCategory/query.servicecategory.js';


export function appRouter(db){
    
    db.use("/aboutbio", aboutBio);
    db.use("/aboutteam", aboutTeam);
    db.use("/abouttestimonials", aboutTestimonials);
    db.use("/accounts", accounts);
    db.use("/accounttype", accountType);
    db.use("/blogcategory", blogCategory);
    db.use("/blogcommentreply", blogCommentReply);
    db.use("/blogcomments", blogComments);
    db.use("/blogcontent", blogContent);
    db.use("/homeabout", homeAbout);
    db.use("/homeheader", homeHeader);
    db.use("/homeportfolio", homePortfolio);
    db.use("/homeservices", homeServices);
    db.use("/homecontact", homeContact);
    db.use("/library/images", imageLibrary);
    db.use("/pagemanifest", pageManifest);
    db.use("/portfolio", portfolio);
    db.use("/services", services);
    db.use("/servicecategory", serviceCategory);
    
};