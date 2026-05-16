// Utilities
import { getFileBar } from '../../../../utilities/constants'

type FileBarType = {
	file: FileType
}

// Component: Windows > File bar
function FileBar ({ file }: FileBarType) {
	// Data
	const fileBar = getFileBar(file.type)

	// Render
	return (
		<div className="file-bar bar">
			{fileBar.map((item) => (
				<button
					key={item.title}
					className="bar-item">
					{item.title}
				</button>
			))}
		</div>
	)
}

// Export
export default FileBar
