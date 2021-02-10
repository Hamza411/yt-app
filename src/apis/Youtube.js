import axios from "axios"

const KEY = "AIzaSyBb6v9Bt8PHg620AXXcnzwKi0ex2SwmJTQ"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY,
    }
});
