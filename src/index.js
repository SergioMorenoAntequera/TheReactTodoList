import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/index';
import reportWebVitals from './reportWebVitals';

// function App({greeting, name}) {
//   return(<>
//     <p> El APP </p>
//     <p>{greeting}, {name}</p>
//   </>)
// }

// function withGreetings(WrappedComponent) {
//   return function WrappedComponentWithGreetings(greeting){
//     return function TheRealOne() {
//       return (<React.Fragment>
//         <WrappedComponent greeting={greeting}/>
//       </React.Fragment>)
//     } 
//   }
// }
// const AppWithGreeting = withGreetings(App)("heyy")

ReactDOM.render(
  <React.StrictMode>    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
