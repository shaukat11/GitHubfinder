import axios from "axios";

const Github_url = process.env.REACT_APP_GITHUB_URL;
const Github_token = process.env.REACT_APP_GITHUB_TOKEN;

const gitaxios = axios.create({
  baseURL: Github_url,
  headers: { Authorization: `${Github_token}` },
});

// User Search
export const searchUser = async (text) => {
  const prams = new URLSearchParams({
    q: text,
  });

  const response = await gitaxios.get(`/search/users?${prams}`);
  return response.data.items;
};

// Get Users and repos together

export const getUsersAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    gitaxios.get(`/users/${login}`),
    gitaxios.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
