import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="area">
            <ul className="circles">
                <li style={{
                    left: '25%',
                    width: '80px',
                    height: '80px',
                    animationDelay: '0s'
                }}></li>
                <li style={{
                    left: '10%',
                    width: '20px',
                    height: '20px',
                    animationDelay: '2s',
                    animationDuration: '12s'
                }}></li>
                <li style={{
                    left: '70%',
                    width: '20px',
                    height: '20px',
                    animationDelay: '4s'
                }}></li>
                <li style={{
                    left: '40%',
                    width: '60px',
                    height: '60px',
                    animationDelay: '0s',
                    animationDuration: '18s'
                }}></li>
                <li style={{
                    left: '65%',
                    width: '20px',
                    height: '20px',
                    animationDelay: '0s'
                }}></li>
                <li style={{
                    left: '75%',
                    width: '110px',
                    height: '110px',
                    animationDelay: '3s'
                }}></li>
                <li style={{
                    left: '35%',
                    width: '150px',
                    height: '150px',
                    animationDelay: '7s'
                }}></li>
                <li style={{
                    left: '50%',
                    width: '25px',
                    height: '25px',
                    animationDelay: '15s',
                    animationDuration: '45s'
                }}></li>
                <li style={{
                    left: '20%',
                    width: '15px',
                    height: '15px',
                    animationDelay: '2s',
                    animationDuration: '35s'
                }}></li>
                <li style={{
                    left: '85%',
                    width: '150px',
                    height: '150px',
                    animationDelay: '0s',
                    animationDuration: '11s'
                }}></li>
            </ul>
        </div>
    );
};

export default AnimatedBackground;