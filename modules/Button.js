import React, {Component, PropTypes} from "react"
import classNames from "classnames"
import '../node_modules/admin-lte/bootstrap/css/bootstrap.css'
//
export class Button extends Component{
    static defaultProps = {
        label: 'Button',
        bsFlat: false,
        bsDisabled: false,
        bsBlock: false,
        bsStyle: 'default'
    };

    static propTypes = {
        label: React.PropTypes.string,
        bsFlat: React.PropTypes.bool,
        bsDisabled: React.PropTypes.bool,
        bsColor: React.PropTypes.string,
        bsSize: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
        bsStyle: React.PropTypes.oneOf(['default', 'primary', 'success', 'info', 'danger', 'warning'])
    };

    render() {
        const {label, bsSize, bsStyle, bsColor, bsFlat, bsDisabled} = this.props;
        var btnClass = classNames({
            'btn': true,
            [`btn-${this.props.bsStyle}`]: bsStyle,
            [`btn-${this.props.bsSize}`]: bsSize,
            [`bg-${this.props.bsColor}`]: bsColor,
            'btn-flat': bsFlat,
            'disabled': bsDisabled
        });
        return (
            <button {...this.props} className={btnClass}>{label}</button>
        )
    }
}
//
export class ButtonGroup extends Component{
    static defaultProps = {
        bsStyle: 'horizontal'
    };

    static propTypes = {
        bsStyle: React.PropTypes.oneOf(['horizontal', 'vertical'])
    };

    render() {
        const {bsStyle} = this.props;
        var btnClass = classNames({
            'btn-group': bsStyle == 'horizontal',
            'btn-group-vertical': bsStyle == 'vertical'
        });
        return (
            <div className={btnClass}>
                {this.props.children}
            </div>
        )
    }
}