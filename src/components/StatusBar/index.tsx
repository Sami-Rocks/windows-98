// Modules
import { useContext } from 'react'

// Components
import Button from '../Button'

// Assets
import StartIcon from './../../assets/images/Windows-Logos-PNG-Image-48558.png'

// Context
import { StartMenuContext, ActiveWindowContext } from '../../utilities/contexts'

// Styles
import './style.scss'

type StatusBarType = {
	onActivate: (file: FileType) => void,
	openWindows: Array<FileType>
}

// Component: Status bar
function StatusBar ({ onActivate, openWindows }: StatusBarType) {
	// Context
	const { startMenu, setStartMenu } = useContext(StartMenuContext)
	const { activeWindow } = useContext(ActiveWindowContext)

	// Functions
	function toggleStartMenu () {
		if (startMenu === false) {
			setStartMenu(true)
		} else {
			setStartMenu(false)
		}
	}

	// Render
	return (
		<div className="status-bar">
			<div className="start">
				<Button
					title="Start"
					icon={StartIcon}
					onClick={toggleStartMenu} />
			</div>
			<div className="separator" />
			<div className="buttons">
				{
					openWindows.map(el => (
						<Button
							active={activeWindow?.id === el.id}
							key={el.id}
							file={el}
							onClick={() => onActivate(el)}
							type="status" />
					))
				}
			</div>
		</div>
	)
}

export default StatusBar
