// Modules
import React from 'react'
import ReactDOM from 'react-dom'

// Pages
import Desktop from './pages/Desktop'

// Utilities
import reportWebVitals from './reportWebVitals'

// Styles
import './assets/styles/_main.scss'

ReactDOM.render(
	<React.StrictMode>
		<Desktop />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
