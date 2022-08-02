import React from "react";
import Balance from "../Balance/Balance";
import EntriesTable from "../EntriesTable/EntriesTable";
import Form from "../Form/Form";

const Tracker = ({
  budget,
  isNegative,
  addEntry,
  expenses,
  deleteEntry,
  income,
}) => {
  return (
    <>
      <div className="TrackerContainer">
        <div className="App_section">
          <h1>Expense Tracker</h1>
        </div>
        <div className="App_section App_section--aligned">
          <div className="App_balance">
            <Balance value={budget} isNegative={isNegative} />
          </div>
          <Form utilizeData={addEntry} />
        </div>
        <div className="App_section">
          <EntriesTable
            title="History of Expenses"
            data={expenses}
            type="Expense"
            deleteEntry={deleteEntry}
          />
          <EntriesTable
            title="History of Income"
            data={income}
            type="Income"
            deleteEntry={deleteEntry}
          />
        </div>
      </div>
    </>
  );
};

export default Tracker;
