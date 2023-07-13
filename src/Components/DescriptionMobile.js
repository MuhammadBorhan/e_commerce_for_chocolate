import React from 'react';

const DescriptionMobile = ({children}) => {
    return (
        <div>
            <h5 className="mb-4 text-[#9A583B] font-bold lg:hidden ">
              {children}
            </h5>
        </div>
    );
};

export default DescriptionMobile;