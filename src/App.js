import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./views/Home";
import Recommendation from "./views/Recommendation";
import PageLayout from "./components/PageLayout";

class App extends Component {
    render() {
        return (
            <PageLayout>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/"
                            name="Home"
                            render={props => <Home {...props}/>}
                        />
                        <Route
                            path="/recommendation"
                            name="Recommendation"
                            render={props => <Recommendation {...props}/>}
                        />
                    </Switch>
                </BrowserRouter>
            </PageLayout>
        );
    }
}

export default App;
