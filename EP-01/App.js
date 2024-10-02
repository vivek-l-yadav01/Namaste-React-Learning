// HOW WE DO IN REACT  WITH REACT POWERRR
/*
How to create a Nested element
<div?
<div id = parent>
<div id = children


*/

const parent = React.createElement("div" , {id:"parent"} ,
     [React.createElement("div", {id:"children1"}, 
        [React.createElement("h1",{},"Hello I am H1 Tag"),
            React.createElement("h2",{},"Hello I am H2 Tag"),
        ]),React.createElement("div", {id:"children2"}, 
            [React.createElement("h1",{},"Hello I am H1 Tag"),
                React.createElement("h2",{},"Hello I am H2 Tag"),
            ])])


const heading = React.createElement("h1" , {
    id:"tittle",xyz:"aabc"
} , "Hello Word from React")

//{} => attribute to tag

console.log(parent);   // what to do you think it will give 
//it will return object contain prop{attribute data},children {3rd argument},type{ist argument}

const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(root)

root.render(parent);