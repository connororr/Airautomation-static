import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Landing from './pages/Landing';
import { Router } from '@reach/router';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Footer from './components/Footer';

ReactDOM.render(
    <Layout>
        <NavBar />
        <Router>
            <Landing path='/' />
        </Router>
        <Footer />
    </Layout>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
