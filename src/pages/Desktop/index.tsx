import { useState } from 'react'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'
import Windows from '../../components/Windows'
import Icons from '../../Layouts/Icons'
import { StartMenuContext } from '../../utilities/contexts'
import './style.scss'


const Desktop = ()=>{

    const [ startMenu, setStartMenu ] = useState(false)
    const [ showWindow, toggleWindow ] = useState(false)
    const [ activeWindow, setActiveWindow ] = useState({})
    const closeStart = () =>{
        if(startMenu === true){
            setStartMenu(false)
        }
    }

    const openWindow = (window:any={}) => {
        setActiveWindow(window)
        toggleWindow(true)
    }

    return(
        <div className="desktop">
            <StartMenuContext.Provider value={{startMenu, setStartMenu}}>
                <div className="background" onClick={closeStart} ></div>
                {showWindow && <Windows close={toggleWindow} window={activeWindow} />}
                <Icons openWindow={openWindow} />
                <StartMenu set={startMenu}  />
                <StatusBar />
            </StartMenuContext.Provider>
        </div>
    )
}

export default Desktop