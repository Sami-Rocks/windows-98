// Modules
import { useState } from 'react'

// Components
import DesktopWindows from './components/DesktopWindows'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'

// Layouts
import Icons from '../../Layouts/Icons'

// Context
import { StartMenuContext, ActiveWindowContext } from '../../utilities/contexts'

// Hooks
import useWindowManager from './hooks/useWindowManager'

// Styles
import './style.scss'

// Page: Desktop
function Desktop () {
	// State
	const [startMenu, setStartMenu] = useState(false)
	const {
		activeWindow,
		activateWindow,
		closeWindow,
		minimizeWindow,
		openWindow,
		openWindows,
		setActiveWindow,
		toggleMaximizeWindow
	} = useWindowManager()

	// Functions
	function closeStart () {
		if (startMenu === true) {
			setStartMenu(false)
		}
	}

	// Render
	return (
		<div className="desktop">
			<StartMenuContext.Provider value={{ startMenu, setStartMenu }}>
				<ActiveWindowContext.Provider value={{ activeWindow, setActiveWindow }} >
					<div className="background" onClick={closeStart} />
					<DesktopWindows
						activateWindow={activateWindow}
						closeWindow={closeWindow}
						minimizeWindow={minimizeWindow}
						openWindow={openWindow}
						openWindows={openWindows}
						toggleMaximizeWindow={toggleMaximizeWindow} />
					<Icons openWindow={openWindow} />
					<StartMenu set={startMenu} />
					<StatusBar
						onActivate={activateWindow}
						openWindows={openWindows} />
				</ActiveWindowContext.Provider>
			</StartMenuContext.Provider>
		</div>
	)
}

export default Desktop
