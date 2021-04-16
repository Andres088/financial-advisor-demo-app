import React from "react";
import { ArcherContainer, ArcherElement } from 'react-archer';
import {formatCurrency} from "../../../helpers/utils";
import './TransferArrows.css'

const TransferArrows = ({transfers}) => {
    // Shows the transfer list graphically with boxes and arrows

    return (
        <div id="archer-wrapper" style={{ height: `${transfers.length * 65}px`}}>
            <ArcherContainer>
                {transfers.map((transfer, index) => {
                 return (
                     <div key={`arrow-${index}`} className="archer-row">
                         <ArcherElement
                             id={'abc' + index}
                             relations={[
                                 {
                                     targetId: 'cde' + index,
                                     targetAnchor: 'left',
                                     sourceAnchor: 'right',
                                     style: { strokeColor: 'blue', strokeWidth: 1 },
                                     label: <div className="arrow-label">{
                                         formatCurrency(transfer.amount)}
                                     </div>,
                                 },
                             ]}
                         >
                             <div className="archer-box">{transfer.origin}</div>
                         </ArcherElement>
                         <ArcherElement id={'cde' + index}>
                             <div className="archer-box">{transfer.destiny}</div>
                         </ArcherElement>
                     </div>
                 )
                })}
            </ArcherContainer>
        </div>
    );
}

export default TransferArrows;