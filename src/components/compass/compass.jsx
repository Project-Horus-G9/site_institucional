// Compass.js
import React from 'react';

const Compass = ({ direction = 'Norte' }) => {
    const getRotation = () => {
        switch (direction) {
            case 'Norte':
                return 'rotate(0deg)';
            case 'Leste':
                return 'rotate(90deg)';
            case 'Sul':
                return 'rotate(180deg)';
            case 'Oeste':
                return 'rotate(270deg)';
            default:
                return 'rotate(0deg)';
        }
    };

    return (
        <div className="compass-container">
            <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="3" fill="white" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="black" strokeWidth="2" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="black" strokeWidth="2" />
                <text x="50" y="30" fill="black" fontSize="30" fontWeight="bold">N</text>
                <text x="50" y="190" fill="black" fontSize="30" fontWeight="bold">S</text>
                <text x="160" y="115" fill="black" fontSize="30" fontWeight="bold">E</text>
                <text x="10" y="115" fill="black" fontSize="30" fontWeight="bold">W</text>
                <circle cx="100" cy="100" r="5" fill="black" />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="30"
                    stroke="red"
                    strokeWidth="3"
                    style={{ transform: getRotation(), transformOrigin: 'center center' }}
                />
            </svg>
        </div>
    );
};

export default Compass;
