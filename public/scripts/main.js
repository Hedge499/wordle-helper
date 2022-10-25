import { Component } from 'react';
import * as ReactDOM from "react-dom";

class App extends Component{
    render() {
        return(
            <h2>app start</h2>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));