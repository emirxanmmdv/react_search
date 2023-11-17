import React, { useState, useEffect } from "react";
import "./cards.scss";

function Cards() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((responce) => responce.json())
      .then((info) => setInfo(info));
  }, []);

  const handleChange = (e) => {
  
    setText(e.target.value);

  }
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handleChange}
          value={text}
        ></input>
      </div>
      {info &&
        info.filter((x)=> x.name.toLowerCase().includes(text.toLowerCase())).map((item) => (
          <div className="card">
            <div className="cardName">
              <h2>Name: {item.name}</h2>
            </div>
            <div className="cardUnitPrice">
              <h3>Unit Price:{item.unitPrice}</h3>
            </div>
            <div className="cardInStock">
              <h3>Units in Stock: {item.unitsInStock}</h3>
            </div>
          </div>
        ))}
    </>
  );
}

export default Cards;
