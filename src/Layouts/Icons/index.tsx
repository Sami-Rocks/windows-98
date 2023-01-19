import './style.scss'
import Icon from '../../components/Icon'
import DesktopFiles from '../../utilities/DesktopFiles'

const Icons = ({openWindow}:any) => {
    return(
        <div className="icons">
            <div className="icons">
                {DesktopFiles.map(el => {
                    return <Icon 
                            key={el.id} 
                            file={el} 
                            onClick={()=>openWindow(el)} 
                            /> 
                })} 
            </div>
        </div>
    )
}

export default Icons