import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const destinations = useLoaderData()
    console.log(destinations);
    return (
        <div>
            <h3>{destinations.length}</h3>
        </div>
    );
};

export default Home;