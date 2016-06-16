import React, {Component, PropTypes} from "react"
import classNames from "classnames"
import '../node_modules/admin-lte/bootstrap/css/bootstrap.css'

class Button extends Component{
    static propTypes = {
        bsSize: React.PropTypes.oneOf(['mini', 'big']),
        bsStyle: React.PropTypes.oneOf(['blue', 'red', 'green'])
    }

    render() {
        const {bsSize, bsStyle} = this.props;
        var btnClass = classNames({
            'btn': true,
            [`btn-${this.props.bsSize}`]: this.props.bsSize
        });
        btnClass = 'btn btn-success btn-lg';
        return (
            <button className={btnClass}>button1</button>
        )
    }
}

export default Button