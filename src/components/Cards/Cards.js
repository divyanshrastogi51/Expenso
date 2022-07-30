//import styles from "./home.module.css";
import React from "react";
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
                <h3>Card One</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua,
                </p>
                <NavLink to="/settle">Expense Settelment</NavLink>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>02</h2>
                <h3>Card Two</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua,
                </p>
                <NavLink to="/track">Expense Tracker</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
