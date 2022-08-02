import React from "react";

import "./style.css";

const Balance = ({ value, isNegative }) => {
  const styles = {
    backgroundColor: isNegative ? "#ff3f34" : "#05c46b"
  };

  return (
    <div style={styles} className="balance">
      <span className="balanceLabel">Balance</span>
      <span className="balanceValue">{value}</span>
    </div>
  );
};

export default Balance;
