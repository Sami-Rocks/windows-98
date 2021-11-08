import "./style.scss"

const Icon = (props:any) =>{

    const icon = props?.icon

    return(
        <button className="icon icon-button" onDoubleClick={props.onClick} >
            <img src={icon.image} alt={icon.name} className="image" />
            <p>
                <span className="dotted-outline" >
                    {icon.name}
                </span>
            </p>
        </button>
    )
}

export default Icon