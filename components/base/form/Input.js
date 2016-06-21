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
        help: React.PropTypes.string,
        bsStyle: React.PropTypes.oneOf(['success', 'warning', 'error'])
    };

    render() {
        const {label, help, bsStyle} = this.props;
        let inputClass = classNames({
            'form-group': true,
            [`has-${this.props.bsStyle}`]: bsStyle
        });
        //label
        let compLabel;
        if (label != null && label.trim() != ""){
            compLabel = <label className="control-label">{label}</label>;
        }
        //help
        let compHelp;
        if (help != null && help.trim() != ""){
            compHelp = <span className="help-block">{help}</span>;
        }
        return (
            <div className={inputClass}>
                {compLabel}
                <input type="text" className="form-control" {...this.props} />
                {compHelp}
            </div>
        )
    }
}