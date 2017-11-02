import React from 'react'
import ReactDOM from 'react-dom'
// import App from './webApp/App'
// import MonsterApp from './MonsterMash/App'
// import SmartApp from './smartApp/App'
// import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
// import ChatterApp from './ChatterApp/ChatterApp'
import SearchApp from './searchApp/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<SearchApp />, document.getElementById('root'))
registerServiceWorker()
