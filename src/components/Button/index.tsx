import "./style.scss"

const Button = (props:any) =>{
    return(
        <button className="button start-button" onClick={props.onClick} >
            <div className="dotted-outline">
                {props.icon !== "" ? <img className="icon" src={props.icon} alt='icon'/>: ''}
                {props?.title}
            </div>
        </button>
    )
}

export default Button