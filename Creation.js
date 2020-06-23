import React, { Component } from 'react'
import './create.css'

class Creation extends Component{
    constructor(){
        super()
        this.state = {
            location:"",
            temp: "",
            weather: "",
            image: "",
        }
        this.finder = this.finder.bind(this)
    }

    componentDidMount(p){
        if(p === undefined){

        }
        else{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+p+'&appid=b6d49e030b041ed841fd0e1523cd575a')
            .then(Response => Response.json())
            .then(info =>{
                if(info.message != "city not found"){
                    this.setState({ location: info.name+", "+info.sys.country, temp: info.main.temp, weather:info.weather[0].description, image: 'http://openweathermap.org/img/wn/'+info.weather[0].icon+'@2x.png' })
                }
            })
        }
    }

    render(){
        return(
        <center>
            <input type="text" onChange={this.finder} id="lol"/>
            <ul>
                <img src={this.state.image} />
                <li>Location: {this.state.location}</li>
                <li>Temperature: {this.state.temp}</li>
                <li>weather Description: {this.state.weather}</li>
                <li>weather Description: {this.state.weather}</li>
            </ul>
        </center>
        )
    }

    finder(event){
        this.componentDidMount(event.target.value)
    }

}

export default Creation