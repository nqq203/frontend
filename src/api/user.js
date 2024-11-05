import api from "./api"

export async function register({ username, email, password }) {
  const userInfo = {
    username,
    email,
    password,
  }
  console.log(userInfo);
  try {
    const { data } = await api.post('/user/register', userInfo);
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error registering user:", err.response || err);
    throw err;
  }
}