//css
import './public/bootstrap/css/bootstrap.min.css'
import './public/dist/css/AdminLTE.min.css'
import './public/dist/css/ionicons.min.css'
import './public/dist/css/font-awesome.css'
import './public/dist/css/skins/skin-blue.min.css'
/*<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->*/
//js
import './public/plugins/jQuery/jQuery-2.2.0.min.js'
import './public/dist/js/app.min.js'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import {Button, ButtonGroup} from './modules/Button'
import {Number} from './components/base/form/Number'
import {Input} from './components/base/form/Input'
import Test from './components/base/form/TestForm'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Test2 from './modules/Test'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

/*render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/!* add the routes here *!/}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'))*/

render(
    <Provider store={store}>
        <Test2/>
    </Provider>
    ,document.getElementById('root')
)
/*<Input label="label" help="help"/>*/
/*<Number max={99999} min={-999} precision={3}/>*/
/*<Test/>*/
