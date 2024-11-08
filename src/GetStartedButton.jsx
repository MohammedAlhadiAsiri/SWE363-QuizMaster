import "./getStartedButton.css";

function GetStartedButton({onClick}){
    return(
        <button onClick={onClick} className="getStartedButton">Get Started</button>
    );

}

export default GetStartedButton