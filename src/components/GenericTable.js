import React from "react";

const GenericTable = ({data, headers, rowStyle=null}) => {

    return (
        <table className="unstriped">
            <thead>
            <tr>
                {headers.map((header, index) => {
                    return <th key={`th-${index}`}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => {
                return (
                    <tr key={`tr-${index}`} style={rowStyle? rowStyle(row): null}>
                        {Object.keys(row).map((field, index) => {
                            return <td key={`td-${index}`}>{row[field]}</td>;
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default GenericTable;