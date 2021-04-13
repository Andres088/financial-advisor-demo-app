import React from 'react';
import {connect} from "react-redux";
import PortfolioInfo from "./PortfolioInfo";
import PortfolioAdvice from "./PortfolioAdvice";
import {PORTFOLIO_ADVICE, PORTFOLIO_INFO} from "../helpers/constants";

const Home = ({portfolioView}) => {

    switch (portfolioView) {
        case PORTFOLIO_INFO:
            return <PortfolioInfo/>
        case PORTFOLIO_ADVICE:
            return <PortfolioAdvice/>
        default:
            return null;
    }
}

const mapStateToProps = ({portfolioView}) => {
    return {portfolioView}
}

export default connect(mapStateToProps)(Home);