// Modules
import { useState } from 'react'

type WindowManagerType = {
	activeWindow?: FileType,
	activateWindow: (file: FileType) => void,
	closeWindow: (id: number) => void,
	minimizeWindow: (id: number) => void,
	openWindow: (file: FileType) => void,
	openWindows: Array<FileType>,
	setActiveWindow: (file?: FileType) => void,
	toggleMaximizeWindow: (id: number) => void
}

// Utilities
function getNextActiveWindow (windows: Array<FileType>) {
	return [...windows].reverse().find(window => !window.isMinimized)
}

// Hook: Desktop window manager
function useWindowManager (): WindowManagerType {
	// State
	const [activeWindow, setActiveWindow] = useState<FileType>()
	const [openWindows, setOpenWindows] = useState<Array<FileType>>([])

	// Functions
	function openWindow (file: FileType) {
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

	function closeWindow (id: number) {
		setOpenWindows(windows => {
			const remainingWindows = windows.filter(window => window.id !== id)

			if (activeWindow?.id === id) {
				setActiveWindow(getNextActiveWindow(remainingWindows))
			}

			return remainingWindows
		})
	}

	function activateWindow (file: FileType) {
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

	function minimizeWindow (id: number) {
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

	function toggleMaximizeWindow (id: number) {
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

	return {
		activeWindow,
		activateWindow,
		closeWindow,
		minimizeWindow,
		openWindow,
		openWindows,
		setActiveWindow,
		toggleMaximizeWindow
	}
}

export default useWindowManager
