const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SINGLE_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SET_USERS":
      return {
        ...state,
        loading: true,
      };

    case "USER_REPOS":
      return {
        ...state,
        repos_of_user: action.paylaod,
        loading: false,
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
