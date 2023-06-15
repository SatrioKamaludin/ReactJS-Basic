import { Component } from "react";

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <div>div 2</div>
                <p>test</p>
                <div>div 3</div>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;