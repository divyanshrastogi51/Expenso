import styles from "./Table.module.css";

const Table = ({ allTransactions }) => {
  return (
    <>
      <div className={styles.tableHeader}>
        <table
          className={styles.table}
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Payer Name</th>
              <th className={styles.th}>Payee Name</th>
              <th className={styles.th}>Amount</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.tableContent}>
        <table
          className={styles.table}
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <tbody>
            {allTransactions.map(({ payer, payee, amount }, index) => (
              <tr key={index}>
                <td className={styles.td}>{payer}</td>
                <td className={styles.td}>{payee}</td>
                <td className={styles.td}>{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.spacing}></div>
    </>
  );
};

export default Table;
