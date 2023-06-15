import { Component } from "react";
import Button from "./Button";

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <Button color="biru"/>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;