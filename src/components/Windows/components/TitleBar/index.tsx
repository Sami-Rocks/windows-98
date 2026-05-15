// Modules
import { MouseEventHandler } from 'react'

type TitleBarType = {
	file: FileType,
	onClose: () => void,
	onDragEnd: MouseEventHandler<HTMLDivElement>,
	onDragMove: MouseEventHandler<HTMLDivElement>,
	onDragStart: MouseEventHandler<HTMLDivElement>
}

// Component: Windows > Title bar
function TitleBar ({ file, onClose, onDragEnd, onDragMove, onDragStart }: TitleBarType) {
	// Render
	return (
		<div
			className="title-bar"
			onMouseDown={onDragStart}
			onMouseMove={onDragMove}
			onMouseUp={onDragEnd}>
			<p>
				<img
					src={file.image}
					alt="window" />
				{file.name}
			</p>
			<button
				className="button close-button"
				onClick={onClose}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-x"
					viewBox="0 0 16 16">
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
				</svg>
			</button>
		</div>
	)
}

// Export
export default TitleBar
