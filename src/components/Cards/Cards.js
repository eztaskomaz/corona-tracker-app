import React from 'react';
import {Card, Grid} from "@material-ui/core";
import styles from './Cards.module.css';
import cx from 'classnames';
import CardDetail from './CardDetail';

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}} ) => {
    if(!confirmed) {
        return 'Loading..';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.infected)}>
                    <CardDetail cardText="Infected"
                                cardValue={confirmed.value}
                                cardDescription="Number of active cases of COVID-19"
                                lastUpdate={lastUpdate}/>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.recovered)}>
                    <CardDetail cardText="Recovered"
                                cardValue={recovered.value}
                                cardDescription="Number of recoveries from COVID-19"
                                lastUpdate={lastUpdate}/>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.deaths)}>
                    <CardDetail cardText="Deaths"
                                cardValue={deaths.value}
                                cardDescription="Number of deaths caused by COVID-19"
                                lastUpdate={lastUpdate}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;