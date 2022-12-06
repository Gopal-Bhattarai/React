import React, { useState } from "react";
//import array of objects = car records
import { CARS } from "../constants";
//import icons
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GrUpdate, GrDocumentUpdate } from "react-icons/gr";

const CarsList = () => {
  let [cars, setCars] = useState(CARS);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [id, setID] = useState(0);  //id state is made to store id value for updating a record

  //hide a car
  const deleteCar = (givenId) => {
    setCars(cars.filter((car) => car.id !== givenId));
  };

  //get clicked record and popullate its value in input fields
  const updateCar = (givenId) => {
    cars.map((car) => {
      if (car.id === givenId) {
        setID(car.id);
        setBrand(car.brand);
        setModel(car.model);
        setPrice(car.price);
      }
    });

    //show input fiels and hide Plus icon
    document.querySelector(".inputs").style.display = "grid";
    document.querySelector("#showInput").style.display = "none";
  };

  //Show input fields
  const showAddSection = () => {
    document.querySelector(".inputs").style.display = "grid";
    document.querySelector("#showInput").style.display = "none";
    document.querySelector("#brand").focus();
  };

  //Timer function to clear(hide) error message
  const clearErrorMsg = (seconds) => {
    setTimeout(() => {
      document.querySelector(".errorMsg").innerHTML = "";
      document.querySelector(".errorMsg").style.display = "none";
    }, seconds);
  };

  const addCar = () => {
    //check if input fiels left blank? if so show error message & exit the function
    if (!brand || !model || !price) {
      document.querySelector(".errorMsg").style.display = "flex";
      document.querySelector(".errorMsg").innerHTML =
        "पागल होईगवा क्या ? <br> what are you doing? <br> Brand, Model & Prices are mandatory!";
      clearErrorMsg(5000);
      document.querySelector("#brand").focus();
      return;
    }

    //check if new record addition or updating an existing record
    if (id === 0) {
      
      //get the maximum id number and increment by one.
      //const lastId = parseInt(cars[cars.length - 1].id) + 1;
      const lastId =
        cars.reduce((prev, curr) => Math.max(prev, curr.id), 0) + 1;
      console.log("LastID: " + lastId);
      const newData = { id: lastId, brand, model, price: parseInt(price) };
      //setCars(cars.push(newData));
      //Add new record into cars
      setCars([...cars, newData]);
    } else {
      //Update Existing record based on id.
      setCars(
        cars.map((car) =>
          car.id === id ? { ...car, id, brand, model, price } : car
        )
      );
      setID(0);  //so that new record can be added. 
    }
    console.log(cars);

    setBrand(""); //input boxes left blank after updating/adding record
    setModel(""); //input boxes left blank after updating/adding record
    setPrice(""); //input boxes left blank after updating/adding record

    document.querySelector(".inputs").style.display = "none";
    document.querySelector("#showInput").style.display = "block";
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
                  <AiOutlineMinusCircle
                    id="deleteCar"
                    color={"red"}
                    onClick={() => deleteCar(car.id)}
                  />{" "}
                  <GrUpdate
                    id="updateCar"
                    color={"navy"}
                    onClick={() => updateCar(car.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AiOutlinePlusCircle
          size={50}
          color={"navy"}
          id="showInput"
          onClick={showAddSection}
        />
        <div className="errorMsg">Error Message</div>
        <div className="inputs">
          <div>
            <label>Brand: </label>
          </div>
          <div>
            <input
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
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
            />
          </div>
          <div>
            <label>Price: </label>
          </div>
          <div>
            <input
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div></div>
          <div className="addButtonDiv">
            <GrDocumentUpdate
              size={50}
              color={"blue"}
              id="addCar"
              onClick={addCar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarsList;
