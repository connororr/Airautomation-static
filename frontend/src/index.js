import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Landing from './pages/Landing';
import Transport from './pages/Transport';
import TimberMills from './pages/TimberMills';
import Mining from './pages/Mining';
import Valves from './pages/Valves';
import ContactUs from './pages/ContactUs';
import Cylinders from './pages/Cylinders';
import { Router } from '@reach/router';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Footer from './components/Footer';

ReactDOM.render(
    <Layout>
        <NavBar />
        <Router>
            <Landing path='/' />
            <Mining path='/mining' />
            <Transport path='/transport' />
            <TimberMills path='/timbermills' />
            <Valves path='/valves' />
            <Cylinders path='/cylinders' />
            <ContactUs path='/contactus' />
        </Router>
        <Footer />
    </Layout>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
