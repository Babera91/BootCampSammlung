import { render } from "@testing-library/react"
import React from "react"
const arry =[
    "Markus",
    "Lisa",
    "Max",
];

export default class Beer extends React.Component {
    state ={
        beer : null,
        name : null,
        brewed: null
    }


async componentDidMount() {
    const url = "https://ih-beers-api2.herokuapp.com/beers";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({beer: data[0].image_url})
    this.setState({name: data[0].name})
    this.setState({brewed: data[0].first_brewed})

}

render () {
    console.log(this.state.beer)
    console.log(this.state.name)
    return(
        <div>
            {/* Local Array Loop*/}
            {arry.map((arrys) =>{
                return <h1>{arrys}</h1>
            })}

            {/* Api Array loop*/}
            {Object.keys(this.state).map(key => 
            <div>{this.state[key]}</div>,
            
            )};   
            
        </div>
    )
}
};