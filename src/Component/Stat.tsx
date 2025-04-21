import React from 'react';


interface TotalCountProps{
    totalCount : number
}




const Stat:React.FC<TotalCountProps> = ({totalCount}) => {
    return (
        <div className='font-bold'>
            Total Count : {totalCount}
        </div>
    );
};

export default Stat;