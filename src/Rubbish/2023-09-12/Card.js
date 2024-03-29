import { text } from "@fortawesome/fontawesome-svg-core";
import classes from "./Card.module.css";

const Card = (props) => {
    let bgColor;
    let textColor;

    switch (props.color) {
        case "red":
            bgColor = "bg-danger";
            textColor = "text-danger";
            break;
        case "green":
            bgColor = "bg-success";
            textColor = "text-success";
        case "blue":
            bgColor = "bg-info";
            textColor = "text-info";
        case "yellow":
            bgColor = "bg-warning";
            textColor = "text-warning";
        default:
            break;
    }
    return (            
        <div className={classes.card} style={{['border-left']: `.3em solid ${props.color}`}}>
            <h6 className={`${textColor}`}>{ props.title }</h6>
            {/* <span className="">
                <p style={{width: "fit-content"}}><b>{ props.value }</b></p>
                <div class="progress">
                    <div style={{width: "50%"}} class="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </span> */}
            <div class="progress">
                <div className={`progress-bar ${bgColor}`} role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
        </div>
    )
}

export default Card;