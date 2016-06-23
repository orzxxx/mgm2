import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../../../actions/counter'

export const fields = [ 'username', 'email', 'age' ];

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

class ContactForm extends Component {
    render() {
        const { fields: { username, email, age }, resetForm, handleSubmit, submitting } = this.props
        return (<form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <div>
                        <input type="text" placeholder="Username" {...username}/>
                    </div>
                    {username.touched && username.error && <div>{username.error}</div>}
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input type="text" placeholder="Email" {...email}/>
                    </div>
                    {email.touched && email.error && <div>{email.error}</div>}
                </div>
                <div>
                    <label>Age</label>
                    <div>
                        <input type="text" placeholder="Age" {...age}/>
                    </div>
                    {age.touched && age.error && <div>{age.error}</div>}
                </div>
                <div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                    <button type="button" disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}


ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
    form: 'contact',                           // a unique name for this form
    fields,
    validate// all the fields in your form
})(ContactForm);

function mapStateToProps(state) {
    return {
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)

//export default ContactForm;