import React from "react"

// function Greet() {
//     return <h1>Hello World</h1>
// }

//const Greet = () => <h1>Hello world</h1>
const Greet = props => {
    console.log(props)
    return ( <div><h1>Hello {props.name} a.k.a {props.heroName}</h1></div>)
}

export default Greet
