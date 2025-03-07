import React from "react";
import "./GlobalTable.css"; // Optional styling

const GlobalTable = ({ columns, data }) => {
    return (
        <div className="table-container">
            <table className="global-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>{row[col]}</td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="no-data">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default GlobalTable;
