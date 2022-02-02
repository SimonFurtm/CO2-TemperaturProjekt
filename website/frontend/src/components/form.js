import React, { useEffect, useState, Component} from "react";


class GrenzwerteForm extends Component{
    constructor(props) {
        super(props);
        this.state = {form:{email: ' ', co2: ' ',luftfeuchtigkeit: ' ', temperatur:' '}};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            form: Object.assign({}, this.state.form, {
                [event.target.email]: event.target.value,
                [event.target.co2]: event.target.value,
                [event.target.luftfeuchtigkeit]: event.target.value,
                [event.target.temperatur]: event.target.value,
            }),
        });

    }
    
    handleSubmit(event) {
        alert('Grenzwerte werden gespeichert. \n\nEmail: ' + this.state.email + '\nCO2: ' + this.state.co2 + '\nLuftfeuchtigkeit: ' + this.state.luftfeuchtigkeit + '\nTemperatur: ' + this.state.temperatur);
        //event.preventDefault();
    }

    render() {
        return (
         <form onSubmit={this.handleSubmit}>
                <div class="formgroup" id="email-form">
                    <label for="email">Your e-mail*</label>
                    <input type="email" name="Email" email={this.state.email} onChange={e => this.handleChange}/>

                    <label for="CO2">CO2</label>
                    <input type="text" name="CO2" co2={this.state.co2} onChange={e => this.handleChange} />

                    <label for="luftfeuchtigkeit">Luftfeuchtigkeit</label>
                    <input type="text" name="Luftfeuchtigkeit" luftfeuchtigkeit={this.state.luftfeuchtigkeit} onChange={e => this.handleChange} />

                    <label for="temperatur">Temperatur</label>
                    <input type="text" name="Temperatur" temperatur={this.state.temperatur} onChange={e => this.handleChange} />
                
                    <input type="submit" value="Submit" />
                </div>
            </form>  
        );
    }
}

export default GrenzwerteForm