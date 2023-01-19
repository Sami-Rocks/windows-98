import { MouseEventHandler } from "react"
import "./style.scss"

type ButtonType = {
    file?:FileType,
    type?:'status',
    onClick:MouseEventHandler<HTMLButtonElement>,
    title?:string,
    icon?:string,
    active?:boolean
}

const Button = ({file, title, type, onClick, icon, active}:ButtonType) =>{
    return(
        <button className={`button start-button ${type} ${active && 'active'} `} onClick={onClick} >
            <div className="dotted-outline">
                {icon ? <img className="icon" src={icon} alt='icon'/>: ''}
                {file ? <img className="icon" src={file.image} alt='icon'/>: ''}
                {title || file?.name}
            </div>
        </button>
    )
}

export default Button