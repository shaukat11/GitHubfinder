import React from "react";
import { FaLink, FaEye } from "react-icons/fa";

function Repoitem() {
  return (
    <div className="mb-2 rounded-md card bg-gray-300 hover:bg-gray-900 hover:text-cyan-100">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href="">
            <FaLink className="inline mr-1" /> shaukat
          </a>
        </h3>
        <p className="mb-3">description</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" /> <p className="mb-0.5">11</p>
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaEye className="mr-2" />
            <p className="mb-0.5">11</p>
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaEye className="mr-2" /> <p className="mb-0.5">11</p>
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaEye className="mr-2" /> <p className="mb-0.5">11</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repoitem;
