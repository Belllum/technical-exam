import React, { useState, useEffect, useRef } from "react";

let datas = [
  {
    id: 1,
    name: "John Doe",
    status: 1,
  },
  {
    id: 2,
    name: "Jane Doe",
    status: 2,
  },
  {
    id: 3,
    name: "Adam Rocket",
    status: 2,
  },
  {
    id: 4,
    name: "Luis Rocket",
    status: 1,
  },
];

const arrayToObject = (data) => {
  return data.reduce((accumulator, currentValue) => {
    const key = `status-${currentValue.status}`;
    accumulator[key] = [...(accumulator[key] || []), currentValue];
    return accumulator;
  }, {});
};
function MyComponent() {
  const [clicks, setClicks] = useState(0);
  const myComponentDiv = useRef(null);

  useEffect(() => {
    const clickHandler = () => {
      setClicks((previousClicks) => previousClicks + 1);
    };
    myComponentDiv.current.addEventListener("click", clickHandler);

    return () => {
      myComponentDiv.current.removeEventListener("click", clickHandler);
    };
  }, []);

  const result = arrayToObject(datas);
  console.log(result);
  return (
    <div className="my-component" ref={myComponentDiv}>
      <h2>My Component ({clicks} clicks)</h2>
    </div>
  );
}

export default MyComponent;

//no super(props);

//wrong setup for the clickHandler function

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
