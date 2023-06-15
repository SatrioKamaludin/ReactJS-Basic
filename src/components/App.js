import { Component } from "react";
import List from "./List";

class App extends Component {
    state = {
        book: "Chicken Soup for the soul",
        author: "Bill Wilson"
    }
    render(){
        return(
            <div>
                <List book={this.state.book} author={this.state.author}/>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;