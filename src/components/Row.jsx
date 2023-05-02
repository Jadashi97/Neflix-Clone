import React, {useEffect, useState} from 'react';
import axios from "../../axios";

const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([]);

    // A snippet of code which runs a specific condition
    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    }, [])

    return (
        <div>
        <h2>{title}</h2>
        </div>
    )
}

export default Row;
