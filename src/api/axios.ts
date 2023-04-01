import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-volleyball.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
});

export default instance;
