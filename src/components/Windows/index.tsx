// Modules
import { useContext } from 'react'

// Components
import FileBar from './components/FileBar'
import TitleBar from './components/TitleBar'
import WindowContent from './components/WindowContent'

// Context
import { ActiveWindowContext } from '../../utilities/contexts'

// Hooks
import useWindowDrag from './hooks/useWindowDrag'

// Utilities
import getWindowClassName from './utils/getWindowClassName'

// Styles
import './style.scss'

type WindowType = {
	close: () => void,
	file: FileType,
	onActivate: (file: FileType) => void,
	onMaximize: () => void,
	onMinimize: () => void,
	openWindow: (file: FileType) => void
}

// Component: Windows
function Windows ({ close, file, onActivate, onMaximize, onMinimize, openWindow }: WindowType) {
	// Context
	const { activeWindow } = useContext(ActiveWindowContext)

	// Hooks
	const {
		onDragEnd,
		onDragMove,
		onDragStart,
		style
	} = useWindowDrag(file.isMaximized)

	// Data
	const isActive = activeWindow?.id === file.id
	const className = getWindowClassName(file, isActive)

	if (file.isMinimized) return null

	// Render
	return (
		<div
			className={className}
			onMouseDown={() => onActivate(file)}
			style={style}>
			<TitleBar
				file={file}
				onClose={close}
				onDragEnd={onDragEnd}
				onDragMove={onDragMove}
				onDragStart={onDragStart}
				onMaximize={onMaximize}
				onMinimize={onMinimize} />
			<FileBar file={file} />
			<WindowContent
				file={file}
				openWindow={openWindow} />
		</div>
	)
}

export default Windows
