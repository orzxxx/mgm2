//css
import './node_modules/admin-lte/bootstrap/css/bootstrap.min.css'
import './node_modules/admin-lte/dist/css/AdminLTE.min.css'
import './node_modules/ionicons/dist/css/ionicons.min.css'
import './node_modules/font-awesome/css/font-awesome.css'
import './node_modules/admin-lte/dist/css/skins/skin-blue.min.css'
/*<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->*/
//js
import 'admin-lte'
import 'bootstrap'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import {Button, ButtonGroup} from './modules/Button'
import {Number} from './components/base/form/Number'
import {Input} from './components/base/form/Input'
import Test from './components/base/form/TestForm'
import App from './modules/App'
//import App from './containers/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Test2 from './modules/Test'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import THeader from './modules/THeader'

const store = configureStore()
/*    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/repos" component={Repos}>
                    <Route path="/repos/:userName/:repoName" component={Repo}/>
                </Route>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    ), document.getElementById('app'))*/

/*render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Test2}>
                <IndexRoute component={THeader}/>
                <Route path="/about" component={About}></Route>
            </Route>
        </Router>
    </Provider>
    ,document.getElementById('root')
)*/
const sidebar = [
    {url: 'u1', title: 't1'},
    {url: 'u2', title: 't2'}
];
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
)
/*render(
    <Provider store={store}>
        <Number max={99999} min={-999} precision={3}/>
    </Provider>
    ,document.getElementById('root')
)*/
/*<Input label="label" help="help"/>*/
/*<Number max={99999} min={-999} precision={3}/>*/
/*<Test/>*/
