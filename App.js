const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello world from React"
  );
const heading2 = React.createElement(
    "h2",
    { id: "heading2" },
    "I am an H2"
  );
const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        "div",
        { id: "child" },
        [heading,heading2]
      )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);