import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FileUpload from "./Components/Form";
import Header from "./Components/Header";
import FileList from "./Components/ListVIew";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Divider from "./Components/divider";
import LinkView from "./Components/LinkView";

const App = () => (
  <div className="App">
    <Header className="header"  />
    {/* // data={[{name: "Hawk",url: "/"}]} */}

    <FileUpload  className="fileupload"  />
    <Divider />
    <Switch>
    <Route path="/file" component={FileList} ></Route>
    <Route path="/link" component={LinkView} ></Route>
    </Switch>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
