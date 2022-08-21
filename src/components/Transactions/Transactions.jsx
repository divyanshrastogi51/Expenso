import styles from "./Transactions.module.css";
import TransactionTable from "../TransactionTable/TransactionTable";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Transactions = ({
  allNames,
  handleSubmit,
  payer,
  payee,
  setPayer,
  setPayee,
  amount,
  setAmount,
  allTransactions,
  splitwiseTransactions,
  inputList,
  outputList,
  flag,
  finalTransactions,
  chartData,
  outputGraphData,
  GraphConfig,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        {flag && (
          <div className={styles.containerHeader}>
            <h3 className={styles.headerText}>Enter Your Transactions</h3>
          </div>
        )}
        {flag && (
          <div>
            <form onSubmit={handleSubmit} className={styles.formDisplay}>
              <div>
                <Form.Select
                  onChange={(e) => {
                    setPayer(e.target.value);
                  }}
                  id="payer"
                  value={payer}
                  required
                >
                  <option value="Choose Payer">Choose Payer</option>
                  {allNames.length !== 0 &&
                    allNames.map((name, index) => {
                      return (
                        <option key={index} value={name.name}>
                          {name.name}
                        </option>
                      );
                    })}
                </Form.Select>
              </div>
              <div>
                <Form.Select
                  onChange={(e) => {
                    setPayee(e.target.value);
                  }}
                  id="payee"
                  value={payee}
                  required
                >
                  <option value="Choose Payee">Choose Payee</option>
                  {allNames.length !== 0 &&
                    allNames.map((name, index) => {
                      if (payer !== name.name) {
                        return (
                          <option key={index} value={name.name}>
                            {name.name}
                          </option>
                        );
                      }
                      return <></>;
                    })}
                </Form.Select>
              </div>
              <div className={styles.formDisplay}>
                <Form.Control
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount"
                  required
                />
                <Button className="px-3" variant="primary" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </div>
        )}
        {allTransactions && allTransactions.length > 0 && (
          <TransactionTable
            allTransactions={allTransactions}
            splitwiseTransactions={splitwiseTransactions}
            inputList={inputList}
            outputList={outputList}
            flag={flag}
            finalTransactions={finalTransactions}
            chartData={chartData}
            outputGraphData={outputGraphData}
            GraphConfig={GraphConfig}
          />
        )}
      </div>
    </div>
  );
};

export default Transactions;
