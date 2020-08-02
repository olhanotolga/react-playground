import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from "./App";

// import Clock from "./Clock/Clock";
// import Comment from "./Comment/Comment";
// import Comment from "./Comment/Comment";

// import tick from "./SimpleClock/tick";

// const comment = {
//   date: new Date(),
//   text: 'Added to Memories!',
//   author: {
//       name: 'Rory Bobich',
//       avatarUrl: 'https://picsum.photos/id/1003/100/100'
//   }
// }
// const comment2 = {
//   date: new Date(),
//   text: 'I have already looked under the rug',
//   author: {
//       name: 'Lisa Rubbish',
//       avatarUrl: 'https://picsum.photos/id/123/100/100'
//   }
// }
// const comment3 = {
//   date: new Date(),
//   text: 'Sometimes, I feel like a giraffe',
//   author: {
//       name: 'Cherry Wine',
//       avatarUrl: 'https://picsum.photos/id/30/100/100'
//   }
// }

ReactDOM.render(
    <App />,
    
      // <Comment 
      //     date={comment.date}
      //     text={comment.text}
      //     author={comment.author}
      // />
      // <Comment 
      //     date={comment2.date}
      //     text={comment2.text}
      //     author={comment2.author}
      // />
      // <Comment 
      //     date={comment3.date}
      //     text={comment3.text}
      //     author={comment3.author}
      // />
    
    document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>,
//     document.getElementById('root')
// );

// function tick() {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock date={new Date()} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
