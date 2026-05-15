// Modules
import { CSSProperties, MouseEvent as ReactMouseEvent, useContext, useState } from 'react'

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
	file: FileType
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
function Windows ({ close, file }: WindowType) {
	// Context
	const { activeWindow, setActiveWindow } = useContext(ActiveWindowContext)

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

	// Functions
	function dragStart (event: ReactMouseEvent<HTMLDivElement>) {
		const box = event.currentTarget.getBoundingClientRect()

		setDragDifference({
			x: event.screenX - box.left,
			y: event.screenY - box.top
		})
		setIsDragging(true)
	}

	function dragWindow (event: ReactMouseEvent<HTMLDivElement>) {
		if (!isDragging) return

		setStyle({
			left: event.screenX - dragDifference.x,
			top: event.screenY - dragDifference.y
		})
	}

	function dragEnd () {
		setIsDragging(false)
	}

	// Render
	return (
		<div
			className={`window ${isActive ? 'active' : 'not-active'}`}
			onMouseDown={() => setActiveWindow(file)}
			style={style}>
			<TitleBar
				file={file}
				onClose={close}
				onDragEnd={dragEnd}
				onDragMove={dragWindow}
				onDragStart={dragStart} />
			<FileBar />
			<WindowContent />
		</div>
	)
}

export default Windows
