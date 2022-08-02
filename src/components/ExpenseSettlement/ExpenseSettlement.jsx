import styles from "./ExpenseSettlement.module.css";
import PeopleContainer from "../People/PeopleContainer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Chart2 from "../Chart/Charts2";
const ExpenseSettlement = ({ name, setName, allNames, addParticipant }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerHeader}>
          <h2 className={styles.headerText}>
            Enter Names Of People In The Group
          </h2>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </Form.Group>
          <Button variant="primary" onClick={addParticipant} className="px-3">
            Submit
          </Button>
        </div>
        {allNames && allNames.length > 0 && (
          <PeopleContainer allNames={allNames} />
        )}
      </div>
      {/* <Chart2 /> */}
    </div>
  );
};

export default ExpenseSettlement;
