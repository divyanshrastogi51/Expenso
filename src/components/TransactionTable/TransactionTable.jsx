import styles from "./TransactionTable.module.css";
import Table from "../Table/Table";
import Chart from "../Chart/Chart";
import Button from "react-bootstrap/Button";

const TransactionTable = ({
  allTransactions,
  splitwiseTransactions,
  outputList,
  flag,
  finalTransactions,
  chartData,
  outputGraphData,
  GraphConfig,
}) => {
  return (
    <div className={styles.tableBackground}>
      <div className={styles.container}>
        {flag && <h1 className={styles.h1}>All Transactions</h1>}
        {!flag && <h1 className={styles.h1}>Settled Transactions</h1>}
        <div className={styles.buttonContainer}>
          {outputList && outputList.length === 0 && (
            <Button
              className="px-4"
              variant="primary"
              onClick={splitwiseTransactions}
            >
              Simplify Transactions
            </Button>
          )}
        </div>
        <div className={!flag ? styles.tableContainer : ""}>
          <div>
            {flag && <Table allTransactions={allTransactions} />}
            {!flag && <Table allTransactions={finalTransactions} />}
          </div>
          {!flag && (
            <div>
              {chartData && chartData.length > 0 && (
                <Chart
                  chartData={chartData}
                  outputGraphData={outputGraphData}
                  GraphConfig={GraphConfig}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
