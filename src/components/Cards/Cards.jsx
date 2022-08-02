import styles from "./Cards.module.css";
import { NavLink } from "react-router-dom";
export default function Cards() {
  return (
    <div className={styles.app}>
      <div className={styles.hover_cards}>
        <div className={styles.container}>
          <div className={styles.card1}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>01</h2>
                <h3>Expense Tracker</h3>
                <p>
                  Tool to track your daily expenses and income so you can
                  flexibly plan your budget to stay in control and achieve your
                  goals.
                </p>
                <NavLink to="/track">Expense Tracker</NavLink>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>02</h2>
                <h3>Expense Settlement</h3>
                <p>
                  Tool for friends and roommates to track bills and other shared
                  expenses, so that everyone can settle each other’s payments.
                </p>
                <NavLink to="/settle">Expense Settlement</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
