import React from 'react';

interface CounterProps {
    counter : number,
}

const Count:React.FC<CounterProps> = ({counter}) => {
    return (
        <div className='py-5'>
            {counter}
        </div>
    );
};

export default Count;