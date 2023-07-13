import React from 'react';

const Description = ({children}) => {
    return (
        <div>
            <h4 className="hidden md:block text-[#9A583B] text-2xl font-bold mb-4">{children}</h4>
        </div>
    );
};

export default Description;