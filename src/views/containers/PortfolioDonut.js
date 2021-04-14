import React, {useEffect, useState} from "react";
import {ResponsivePie} from '@nivo/pie';
import {portfolioData} from "../../helpers/mockData";
import {connect} from "react-redux";

const PortfolioDonut = ({riskLevel}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const selectedRiskData = portfolioData.filter(item => item.risk === riskLevel)[0]
        if (selectedRiskData) {
            setData([
                {id: 'Bonds', label: 'Bonds', value: selectedRiskData.bonds},
                {id: 'Large Cap', label: 'Large Cap', value: selectedRiskData.largeCap},
                {id: 'Mid Cap', label: 'Mid Cap', value: selectedRiskData.midCap},
                {id: 'Foreign', label: 'Foreign', value: selectedRiskData.foreign},
                {id: 'Small Cap', label: 'Small Cap', value: selectedRiskData.smallCap},
            ])
        }
    }, [riskLevel])

    return (
        <div style={{'height': '500px'}}>
            <ResponsivePie
                data={data}
                margin={{top: 40, right: 80, bottom: 80, left: 80}}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{scheme: 'pastel1'}}
                borderWidth={1}
                borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
                sliceLabel={item => `${item.value}%`}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{from: 'color'}}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                legends={[]}
            />
        </div>
    )
}

const mapStatesToProps = ({riskLevel}) => {
    return {riskLevel}
}

export default connect(mapStatesToProps)(PortfolioDonut);