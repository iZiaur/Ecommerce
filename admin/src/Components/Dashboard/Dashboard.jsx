import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

const Dashboard = () => {
    const [stats, setStats] = useState({ totalUsers: 0, totalProducts: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch(`${API_URL}/admin/analytics`);
                const data = await response.json();
                if (data.success) {
                    setStats({
                        totalUsers: data.totalUsers,
                        totalProducts: data.totalProducts
                    });
                }
            } catch (error) {
                console.error("Error fetching analytics:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the Threadly Control Panel</p>
            
            {loading ? (
                <p>Loading analytics...</p>
            ) : (
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Registered Users</h3>
                        <p className="stat-number">{stats.totalUsers}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Active Products</h3>
                        <p className="stat-number">{stats.totalProducts}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
