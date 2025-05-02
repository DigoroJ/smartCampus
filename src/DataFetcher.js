import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from Node.js Server</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default DataFetcher;
