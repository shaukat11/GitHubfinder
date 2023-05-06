import React from "react";
import PropTypes from "prop-types";
import Repoitem from "./Repoitem";

function Reposlist({ repos_of_users }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Top Respositories
        </h2>
        <Repoitem />
      </div>
    </div>
  );
}

Reposlist.propTypes = {
  repos_of_users: PropTypes.array.isRequired,
};

export default Reposlist;
