import React, {useState} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import RiskLevelSquare from "../../components/RiskLevelSquare";
import PortfolioTable from "./containers/PortfolioTable";
import donutLogo from "../../assets/img/donutlogo.png"
import tableLogo from "../../assets/img/chartlogo.png"
import PortfolioDonut from "./containers/PortfolioDonut";
import {setPortfolioView} from "../../actions/general";
import './PortfolioInfo.css'
import {PORTFOLIO_ADVICE} from "../../helpers/constants";
import {Cell, Grid} from "react-foundation";

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

    return (
        <>
            <h5>Please select a risk level for your investment portafolio</h5>
            <Grid className="display">
                {_.range(1, 11).map(num => {
                    return <RiskLevelSquare key={num} squareRiskLevel={num}/>
                })}
                <Cell small={3} large={2}>
                    <button
                        type="button"
                        className={`button continue ${!selectedRiskLevel? 'disabled': ''}`}
                        onClick={onClickContinue}
                    >
                        Continue
                    </button>
                </Cell>
            </Grid>
            <Grid className="display">
                <Cell small={12} large={10}>
                    {renderContent()}
                </Cell>
                <Cell small={2} large={2}>
                    <img
                        src={showDonut ? tableLogo : donutLogo}
                        onClick={onClickImage}
                        alt="View table or graphic"
                        className={`image-${selectedRiskLevel? 'clickable': 'unclickable'}`}
                    />
                </Cell>
            </Grid>
        </>
    )
}

const mapStateToProps = ({riskLevel}) => {
    return {selectedRiskLevel: riskLevel}
}

export default connect(mapStateToProps, {setPortfolioView})(PortfolioInfo);