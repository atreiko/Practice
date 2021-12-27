import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    
    state = {
        errorPresent: false
    }
    static getDerivedStateFromError(error) {
        return { errorPresent: true }
    } 

    render() {
        const { errorPresent } = this.state
        const { children } = this.props

        if(errorPresent) {
            return `Error 500`
        }

        return children
    }
}
