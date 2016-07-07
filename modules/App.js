import React, {Component} from 'react'
import NavLink from './NavLink'
import { Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import Test2 from './Test'
import * as TAction from './Action'
import { Provider } from 'react-redux'
import THeader from './THeader'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component{

    componentDidMount = () => {
        console.log(this.props);
        const { dispatch, receiveSubMenus } = this.props;
        console.log("be1"+this.props);
        //var r = receiveSubMenus();
        console.log("af"+this.props);
       /* <Route path="/" component={Test2}>
            /!*{this.props.data.map((sb) =>
                <Route path={sb.url} component={sb.title}></Route>
            )}*!/
            <IndexRoute component={THeader}/>
            <Route path="/about" component={About}></Route>
        </Route>*/
    };

    render() {
        const { dispatch, receiveSubMenus, data } = this.props;
      return (
         <button onClick={receiveSubMenus}>{this.props.data[0].url}</button>
      )
   }
}


export const GET = 'GET';


//var rs = () => receiveSubMenus;

export function get(state = [{url: '0'}], action) {
    console.log("a:"+action.type);
    switch (action.type) {
        case GET:
            return action.data;
        default:
            return state;
    }
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        data: state.data
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(TAction, dispatch);
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(App)