import _ from "lodash";

const calculateTransfers = ({setTransfers, setTargetAmountsData, currentPortfolio, riskData}) => {
    // Algorithm for calculating recommended transfers
    // For more info check the file README.md

    setTransfers([]);
    const currentInvestments = {}
    let totalAmount = 0;
    for (const investment in currentPortfolio) {
        let amount = currentPortfolio[investment].amount;
        amount = amount? parseFloat(amount): 0;
        totalAmount += amount;
        currentInvestments[investment] = amount;
    }

    function getTargetAmounts() {
        // Calculates the recommended amounts based on
        // recommended percentages and current user investment amounts
        const targetAmounts = {}
        let _totalAmount = 0;
        for (const investment in currentInvestments) {
            const percentage = riskData[_.camelCase(investment)];
            const amount = parseInt((totalAmount * percentage / 100).toFixed());
            _totalAmount += amount;
            targetAmounts[investment] = amount;
        }
        // In case of remainder due rounding amounts
        // assigns the remainder to the first positive amount
        const remainder = totalAmount - _totalAmount;
        for (const investment in targetAmounts) {
            const amount = targetAmounts[investment];
            if (amount > 0) {
                targetAmounts[investment] = amount + remainder;
                break;
            }
        }
        setTargetAmountsData([targetAmounts])
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

    const targetAmounts = getTargetAmounts();
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
    setTransfers(transfers);
}

export default calculateTransfers;