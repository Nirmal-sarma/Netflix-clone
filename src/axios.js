import axios from "axios";

export const instances= axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

