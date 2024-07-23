import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respond = await fetch('https://api.example.com/data');
                const result = await respond.json();
                setData(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [refresh]
    );

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <h1>Data Fetcher</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
            <button onClick={handleRefresh}>Refresh Data</button>
        </div>
    );
}

export default DataFetcher;
