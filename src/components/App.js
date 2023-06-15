import { Component } from "react";

class App extends Component {
    change = () => {
        console.log("ok")
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <button onClick={this.change}>Click this and see console log</button>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;