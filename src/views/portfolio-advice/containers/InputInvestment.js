import React from "react";
import './InputInvestment.css'
import {connect} from 'react-redux';
import {setInvestmentAmount} from "../../../actions/general";

const InputInvestment = ({investment, percentage, amount, setInvestmentAmount}) => {
    // Stores the user input amount in the Redux store
    // and displays the percentage from the store too

    const onChangeAmount = event => {
        setInvestmentAmount(investment, event.target.value)
    }

    return (
        <tr>
            <td>{investment}</td>
            <td>
                <input
                    type="number"
                    value={amount}
                    onChange={onChangeAmount}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={percentage}
                    disabled
                />
            </td>
        </tr>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {currentPortfolio} = state;
    const {investment} = ownProps;
    return {
        amount: currentPortfolio[investment].amount,
        percentage: currentPortfolio[investment].percentage
    }
}

export default connect(mapStateToProps, {setInvestmentAmount})(InputInvestment);