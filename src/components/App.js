import { Component } from "react";

class App extends Component {
    state = {
        name: "kodeakademia",
    }

    render(){
        return(
            <div>
                {/* in class component, we can use state and "this", cannot be done in function component*/}
                <h1>{this.state.name}</h1> 
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

// this is a function component, there is no way to use state and "this", unless you're going to use hooks (react 16+)
// const App = () => {
//     return(
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

export default App;