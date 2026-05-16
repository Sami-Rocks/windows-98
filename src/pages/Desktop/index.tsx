import { useState } from 'react'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'
import Windows from '../../components/Windows'
import Icons from '../../Layouts/Icons'
import { StartMenuContext, ActiveWindowContext } from '../../utilities/contexts'
import './style.scss'

const Desktop = () => {

	const [startMenu, setStartMenu] = useState(false)
	const [activeWindow, setActiveWindow] = useState<FileType>()
	const [openWindows, setOpenWindows] = useState<Array<FileType>>([])

	const closeStart = () => {
		if (startMenu === true) {
			setStartMenu(false)
		}
	}

	const getNextActiveWindow = (windows: Array<FileType>) => {
		return [...windows].reverse().find(window => !window.isMinimized)
	}

	const openWindow = (file: FileType) => {
		setOpenWindows(windows => {
			const existingWindow = windows.find(window => window.id === file.id)

			if (existingWindow) {
				const activeFile = {
					...existingWindow,
					...file,
					isMinimized: false
				}

				setActiveWindow(activeFile)
				return windows.map(window => window.id === file.id ? activeFile : window)
			}

			const activeFile = {
				...file,
				isMaximized: false,
				isMinimized: false
			}

			setActiveWindow(activeFile)
			return [...windows, activeFile]
		})
	}

	const closeWindow = (id: number) => {
		setOpenWindows(windows => {
			const remainingWindows = windows.filter(window => window.id !== id)

			if (activeWindow?.id === id) {
				setActiveWindow(getNextActiveWindow(remainingWindows))
			}

			return remainingWindows
		})
	}

	const activateWindow = (file: FileType) => {
		setOpenWindows(windows => {
			const existingWindow = windows.find(window => window.id === file.id)
			const activeFile = {
				...(existingWindow || file),
				isMinimized: false
			}

			setActiveWindow(activeFile)
			return windows.map(window => window.id === file.id ? activeFile : window)
		})
	}

	const minimizeWindow = (id: number) => {
		setOpenWindows(windows => {
			const nextWindows = windows.map(window => window.id === id ? {
				...window,
				isMinimized: true
			} : window)

			if (activeWindow?.id === id) {
				setActiveWindow(getNextActiveWindow(nextWindows))
			}

			return nextWindows
		})
	}

	const toggleMaximizeWindow = (id: number) => {
		setOpenWindows(windows => {
			const nextWindows = windows.map(window => {
				if (window.id !== id) return window

				return {
					...window,
					isMaximized: !window.isMaximized,
					isMinimized: false
				}
			})
			const activeFile = nextWindows.find(window => window.id === id)

			setActiveWindow(activeFile)
			return nextWindows
		})
	}

	return (
		<div className="desktop">
			<StartMenuContext.Provider value={{ startMenu, setStartMenu }}>
				<ActiveWindowContext.Provider value={{ activeWindow, setActiveWindow }} >
					<div className="background" onClick={closeStart}  />
					{
						openWindows.map(el => (
							<Windows
								key={el.id}
								close={() => closeWindow(el.id)}
								file={el}
								onActivate={activateWindow}
								onMaximize={() => toggleMaximizeWindow(el.id)}
								onMinimize={() => minimizeWindow(el.id)}
								openWindow={openWindow} />
						))
					}
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
