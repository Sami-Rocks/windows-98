import "./style.scss"

const menus = [
    {
        icon: "",
        title: "Shut Down"
    }
]



const MenuItem = (props:any) => {
    return(
        <div className="menu-item">
            <div className="item">
                <img src={props.icon} alt="icon" />
            </div>
            <p>{props.item}</p>
        </div>
    )
}


const StartMenu = (props:any) =>{
    return(
        <div className={`start-menu ${props.set ? 'show': 'hide'}`}>
            <div className="windows-98">
                <h1>Windows <span className="light" >98</span> </h1>
            </div>
            <div className="menu">
            
            </div>
        </div>
    )
}

export default StartMenu