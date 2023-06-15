import { Component } from "react";
import "../styles/App.css" // import external css

class App extends Component {
    render(){
        return(
            //Inline Styling
            // <div style={{width: "100px", backgroundColor:"red"}}>  

            //external css by using css class
            <div className="box"> 

                {/* importing pre-declared inline syntax */}
                <h1 style={myStyle}>Hello world</h1> 
            </div>
            //<div></div> //Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.
        )
    }
}

//pre-declared inline syntax
const myStyle = {
    color: "blue",
    fontSize: "50px"
}

export default App;