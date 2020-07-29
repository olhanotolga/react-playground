import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
        console.log("constructor was called");
    }

    componentDidMount() {
        console.log("component did mount");
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.timer);
    }

    tick() {
        console.log("tick");
        this.setState({
            date: new Date()
        });
    }

    refreshHandler = () => {
        this.setState({
            date: new Date()
        });
        console.log("refreshHandler was called");
    }
    
    render() {
        console.log("render was called");
        return (
            <div>
                <h1>The time is ticking</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.refreshHandler}>Refresh</button>
            </div>
        );
    }
    
}
  
export default Clock;