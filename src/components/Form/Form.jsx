import React, { useRef } from "react";
import Button from "../Button/Button";
import useInput from "../../utils/useInput";
import categories from "../../data/Categories";
import "./style.css";

const Form = ({ utilizeData }) => {
  const [type, setType, handleTypeChange] = useInput();
  const [title, setTitle, handleTitleChange] = useInput();
  const [amount, setAmount, handleAmountChange] = useInput(0);
  const [category, setCategory, handleCategoryChange] = useInput(categories[0]);
  const typeError = useRef(null);
  const titleInput = useRef(null);
  const titleError = useRef(null);
  const amountInput = useRef(null);
  const amountError = useRef(null);
  const clearState = () => {
    setTitle("");
    setAmount(0);
  };
  const validateRadio = (fieldName, value, errorRef) => {
    if (!value) {
      errorRef.current.textContent = `Pick a ${fieldName}!`;
    } else {
      errorRef.current.textContent = "";
    }
  };
  const validateInput = (fieldName, value, inputRef, errorRef) => {
    if (!value) {
      inputRef.current.style.borderColor = "red";
      errorRef.current.textContent = `Enter correct ${fieldName}!`;
    } else {
      inputRef.current.style.borderColor = "white";
      errorRef.current.textContent = "";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (type && title && amount) {
      utilizeData(type, title, amount, category);
      clearState();
    }
    validateRadio("type", type, typeError);
    validateInput("title", title, titleInput, titleError);
    validateInput("amount", amount, amountInput, amountError);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="FormSection">
        <span className="Label">Type:</span>
        <div role="group" onChange={handleTypeChange}>
          <label className="RadioContainer">
            <input
              className="RadioContainer_radio"
              type="radio"
              name="type"
              value="Expense"
            />
            Expense
          </label>
          <label className="RadioContainer">
            <input
              className="RadioContainer_radio"
              type="radio"
              name="type"
              value="Income"
            />
            Income
          </label>
          <div ref={typeError} className="Error"></div>
        </div>
        <div role="group" onChange={handleTypeChange}></div>
      </div>
      <div className="FormSection">
        <label className="InputContainer">
          <span className="Label">Title:</span>
          <input
            ref={titleInput}
            className="InputContainer_input"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <div ref={typeError} className="Error"></div>
      </div>
      <div className="FormSection">
        <label className="InputContainer">
          <span className="Label">Amount:</span>
          <input
            ref={amountInput}
            className="InputContainer_input"
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </label>
        <div ref={typeError} className="Error"></div>
      </div>
      <div className="FormSection">
        <label className="SelectContainer">
          <span className="Label">Category</span>
          <select
            className="SelectContainer_select"
            onChange={handleCategoryChange}
          >
            {categories &&
              categories.map((elem, index) => (
                <option key={`"Category"-${index}`} value={elem}>
                  {elem}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="FormSection">
        <Button type="submit" fullWidth>
          Add
        </Button>
      </div>
    </form>
  );
};
export default Form;
