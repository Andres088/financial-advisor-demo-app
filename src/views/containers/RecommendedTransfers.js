import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {portfolioData} from "../../helpers/mockData";
import _ from 'lodash'
import {roundToTwoDecimals} from "../../helpers/utils";
import TransferArrows from "./TransferArrows";

const RecommendedTransfers = ({ready, reloadTransfers, currentPortfolio, riskData}) => {

    const [transfers, setTransfers] = useState([]);

    useEffect(() => {
        if (ready) calculateTransfers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, reloadTransfers])

    const calculateTransfers = () => {
        // Algorithm for calculating recommended transfers
        setTransfers([]);
        const currentInvestments = {}
        let totalAmount = 0;
        for (const investment in currentPortfolio) {
            let amount = currentPortfolio[investment].amount;
            amount = amount? parseFloat(amount): 0;
            totalAmount += amount;
            currentInvestments[investment] = amount;
        }

        function getTargetAmonts() {
            const targetAmounts = {}
            for (const investment in currentInvestments) {
                const percentage = riskData[_.camelCase(investment)];
                targetAmounts[investment] = roundToTwoDecimals(totalAmount * percentage / 100);
            }
            return targetAmounts;
        }

        function getDifferences () {
            const differences = []
            let differencesAmount = 0;
            for (const investment in currentInvestments) {
                const targetAmount = targetAmounts[investment];
                const amount = currentInvestments[investment];
                const difference = amount - targetAmount;
                differences.push({investment, amount: difference})
                differencesAmount += Math.abs(difference);
            }
            return [differences, differencesAmount] ;
        }

        const targetAmounts = getTargetAmonts();
        let [differences, differencesAmount] = getDifferences();
        let count = 0;
        const transfers = [];

        while(differencesAmount > 0) {
            const maxDiffInvestment = _.maxBy(differences, 'amount');
            const minDiffInvestment = _.minBy(differences, 'amount');
            const result = maxDiffInvestment.amount + minDiffInvestment.amount;
            let transferAmount;
            if (result >= 0) {
                transferAmount = minDiffInvestment.amount;
                const currentAmount = currentInvestments[maxDiffInvestment.investment];
                currentInvestments[maxDiffInvestment.investment] = currentAmount + transferAmount;
                currentInvestments[minDiffInvestment.investment] = targetAmounts[minDiffInvestment.investment];
            } else if (result < 0) {
                transferAmount = maxDiffInvestment.amount;
                const currentAmount = currentInvestments[minDiffInvestment.investment];
                currentInvestments[maxDiffInvestment.investment] = targetAmounts[maxDiffInvestment.investment];
                currentInvestments[minDiffInvestment.investment] = currentAmount + transferAmount;
            }
            const transferObject = {
                origin: maxDiffInvestment.investment,
                destiny: minDiffInvestment.investment,
                amount: Math.abs(transferAmount)
            }
            transfers.push(transferObject);
            [differences, differencesAmount] = getDifferences();
            count += 1;
            if (count === 20) break;
        }
        console.log('Total Transfers', transfers);
        setTransfers(transfers);
    }


    if (!ready) return null;
    else return (
        <div className="card">
            <div className="card-section">
                <TransferArrows transfers={transfers}/>
            </div>
        </div>
    )
}

const mapStatesToProps = ({currentPortfolio, riskLevel}) => {
    let riskData = portfolioData.filter(e => e.risk === riskLevel)[0];
    return {currentPortfolio, riskData}
}

export default connect(mapStatesToProps)(RecommendedTransfers);