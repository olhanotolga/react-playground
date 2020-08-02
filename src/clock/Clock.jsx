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
            <section className="component">
                <header>
                    <h1>Clock Component</h1>
                </header>
                <p>the time is ticking:</p>
                <p className="timer">{this.state.date.toLocaleTimeString()}</p>
                <button className="refresh-clock-btn" onClick={this.refreshHandler}>Refresh</button>
            </section>
        );
    }
    
}
  
export default Clock;