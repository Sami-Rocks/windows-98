import { useState } from 'react'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'
import { StartMenuContext } from '../../utilities/contexts'
import './style.scss'

const Desktop = ()=>{

    const [ startMenu, setStartMenu ] = useState(false)

    const closeStart = () =>{
        if(startMenu === true){
            setStartMenu(false)
        }
    }

    return(
        <div className="desktop">
            <StartMenuContext.Provider value={{startMenu, setStartMenu}}>
                <div className="background" onClick={closeStart} ></div>
                <StartMenu set={startMenu}  />
                <StatusBar />
            </StartMenuContext.Provider>
        </div>
    )
}

export default Desktop