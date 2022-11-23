import axios from "axios";

// const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";
// tongzheyi@gmail.com key
const KEY = "AIzaSyAOhqKIYUmQgW-Hyblo_mjwlKkNr6lUiPc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
