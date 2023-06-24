import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full max-w-[1280px] mx-auto px-6 md:px-auto'>
            {children}
        </div>
    );
};

export default Container;