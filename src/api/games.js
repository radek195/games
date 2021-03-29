import axios from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-key": "453e50eca1msh530d0dcca48e6f8p1b951bjsn4a4655d05368",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
});

// const getData = async () => {
//   const { data } = await games.get("/games", {
//     params: {
//       platform: null,
//       tag: "shooter",
//       id: null,
//     },
//   });

//   console.log(data);
// };
