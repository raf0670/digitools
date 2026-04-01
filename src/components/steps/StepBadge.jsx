import React from 'react';

const Badge = ({ number }) => {
    return (
        <span className="absolute top-5 right-5 flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-xs font-bold text-white">{number}</span>
    );
};

export default Badge;