import { useState, useEffect } from "react";

export const    useFetchRequest = ( pageKey, queryParams='language=en') => {
    const [data, setData] = useState([]);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const fetchRequestApi = async () => {
        try{
            let response = await fetch(`https://api.parisbesttransfer.fr/v1/${pageKey}?${queryParams}`);
            let json = await response.json();
            setData(json);
        } catch(ex){
            setError(true);
            setErrorMessage(`Error : ${ex}`);
        }
    };

    useEffect(() => {
        fetchRequestApi();
    },[]);

    return { data, isError, errorMessage };
};