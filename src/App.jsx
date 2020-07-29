import React, { useState } from "react";

import Clock from "./clock/Clock";
import Counter from "./counter/Counter";
import ClassTopics from "./ClassTopics/ClassTopics";
import Comment from "./comment/Comment";
import Calculator from "./Calculator/Calculator";

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
        name: 'Lisa Rubbish',
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


const App = () => {
  const [isClassTopicsVisible, setIsClassTopicsVisible] = useState(false);
  const [isClockVisible, setIsClockVisible] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsClassTopicsVisible(true);
          setIsClockVisible(false);
          setIsCounterVisible(false);
          setIsCommentVisible(false);
          setIsCalculatorVisible(false);
        }}
      >
        Show Class Topics
      </button>
      <button
        onClick={() => {
          setIsClassTopicsVisible(false);
          setIsClockVisible(true);
          setIsCounterVisible(false);
          setIsCommentVisible(false);
          setIsCalculatorVisible(false);
        }}
      >
        Show Clock
      </button>
      <button
        onClick={() => {
          setIsClassTopicsVisible(false);
          setIsClockVisible(false);
          setIsCounterVisible(true);
          setIsCommentVisible(false);
          setIsCalculatorVisible(false);
        }}
      >
        Show Counter
      </button>
      <button
        onClick={() => {
          setIsClassTopicsVisible(false);
          setIsClockVisible(false);
          setIsCounterVisible(false);
          setIsCommentVisible(true);
          setIsCalculatorVisible(false);
        }}
      >
        Show Comment
      </button>
      <button
        onClick={() => {
            setIsClassTopicsVisible(false);
            setIsClockVisible(false);
            setIsCounterVisible(false);
            setIsCommentVisible(false);
            setIsCalculatorVisible(true);
        }}
      >
        Show Calculator
      </button>
      {isClassTopicsVisible && <ClassTopics />}
      {isClockVisible && <Clock />}
      {isCounterVisible && <Counter />}
      {isCommentVisible && 
        <div>
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
        </div>
      }
      {isCalculatorVisible && <Calculator />}
    </div>
  );
};

export default App;
