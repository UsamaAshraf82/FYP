import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-tabs/style/react-tabs.scss';

import './styles/Comman.scss'; 

import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './App';
import { CookiesProvider } from 'react-cookie';
import registerServiceWorker from './registerServiceWorker';
import { store } from './redux/_helpers';


// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
//const initialState = window.initialReduxState;
//const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(

    <CookiesProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </CookiesProvider>,   
        rootElement);
      
      registerServiceWorker();

