'use client'
import Counter from '@/Component/Counter';
import Stat from '@/Component/Stat';
import React, { useState } from 'react';

interface CounterType {
    id: number,
    value: number
}

const initialCounters: CounterType[] = [
    {
        id: 1,
        value: 0
    },
    {
        id: 2,
        value: 0
    }
]

const page: React.FC = () => {

    const [counters, setCounters] = useState<CounterType[]>(initialCounters);

    
    const TotalCount = counters.reduce((s, counter) => s + counter.value, 0)


    const handleIncrement = (countersId: number): void => {

        const updatedCounters = counters.map(counter => {
            if (counter.id === countersId) {
                return {
                    ...counter,
                    value : counter.value + 1
                }
            }
            return counter;
        })

        setCounters(updatedCounters);

        console.log(counters)

    }

    const handleDecrement = (countersId: number): void => {

        const updatedCounters = counters.map(counter => {
            if(counter.id === countersId){
                return {
                    ...counter,
                    value : counter.value - 1
                }
            }
            return counter;
        })

        setCounters(updatedCounters)

    }

    return (
        <div className='text-center'>
            <p className='font-bold'>Simple Counter to practise Redux</p>

            {
                counters.map(counter => (
                    <Counter key={counter.id} counter={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />
                ))
            }

            <div className='pt-8'>
                <Stat totalCount={TotalCount} />
            </div>
        </div>
    );
};

export default page;