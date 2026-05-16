// Modules
import { CSSProperties, MouseEvent as ReactMouseEvent, useContext, useEffect, useState } from 'react'

// Components
import FileBar from './components/FileBar'
import TitleBar from './components/TitleBar'
import WindowContent from './components/WindowContent'

// Context
import { ActiveWindowContext } from '../../utilities/contexts'

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

type WindowPosition = CSSProperties & {
	left: number,
	top: number
}

type DragDifference = {
	x: number,
	y: number
}

// Component: Windows
function Windows ({ close, file, onActivate, onMaximize, onMinimize, openWindow }: WindowType) {
	// Context
	const { activeWindow } = useContext(ActiveWindowContext)

	// State
	const [dragDifference, setDragDifference] = useState<DragDifference>({
		x: 0,
		y: 0
	})
	const [isDragging, setIsDragging] = useState(false)
	const [style, setStyle] = useState<WindowPosition>(() => ({
		left: 20 + Math.floor(Math.random() * 500),
		top: 20 + Math.floor(Math.random() * 400)
	}))

	// Data
	const isActive = activeWindow?.id === file.id
	const isExplorerWindow = ['about', 'projects', 'experiments'].includes(file.type)
	const isClassicWindow = ['about', 'projects', 'experiments', 'contact', 'links'].includes(file.type)
	const isNotepadWindow = file.type === 'resume'

	// Functions
	function dragStart (event: ReactMouseEvent<HTMLDivElement>) {
		if (file.isMaximized) return

		const box = event.currentTarget.getBoundingClientRect()

		event.preventDefault()
		setDragDifference({
			x: event.clientX - box.left,
			y: event.clientY - box.top
		})
		setIsDragging(true)
	}

	function dragEnd () {
		setIsDragging(false)
	}

	// Effects
	useEffect(() => {
		if (!isDragging) return

		function dragWindow (event: MouseEvent) {
			setStyle({
				left: event.clientX - dragDifference.x,
				top: event.clientY - dragDifference.y
			})
		}

		document.addEventListener('mousemove', dragWindow)
		document.addEventListener('mouseup', dragEnd)

		return () => {
			document.removeEventListener('mousemove', dragWindow)
			document.removeEventListener('mouseup', dragEnd)
		}
	}, [dragDifference, isDragging])

	function stopDrag () {
		dragEnd()
	}

	function noop () {
		return undefined
	}

	if (file.isMinimized) return null

	// Render
	return (
		<div
			className={`window ${isActive ? 'active' : 'not-active'} ${isClassicWindow ? 'classic-window' : ''} ${isExplorerWindow ? 'explorer-window' : ''} ${isNotepadWindow ? 'notepad-window' : ''} ${file.isMaximized ? 'maximized' : ''}`}
			onMouseDown={() => onActivate(file)}
			style={style}>
			<TitleBar
				file={file}
				onClose={close}
				onDragEnd={stopDrag}
				onDragMove={noop}
				onDragStart={dragStart}
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
