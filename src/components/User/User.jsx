import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <div className="text-white text-xl p-2 text-center bg-green-500">
        hello {userid}
      </div>
    </>
  );
};

export default User;
