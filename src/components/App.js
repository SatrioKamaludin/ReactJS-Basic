import { Component } from "react";

class App extends Component {
    state = {
        name: "kodeakademia"
    }
    change = () => {
        this.setState({
            name: "kode"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change}>Click this to change kodeakademia to kode</button>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;