import React, { useState } from "react";
import { CARS } from "../constants";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CarsList = () => {
  const [cars, setCars] = useState(CARS);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const deleteCar = (givenId) => {
    setCars(cars.filter((car) => car.id !== givenId));
  };

  const addCar = () => {
    setCars(cars.push({ id: 5, brand, model, price }));
    console.log(cars);
    return cars;
  };
  return (
    <div>
      <h2>{cars.length} : records</h2>
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
          <AiOutlineMinusCircle onClick={() => deleteCar(car.id)} />
          {/* <div>
            <span>{arr[j - 1]?.price}</span>
          </div> */}
        </div>
      ))}
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
      </div>

      <div className="addButtonDiv">
        <AiOutlinePlusCircle
          size={50}
          color={"navy"}
          id="addCar"
          onClick={addCar}
        />
      </div>
    </div>
  );
};

export default CarsList;
