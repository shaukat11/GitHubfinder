import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const Github_url = process.env.REACT_APP_GITHUB_URL;
const Github_token = process.env.REACT_APP_GITHUB_TOKEN;

// Provider
export const GithubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    user: {},
    repos_of_user: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialstate);

  // User Search
  const searchUser = async (text) => {
    loadingSpinner();
    const prams = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${Github_url}search/users?${prams}`, {
      headers: {
        Authorization: `${Github_token}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get Single User
  const SingleUser = async (login) => {
    loadingSpinner();

    const response = await fetch(`${Github_url}users/${login}`, {
      headers: {
        Authorization: `${Github_token}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "SINGLE_USER",
        payload: data,
      });
    }
  };

  // Get User Repos
  const UserRepos = async (login) => {
    loadingSpinner();

    const response = await fetch(`${Github_url}users/${login}/repos`, {
      headers: {
        Authorization: `${Github_token}`,
      },
    });

    const dataa = await response.json();
    dispatch({
      type: "USER_REPOS",
      payload: dataa,
    });
  };

  // Loading Spinner function
  const loadingSpinner = () =>
    dispatch({
      type: "SET_USERS",
    });

  // Clear Users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USER",
    });
  };

  // What we are returing form provider
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        searchUser,
        SingleUser,
        clearUsers,
        UserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
