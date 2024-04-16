import React, { useState, useEffect, useRef } from "react";

function MyComponent({ headerText, children }) {
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

  return (
    <div className="my-component" ref={myComponentDiv}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  );
}

export default MyComponent;

// I used usestate for the click counter and searched for the equivalent of React.createRef() in a function component
// Then used useEffect as the replacement of componentDidMount() and componentWillUnmount()
