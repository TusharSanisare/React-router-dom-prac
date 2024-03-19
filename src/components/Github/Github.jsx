import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/tusharsanisare")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center align-bottom flex-col text-white text-xl p-2 text-center bg-gray-500">
        <p>{`${data.followers} ${data.login}`}</p>
        <img src={data.avatar_url} alt="" width={300} className="m-auto" />
      </div>
      <div className=""></div>
    </>
  );
};

export default Github;
