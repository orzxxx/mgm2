import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, Link} from 'react-router'
import Button from './modules/Button'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
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
        <Button/>
    </Provider>,
    document.getElementById('root')
)