import { useState } from "react"
import "./style.scss"

const Windows = () =>{

    const defaultStyle={
        left: 100,
        top: 100
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
        <div className="window active" style={style} >
           <div className="title-bar" onMouseDown={(e)=>dragStart(e)} onMouseMove={(e)=>dragging(e)} onMouseUp={(e)=>dragEnd(e)} >
               <p>
                   <img src="https://win98icons.alexmeub.com/icons/png/directory_open_cool-0.png" alt="window" />
                   Window
                </p>
               <button className="button close-button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </button>
           </div>
           <div className="content">
               <p></p>
           </div>
        </div>
    )
}

export default Windows