import React from 'react'

const HomeCard = ({ title, children }) => (
    <div className="rounded-lg w-full border border-indigo-100 shadow-sm overflow-hidden flex flex-col">
        <div className="bg-indigo-500 px-4 py-3">
            <h4 className="font-semibold text-2xl text-white text-center">{title}</h4>
        </div>
        <div className="bg-white px-4 py-4 flex-1 flex items-center justify-center">{children}</div>
    </div>
);

export default HomeCard