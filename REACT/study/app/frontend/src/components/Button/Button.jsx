import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, color, backgroundColor, size, onClick }) => {
    const styles = {
        color,
        backgroundColor,
        fontSize: size,
    }

    return (
        <button style={styles}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

Button.propTypes = {
    title           : PropTypes.string.isRequired,
    color           : PropTypes.string,
    backgroundColor : PropTypes.string,
    size            : PropTypes.number,
    onClick         : PropTypes.func.isRequired
    
}

Button.defaultProps = {
    title           : 'Default Text',
    color           : '#433E49',
    backgroundColor : '#F3E8EB',
    size            : 14
}

export default Button
