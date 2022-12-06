import React, { useState } from "react";
import { CARS } from "../constants";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCheck,
} from "react-icons/ai";

const CarsList = () => {
  let [cars, setCars] = useState(CARS);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const deleteCar = (givenId) => {
    setCars(cars.filter((car) => car.id !== givenId));
  };

  const showAddSection = () => {
    document.querySelector(".inputs").style.display = "grid";
    document.querySelector("#showInput").style.display = "none";
  };

  const addCar = () => {
    const lastId = parseInt(cars[cars.length - 1].id) + 1;
    const newData = { id: lastId, brand, model, price: parseInt(price) };

    setCars(cars.push(newData));
    console.log();

    document.querySelector(".inputs").style.display = "none";
    document.querySelector("#showInput").style.display = "block";
  };

  return (
    <>
      <div className="display">
        <h2>{cars.length} : records</h2>
        {console.log(cars.length)}
        {cars.map((car, j, arr) => (
          <div className="entry" key={car.id}>
            <div>
              <span className="sno">{j + 1}</span>
            </div>
            <div>
              <span>{car.brand}</span>
            </div>
            <div>
              <span>{car.model}</span>
            </div>
            <div>
              <span>{car.price}</span>
            </div>
            <AiOutlineMinusCircle
              id="deleteCar"
              color={"red"}
              onClick={() => deleteCar(car.id)}
            />
            {/* <div>
            <span>{arr[j - 1]?.price}</span>
          </div> */}
          </div>
        ))}
        <AiOutlinePlusCircle
          size={50}
          color={"navy"}
          id="showInput"
          onClick={showAddSection}
        />
        <div className="inputs">
          <div>
            <label>Brand: </label>
          </div>
          <div>
            <input onChange={(e) => setBrand(e.target.value)} value={brand} />
          </div>
          <div>
            <label>Model: </label>
          </div>
          <div>
            <input onChange={(e) => setModel(e.target.value)} value={model} />
          </div>
          <div>
            <label>Price: </label>
          </div>
          <div>
            <input onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>
          <div></div>
          <div className="addButtonDiv">
            <AiOutlineCheck
              size={100}
              color={"navy"}
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
