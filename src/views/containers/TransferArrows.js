import React from "react";
import { ArcherContainer, ArcherElement } from 'react-archer';
import {formatCurrency} from "../../helpers/utils";

const TransferArrows = ({transfers}) => {

    const rowStyle = { marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', }
    const boxStyle = { padding: '10px', border: '1px solid black'};

    return (
        <div style={{ height: `${transfers.length * 65}px`, margin: '25px' }}>
            <ArcherContainer>
                {transfers.map((transfer, index) => {
                 return (
                     <div key={`arrow-${index}`} style={rowStyle}>
                         <ArcherElement
                             id={'abc' + index}
                             relations={[
                                 {
                                     targetId: 'cde' + index,
                                     targetAnchor: 'left',
                                     sourceAnchor: 'right',
                                     style: { strokeColor: 'blue', strokeWidth: 1 },
                                     label: <div style={{ marginTop: '-20px' }}>{
                                         formatCurrency(transfer.amount)}
                                     </div>,
                                 },
                             ]}
                         >
                             <div style={boxStyle}>{transfer.origin}</div>
                         </ArcherElement>
                         <ArcherElement id={'cde' + index}>
                             <div style={boxStyle}>{transfer.destiny}</div>
                         </ArcherElement>
                     </div>
                 )
                })}
            </ArcherContainer>
        </div>
    );
}

export default TransferArrows;