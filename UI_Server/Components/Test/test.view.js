import React from 'react';
import HomeView from '../Pages/Home/home.view';
import ServicesView from '../Pages/Services/services.view';
import ContactView from '../Pages/Contact/contact.view';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function TestView(){
    return(
        <div className="testView">
            <ContactView />
        </div>
    )
};

export default TestView;