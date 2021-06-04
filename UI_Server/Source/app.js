import React from 'react';
import { NotificationMol } from '../Components/Molecules/Notification/notification.molecule.js' 
import ContactView from '../Components/Pages/Contact/contact.view';
import HomeView from '../Components/Pages/Home/home.view';
import ServicesView from '../Components/Pages/Services/services.view';
import AboutView from '../Components/Pages/About/about.view';
import BlogView from '../Components/Pages/Blog/blog.view';
import PostCatView from '../Components/Pages/Blog/Category Nav/blogcategory.template';
import BlogPostView from '../Components/Pages/Blog/Posts/blogpost.template';
import LoginView from '../Components/Pages/Login/login.view';
import RegistrationView from '../Components/Pages/Register/register.view';
import PageNotFoundView from '../Components/Pages/Not Found/pagenotfound.view';
import AccountUserDashboardView from '../Components/Pages/Account/User/account.user.dashboard';
import AccountEditorDashboardView from '../Components/Pages/Account/Editor/account.editor.dashboard';
import AccountAdminDashboardView from '../Components/Pages/Account/Admin/account.admin.dashboard';
import AccountAdminChangePWView from '../Components/Pages/Account/Admin/Profile Edit/account.admin.changepw';
import AccountAdminAboutView from '../Components/Pages/Account/Admin/Page Edit/About/account.admin.about';
import AccountAdminBlogView from '../Components/Pages/Account/Admin/Page Edit/Blog/account.admin.blog';
import AccountAdminNewBlog from '../Components/Pages/Account/Admin/Page Edit/Blog/New Post/account.admin.newblog';
import AccountAdminHomeView from '../Components/Pages/Account/Admin/Page Edit/Home/account.admin.home';
import AccountAdminPortfolioView from '../Components/Pages/Account/Admin/Page Edit/Portfolio/account.admin.portfolio';
import AccountAdminServicesView from '../Components/Pages/Account/Admin/Page Edit/Services/account.admin.services';
import AccountAdminAddUserView from '../Components/Pages/Account/Admin/User Edit/Add User/admin.adduser';
import AccountAdminEditUserView from '../Components/Pages/Account/Admin/User Edit/Edit User/admin.edituser';
import AccountAdminEditOneUserView from '../Components/Pages/Account/Admin/User Edit/Edit User/admin.edituser.individual.js';
import AccountAdminRemoveUserView from '../Components/Pages/Account/Admin/User Edit/Remove User/admin.removeuser';
import AccountUserChangePWView from '../Components/Pages/Account/User/Password Change/account.changepw.view';
import NavBarMolecule from '../Components/Molecules/Nav Bar/navbar.molecule';
import FooterOrg from '../Components/Organisms/Footer/footer.organism';
import { Switch, Route, withRouter } from 'react-router-dom';
import styles from './styles.css';

function App(){
    return(
        <div className={styles.app}>
                <div className={styles.noteClass}>
                    <NotificationMol />
                </div>
                <div className={styles.navBarContainer}>
                    <NavBarMolecule />
                </div>
                <div className={styles.contentContainer}>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/about" component={AboutView} />
                        <Route exact path="/services" component={ServicesView} />
                        <Route exact path="/contact" component={ContactView} />
                        
                        {/* Admin Pages */}
                        <Route
                            path="/profile/admin/:adminname/profile/changepw"
                            component={AccountAdminChangePWView}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/home"
                            component={AccountAdminHomeView}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/about"
                            component={AccountAdminAboutView}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/portfolio"
                            component={AccountAdminPortfolioView}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/services"
                            component={AccountAdminServicesView}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/blog/new"
                            component={AccountAdminNewBlog}
                        />
                        <Route
                            path="/profile/admin/:adminname/pages/blog"
                            component={AccountAdminBlogView}
                        />
                        <Route
                            path="/profile/admin/:adminname/users/add"
                            component={AccountAdminAddUserView}
                        />
                        <Route
                            path="/profile/admin/:adminname/users/edit/:username"
                            component={AccountAdminEditOneUserView}
                        />
                        <Route
                            path="/profile/admin/:adminname/users/edit"
                            component={AccountAdminEditUserView}
                        />
                        <Route
                            path="/profile/admin/:adminname/users/remove"
                            component={AccountAdminRemoveUserView}
                        />
                        
                        {/* Editor Pages */}

                        {/* <Route
                            path="/profile/editor/:editorname/profile/changepw"
                            component={}
                        />
                        <Route
                            path="/profile/editor/:editorname/blog"
                            component={}
                        />
                        <Route
                            path="/profile/editor/:editorname/blog/add"
                            component={}
                        />
                        <Route
                            path="/profile/editor/:editorname/blog/edit"
                            component={}
                        /> */}

                        {/* User Pages */}
                    
                        <Route
                            path="/profile/user/:username/profile/changepw"
                            component={AccountUserChangePWView}
                        />
                        {/* Main Account Pages */}
                        <Route 
                            path="/profile/user/:username" 
                            component={AccountUserDashboardView}
                        />
                        <Route 
                            path="/profile/editor/:editorname"
                            component={AccountEditorDashboardView}
                        />
                        <Route 
                            path="/profile/admin/:adminname" 
                            component={AccountAdminDashboardView}
                        />
                        {/* <Route
                            path="/fileserver/images"
                            components={}
                        /> */}
                        <Route 
                            path="/blog/post/:post" 
                            component={BlogPostView}
                        />
                        <Route 
                            path="/blog/:postcat" 
                            component={PostCatView}
                        />
                        <Route 
                            exact path="/blog" 
                            component={BlogView} 
                        />         
                        <Route 
                            exact path='/login'
                            component= {LoginView}
                        />
                        <Route 
                            exact path="/register" 
                            component={RegistrationView} 
                        />
                        <Route 
                            path="*" 
                            component={PageNotFoundView} 
                        />
                    </Switch>
                </div>
                <div className={styles.footerContainer}>
                    <FooterOrg />
                </div>
            </div>
    )
}

export default withRouter(App);