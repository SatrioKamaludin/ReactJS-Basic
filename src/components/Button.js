import React, { Component } from 'react'
import Proptypes from 'prop-types';

class Button extends Component {
    render() {
        return(
            <div>
                <button>click here</button>
            </div>
        )
    }
}

Button.propTypes = {
    color: Proptypes.string.isRequired
}

Button.defaultProps = {
    color: "merah"
}

export default Button;