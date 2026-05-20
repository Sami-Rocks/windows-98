// Components
import Windows from '../../../../components/Windows'

type DesktopWindowsType = {
	activateWindow: (file: FileType) => void,
	closeWindow: (id: number) => void,
	minimizeWindow: (id: number) => void,
	openWindow: (file: FileType) => void,
	openWindows: Array<FileType>,
	toggleMaximizeWindow: (id: number) => void
}

// Component: Desktop windows
function DesktopWindows ({
	activateWindow,
	closeWindow,
	minimizeWindow,
	openWindow,
	openWindows,
	toggleMaximizeWindow
}: DesktopWindowsType) {
	// Render
	return (
		<>
			{
				openWindows.map(file => (
					<Windows
						key={file.id}
						close={() => closeWindow(file.id)}
						file={file}
						onActivate={activateWindow}
						onMaximize={() => toggleMaximizeWindow(file.id)}
						onMinimize={() => minimizeWindow(file.id)}
						openWindow={openWindow} />
				))
			}
		</>
	)
}

export default DesktopWindows
