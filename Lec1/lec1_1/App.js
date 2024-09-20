// here we are creating element using react
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "HelloWorldFrom React");  // (element , object for attribute , contents of element tag)

// creating root using ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));

// specifying what to render inside this root and rendering
root.render(heading);

console.log(heading);       // this is react element i.e normal javascript objects
// this will show us the props
// props are childers and attributs