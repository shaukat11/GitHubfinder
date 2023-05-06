import React from "react";
import { useContext } from "react";
import Loading from "./Loading";
import UserItem from "./UserItem";
import GithubContext from "../../Context/Github/GithubContext";

function User() {
  const { loading, users } = useContext(GithubContext);

  if (!loading) {
    return (
      <div
        className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3
          md:grid-cols-2 "
      >
        {users.map((user) => (
          <UserItem key={user.id} data={user} />
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default User;
