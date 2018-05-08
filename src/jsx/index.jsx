import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Parents from './parents'

function render () {
    ReactDom.render(<Parents />, document.getElementById('root'))
}

setTimeout(function () {
    render()
}, 0)