import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Great Food At Great Prices</h2>
      <p>
        Pick your favorite meal based on our wide selection of menu options!
      </p>
      <p>
        The meals are prepared with high-quality ingredients that focus on fresh
        and flavorful dishes. The meals are prepared just-in-time meaning they
        are made to order, ensuring that they are as fresh as possible when they
        are delivered to your door.
      </p>
    </section>
  );
};

export default MealsSummary;
