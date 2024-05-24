import React, { useEffect, useState } from 'react';

const ChooseCity = () => {
    const [country, setCountry] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/country");
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setCountry(data);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        };
        fetchCountry();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {country.map((i: any) => (
                <li key={i._id}>{i.description}</li>
            ))}
        </div>
    );
};

export default ChooseCity;
