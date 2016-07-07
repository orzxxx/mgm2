import React, {Component}from 'react'
import { Router, Route, hashHistory, browserHistory, Link} from 'react-router'

export default class THeader extends Component {
    render() {
        const sidebar = [
            {url: 'u1', title: 't1'},
            {url: 'u2', title: 't2'}
        ];
        return (
            <div className="content-wrapper">

                <section className="content-header">
                    <h1>
                        Page Header
                        <li><Link to="/about">Link in level 2</Link></li>
                        <li><Link to="/about">Link in level 2</Link></li>
                        {sidebar.map((s, i) => {
                            console.log(s.title);
                            return <li><Link to="/about">{s.title}</Link></li>
                        })}
                        <small>Optional description</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                        <li className="active">Here</li>
                    </ol>
                </section>


                <section className="content">



                </section>

            </div>
        )
    }
}
