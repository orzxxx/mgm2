import React, {Component, PropTypes} from "react"
import classNames from "classnames"
//
export class Number extends Component{
    state  = {
        value: ""
    };

    /*static defaultProps = {

    };*/

    static propTypes = {
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        precision: React.PropTypes.number
    };

    handleChange = () => {
        let value = this.refs.number.value;
        //为空字符串或负号时直接返回
        if (value == "" || value == "-"){
            this.setState(Object.assign({}, ...this.state, {value: value}));
            return false;
        }
        //校验是否数字
        if (this.props.precision == 0 && !value.match(/^-?(0*\d+)?$/)){
            return false;
        } else if (!value.match(/^-?(0*\d+\.?\d*)?$/)){
            return false;
        }
        //最大值最小值
        value = value < this.props.min ? this.props.min : value;
        value = value > this.props.max ? this.props.max : value;

        this.setState(Object.assign({}, ...this.state, {value: value}));
    };

    handleBlur = () => {
        let value = this.refs.number.value;
        //去掉单独的负号
        if (value == "-"){
            this.setState(Object.assign({}, ...this.state, {value: ""}));
            return false;
        }
        //精度控制
        if (value != "" && this.props.precision != 0){
            this.setState(Object.assign({}, ...this.state, {value: parseFloat(value).toFixed(this.props.precision)}));
        }
    };

    render() {
        const {min, max, precision} = this.props;
        let btnClass = classNames({
            'form-control': true
        });
        return (
            <input ref="number" {...this.props} className={btnClass} value={this.state.value}
                   onChange={this.handleChange} onBlur={this.handleBlur}/>
        )
    }
}