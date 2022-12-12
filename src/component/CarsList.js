import React, { useState, useRef } from "react";
//import array of objects = car records
import { CARS } from "../constants";
//import icons
import { AiOutlineMinusCircle, AiOutlineEdit } from "react-icons/ai";

const CarsList = () => {
  let [cars, setCars] = useState(CARS);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const [selectedCar, setSelectedCar] = useState(null);
  const [editState, setEditState] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const brandRef = useRef(null);
  const modelRef = useRef(null);
  const priceRef = useRef(null);
  const errorMsgRef = useRef(null);

  //hide a car
  const deleteCar = (givenId) => {
    setCars(cars.filter((car) => car.id !== givenId));
  };

  //get clicked record and popullate its value in input fields
  const updateCar = (car) => {
    setSelectedCar(car);
    setEditState(true);
    setBrand(car.brand);
    setModel(car.model);
    setPrice(car.price);
  };

  //hide input fields
  const cancel = () => {
    setBrand(""); //input boxes left blank after updating/adding record
    setModel(""); //input boxes left blank after updating/adding record
    setPrice(""); //input boxes left blank after updating/adding record
    setEditState(false);
    brandRef?.current.focus();
  };

  //Timer function to clear(hide) error message
  const clearErrorMsg = (seconds) => {
    setTimeout(() => {
      errorMsgRef.current.style.display = "none";
    }, seconds);
  };

  const addCar = () => {
    //check if input fiels left blank? if so show error message & exit the function
    if (!brand || !model || !price) {
      errorMsgRef.current.style.display = "flex";

      setErrorMsg(
        "पागल होईगवा क्या ? \n what are you doing? <br> Brand, Model & Prices are mandatory!"
      );

      clearErrorMsg(5000);
      brandRef?.current.focus();
      return;
    }

    //check if new record addition or updating an existing record
    if (editState) {
      //Update Existing record based on id.
      setCars(cars.map((car) => car.id === selectedCar.id ? { ...car, brand, model, price } : car ));
      setEditState(false);
    } else {
      //Add new record into cars
      setCars([...cars, { id: new Date().getTime(), brand, model, price }]);
    }

    setBrand("");
    setModel("");
    setPrice(""); //input boxes left blank after updating/adding record

    brandRef?.current.focus();
  };

  return (
    <>
      <div className="display">
        <h2 className="count">{cars.length} : records</h2>
        {console.log(cars.length)}
        <table className="myTable">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, j, arr) => (
              <tr key={car.id}>
                <td align="center">{j + 1} </td>
                <td>{car.brand} </td>
                <td>{car.model} </td>
                <td>{car.price} </td>
                <td align="center">
                  <AiOutlineEdit
                    id="updateCar"
                    color={"navy"}
                    onClick={() => updateCar(car)}
                  />
                  {"   "}
                  <AiOutlineMinusCircle
                    id="deleteCar"
                    color={"red"}
                    onClick={() => deleteCar(car.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="errorMsg" ref={errorMsgRef}>
          {errorMsg}
        </div>
        <div className="inputs">
          <div>
            <label>Brand: </label>
          </div>
          <div>
            <input
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              ref={brandRef}
              onKeyDown={(e) => e.key === 'Enter' ? modelRef.current.focus() : void 0 }
            />
          </div>
          <div>
            <label>Model: </label>
          </div>
          <div>
            <input
              id="model"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              ref={modelRef}
              onKeyDown={(e) => e.key === 'Enter' ? priceRef.current.focus() : void 0 }
            />
          </div>
          <div>
            <label>Price: </label>
          </div>
          <div>
            <input
              type="number"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              ref={priceRef}
              onKeyDown={(e) => e.key === 'Enter' ?(editState ? updateCar() : addCar() ) : void 0 }
            />
          </div>
          <div></div>
          <div className="addButtonDiv">
            <button onClick={addCar}>{editState ? "Update" : "Add"}</button>
            {editState && <button onClick={cancel}>Cancel</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsList;
