import { useState } from 'react'
import StartMenu from '../../components/StartMenu'
import StatusBar from '../../components/StatusBar'
import Windows from '../../components/Windows'
import Icons from '../../Layouts/Icons'
import { StartMenuContext, ActiveWindowContext } from '../../utilities/contexts'
import './style.scss'

const Desktop = ()=>{

    const [ startMenu, setStartMenu ] = useState(false)
    const [ activeWindow, setActiveWindow ] = useState<any>()
    const [ openWindows, setOpenWindows ] = useState<Array<FileType>>([])

    const closeStart = () =>{
        if(startMenu === true){
            setStartMenu(false)
        }
    }

    const openWindow = (file:FileType) => {
        setActiveWindow(file)
        setOpenWindows([...openWindows, file])
    }

    const closeWindow =(id:any)=>{
        const temp =[...openWindows]
        const indx = temp.findIndex((el:any)=> el.id === id)
        temp.splice((indx), 1)
        setOpenWindows(temp)
    }

    return(
        <div className="desktop">
            <StartMenuContext.Provider value={{startMenu, setStartMenu}}>
                <ActiveWindowContext.Provider value={{activeWindow, setActiveWindow}} >
                    <div className="background" onClick={closeStart} ></div>
                    {
                        openWindows.map((el:any)=> (
                            <Windows key={el.id} close={()=>closeWindow(el.id)} file={el} />
                        ))
                    }
                    <Icons openWindow={openWindow} />
                    <StartMenu set={startMenu} />
                    <StatusBar openWindows={openWindows} />
                </ActiveWindowContext.Provider>
            </StartMenuContext.Provider>
        </div>
    )
}

export default Desktop