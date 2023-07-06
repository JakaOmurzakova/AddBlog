import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [datas, setDatas] = useState([]);

  async function getData() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setDatas(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {datas.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default HomePage;
