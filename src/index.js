import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
    (<BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/autor" component={AutorBox} />
                <Route path="/livro" component={LivroBox} />
            </Switch>
        </App>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
