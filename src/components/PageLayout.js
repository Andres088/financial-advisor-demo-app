import React from "react";
import TopBar from "./TopBar";
import Jumbotron from "./Jumbotron";

const PageLayout = ({children}) => {
    return (
        <>
            <TopBar/>
            <Jumbotron/>
            <div className="row medium-8 large-7 columns">
                {children}
            </div>
        </>
    )
}

export default PageLayout;