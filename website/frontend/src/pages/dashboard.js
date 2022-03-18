import React, { useEffect, Component, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ChartCo2 from "../components/charts/chart-co2";
import ChartLuft from "../components/charts/chart-luftfeuchtigkeit";
import ChartTemp from "../components/charts/chart-temp";
import './dashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ChartGoveeLuftfeuchtigkeit from "../components/charts/chart-govee-luft";
import ChartGoveeTemp from "../components/charts/chart-govee-temp";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            IDs: [],
        };
    }

    componentDidMount() {
        fetch('/rpis/get')
            .then(res => res.json())
            .then(IDs => this.setState({ IDs }, () => console.log('Data fetched...', IDs)));
    }

    render() {
        var id;
        return (
            <div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary">
                            SensorID Filtern
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.IDs.map(IDs =>
                                <Dropdown.Item onSelect={id = <th key={IDs.SensorID}>{IDs.SensorID} </th>}>
                                    <th key={IDs.SensorID}>{IDs.SensorID} </th>
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <br></br>
                </div>
                <script>
                    console.log(id);
                </script>
                


                <h2>Raspberry Daten:</h2>
                <Carousel variant="dark">
                    <CarouselItem className="chart">
                        <ChartCo2 dataFromParent={id} />
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


            </div>
        )
    }
}

/*
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
*/
export default Dashboard;