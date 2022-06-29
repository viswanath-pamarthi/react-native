import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {//query strings
                    limit: 50,
                    // term: term
                    term: searchTerm,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses);
        }
        catch (err) {
            //log error
            setErrorMessage('Something went wrong');
        }
    };


    //Call search Api when component is first rendered.
    //searchApi
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};