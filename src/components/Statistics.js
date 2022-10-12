import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const loadedData = useLoaderData();
    console.log(loadedData.data)
    const datas = loadedData.data;
    return (
        <div>
            <div>
                <LineChart width={730} height={250} data={datas}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;