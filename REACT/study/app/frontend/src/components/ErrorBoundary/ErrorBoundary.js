import React, { Component } from 'react'
import Error500 from '../Error500/Error500'

export default class ErrorBoundary extends Component {
    state = {
        errorPresent: false
    }

    //? 1st way to catch the error for send it to server:
    // componentDidCatch(error, errorInfo) {
    //     axios.post('api/errors', JSON.stringify({error, errorInfo}))        
    //     this.setState({errorPresent: true})
    // }

    //? 2nd way to catch the error
    static getDerivedStateFromError(error) {
        return { errorPresent: true }
    } 

    render() {
        const { errorPresent } = this.state
        const { children } = this.props
        // console.log(this);
        if(errorPresent) {
            return <Error500 />
        }

        return children
    }
}
