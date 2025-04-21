'use client'

import React from 'react';
import Button from './Button';
import Count from './Count';

interface CountProps{
    onIncrement : () => void,
    onDecrement : () => void,
    counter : number
}

const Counter: React.FC <CountProps> = ({counter, onIncrement, onDecrement}) => {

    //const [counter, setCounter] = useState<number>(0);

    /* 
    
    const handleIncrement = () => {
        setCounter(prev => prev + 1);
    }

    const handleDecrement = () => {
        setCounter(prev => prev - 1);
    }
    
    
    */

    return (
        <div>
            <div>
              <Count counter = {counter} />
            </div>
            <div className='flex space-x-3 justify-center'>
                <Button type = "" handler={onIncrement}>Increment</Button>
                <Button type= "danger" handler={onDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;