import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {portfolioData} from "../../../helpers/mockData";
import TransferArrows from "./TransferArrows";
import GenericTable from "../../../components/GenericTable";
import calculateTransfers from "./calculateTransfers";
import './RecommendedTransfers.css'

const RecommendedTransfers = ({ready, reloadTransfers, currentPortfolio, riskData}) => {
    // Calculates the recommended transfers and displays them

    const [transfers, setTransfers] = useState([]);
    const [targetAmountsData, setTargetAmountsData] = useState([])

    useEffect(() => {
        const params = {setTransfers, setTargetAmountsData, currentPortfolio, riskData}
        if (ready) calculateTransfers(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, reloadTransfers])

    if (!ready) return null;
    else return (
        <>
            <GenericTable
                data={targetAmountsData}
                headers={Object.keys(currentPortfolio).map(e => e + ' US$')}
            />
            <h5 id="transfers-heading">
                {`Recommended transfers to adjust to Risk Level ${riskData.risk}`}
            </h5>
            <div className="card">
                <div className="card-section">
                    <TransferArrows transfers={transfers}/>
                </div>
            </div>
        </>
    )
}

const mapStatesToProps = ({currentPortfolio, riskLevel}) => {
    const riskData = portfolioData.filter(e => e.risk === riskLevel)[0];
    return {currentPortfolio, riskData}
}

export default connect(mapStatesToProps)(RecommendedTransfers);