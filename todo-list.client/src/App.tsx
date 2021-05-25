import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoPage from "./pages/todo-page/todo-page.component";

import "./App.css";

function App() {
    return (
        // <Header/>
        <TodoPage />
        // <Switch>
        //     {/* <Route exact path="/completed" component={CompletedPage} /> */}
        // </Switch>
    );
}

export default App;
