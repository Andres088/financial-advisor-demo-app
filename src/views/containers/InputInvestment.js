import React from "react";
import './InputInvestment.css'
import {connect} from 'react-redux';
import {setInvestmentAmount} from "../../actions/general";

const InputInvestment = ({investment, percentage, amount, setInvestmentAmount}) => {

    const inputStyle = {maxWidth: '8rem', height: '2rem', borderRadius: '3px'}

    const onChangeAmount = event => {
        setInvestmentAmount(investment, event.target.value)
    }

    return (
        <tr>
            <td>{investment}</td>
            <td>
                <input
                    type="number"
                    style={inputStyle}
                    value={amount}
                    onChange={onChangeAmount}
                />
            </td>
            <td>
                <input
                    type="number"
                    style={inputStyle}
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