import { useContext, useState } from "react"
import "./style.scss"
import { ActiveWindowContext } from "../../utilities/contexts"
import { fileBar } from "../../utilities/constants"
import Button from "../Button"

type WindowType = {
    file: FileType,
    close:Function
}

const Windows = ({file, close}:WindowType) =>{

    const { activeWindow, setActiveWindow} = useContext(ActiveWindowContext)

    const defaultStyle={
        left: 20 + Math.floor(Math.random() * 500),
        top: 20+ Math.floor(Math.random() * 400)
    }

    const [diffX, setDiffX] = useState(0)
    const [diffY, setDiffY] = useState(0)
    const [_dragging, setDragging] = useState(false)
    const [style, setStyle] = useState(defaultStyle)

    const dragStart = (e:any) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
        setDragging(true)
    }
    const dragging = (e:any) => {
        if(_dragging){
            let left = e.screenX - diffX
            let top = e.screenY - diffY

            setStyle({
                left: left,
                top: top
            })
        }
    }
    const dragEnd = (e:any) => {
        setDragging(false)
    }


    return(
        <div className={`window ${activeWindow.name === file.name ? 'active': 'not-active'}`} onMouseDown={()=>setActiveWindow(file)} style={style} >
           <div className="title-bar" onMouseDown={(e)=>dragStart(e)} onMouseMove={(e)=>dragging(e)} onMouseUp={(e)=>dragEnd(e)} >
               <p>
                   <img src={file.image} alt="window" />
                   {file.name}
                </p>
               <button className="button close-button" onClick={()=>close(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </button>
           </div>

           <div className="file-bar bar" >
                {
                    fileBar.map((el:any)=>(
                        <button className="bar-item" >
                            {el.title}
                        </button>
                    ))
                }
           </div>

           <div className="content">

           </div>
        </div>
    )
}

export default Windows