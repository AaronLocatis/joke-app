import { useEffect, useState } from 'react'
import axios from "axios";

const randomUrl = "https://icanhazdadjoke.com/?";

export default function useAxios(ranUrl) {
    const [ranData, setRanData] = useState(null);
    const [Error, setError] = useState(null);
    useEffect(() => {
        async function ranJoke() {
            if (ranUrl.length === 0) {
                return;
            }
            setRanData(null);
            setError(null);
            try {
                console.log(ranUrl);
                const response = await axios.get(randomUrl + ranUrl, { headers: { "Accept": "application/json" } });
                console.log(response.ranData.results[0]);
                setRanData(
                    response.ranData.results


                );
            } catch (e) {
                console.log(e);
                setError(e);
            }
        }
        ranJoke();
    }, [ranUrl]);
    return { ranData, Error };
}
