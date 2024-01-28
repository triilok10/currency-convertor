import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
                const result = await response.json();
                setData(result[currency]);
                console.log(result[currency]); // Log inside the fetch block to see the updated state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currency]);

    console.log(data); // This log might not reflect the updated state immediately

    return data;
}

export default useCurrencyInfo;
