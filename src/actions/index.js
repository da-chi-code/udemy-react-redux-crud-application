import React from 'react'
import { createStore } from 'redux'
import { Providor } from 'react-redux'
import './index.css'
import reducer from './reducers'
import App from './components/App';

const store = createStore(reducer)
/* const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const increment = () => ({
    type: 'INCREMENT'
})
export const decremnt = () => ({
    type: 'DECREMENT'
})
 */