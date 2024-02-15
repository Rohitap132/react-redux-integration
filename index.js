import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import img1 from "./logo192.png"

//specifying expression using JSX
//using JSX
//const element = <h1 className="h1" >Hello world!</h1>
//without jsx

// const ele = [React.createElement('h1',{className:"h1" ,id:"hel"},'good morning'),React.createElement('h2',{},'have a nice day')]
// //const ele1 = React.createElement('h2',{},'have a nice day')
// const ele2 = React.createElement('p',{},'good bye!')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>
  //   {ele}
  //   {/* {ele1} */}
  //   {ele2}
  // </div>
 
  
  //<React.StrictMode>
    <App/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
