import Button from '../Button'
import './style.scss'
import StartIcon from './../../assets/images/Windows-Logos-PNG-Image-48558.png'
import { useContext } from 'react'
import { StartMenuContext, ActiveWindowContext } from '../../utilities/contexts'

type StatusBarType = {
	onActivate: (file: FileType) => void,
	openWindows: Array<FileType>
}

const StatusBar = ({ onActivate, openWindows }: StatusBarType) => {

	const { startMenu, setStartMenu } = useContext(StartMenuContext)
	const { activeWindow } = useContext(ActiveWindowContext)

	const toggleStartMenu = () => {
		if (startMenu === false) {
			setStartMenu(true)
		} else {
			setStartMenu(false)
		}
	}

	return (
		<div className="status-bar">
			<div className="start">
				<Button title={'Start'} icon={StartIcon} onClick={toggleStartMenu}  />
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
