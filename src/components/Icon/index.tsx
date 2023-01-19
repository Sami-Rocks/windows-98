import { MouseEventHandler } from "react"
import "./style.scss"

type IconType = {
    file:FileType,
    onClick:MouseEventHandler<HTMLButtonElement>
}

const Icon = ({file, onClick}:IconType) =>{

    return(
        <button className="icon icon-button" onDoubleClick={onClick} >
            <img src={file.image} alt={file.name} className="image" />
            <p>
                <span className="dotted-outline" >
                    {file.name}
                </span>
            </p>
        </button>
    )
}

export default Icon