import React from "react";

import Clock from "./Clock/Clock";
import Counter from "./Counter/Counter";
import ClassTopics from "./ClassTopics/ClassTopics";
import Comment from "./Comment/Comment";
import Calculator from "./Calculator/Calculator";

import './style.css';

const comment = {
    date: new Date(),
    text: 'Added to Memories!',
    author: {
        name: 'Rory Bobich',
        avatarUrl: 'https://picsum.photos/id/1003/100/100'
    }
  }
  const comment2 = {
    date: new Date(),
    text: 'I have already looked under the rug',
    author: {
        name: 'Captain Rubbish',
        avatarUrl: 'https://picsum.photos/id/123/100/100'
    }
  }
  const comment3 = {
    date: new Date(),
    text: 'Sometimes, I feel like a giraffe',
    author: {
        name: 'Cherry Wine',
        avatarUrl: 'https://picsum.photos/id/30/100/100'
    }
  }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClassTopicsVisible: false,
      isClockVisible: false,
      isCounterVisible: false,
      isCommentVisible: false,
      isCalculatorVisible: false
    }
  }
  render() {
    return (
      <div>
        <nav className="main-nav-menu">
          <button className="nav-button"
            onClick={() => {
              this.setState({
                isClassTopicsVisible: true,
                isClockVisible: false,
                isCounterVisible: false,
                isCommentVisible: false,
                isCalculatorVisible: false
              });
            }}
          >
            Show Class Topics
          </button>

          <button className="nav-button"
            onClick={() => {
              this.setState({
                isClassTopicsVisible: false,
                isClockVisible: true,
                isCounterVisible: false,
                isCommentVisible: false,
                isCalculatorVisible: false
              });
            }}
          >
            Show Clock
          </button>

          <button className="nav-button"
            onClick={() => {
              this.setState({
                isClassTopicsVisible: false,
                isClockVisible: false,
                isCounterVisible: true,
                isCommentVisible: false,
                isCalculatorVisible: false
              });
            }}
          >
            Show Counter
          </button>

          <button className="nav-button"
            onClick={() => {
              this.setState({
                isClassTopicsVisible: false,
                isClockVisible: false,
                isCounterVisible: false,
                isCommentVisible: true,
                isCalculatorVisible: false
              });
            }}
          >
            Show Comments
          </button>

          <button className="nav-button"
            onClick={() => {
              this.setState({
                isClassTopicsVisible: false,
                isClockVisible: false,
                isCounterVisible: false,
                isCommentVisible: false,
                isCalculatorVisible: true
              });
            }}
          >
            Show Calculator
          </button>
        </nav>

        <main className="displayed-component">
          {this.state.isClassTopicsVisible && <ClassTopics />}
          {this.state.isClockVisible && <Clock />}
          {this.state.isCounterVisible && <Counter />}
          {this.state.isCommentVisible && 
            <section className="component">
              <header>
                <h1>Comment components</h1>
              </header>
              <section className="comments">
                <Comment 
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} 
                />
                <Comment 
                    date={comment2.date}
                    text={comment2.text}
                    author={comment2.author}
                />
                <Comment 
                    date={comment3.date}
                    text={comment3.text}
                    author={comment3.author}
                />
              </section>  
            </section>
          }
          {this.state.isCalculatorVisible && <Calculator />}
        </main>
        
      </div>
      
    );
  }

  
}

export default App;
