import { Component } from "react";

class App extends Component {
    state = {
        name: "kodeakademia",
        text: ""
    }

    click = () => {
        this.setState({
            name: this.state.text
        })
        this.setState({
            text: ""
        })
    }
    
    change = e => {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.text} onChange={this.change}/>
                <button onClick={this.click}>Click</button>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;