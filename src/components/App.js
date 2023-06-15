import { Component } from "react";

class App extends Component {
    // state = {
    //     book: { //If the data is an object
    //         name: "Whose son is this?",
    //         author: "Bill Wilson"
    //     }
    // }
    state = {
        books: ["Whose son is this?", "Chicken Soup for the Soul"] //If the data is a list/array
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                {/* If the data is an object */}
                {/* <h3>Title: {this.state.book.name}</h3>
                <p>Author: {this.state.book.author}</p> */}

                {/* If the data is a list/array */}
                {this.state.books.map(item => 
                    <div>
                        <h3>{item}</h3>
                    </div>
                )}
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

export default App;