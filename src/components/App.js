import { Component } from "react";
import List from "./List";

class App extends Component {
    state = {
        book: "Chicken Soup for the soul"
    }
    render(){
        return(
            <div>
                <List name="kodeakademia" test="test" myBook={this.state.book}>
                    <h4>This is title</h4>
                    <p>the paragraph</p>
                </List>
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;