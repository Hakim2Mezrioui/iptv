import React from "react";
import Card from "../helper/Card";

const Statistique = () => {
    return(
        <React.Fragment>
            <Card title="Message" value="50%" color="red" />
            <Card title="Message" value="50%" color="yellow" />
            <Card title="Message" value="50%" color="green" />
        </React.Fragment>
    )
}

export default Statistique;