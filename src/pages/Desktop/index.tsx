import { useState } from 'react'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'
import Windows from '../../components/Windows'
import Icons from '../../Layouts/Icons'
import { StartMenuContext } from '../../utilities/contexts'
import './style.scss'
import { IconsArray } from '../../utilities/IconsArray'


const Desktop = ()=>{

    const [ startMenu, setStartMenu ] = useState(false)
    const [ showWindow, toggleWindow ] = useState(false)
    const [ activeWindow, setActiveWindow ] = useState({})
    const [ openWindows, setOpenWindows ] = useState<any>([])
    const closeStart = () =>{
        if(startMenu === true){
            setStartMenu(false)
        }
    }

    const openWindow = (window:any={}) => {
        setActiveWindow(window)
        toggleWindow(true)
        setOpenWindows([...openWindows, window])
    }

    const closeWindow =(id:any)=>{

        const indx = openWindows.findIndex((el:any)=> el.id === id)
        console.log(indx)
        const temp = openWindows.splice(indx, 1)
        setOpenWindows(temp)
        console.log(openWindows)
    }

    return(
        <div className="desktop">
            <StartMenuContext.Provider value={{startMenu, setStartMenu}}>
                <div className="background" onClick={closeStart} ></div>
                {
                    openWindows.map((el:any)=> (
                        <Windows key={el.id} close={()=>closeWindow(el.id)} window={el} />
                    ))
                }
                <Icons openWindow={openWindow} />
                <StartMenu set={startMenu}  />
                <StatusBar openWindows={openWindows} />
            </StartMenuContext.Provider>
        </div>
    )
}

export default Desktop