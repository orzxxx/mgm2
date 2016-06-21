import React, {Component, PropTypes} from "react"
import {Input} from './Input'

function validate(){
    return Comp=> {
        return class ValidateComponent extends Component {
            static propTypes = {
                hint: React.PropTypes.string,
                validType: React.PropTypes.object,
                required: React.PropTypes.bool
            };

            static defaultProps = {
                required: false
            };

            state = {
               //bsStyle: ''
            }

            handleChange = () => {
                
            };

            render() {
                return (
                    <Comp onChange={this.handleChange} {...this.props}/>
                )
            }
        }
    }
};

let rules = {
    required: function (value, msg) {
        if (!(value && $.trim(value) != "")) {
            //return msg ? msg : msgs.required;
            return msg || msgs.required;
        }
    },
    max: function (value, msg, maxValue) {
        if (!($.isNumeric(value) && value <= maxValue)) {
            return msg || format(msgs.max, maxValue);
        }
    },
    min: function (value, msg, minValue) {
        if (!($.isNumeric(value) && value >= minValue)) {
            return msg || format(msgs.min, minValue);
        }
    },
    range: function (value, msg, range) {
        if (!($.isNumeric(value) && value <= range[0] && value >= range[1])) {
            return msg || format(msgs.range, range[0], range[1]);
        }
    },
    maxlength: function (value, msg, maxLength) {
        if (!((value + "").length <= maxLength)) {
            return msg || format(msgs.maxlength, maxLength);
        }
    },
    minlength: function (value, msg, minLength) {
        if (!((value + "").length >= minLength)) {
            return msg || format(msgs.minlength, minLength);
        }
    },
    rangelength: function (value, msg, range) {
        if (!((value + "").length >= range[0] && (value + "").length <= range[1])) {
            return msg || format(msgs.rangelength, range[0], range[1]);
        }
    },
    number: function (value, msg) {
        if (!$.isNumeric(value)) {
            return msg || msgs.number;
        }
    },
    integer: function (value, msg) {
        var re = /^0|-?[1-9]\d*$/;
        if (!re.test(value)) {
            return msg || msgs.integer;
        }
    },
    quantity: function (value, msg) {
        var re = /^0|[1-9]\d*$/;
        if (!re.test(value)) {
            return msg || msgs.quantity;
        }
    },
    email: function (value, msg) {
        var re = /^[a-z\d]+@[a-z\d]+\.[a-z]+$/;
        if (!re.test(value)) {
            return msg || msgs.email;
        }
    },
    url: function (value, msg) {
        var re = /^(https?:\/\/)?[\da-z]+-?(([\da-z])+\.)+[a-z]{2,6}(\/[a-zA-Z0-9\&%_\.\/-~-]*)?$/;
        if (!re.test(value)) {
            return msg || msgs.url;
        }
    },
    equalTo: function (value, msg, selector) {
        var valueTo = $(selector).val();
        if (!(value == valueTo)) {
            return msg || msgs.equalTo;
        }
    }
};

//默认提示信息
let msgs ={
    required : "该值不得为空",
    max : "请输入一个不大于{0}的值",
    min : "请输入一个不小于{0}的值",
    range : "请输入一个不大于{0}且不小于{1}的值",
    maxlength : "输入长度不得超过{0}个字符",
    minlength : "输入长度不得低于{0}个字符",
    rangelength : "输入长度必须在{0}到{1}个字符之间",
    number : "请输入一个数字",
    integer : "请输入一个整数",
    quantity : "请输入一个正整数",
    email : "请输入一个正确的邮箱地址",
    url : "请输入一个正确的网址",
    equalTo : "请再次输入相同的值",
    /*required: "必选字段",
     remote: "请修正该字段",
     email: "请输入正确格式的电子邮件",
     url: "请输入合法的网址",
     date: "请输入合法的日期",
     dateISO: "请输入合法的日期 (ISO).",
     number: "请输入合法的数字",
     digits: "只能输入整数",
     creditcard: "请输入合法的信用卡号",
     equalTo: "请再次输入相同的值",
     accept: "请输入拥有合法后缀名的字符串",
     maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
     minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
     rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
     range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
     max: jQuery.validator.format("请输入一个最大为{0} 的值"),
     min: jQuery.validator.format("请输入一个最小为{0} 的值") */
};

export const TestInput = validate()(Input);