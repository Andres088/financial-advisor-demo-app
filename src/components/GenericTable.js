import React from "react";

const GenericTable = ({data, headers, customRow=null}) => {

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
                if (customRow) return customRow(row, index);
                else return (
                    <tr key={`tr-${index}`}>
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