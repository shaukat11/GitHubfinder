const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SINGLE_USER_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    case "SET_USERS":
      return {
        ...state,
        loading: true,
      };

    case "CLEAR_USER":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
