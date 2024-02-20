import React, { FunctionComponent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import trpc from 'utils/trpc';

const ProfilePage: FunctionComponent = () => {
    const router = useRouter();

    const { isLoading, error, data } = trpc.profile.getProfile.useQuery({ name: router.query.profileName as string || "" });

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 text-white bg-slate-900'>
            <h1 className='text-6xl'>
                {`ProfilePage ${data?.name}`}
            </h1>
        </div>
    );
};

export default ProfilePage;