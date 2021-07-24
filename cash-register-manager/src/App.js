import "./App.css";
import React, { useState } from "react";

function App() {
  const [purchase_price, setPurchase_Price] = useState(0);
  const [stock_quantity, setStock_Quantity] = useState(0);

  const [current_price, setCurrent_Price] = useState(0);
  const [display, setDisplay] = useState("");
  const [backColor, setBackColor] = useState("grey");

  function purchasePriceHandler(e) {
    let num= parseInt(e.target.value);

    setPurchase_Price(num);
  }

  function stockQuantity(e) {
    let num= parseInt(e.target.value);

    setStock_Quantity(num);
  }

  function currentPriceHandler(e) {
    let num= parseInt(e.target.value);

    setCurrent_Price(num);
  }

  function buttonHandler() {
    if (purchase_price <= 0 || stock_quantity <= 0 || current_price <= 0) {
      let dis =
        "Please enter values greater than 0 (only numbers are allowed in above fields)";
      setDisplay(dis);
      setBackColor("grey");
    } else {
      if (purchase_price > current_price) {
        let per = ((purchase_price - current_price) * 100) / purchase_price;
        let loss = (purchase_price - current_price) * stock_quantity;

        let dis = "You lost " + per + "% Your total loss is " + loss;
        setDisplay(dis);
        setBackColor("red");
      } else {
        let perc = ((current_price - purchase_price) * 100) / purchase_price;

        let profit = (current_price - purchase_price) * stock_quantity;

        let dis = "You gained " + perc + "% Your total profit is " + profit;
        setDisplay(dis);
        setBackColor("green");

        console.log(purchase_price, current_price);
      }
    }
  }

  return (
    <div style={{ backgroundColor: backColor }} className="App">
      <h1 className="main-heading" style={{ color: "white" }}>
        Check Profit/Loss on your Stock
      </h1>

      <label style={{ fontSize: "2rem", color: "white" }}>
        Purchase Price:
        <input
          onChange={purchasePriceHandler}
          style={{
            width: "250px",
            height: "30px",
            border: "2px solid black",
            margin: "20px"
          }}
          type="number"
          name="name"
        />
      </label>
      <br />

      <label style={{ fontSize: "2rem", color: "white" }}>
        Stock Quantity:
        <input
          onChange={stockQuantity}
          style={{
            width: "250px",
            height: "30px",
            border: "2px solid black",
            margin: "20px"
          }}
          type="number"
          name="name"
        />
      </label>
      <br />

      <label style={{ fontSize: "2rem", color: "white" }}>
        Current Price:
        <input
          onChange={currentPriceHandler}
          style={{
            width: "250px",
            height: "30px",
            border: "2px solid black",
            margin: "20px"
          }}
          type="number"
          name="name"
        />
      </label>
      <br />

      <button
        onClick={buttonHandler}
        style={{ width: "150px", height: "50px", fontSize: "0.9rem" }}
      >
        CHECK
      </button>

      <h2 style={{ color: "white" }}>{display}</h2>
    </div>
  );
}

export default App;
