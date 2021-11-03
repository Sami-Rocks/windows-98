import Button from "../Button"
import "./style.scss";
import StartIcon from "./../../assets/images/Windows-Logos-PNG-Image-48558.png"
import { useContext } from "react";
import { StartMenuContext } from "../../utilities/contexts";

const StatusBar = () =>{

    const { startMenu, setStartMenu } = useContext(StartMenuContext)

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
        </div>
    )
}

export default StatusBar