import { Component } from "react";
import Header from "./Header";
import List from "./List";

class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <List/>
                <h1>Hello World</h1>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;