import "./style.scss"

const menus:Array<FileType> = [
    {
        id:1,
        image: "https://win98icons.alexmeub.com/icons/png/application_hourglass_small-2.png",
        name: "Run"
    },
    {
        id:2,
        image: "https://win98icons.alexmeub.com/icons/png/shut_down_cool-5.png",
        name: "Shut Down"
    }
]



const MenuItem = ({file}:any) => {
    return(
        <div className="menu-item">
            <div className="item">
                {file.image !== "" ?<img className="menu-image" src={file.image} alt="icon" />: <div className="menu-image">s</div>}
                <p>{file.name}</p>
            </div>
        </div>
    )
}


const StartMenu = ({set}:any) =>{
    return(
        <div className={`start-menu ${set ? 'show': 'hide'}`}>
            <div className="windows-98">
                <h1>Windows <span className="light" >98</span> </h1>
            </div>
            <div className="menu">
                {menus.map(el =>{
                    return <MenuItem key={el.id} file={el} />
                })}
            </div>
        </div>
    )
}

export default StartMenu