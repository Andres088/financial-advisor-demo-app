import React from "react";
import TopBar from "./TopBar";
import Jumbotron from "./Jumbotron";
import {Grid, Cell} from "react-foundation";

const PageLayout = ({children}) => {
    return (
        <>
            <TopBar/>
            <Jumbotron/>
            <Grid className="display">
                <Cell small={1} large={3}> </Cell>
                <Cell small={10} large={6}>{children}</Cell>
                <Cell small={1} large={3}> </Cell>
            </Grid>
        </>
    )
}

export default PageLayout;