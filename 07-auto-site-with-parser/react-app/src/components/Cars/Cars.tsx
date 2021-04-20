import axios from "axios";
import React, { useEffect, useState } from "react";
import s from "./Cars.module.scss";
import logo from "./logo.svg";

export interface Item {
  id: number;
  title: string;
  body: string;
}
export interface ICarsProps {}

const Cars: React.FC<ICarsProps> = (props) => {
  const [cars, setCars] = useState<Item[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setCars(res.data);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return <img src={logo} className="App-logo" alt="logo" />;
  }

  return (
    <div className={s.root}>
      {cars.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <code>{JSON.stringify(item, null, 2)}</code>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Cars;
