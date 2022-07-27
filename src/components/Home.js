import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Cards from "./Cards";
export default function Home() {
  return (
    <div className={styles.bghome}>
      <h1 className={styles.head1}>Welcome to Expenso!</h1>
      <h2 className={styles.head2}>
        The best way to track your expenses and settle your payments.
      </h2>
      <Cards />
    </div>
  );
}
