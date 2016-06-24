import React, {Component, PropTypes} from "react"
import classNames from "classnames"
//
export class Input extends Component{
    state  = {
        value: ""
    };

    static defaultProps = {

    };

    static propTypes = {
        label: React.PropTypes.string,
        hint: React.PropTypes.string,
        bsStyle: React.PropTypes.oneOf(['success', 'warning', 'error'])
    };

    render() {
        const {label, hint, bsStyle} = this.props;
        let inputClass = classNames({
            'form-group': true,
            [`has-${this.props.bsStyle}`]: bsStyle
        });
        return (
            <div className={inputClass}>
                {label && <label className="control-label">{label}</label>}
                <input type="text" className="form-control" {...this.props} />
                {hint && <span className="hint-block">{hint}</span>}
            </div>
        )
    }
}