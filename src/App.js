import React, { useState, useEffect, useRef } from "react";
import MyComponent from "./Question1";
import TodoList from "./Question2";

function App() {
  return (
    <>
      <MyComponent />
      <TodoList />
    </>
  );
}

export default App;

//no super(props);

//wrong setup for the clickHandler function I used arrow function to fix it

//clicks: this.clicks + 1 is not updating properly
//I used this.state.clicks instead

//I tried fixing this error using an AI tool
//Warning: A string ref, "myComponentDiv", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref
//I used React.createRef()
//and change the ref of the div from "myComponentDiv" to {this.myComponentDiv}

//<h2>My Component ({this.state.clicks} clicks})</h2> clicks has a }

// I used usestate for the click counter and searched for the equivalent of React.createRef() in a function component
// Then used useEffect as the replacement of componentDidMount() and componentWillUnmount()

//{ headerText, children }
// <h3>{headerText}</h3>
// {children}
// there have no functionality on the given function in my opinion
