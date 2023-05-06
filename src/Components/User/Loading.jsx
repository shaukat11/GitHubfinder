import React from "react";
import Load from "../Assets/giphy.gif";

function Loading() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Load}
        alt="Loading..."
      />
    </div>
  );
}

export default Loading;
