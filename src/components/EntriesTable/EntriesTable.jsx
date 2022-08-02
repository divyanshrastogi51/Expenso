import React from "react";

import Entry from "./Entry";
import "./style.css";

const EntriesTable = ({ title, data, ...restProps }) => {
  const renderTable = () => {
    if (data.length > 0) {
      return (
        <table>
          <thead className="TableHeader">
            <tr>
              <th className="TableHeader_cell">Date</th>
              <th className="TableHeader_cell">Amount</th>
              <th className="TableHeader_cell">Title</th>
              <th className="TableHeader_cell">Category</th>
              <th className="TableHeader_cell"></th>
            </tr>
          </thead>
          <tbody className="TableBody">
            {Array.isArray(data) &&
              data.length !== [] &&
              data.map((elem) => (
                <Entry key={elem.id} data={elem} {...restProps} />
              ))}
          </tbody>
        </table>
      );
    } else {
      return <div>No history available.</div>;
    }
  };

  return (
    <div className="EntriesTable">
      <h2 className="EntriesTable_header">{title}</h2>
      {renderTable()}
    </div>
  );
};

EntriesTable.defaultProps = {
  title: "History of actions",
};

export default EntriesTable;
