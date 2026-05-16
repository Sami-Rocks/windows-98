// Modules
import { MouseEvent, MouseEventHandler } from 'react'

type TitleBarType = {
	file: FileType,
	onClose: () => void,
	onDragEnd: MouseEventHandler<HTMLDivElement>,
	onDragMove: MouseEventHandler<HTMLDivElement>,
	onDragStart: MouseEventHandler<HTMLDivElement>,
	onMaximize: () => void,
	onMinimize: () => void
}

// Component: Windows > Title bar
function TitleBar ({ file, onClose, onDragEnd, onDragMove, onDragStart, onMaximize, onMinimize }: TitleBarType) {
	// Functions
	function stopControlDrag (event: MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
	}

	function minimizeWindow (event: MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
		onMinimize()
	}

	function maximizeWindow (event: MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
		onMaximize()
	}

	function closeWindow (event: MouseEvent<HTMLButtonElement>) {
		event.stopPropagation()
		onClose()
	}

	// Render
	return (
		<div
			className="title-bar"
			onDoubleClick={onMaximize}
			onMouseDown={onDragStart}
			onMouseMove={onDragMove}
			onMouseUp={onDragEnd}>
			<p>
				<img
					src={file.image}
					alt="window" />
				{file.name}
			</p>
			<div className="window-controls">
				<button
					className="button control-button"
					onMouseDown={stopControlDrag}
					onClick={minimizeWindow}
					type="button">
					<span className="minimize-icon" />
				</button>
				<button
					className="button control-button"
					onMouseDown={stopControlDrag}
					onClick={maximizeWindow}
					type="button">
					<span className={file.isMaximized ? 'restore-icon' : 'maximize-icon'} />
				</button>
				<button
					className="button control-button close-button"
					onMouseDown={stopControlDrag}
					onClick={closeWindow}
					type="button">
					<span className="close-icon" />
				</button>
			</div>
		</div>
	)
}

// Export
export default TitleBar
