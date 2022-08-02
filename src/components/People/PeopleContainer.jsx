import { Link } from "react-router-dom";
import styles from "./PeopleContainer.module.css";
import Button from "react-bootstrap/Button";

const PeopleContainer = ({ allNames }) => {
  return (
    <div className="container">
      <h3 className={styles.heading}>Group Members</h3>
      {allNames.map((item, index) => (
        <h4 className={styles.nameColor} key={index}>
          {item.name}
        </h4>
      ))}
      <Link to="/settle/add-transactions">
        <Button>Add Transactions</Button>
      </Link>
    </div>
  );
};

export default PeopleContainer;
