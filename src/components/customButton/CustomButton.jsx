
import "./customButton.style.css";

const CustomButton = (props) => {

    return (
        <button onClick={props.onClick}>{props.textData}</button>
    )
}

export default CustomButton;