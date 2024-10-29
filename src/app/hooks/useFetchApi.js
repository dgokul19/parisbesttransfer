import { useState, useEffect } from "react";

export const useFetchRequest = ( pageKey ) => {
    const [data, setData] = useState([]);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const fetchRequestApi = async () => {
        try{
            let response = await fetch(`https://api.parisbesttransfer.fr/v1/${pageKey}`);
            let json = await response.json();
            console.log(json);
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