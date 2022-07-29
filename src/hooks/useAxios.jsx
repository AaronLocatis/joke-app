import { useEffect, useState } from 'react'
import axios from "axios";

const baseUrl = "https://icanhazdadjoke.com/search?";

export default function useAxios(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function init() {
            if (url.length === 0) {
                return;
            }
            setData(null);
            setError(null);
            try {
                console.log(url);
                const response = await axios.get(baseUrl + url, { headers: { "Accept": "application/json" } });
                console.log(response.data.results[0]);
                setData(
                    response.data.results


                );
            } catch (e) {
                console.log(e);
                setError(e);
            }
        }
        init();
    }, [url]);
    return { data, error };
}



