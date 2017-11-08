import React from 'react'
import ReactDOM from 'react-dom'
import DataProvider from './todoApp/DataProvider'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<DataProvider />, document.getElementById('root'))
registerServiceWorker()
