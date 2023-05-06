import React from "react";
import User from "../Components/User/User";
import UserSearch from "../Components/User/UserSearch";

function Home() {
  return (
    <>
      {/* {Search Data} */}
      <UserSearch />
      <User />
    </>
  );
}

export default Home;
