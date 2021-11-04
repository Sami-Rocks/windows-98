import "./style.scss"

const menus = [
    {
        id:1,
        icon: "https://win98icons.alexmeub.com/icons/png/application_hourglass_small-2.png",
        title: "Run"
    },
    {
        id:2,
        icon: "https://win98icons.alexmeub.com/icons/png/shut_down_cool-5.png",
        title: "Shut Down"
    }
]



const MenuItem = (props:any) => {
    return(
        <div className="menu-item">
            <div className="item">
                {props.icon !== "" ?<img className="menu-image" src={props.icon} alt="icon" />: <div className="menu-image">s</div>}
                <p>{props.title}</p>
            </div>
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
                {menus.map(item =>{
                    return <MenuItem key={item.id} icon={item.icon} title={item.title} />
                })}
            </div>
        </div>
    )
}

export default StartMenu