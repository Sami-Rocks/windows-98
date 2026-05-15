// Utilities
import { fileBar } from '../../../../utilities/constants'

// Component: Windows > File bar
function FileBar () {
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
