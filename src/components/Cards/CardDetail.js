import {CardContent, Typography} from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";

const CardDetail = ({cardText, cardValue, cardDescription, lastUpdate}) => {
    return (
        <CardContent>
            <Typography color="text" gutterBottom>{cardText}</Typography>
            <Typography variant="h5">
                <CountUp
                    start={0}
                    end={cardValue}
                    duration={2.5}
                    separator=","
                />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">{cardDescription}</Typography>
        </CardContent>
    );
}

export default CardDetail;