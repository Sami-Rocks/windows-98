import Button from "../Button"
import "./style.scss";
import StartIcon from "./../../assets/images/Windows-Logos-PNG-Image-48558.png"
import { useContext } from "react";
import { StartMenuContext, ActiveWindowContext } from "../../utilities/contexts";

const StatusBar = ({openWindows}:any) =>{

    const { startMenu, setStartMenu } = useContext(StartMenuContext)
    const { activeWindow, setActiveWindow} = useContext(ActiveWindowContext)

    const toggleStartMenu =()=>{
        if(startMenu === false){
            setStartMenu(true)
        }else{
            setStartMenu(false)
        }
    }

    return(
        <div className="status-bar">
            <div className="start">
                <Button title={"Start"} icon={StartIcon} onClick={toggleStartMenu}  />
            </div>
            <div className="separator"></div>
            <div className="buttons">
                {
                    openWindows.map((el:any)=>(
                        <Button active={activeWindow.name === el.name ? true : false} key={el.id} file={el} onClick={()=>setActiveWindow(el)} type="status" /> 
                    ))
                }
            </div>
        </div>
    )
}

export default StatusBar