import React, { useEffect } from 'react';

export const Settings = () => {
    const apiKey = "9b35a7b9-d7fc-4c18-8250-adc2c4cbc6a2";

    const fetchToken = async () => {
        try {
            const response = await fetch(
                'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
                {
                    method: 'GET',
                    headers: {
                        'X-CMC_PRO_API_KEY': apiKey,
                        'Accept': 'application/json'
                    }
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data); // Handle the response data here
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // useEffect(() => {
    //     fetchToken();
    // }, [])

    return (
        <div>Settings</div>
    )
}
