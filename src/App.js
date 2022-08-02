import "./App.css";
import { useState, useEffect } from "react";
import Tracker from "./components/Tracker/Tracker";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseSettlement from "./components/ExpenseSettlement/ExpenseSettlement";
import Transactions from "./components/Transactions/Transactions";
import PersonExpense from "./classes/expense";
import { minCashFlow } from "./utils/minCashFlow";
import formatAmount from "./utils/formatAmount";
import formatDate from "./utils/formatDate";
import useStateWithLocalStorage from "./utils/useStateWithLocalStorage";
import Entry from "./classes/Entry";
const App = () => {
  // First Setting Up all the States
  // Settlement States
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);
  const [payer, setPayer] = useState("Choose Payer");
  const [payee, setPayee] = useState("Choose Payee");
  const [amount, setAmount] = useState("");
  const [allTransactions, setAllTransactions] = useState([]);
  const [finalTransactions, setFinalTransactions] = useState([]);
  const [outputList, setOutputList] = useState([]);
  const [inputList, setInputList] = useState([]);
  const [flag, setFlag] = useState(true);
  const [chartData, setChartData] = useState({});
  const [graphConfig, setGraphConfig] = useState({});
  const [outputGraphData, setOutputGraphData] = useState({});
  // Tracker States
  const [expenses, setExpenses] = useStateWithLocalStorage("expenses");
  const [income, setIncome] = useStateWithLocalStorage("income");
  const [budget, setBudget] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  // Defining methods
  const addParticipant = () => {
    setAllNames((previous) => [...previous, { name }]);
    setName("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTransactions((previous) => {
      return [...previous, { payer, payee, amount }];
    });
    setPayer("");
    setPayee("");
    setAmount("");
  };
  const handleTransactionDataSubmit = () => {
    const config = {
      nodeHighlightBehavior: true,
      node: {
        color: "#087A84",
        highlightStrokeColor: "blue",
        fontSize: 12,
      },
      link: {
        highlightColor: "lightblue",
        renderLabel: true,
        labelProperty: "amount",
        fontSize: 12,
      },
      directed: true,
      height: 300,
      width: 600,
    };
    setGraphConfig(config);
  };
  let a = 0;
  let b = 0;
  const generateNodes = () =>
    allNames.map(function (item) {
      a += 40;
      b += 40;
      return { id: item.name, x: a, y: b };
    });

  const generateOutputLinks = (items) =>
    items.map(({ person1, person2, amount }) => ({
      source: person1,
      target: person2,
      amount,
    }));

  // main logic for splitting amount
  const splitwiseTransactions = () => {
    const input = [];
    for (let item of allTransactions) {
      input.push(
        new PersonExpense(item.payer, item.payee, parseInt(item.amount))
      );
    }
    setInputList(input);
    const output = minCashFlow(input);
    setOutputList(output);
    setFinalTransactions(() =>
      output.map((x) => {
        return { payer: x.person1, payee: x.person2, amount: x.amount };
      })
    );
    setFlag(false);
    setChartData(output);
    handleTransactionDataSubmit();
    setOutputGraphData({
      nodes: generateNodes(),
      links: generateOutputLinks(output),
    });
  };
  const addEntry = (type, title, amount, category) => {
    const newEntry = new Entry(
      Date.now(),
      formatDate(new Date()),
      amount,
      title,
      category
    );

    if (type === "Expense") {
      setExpenses([...expenses, newEntry]);
    } else if (type === "Income") {
      setIncome([...income, newEntry]);
    }
  };

  const deleteEntry = (id, type) => {
    if (type === "Expense") {
      setExpenses([...expenses.filter((elem) => elem.id !== id)]);
    } else if (type === "Income") {
      setIncome([...income.filter((elem) => elem.id !== id)]);
    }
  };

  const calculateBudget = () => {
    let sum = 0;
    expenses.forEach((elem) => (sum -= parseFloat(elem.amount)));
    income.forEach((elem) => (sum += parseFloat(elem.amount)));
    setBudget(formatAmount(sum));
    setIsNegative(sum >= 0 ? false : true);
  };

  useEffect(() => {
    calculateBudget();
  }, [expenses, income]);
  return (
    <div className="App">
      <Router>
        <Navbar className="ml-auto" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/track"
            element={
              <Tracker
                income={income}
                expenses={expenses}
                budget={budget}
                isNegative={isNegative}
                deleteEntry={deleteEntry}
                addEntry={addEntry}
              />
            }
          />
          <Route
            exact
            path="/settle"
            element={
              <ExpenseSettlement
                name={name}
                setName={setName}
                allNames={allNames}
                addParticipant={addParticipant}
              />
            }
          />
          <Route
            exact
            path="/settle/add-transactions"
            element={
              <Transactions
                allNames={allNames}
                handleSubmit={handleSubmit}
                payer={payer}
                setPayer={setPayer}
                setPayee={setPayee}
                payee={payee}
                amount={amount}
                setAmount={setAmount}
                allTransactions={allTransactions}
                splitwiseTransactions={splitwiseTransactions}
                inputList={inputList}
                outputList={outputList}
                flag={flag}
                finalTransactions={finalTransactions}
                chartData={chartData}
                outputGraphData={outputGraphData}
                GraphConfig={graphConfig}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
