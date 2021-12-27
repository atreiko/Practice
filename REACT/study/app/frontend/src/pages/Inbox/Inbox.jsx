import React from 'react'
import PropTypes from 'prop-types'
import { CustomLink } from '../../components/CustomLink'

const Inbox = ({ title, emails }) => {
    // const params = useParams()
    // console.log(params);

    const emailCards = emails.map(email => (
        <div key={email.id}>
            <CustomLink to={`${email.id}`} >{email.topic}</CustomLink>
        </div>
    )) 

    return (
        <main>
            <h3>{title}</h3>
            <div className='emails'>
                {emailCards}
            </div>
        </main>
    )
}

//* PropTypes functions:
//  shape, exact, oneOfType, oneOf, arrayOf, instanceOf
Inbox.propTypes = {
    emails       : PropTypes.array.isRequired,
    title        : PropTypes.string,
}

Inbox.defaultProps = {
    title        : 'Default Title'
}

export default Inbox

// shape - показывает в каком виде должен прийти объект