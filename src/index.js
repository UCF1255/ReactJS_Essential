import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Library from './Library'

// -----------------------Process to build app---------------------------
// npm run build
// npm install serve -g
// serve -s build
// you will get local host & n/w path for serving application

let bookList = [
  { title: "The Sun Rises", author: "Neha", pages: 200 },
  { title: "The A TEAM", author: "Bhavana", pages: 10 },
  { title: "TEAM book", author: "Rashmi", pages: 300 },
];

ReactDOM.render(
 <Library books={bookList}/>, //removed books={bookList} fro showing default props
  document.getElementById("root")
);

reportWebVitals();
