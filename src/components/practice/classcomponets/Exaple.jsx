import { Component } from "react"

class Example extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("This method will call after my components render")
    }

    incrementCount(){
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                {/* <button onClick={this.incrementCount.bind(this)}>Increment</button> */}
                <button onClick={()=>this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Example;