import React, {useState} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import RiskLevelSquare from "../components/RiskLevelSquare";
import PortfolioTable from "./containers/PortfolioTable";
import donutLogo from "../assets/img/donutlogo.png"
import tableLogo from "../assets/img/chartlogo.png"
import PortfolioDonut from "./containers/PortfolioDonut";
import {setPortfolioView} from "../actions/general";
import './PortfolioInfo.css'
import {PORTFOLIO_ADVICE} from "../helpers/constants";

const PortfolioInfo = ({selectedRiskLevel, setPortfolioView}) => {

    const [showDonut, setShowDonut] = useState(false);

    const onClickContinue = () => {
        setPortfolioView(PORTFOLIO_ADVICE)
    }

    const renderContent = () => {
        if (showDonut) return <PortfolioDonut/>;
        else return <PortfolioTable/>
    }

    const onClickImage = () => {
        if (selectedRiskLevel) setShowDonut(!showDonut)
    }

    const getImageStyle = () => {
        if (selectedRiskLevel) return {cursor: 'pointer'}
        else return {filter: 'grayscale(100%)'}
    }

    return (
        <>
            <h5>Please select a risk level for your investment portafolio</h5>
            <div className="row">
                {_.range(1, 11).map(num => {
                    return <RiskLevelSquare key={num} squareRiskLevel={num}/>
                })}
                <div className="small-2 columns">
                    <button
                        type="button"
                        className={`button ${!selectedRiskLevel? 'disabled': ''}`}
                        onClick={onClickContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
            <div className="row" style={{marginTop: '2rem'}}>
                <div className="small-10 columns">
                    {renderContent()}
                </div>
                <div className="small-2 columns">
                    <img
                        src={showDonut ? tableLogo : donutLogo}
                        onClick={onClickImage}
                        alt="View table or graphic"
                        style={getImageStyle()}
                    />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}

export default connect(mapStateToProps, {setPortfolioView})(PortfolioInfo);