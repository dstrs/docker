import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./CarAddForm.module.scss";

export interface Item {
  id: number;
  title: string;
  body: string;
}
export interface ICarsProps {}

const CarAddForm: React.FC<ICarsProps> = (props) => {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  function handleSumbit() {
    setIsFetching(true);
    let data = { brand, model };
    axios
      .post("/cars", data)
      .then(() => {
        console.log("Успешно");
        setIsFetching(false);
      })
      .catch((e) => {
        setError(e);
        console.log("что-то пошло не так");
        setIsFetching(false);
      });
  }

  return (
    <div className={s.root}>
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <label htmlFor="barnd">Бренд</label>
      <input
        id="barnd"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className={s.input}
        type="text"
        placeholder="бренд"
      />
      <label htmlFor="model">модель</label>
      <input
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className={s.input}
        type="text"
        placeholder="модель"
      />

      <br />
      <br />
      <button onClick={handleSumbit}>
        {isFetching ? "......" : "Отправить"}
      </button>
      <br />

      <pre>{JSON.stringify({ brand, model }, null, 2)}</pre>
    </div>
  );
};
export default CarAddForm;
