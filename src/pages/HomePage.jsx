import React from 'react';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';

const HomePage = () => {
    return (
        <div className="flex-1 overflow-auto p-4">
            <h2 className="text-2xl mb-4">Home</h2>
            <p className="mb-4">Welcome to the dashboard!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <BarChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <LineChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <PieChart />
                </div>
            </div>
          
        </div>
    );
};

export default HomePage;
