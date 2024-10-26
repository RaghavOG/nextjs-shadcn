import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
            <p className="mt-4 text-xl font-semibold text-gray-700 animate-pulse">Loading...</p>
        </div>
    );
};

export default Loading;