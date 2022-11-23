import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm]);

    const search = async (term) => {
        const result = await youtube.get("/search", {
            params: {
                q: term,
            },
        });

        setVideos(result.data.items);
    };

    return [videos, search];
};

export default useVideos;
