import React, { FunctionComponent, useState } from 'react';

import trpc from 'utils/trpc';

import HomeScreen from 'containers/home';

const Home: FunctionComponent = () => {
    const [name, setName] = useState('');

    const { isPending, error, mutate } = trpc.profile.createProfile.useMutation();

    const createProfileHandler = () => {
        if (!name) {
            alert("name cannot be blank!")
            return;
        }

        mutate({ name })
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 text-white bg-slate-900'>
            <h1 className='text-6xl'>
                MINI PORTFOLIO
            </h1>

            <div className='flex flex-col w-1/2 gap-4'>
                <p>name</p>

                <input
                    className='text-black'
                    placeholder="Insert name here!"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button
                    className='text-black bg-pink-400'
                    onClick={createProfileHandler}
                >
                    create profile!
                </button>
            </div>
        </div>
    );
};

export default Home;
