import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ChartCo2 from "../components/charts/chart-co2";
import ChartLuft from "../components/charts/chart-luftfeuchtigkeit";
import ChartTemp from "../components/charts/chart-temp";
import './dashboard.css';

import ChartGoveeLuftfeuchtigkeit from "../components/charts/chart-govee-luft";
import ChartGoveeTemp from "../components/charts/chart-govee-temp";
const Dashboard = () => {
    useEffect (() => {
            document.title = 'Dashboard';
        }
    );
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Raspberry Daten:</h2>
            <Carousel variant="dark">
                <CarouselItem className="chart">
                    <ChartCo2 />
                    <Carousel.Caption>
                        <h3>CO2</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="chart">
                    <ChartTemp />
                    <Carousel.Caption>
                        <h3>Temperatur</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="chart">
                    <ChartLuft />
                    <Carousel.Caption>
                        <h3>Luftfeuchtigkeit</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
            
            <h2>Govee Daten:</h2>
            <Carousel variant="dark">
                <CarouselItem className="chart">
                    <ChartGoveeLuftfeuchtigkeit />
                    <Carousel.Caption>
                        <h3>Luftfeuchtigkeit</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="chart">
                    <ChartGoveeTemp />
                    <Carousel.Caption>
                        <h3>Temperatur</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Dashboard;