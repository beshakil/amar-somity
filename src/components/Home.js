import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Vite + React</h1>
            <div className="card">
                <Link to="/customerlist">
                    Customer List
                </Link>
            </div>

        </div>
    );
};

export default Home;