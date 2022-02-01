import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ChartCo2 from "../components/charts/chart-co2";
import ChartLuft from "../components/charts/chart-luftfeuchtigkeit";
import ChartTemp from "../components/charts/chart-temp";

const Dashboard = () => {
    useEffect (() => {
            document.title = 'Dashboard';
        }
    );
    return (
        <div>
            <h1>Dashboard</h1>
            
            <Carousel>
                <CarouselItem>
                    <ChartCo2 />
                    <Carousel.Caption>
                        <h3>CO2</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <ChartTemp />
                    <Carousel.Caption>
                        <h3>Temperatur</h3>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <ChartLuft />
                    <Carousel.Caption>
                        <h3>Luftfeuchtigkeit</h3>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>


            <h3>CO2</h3>
            <ChartCo2 />
            
            <h3>Temperatur</h3>
            <ChartTemp />

            <h3>Luftfeuchtigkeit</h3>
            <ChartLuft />

        </div>
    )
}

export default Dashboard;