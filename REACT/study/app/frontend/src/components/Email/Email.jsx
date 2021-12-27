import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Email = () => {
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        axios(`/api/inbox/${id}`)
    }, [])

    return (
        <div>
            <Icon type={'star'} color={'red'} filled />
        </div>
    )
}

// Email.propTypes = {
//     email: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         topic: PropTypes.string.isRequired
//     }).isRequired
// }

export default Email
 