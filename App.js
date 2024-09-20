// to import react from node modules
import React from "react";
import ReactDOM from "react-dom/client";

//creating nested elements in react
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "i am h1 ")
    ));

// react element is an object , while rendereing on dom it convert to html and the shoes on browser

// how to create siblings?
// in previous we have passed only one clildren to create siblings we have to pass multiple children
// this can be done by passing array to the third paramerter of createElement() funciton.
const parent2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                { id: "h1key" },
                "i am h1 "),
            React.createElement(
                "h2",
                { id: "h2key" },
                "i am h2")

        ]
    ));



// here we are creating element using react
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, "HelloWorldFrom React");  // (element , object for attribute , contents of element tag)

// creating root using ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));

// specifying what to render inside this root and rendering
root.render(parent2);

console.log(parent);       // this is react element i.e normal javascript objects
// this will show us the props
// props are childers and attributs