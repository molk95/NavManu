import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavMenu from "./component/NavMenu"

const item=[{title:'Home'},{title:'Service',drop:['For entrepreneurs','For students','For hobbyists']},
{title:'Contact'}]

function App() {
  return (
    <div className="App">
  <NavMenu menu={item}/>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
