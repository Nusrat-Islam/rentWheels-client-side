import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
         <div className='flex justify-center items-center'>
         <CircleLoader></CircleLoader>
         </div>
        </div>
    );
};

export default Loading;