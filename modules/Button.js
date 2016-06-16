import React, {Component, PropTypes} from "react"

class Button extends Component{
    static propTypes = {
        bsSize: React.PropTypes.oneOf(['mini', 'big']),
        bsStyle: React.PropTypes.oneOf(['blue', 'red', 'green'])
    }

    render() {
        const {bsSize, bsStyle} = this.props;
        return (
            <button className='btn'>button</button>
        )
    }
}

export default Button