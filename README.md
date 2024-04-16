=======================================================
Question #1 - React - Identify the Problem and Refactor
=======================================================

Please identify the problems and tell us what the problems are, then improve this React Component by coding your own version!

It would be a plus point if you can convert/refactor them into React hooks.

class MyComponent extends React.Component {
constructor(props) {
// set the default internal state
this.state = {
clicks: 0
};
}

componentDidMount() {
this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
}

componentWillUnmount() {
this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
}

clickHandler() {
this.setState({
clicks: this.clicks + 1
});
}

render() {
let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv">
      <h2>My Component ({this.state.clicks} clicks})</h2>
      <h3>{this.props.headerText}</h3>
    {children}
    </div>
    );

}
}

======
ANSWER
======
Put your answer here:

//no super(props);

//wrong setup for the clickHandler function

//clicks: this.clicks + 1 is not updating properly
//I used this.state.clicks instead

//<h2>My Component ({this.state.clicks} clicks})</h2> clicks has a }

// I used usestate for the click counter and searched for the equivalent of React.createRef() in a function component
// Then used useEffect as the replacement of componentDidMount() and componentWillUnmount()

//{ headerText, children }
// <h3>{headerText}</h3>
// {children}
// there have no functionality on the given function in my opinion

import React, { useState, useEffect, useRef } from "react";

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

return (

<div className="my-component" ref={myComponentDiv}>
<h2>My Component ({clicks} clicks)</h2>
</div>
);
}

export default MyComponent;

=======================================================
Question #2 - React - Solve the Problem
=======================================================

Complete the following <TodoList> component to display todos and allow for adding and removing of todo items

const todosReducer = (state, action) => {
switch (action.type) {
case 'ADD_TODO':
case 'REMOVE_TODO':
}

};

const TodoList = () => {

const [todos, dispatch] = useReducer(todosReducer, []);

return (

   <div>
     <ul>
       {todos.map((todo) => (
         <li><button>Remove todo</button></li>
       ))}
     </ul>
     <button>Add todo</button>
   </div>
 );
};

======
ANSWER
======
Put your answer here:

// Firstly I created a addTodo function and set the dispatch {type: "ADD_TODO", todo:newTodo}
// set the return of the case "ADD_TODO" as [...state, action.todo]

// for the remove todo I created a removeTodo function that sets the dispatch { type: "REMOVE_TODO", id }
//set the return of case "REMOVE_TODO" as state.filter((todo) => todo.id !== action.id)
//this is to filter out the todo if the id is equal to the action.id which was the one the we set up on the dispatch inside the removeTodo function

import React, { useReducer } from "react";

const todosReducer = (state, action) => {
switch (action.type) {
case "ADD_TODO":
return [...state, action.todo];
case "REMOVE_TODO":
return state.filter((todo) => todo.id !== action.id);
default:
return state;
}
};

const TodoList = () => {
const [todos, dispatch] = useReducer(todosReducer, []);

const addTodo = () => {
const addedTodo = {
id: todos.length + 1,
text: `Todo ${todos.length + 1}`,
};
dispatch({ type: "ADD_TODO", todo: addedTodo });
};

const removeTodo = (id) => {
dispatch({ type: "REMOVE_TODO", id });
};
return (

<div>
<ul>
{todos.map((todo) => (
<li>
{todo.text}
<button onClick={() => removeTodo(todo.id)}>Remove todo</button>
</li>
))}
</ul>
<button onClick={addTodo}>Add todo</button>
</div>
);
};

export default TodoList;

Technical Exam

Using the initial data below create a function that will achieve the expected result data show it to console:

Initial data:

[
{
"id": 1,
"name": "John Doe",
"status": 1
},
{
"id": 2,
"name": "Jane Doe",
"status": 2
},
{
"id": 3,
"name": "Adam Rocket",
"status": 2
},
{
"id": 4,
"name": "Luis Rocket",
"status": 1
}
]

Expected Result Data:

{
"status-1": [
{
"id": 1,
"name": "John Doe",
"status": 1
},
{
"id": 4,
"name": "Luis Rocket",
"status": 1
}
],
"status-2": [
{
"id": 2,
"name": "Jane Doe",
"status": 2
},
{
"id": 3,
"name": "Adam Rocket",
"status": 2
}
]
}

======
ANSWER
======

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

const result = arrayToObject(datas);
console.log(result);
