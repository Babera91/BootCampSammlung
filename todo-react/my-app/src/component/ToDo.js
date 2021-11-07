const ToDo = (props) => {
    return ( 
        <li>
            <img src={props.mark} alt="" />
            <p>{props.text}</p>
            <img src={props.icon} alt="" />
        </li>
     );
}
 
export default ToDo;