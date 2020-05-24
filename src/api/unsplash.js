import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l9hA3HGiSLqtU3Ze2aHEfSvk_CIaOzLRQ9EMY-lRi8I",
  },
});
