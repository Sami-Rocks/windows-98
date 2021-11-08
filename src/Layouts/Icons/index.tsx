import './style.scss'
import Icon from '../../components/Icon'
import { IconsArray } from '../../utilities/IconsArray'

const Icons = (props:any) => {
    return(
        <div className="icons">
            <div className="icons">
                {IconsArray.map(icon => {
                    return <Icon key={icon.id} icon={icon} onClick={()=>props.openWindow(icon)} /> 
                })} 
            </div>
        </div>
    )
}

export default Icons